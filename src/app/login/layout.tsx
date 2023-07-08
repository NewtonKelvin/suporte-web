"use client";
import { Grid } from "@mui/material";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<Grid container className="h-full w-full">
			<Grid
				item
				sm={12}
				md={6}
				className="flex h-float w-float flex-col rounded-md bg-container-light p-2 text-black dark:bg-container-dark dark:text-white xs:w-full sm:px-16 sm:py-1"
			>
				{children}
			</Grid>
			<Grid
				item
				sm={12}
				md={6}
				className="my-auto hidden h-float w-float !flex-col justify-center overflow-hidden rounded-md p-2 text-justify text-black dark:text-white sm:px-16 sm:py-1 md:flex"
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
					auctor auctor velit, non accumsan nulla facilisis sit amet. Curabitur
					ut purus mollis, elementum ligula non, vehicula felis. Nam sagittis
					viverra ornare. Aliquam erat volutpat. Sed tincidunt a ligula vitae
					pulvinar. Sed in mauris quis augue ultrices volutpat. Quisque eu
					finibus lorem. Pellentesque sollicitudin, dui non tristique accumsan,
					nunc metus dignissim orci, ut hendrerit orci nisl eu massa. Vestibulum
					vitae varius est. Nam eleifend magna vel lobortis sollicitudin. Etiam
					sollicitudin hendrerit convallis. Ut condimentum nibh vitae ante
					varius, sed interdum tortor consectetur. Donec id turpis rhoncus,
					scelerisque sem quis, eleifend nibh. Ut ultrices sapien ligula,
					blandit iaculis ante luctus vel.
				</p>
				<br />
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>Cras rhoncus diam sit amet arcu imperdiet luctus.</li>
				<li>Donec porttitor felis non neque ultrices pulvinar.</li>
				<li>Sed quis velit egestas, varius velit eget, interdum nulla.</li>
				<li>Praesent posuere quam a mauris iaculis posuere.</li>
				<br />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
					auctor auctor velit, non accumsan nulla facilisis sit amet. Curabitur
					ut purus mollis, elementum ligula non, vehicula felis.
				</p>
			</Grid>
		</Grid>
	);
}
