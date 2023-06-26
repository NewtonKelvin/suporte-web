import { authUserRequest, createUserRequest } from "@/types/user";
import { Prisma, PrismaClient } from "@prisma/client";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { checkPassword, hashPassword } from "../utils/encrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	const { name, login, password, passwordConfirm }: createUserRequest =
		await req.json();
	if (!name || name == null || name == undefined) {
		return NextResponse.json(
			{ error: true, message: "Name is required and cannot be null!" },
			{ status: 400 }
		);
	}
	if (!login || login == null || login == undefined) {
		return NextResponse.json(
			{ error: true, message: "Login is required and cannot be null!" },
			{ status: 400 }
		);
	}
	if (!password || password == null || password == undefined) {
		return NextResponse.json(
			{ error: true, message: "Password is required and cannot be null!" },
			{ status: 400 }
		);
	}
	if (
		!passwordConfirm ||
		passwordConfirm == null ||
		passwordConfirm == undefined
	) {
		return NextResponse.json(
			{
				error: true,
				message: "Password confirmation is required and cannot be null!"
			},
			{ status: 400 }
		);
	}
	if (password !== passwordConfirm) {
		return NextResponse.json(
			{ error: false, message: "Password confirmation dont match" },
			{ status: 200 }
		);
	}
	try {
		const cryptedPassword = await hashPassword(password);
		if (cryptedPassword) {
			const newuser = await prisma.user.create({
				data: {
					name,
					login,
					password: cryptedPassword
				}
			});
			if (newuser) {
				return NextResponse.json(
					{ error: false, message: "User created successfully" },
					{ status: 200 }
				);
			} else {
				return NextResponse.json(
					{ error: true, message: `Could not create user` },
					{ status: 400 }
				);
			}
		} else {
			return NextResponse.json(
				{ error: true, message: `Fail to encrypt password` },
				{ status: 400 }
			);
		}
	} catch (err) {
		let message = err;
		if (err instanceof Prisma.PrismaClientKnownRequestError) {
			if (err.code === "P2002") {
				message = "This user login already exists";
			}
		}
		return NextResponse.json(
			{ error: true, message: `Failed to create user - ${message}` },
			{ status: 400 }
		);
	}
}

export async function GET(req: NextRequest) {
	const { login, password }: authUserRequest = JSON.parse(
		'{"' +
			decodeURI(
				new URL(req.url).searchParams
					.toString()
					.replace(/&/g, '","')
					.replace(/=/g, '":"')
			) +
			'"}'
	);

	if (!login || login == null || login == undefined) {
		return NextResponse.json(
			{ error: true, message: "Login is required and cannot be null!" },
			{ status: 400 }
		);
	}
	if (!password || password == null || password == undefined) {
		return NextResponse.json(
			{ error: true, message: "Password is required and cannot be null!" },
			{ status: 400 }
		);
	}

	const user = await prisma.user.findUnique({
		where: {
			login: login
		},
		select: { id: true, name: true, login: true, password: true }
	});

	if (user) {
		const passwordMatch = await checkPassword(password, user.password);
		if (passwordMatch) {
			let secret = process.env.SECRET?.toString() || "";
			const token = jwt.sign({ userId: user.id }, secret, {
				expiresIn: 1 * 60 * 60 /* 1 hour */
			});

			return NextResponse.json(
				{
					error: false,
					auth: true,
					token,
					user: { id: user.id, name: user.name, login: user.login }
				},
				{ status: 200 }
			);
		} else {
			return NextResponse.json(
				{ error: true, message: "Password doesnt match" },
				{ status: 400 }
			);
		}
	} else {
		return NextResponse.json(
			{ error: true, message: "User not found" },
			{ status: 400 }
		);
	}
}

export async function HEAD() {
	const Authorization = headers().get("Authorization");
	if (Authorization) {
		let secret = process.env.SECRET?.toString() || "";
		try {
			const auth = jwt.verify(Authorization, secret);
			if (auth) {
				return NextResponse.json({}, { status: 200 });
			}
		} catch (err) {
			return NextResponse.json({}, { status: 401 });
		}
	}
}
