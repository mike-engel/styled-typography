import React from "react";
import styled from "styled-components";
import { Heading, Text, FontWeight, Span, Link, FontStyle } from "styled-typography";
import NextLink from "next/link";
import { Stylable } from "../types/component.types";
import { spacing } from "../utils/spacing.util";
import { Code } from "../components/atoms/code.component";

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
      little as you'd like. A default will be provided that looks nice, visually.
    </Text>
    <Text>
      The minimum to get started is to have a <code>ThemeProvider</code> somewhere near the top of
      your react tree. You don't need to provide a theme if you want the default configuration.
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
      components in your app. It's important, however, that you place it within the{" "}
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
    <Text>
      But wait, you say! That's not accessible! I know. By default, a <code>div</code> is not
      semantically an <code>h1</code> element. <code>ARIA</code>, however, provides attributes that{" "}
      <Span fontStyle={FontStyle.Italic}>can</Span> make it a semantic header. Thus, the{" "}
      <code>Header</code> component automatically gets <code>role="heading"</code> and{" "}
      <code>aria-level="#"</code> attributes.
    </Text>
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
  </section>
);

export default styled(RawIndex)`
  ${Heading} + ${Heading} {
    margin-top: ${spacing(2)}px;
  }
`;
