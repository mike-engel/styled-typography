import React from "react";
import styled from "styled-components";
import { Heading, Text, FontWeight, Span, Link, FontStyle } from "styled-typography";
import NextLink from "next/link";
import { Stylable } from "../types/component.types";
import { spacing } from "../utils/spacing.util";
import { Code } from "../components/atoms/code.component";
import { Callout } from "../components/atoms/callout.component";

type Props = Stylable;

export const RawIndex = ({ className }: Props) => (
  <section className={className}>
    <Heading>Docs</Heading>
    <Heading id="installation" level={2}>
      Installation
    </Heading>
    <Text>
      To download <Span fontWeight={FontWeight.Bold}>styled-typography</Span> run the following from
      within your project:
    </Text>
    <Code language="shell">{`npm install styled-typography`}</Code>
    <Heading id="configuring-the-theme" level={2}>
      Configuring the theme
    </Heading>
    <Text>
      You can customize <Span fontWeight={FontWeight.Bold}>styled-typography</Span> as much or as
      little as you’d like. A default will be provided that looks nice, visually.
    </Text>
    <Text>
      The minimum to get started is to have a <code>ThemeProvider</code> somewhere near the top of
      your react tree. You don’t need to provide a theme if you want the default configuration.
    </Text>
    <Code>{`import React from "react";
import { ThemeProvider } from "styled-components";

export const App = ({ children }) => (
  <ThemeProvider theme={{}}>{children}</ThemeProvider>
);`}</Code>
    <Text>
      To configure the typographic setup, you can pass any and all{" "}
      <NextLink href="#options" passHref>
        <Link>configuration options</Link>
      </NextLink>{" "}
      listed below.
    </Text>
    <Code>{`import React from "react";
import { ThemeProvider } from "styled-components";

// only customizes these three options. The rest will come from the default implementation
const typographyTheme = {
  fontSizes: ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.75rem", "10px"],
  bodyFontFamily: "Source Code Pro, Input, monospace",
  headingFontFamily: "SF Display, Helvetica Neue, Circular, sans-serif"
};

export const App = ({ children }) => (
  <ThemeProvider theme={{ typography: typographyTheme }}>
    {children}
  </ThemeProvider>
);`}</Code>
    <Heading id="components" level={2}>
      Components
    </Heading>
    <Text>
      <code>styled-typography</code> provides give components for you to use and extend if needed:{" "}
      <code>GlobalTypeStyles</code>, <code>Text</code>, <code>Heading</code>, <code>Span</code>, and{" "}
      <code>Link</code>.
    </Text>
    <Heading id="global-type-styles" level={3}>
      <code>GlobalTypeStyles</code>
    </Heading>
    <Text>
      The <code>GlobalStyleStyles</code> component is a way to quickly get global type styles into
      your app. This is useful if you intent to use <code>Span</code> or <code>Link</code> outside
      of <code>Text</code>/<code>Heading</code>, or other non-<code>styled-typography</code>{" "}
      components in your app. It’s important, however, that you place it within the{" "}
      <code>ThemeProvider</code> component.
    </Text>
    <Code>{`import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalTypeStyles } from "styled-typography";

export const App = ({ children }) => (
  <ThemeProvider theme={{}}>
    <GlobalTypeStyles />
    {children}
  </ThemeProvider>
);`}</Code>
    <Heading id="text" level={3}>
      <code>Text</code>
    </Heading>
    <Text>
      The <code>Text</code> component resolves, by default, to a <code>p</code> component within the
      DOM. It accepts all props passable to <code>p</code>, as well as <code>TextProps</code>.
    </Text>
    <Code>{`import React from "react";
import { Text, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
  <Text
    className={className}
    level={4}
    fontWeight={FontWeight.Bold}
    fontStyle={FontStyle.Normal}
    color="red"
    lineHeight={1.3}
  >
    Hello, World!
  </Text>
);`}</Code>
    <Heading id="heading" level={3}>
      <code>Heading</code>
    </Heading>
    <Text>
      The <code>Heading</code> component resolves, by default, to a <code>div</code> component
      within the DOM. It accepts all props passable to <code>div</code>, as well as{" "}
      <code>TextProps</code>.
    </Text>
    <Callout>
      <Text>
        But wait, you say! That’s not accessible! I know. By default, a <code>div</code> is not
        semantically an <code>h1</code> element. <code>ARIA</code>, however, provides attributes
        that <Span fontStyle={FontStyle.Italic}>can</Span> make it a semantic header. Thus, the{" "}
        <code>Header</code> component automatically gets <code>role="heading"</code> and{" "}
        <code>aria-level="#"</code> attributes.
      </Text>
    </Callout>
    <Code>{`import React from "react";
import { Heading, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
  <Heading
    className={className}
    level={1} // semantic level
    displayLevel={2} // display/visual level
    fontWeight={FontWeight.Bold}
    fontStyle={FontStyle.Normal}
    color="red"
    lineHeight={1}
  >
    Hello, World!
  </Heading>
);`}</Code>
    <Heading id="span" level={3}>
      <code>Span</code>
    </Heading>
    <Text>
      The <code>Span</code> component resolves, by default, to a <code>span</code> component within
      the DOM. It accepts all props passable to <code>span</code>, as well as <code>TextProps</code>
      .
    </Text>
    <Code>{`import React from "react";
import { Span, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
  <Span
    className={className}
    level={4}
    fontWeight={FontWeight.Bold}
    fontStyle={FontStyle.Normal}
    color="red"
    lineHeight={1.3}
  >
    Hello, World!
  </Span>
);`}</Code>
    <Heading id="link" level={3}>
      <code>Link</code>
    </Heading>
    <Text>
      The <code>Link</code> component resolves, by default, to an <code>a</code> component within
      the DOM. It accepts all props passable to <code>a</code>, as well as <code>TextProps</code>.
    </Text>
    <Code>{`import React from "react";
import { Link, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
  <Link
    className={className}
    level={4}
    fontWeight={FontWeight.Bold}
    fontStyle={FontStyle.Normal}
    color="red"
    lineHeight={1.3}
    href="https://reactjs.org"
    target="_blank"
  >
    Hello, World!
  </Link>
);`}</Code>
    <Heading id="options" level={2}>
      Configuration options
    </Heading>
    <Text>
      Each of these options has what I consider to be a good default. You may override all of them,
      choose just a few to change, or do nothing.
    </Text>
    <Heading id="fontsizes" level={3}>
      <code>fontSizes</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> [string, string, string, string, string,
        string]
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> ["2.369rem", "1.777rem", "1.333rem",
        "1rem", "0.750rem", "10px"]
      </code>
    </Callout>
    <Text>
      <code>fontSizes</code> controls the 6 font size levels available to you. This generally
      corresponds to <code>h1</code> through <code>h6</code>. 6 levels are required. If your app has
      less than that, just duplicate the smallest value until there are 6.
    </Text>
    <Text>
      If only having 6 levels doesn’t work for you, please{" "}
      <Link href="https://github.com/mike-engel/styled-typography/issues" target="_blank">
        file an issue
      </Link>
      !
    </Text>
    <Heading id="bodyfontfamily" level={3}>
      <code>bodyFontFamily</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> string
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> "system-ui, -apple-system,
        BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif"
      </code>
    </Callout>
    <Text>
      <code>bodyFontFamily</code> sets the font family for <code>Text</code> elements.{" "}
      <code>Span</code> and <code>Link</code> will inherit the global styles unless used within a{" "}
      <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="bodySize" level={3}>
      <code>bodySize</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> number
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> 4
      </code>
    </Callout>
    <Text>
      <code>bodySize</code> sets the default font size level for <code>Text</code> elements.{" "}
      <code>Span</code> and <code>Link</code> will inherit the global styles unless used within a{" "}
      <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="bodyweight" level={3}>
      <code>bodyWeight</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> FontWeight
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> FontWeight.Normal
      </code>
    </Callout>
    <Text>
      <code>bodyWeight</code> sets the default <code>font-weight</code> for <code>Text</code>{" "}
      elements. <code>Span</code> and <code>Link</code> will inherit the global styles unless used
      within a <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Text>
      Available options are tied to the{" "}
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping"
        target="_blank"
      >
        common name mapping system
      </Link>
      .
    </Text>
    <Callout>
      <ul className="plain-list">
        <li>
          <code>FontWeight.Hairline = "100"</code>
        </li>
        <li>
          <code>FontWeight.ExtraLight = "200"</code>
        </li>
        <li>
          <code>FontWeight.Light = "300"</code>
        </li>
        <li>
          <code>FontWeight.Normal = "400"</code>
        </li>
        <li>
          <code>FontWeight.Medium = "500"</code>
        </li>
        <li>
          <code>FontWeight.SemiBold = "600"</code>
        </li>
        <li>
          <code>FontWeight.Bold = "700"</code>
        </li>
        <li>
          <code>FontWeight.ExtraBold = "800"</code>
        </li>
        <li>
          <code>FontWeight.Heavy = "900"</code>
        </li>
        <li>
          <code>FontWeight.Inherit = "inherit</code>
        </li>
      </ul>
    </Callout>
    <Heading id="bodystyle" level={3}>
      <code>bodyStyle</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> FontStyle
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> FontStyle.Regular
      </code>
    </Callout>
    <Text>
      <code>bodyStyle</code> sets the default <code>font-style</code> for <code>Text</code>{" "}
      elements. <code>Span</code> and <code>Link</code> will inherit the global styles unless used
      within a <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Text>
      Available options are tied to the{" "}
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-style#Values"
        target="_blank"
      >
        standard <code>font-style</code> options
      </Link>{" "}
      with an exception for <code>oblique &lt;angle&gt;</code>
    </Text>
    <Callout>
      <ul className="plain-list">
        <li>
          <code>FontStyle.Italic = "italic"</code>
        </li>
        <li>
          <code>FontStyle.Oblique = "oblique"</code>
        </li>
        <li>
          <code>FontStyle.Normal = "normal"</code>
        </li>
        <li>
          <code>FontStyle.Inherit = "inherit</code>
        </li>
      </ul>
    </Callout>
    <Heading id="bodycolor" level={3}>
      <code>bodyColor</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> string
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> #000000
      </code>
    </Callout>
    <Text>
      <code>bodyColor</code> sets the default <code>color</code> for <code>Text</code> elements.{" "}
      <code>Span</code> and <code>Link</code> will inherit the global styles unless used within a{" "}
      <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="bodylineheight" level={3}>
      <code>bodyLineHeight</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> string | number
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> 1.4
      </code>
    </Callout>
    <Text>
      <code>bodyColor</code> sets the default <code>line-height</code> for <code>Text</code>{" "}
      elements. <code>Span</code> and <code>Link</code> will inherit the global styles unless used
      within a <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="headingfontfamily" level={3}>
      <code>headingFontFamily</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> string
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> "system-ui, -apple-system,
        BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif"
      </code>
    </Callout>
    <Text>
      <code>headingFontFamily</code> sets the font family for <code>Heading</code> elements.{" "}
      <code>Span</code> and <code>Link</code> will inherit the global styles unless used within a{" "}
      <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="headingSize" level={3}>
      <code>headingSize</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> number
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> 4
      </code>
    </Callout>
    <Text>
      <code>headingSize</code> sets the default font size level for <code>Heading</code> elements.{" "}
      <code>Span</code> and <code>Link</code> will inherit the global styles unless used within a{" "}
      <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="headingweight" level={3}>
      <code>headingWeight</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> FontWeight
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> FontWeight.Normal
      </code>
    </Callout>
    <Text>
      <code>headingWeight</code> sets the default <code>font-weight</code> for <code>Heading</code>{" "}
      elements. <code>Span</code> and <code>Link</code> will inherit the global styles unless used
      within a <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Text>
      Available options are tied to the{" "}
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping"
        target="_blank"
      >
        common name mapping system
      </Link>
      .
    </Text>
    <Callout>
      <ul className="plain-list">
        <li>
          <code>FontWeight.Hairline = "100"</code>
        </li>
        <li>
          <code>FontWeight.ExtraLight = "200"</code>
        </li>
        <li>
          <code>FontWeight.Light = "300"</code>
        </li>
        <li>
          <code>FontWeight.Normal = "400"</code>
        </li>
        <li>
          <code>FontWeight.Medium = "500"</code>
        </li>
        <li>
          <code>FontWeight.SemiBold = "600"</code>
        </li>
        <li>
          <code>FontWeight.Bold = "700"</code>
        </li>
        <li>
          <code>FontWeight.ExtraBold = "800"</code>
        </li>
        <li>
          <code>FontWeight.Heavy = "900"</code>
        </li>
        <li>
          <code>FontWeight.Inherit = "inherit</code>
        </li>
      </ul>
    </Callout>
    <Heading id="headingstyle" level={3}>
      <code>headingStyle</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> FontStyle
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> FontStyle.Regular
      </code>
    </Callout>
    <Text>
      <code>headingStyle</code> sets the default <code>font-style</code> for <code>Heading</code>{" "}
      elements. <code>Span</code> and <code>Link</code> will inherit the global styles unless used
      within a <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Text>
      Available options are tied to the{" "}
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-style#Values"
        target="_blank"
      >
        standard <code>font-style</code> options
      </Link>{" "}
      with an exception for <code>oblique &lt;angle&gt;</code>
    </Text>
    <Callout>
      <ul className="plain-list">
        <li>
          <code>FontStyle.Italic = "italic"</code>
        </li>
        <li>
          <code>FontStyle.Oblique = "oblique"</code>
        </li>
        <li>
          <code>FontStyle.Normal = "normal"</code>
        </li>
        <li>
          <code>FontStyle.Inherit = "inherit</code>
        </li>
      </ul>
    </Callout>
    <Heading id="headingcolor" level={3}>
      <code>headingColor</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> string
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> #000000
      </code>
    </Callout>
    <Text>
      <code>headingColor</code> sets the default <code>color</code> for <code>Heading</code>{" "}
      elements. <code>Span</code> and <code>Link</code> will inherit the global styles unless used
      within a <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="headinglineheight" level={3}>
      <code>headingLineHeight</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span> string | number
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> 1.4
      </code>
    </Callout>
    <Text>
      <code>headingColor</code> sets the default <code>line-height</code> for <code>Heading</code>{" "}
      elements. <code>Span</code> and <code>Link</code> will inherit the global styles unless used
      within a <code>Text</code> or <code>Heading</code> element.
    </Text>
    <Heading id="extra" level={3}>
      <code>extra</code>
    </Heading>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Type:</Span>{" "}
        {`{ text: string, heading: string, span: string, link: string }`}
      </code>
    </Callout>
    <Callout>
      <code>
        <Span fontWeight={FontWeight.Bold}>Default:</Span> {`{}`}
      </code>
    </Callout>
    <Text>
      <code>extra</code> injects extra styles for each type of component. Template strings and plain
      strings are acceptable values for each key.
    </Text>
  </section>
);

export default styled(RawIndex)`
  ${Heading} + ${Heading} {
    margin-top: ${spacing(2)}px;
  }
`;
