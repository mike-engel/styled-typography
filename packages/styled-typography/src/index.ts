import styled, { createGlobalStyle } from "styled-components";
import {
  getFontColor,
  TextType,
  getFontSize,
  getFontWeight,
  getFontStyle,
  getLineHeight,
  getFontFamily,
  getExtras
} from "./utils";
import { HeadingProps, TextProps, LinkProps } from "./types";

export const GlobalTypeStyles = createGlobalStyle`
  body {
    color: ${getFontColor(TextType.Body)};
    font-family: ${getFontFamily(TextType.Body)};
    font-size: ${getFontSize(TextType.Body)};
    font-weight: ${getFontWeight(TextType.Body)};
    font-style: ${getFontStyle(TextType.Body)};
    line-height: ${getLineHeight(TextType.Body)};
  }
`;

/* istanbul ignore next */
export const Heading = styled("div").attrs<HeadingProps>(({ level }) => ({
  role: "heading",
  "aria-level": level || 1
}))<HeadingProps>`
  color: ${getFontColor(TextType.Heading)};
  font-family: ${getFontFamily(TextType.Heading)};
  font-size: ${getFontSize(TextType.Heading)};
  font-weight: ${getFontWeight(TextType.Heading)};
  font-style: ${getFontStyle(TextType.Heading)};
  line-height: ${getLineHeight(TextType.Heading)};
  ${getExtras(TextType.Heading)}
`;

/* istanbul ignore next */
export const Text = styled("p")<TextProps>`
  color: ${getFontColor(TextType.Body)};
  font-family: ${getFontFamily(TextType.Body)};
  font-size: ${getFontSize(TextType.Body)};
  font-weight: ${getFontWeight(TextType.Body)};
  font-style: ${getFontStyle(TextType.Body)};
  line-height: ${getLineHeight(TextType.Body)};
  ${getExtras(TextType.Body)}
`;

/* istanbul ignore next */
export const Span = styled(Text).attrs(() => ({ as: "span" }))`
  color: ${getFontColor(TextType.Span)};
  font-family: ${getFontFamily(TextType.Span)};
  font-size: ${getFontSize(TextType.Span)};
  font-weight: ${getFontWeight(TextType.Span)};
  font-style: ${getFontStyle(TextType.Span)};
  line-height: ${getLineHeight(TextType.Span)};
  ${getExtras(TextType.Span)}
`;

/* istanbul ignore next */
export const Link = styled("a")<LinkProps>`
  display: inline-block;
  color: ${getFontColor(TextType.Link)};
  font-family: ${getFontFamily(TextType.Link)};
  font-size: ${getFontSize(TextType.Link)};
  font-weight: ${getFontWeight(TextType.Link)};
  font-style: ${getFontStyle(TextType.Link)};
  line-height: ${getLineHeight(TextType.Link)};
  ${getExtras(TextType.Link)}
`;

export { TypographyProps, defaultTheme } from "./utils";
export * from "./types";
