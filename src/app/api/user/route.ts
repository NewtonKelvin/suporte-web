import { authUserRequest, createUserRequest } from "@/types/user";
import { Prisma, PrismaClient } from "@prisma/client";
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

export async function GET(req: NextRequest, res: Response) {
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

  const userLogin = await prisma.user.findUnique({
    where: {
      login: login
    },
    select: { id: true, login: true, password: true }
  });

  if (userLogin) {
    const passwordMatch = await checkPassword(password, userLogin.password);
    if (passwordMatch) {
      return NextResponse.json({ error: false, auth: true }, { status: 200 });
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
