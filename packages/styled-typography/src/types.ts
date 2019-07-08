import { HTMLProps } from "react";

export enum FontStyle {
	Italic = "italic",
	Oblique = "oblique",
	Normal = "normal",
	Inherit = "inherit"
}

export enum FontWeight {
	Hairline = "100",
	ExtraLight = "200",
	Light = "300",
	Normal = "400",
	Medium = "500",
	SemiBold = "600",
	Bold = "700",
	ExtraBold = "800",
	Heavy = "900",
	Inherit = "inherit"
}

export type TypeProps = {
	color?: string;
	fontWeight?: FontWeight;
	fontStyle?: FontStyle;
	lineHeight?: string | number;
	level?: 1 | 2 | 3 | 4 | 5 | 6 | "inherit";
	displayLevel?: 1 | 2 | 3 | 4 | 5 | 6 | "inherit";
};

export type HeadingProps = TypeProps & HTMLProps<HTMLDivElement>;

export type TextProps = TypeProps & HTMLProps<HTMLParagraphElement>;

export type LinkProps = TypeProps & HTMLProps<HTMLAnchorElement>;
