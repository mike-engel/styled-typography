import { InterpolationFunction, ThemedStyledProps } from "styled-components";
import { FontWeight, FontStyle, HeadingProps, TypeProps, TextProps, LinkProps } from "./types";

export enum TextType {
  Body,
  Heading,
  Span,
  Link
}

export type TypographyProps = {
  fontSizes: [string, string, string, string, string, string];
  bodyFontFamily: string;
  bodySize: number;
  bodyWeight: FontWeight;
  bodyStyle: FontStyle;
  bodyColor: string;
  bodyLineHeight: string | number;
  headingFontFamily: string;
  headingSize: number;
  headingWeight: FontWeight;
  headingStyle: FontStyle;
  headingColor: string;
  headingLineHeight: string | number;
  extra: {
    heading?: string;
    body?: string;
    span?: string;
    link?: string;
  };
};

export type ThemeProps<T extends TypeProps = TypeProps> = ThemedStyledProps<
  Record<string, any> & T,
  { typography?: Partial<TypographyProps> }
>;

export type InterpolationGetter = InterpolationFunction<
  ThemeProps<TextProps | HeadingProps | LinkProps>
>;

export const defaultTheme: TypographyProps = {
  fontSizes: ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.750rem", "10px"],
  bodyFontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  bodySize: 4,
  bodyWeight: FontWeight.Normal,
  bodyStyle: FontStyle.Normal,
  bodyColor: "#000000",
  bodyLineHeight: 1.4,
  headingFontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  headingSize: 1,
  headingWeight: FontWeight.Bold,
  headingStyle: FontStyle.Normal,
  headingColor: "#000000",
  headingLineHeight: 1.2,
  extra: {}
};

export const getTheme = (props: ThemeProps) => ({ ...defaultTheme, ...props.theme.typography });

export const getDefault = <B, H, S, L = S>(
  type: TextType,
  body: B,
  heading: H,
  span: S,
  link: S | L = span
): B | H | S | L => {
  switch (type) {
    case TextType.Body:
      return body;
    case TextType.Heading:
      return heading;
    case TextType.Span:
      return span;
    case TextType.Link:
      return link;
  }
};

export const getFontFamily = (type: TextType): InterpolationGetter => props => {
  const { bodyFontFamily, headingFontFamily } = getTheme(props);
  const defaultFontFamily = getDefault(type, bodyFontFamily, headingFontFamily, "inherit");

  return defaultFontFamily;
};

export const getFontSize = (type: TextType): InterpolationGetter => props => {
  const { fontSizes, bodySize, headingSize } = getTheme(props);
  const defaultSize = getDefault(type, bodySize, headingSize, "inherit");

  if (props.level === "inherit" || (!props.level && defaultSize === "inherit")) return "inherit";
  if (type === TextType.Heading && props.displayLevel === "inherit") return "inherit";
  if (type === TextType.Heading && !!props.displayLevel)
    return fontSizes[(props.displayLevel as number) - 1];

  return fontSizes[(props.level || (defaultSize as number)) - 1];
};

export const getFontWeight = (type: TextType): InterpolationGetter => props => {
  const { bodyWeight, headingWeight } = getTheme(props);
  const defaultWeight = getDefault(type, bodyWeight, headingWeight, FontWeight.Inherit);

  return props.fontWeight || defaultWeight;
};

export const getFontStyle = (type: TextType): InterpolationGetter => props => {
  const { bodyStyle, headingStyle } = getTheme(props);
  const defaultStyle = getDefault(type, bodyStyle, headingStyle, FontStyle.Inherit);

  return props.fontStyle || defaultStyle;
};

export const getFontColor = (type: TextType): InterpolationGetter => props => {
  const { bodyColor, headingColor } = getTheme(props);
  const defaultColor = getDefault(type, bodyColor, headingColor, "currentcolor");

  return props.color || defaultColor;
};

export const getLineHeight = (type: TextType): InterpolationGetter => props => {
  const { bodyLineHeight, headingLineHeight } = getTheme(props);
  const defaultLineHeight = getDefault(type, bodyLineHeight, headingLineHeight, "inherit");

  return props.lineHeight || defaultLineHeight;
};

export const getExtras = (type: TextType): InterpolationGetter => props => {
  const { extra } = getTheme(props);

  return getDefault(type, extra.body, extra.heading, extra.span, extra.link) || ``;
};
