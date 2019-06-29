import React from "react";
import styled from "styled-components";
import { Heading, Text, FontWeight, Link, Span } from "styled-typography";
import NextLink from "next/link";
import { Stylable } from "../types/component.types";
import { spacing } from "../utils/spacing.util";
import { Code } from "../components/atoms/code.component";

type Props = Stylable;

export const RawIndex = ({ className }: Props) => (
  <section className={className}>
    <Heading>Styled Typography</Heading>
    <Heading level={2} displayLevel={3} fontWeight={FontWeight.Medium}>
      Typograpy components for react and styled-components
    </Heading>
    <Text>
      <Span fontWeight={FontWeight.Bold}>styled-typography</Span> is a small set of components using{" "}
      <Link href="https://styled-components.com" target="_blank">
        styled-components
      </Link>
      , to better manage typographic styles within your app. The API was born out of years of
      managing large single page applications and design systems.
    </Text>
    <Text>
      It’s flexible to be used however you need and to be customized further, but simple enough to
      have a small API. Additionally, care has been taken to ensure accessibility when adding it to
      your apps.
    </Text>
    <Heading level={3}>Getting started</Heading>
    <Code>
      {`import React from "react";
import { ThemeProvider } from "styled-components";
import { Heading, Text, Link } from "styled-typography";

export const App = ({ children }) => (
  <ThemeProvider theme={{}}>
    <Heading>Welcome to my app!</Heading>
    <Heading level={2} displayLevel={3}>
      Do some pretty cool things
    </Heading>
    <Text>
      To get started,
      {" "}<Link href="/sign-up">create an account</Link>{" "}
      via email or your social network login.
    </Text>
  </ThemeProvider>
);`}
    </Code>
    <Text level={2} fontWeight={FontWeight.Bold}>
      Still interested? Read the{" "}
      <NextLink href="/docs" passHref>
        <Link>docs</Link>
      </NextLink>{" "}
      to learn more!
    </Text>
  </section>
);

export default styled(RawIndex)`
  margin-top: ${spacing(10)}px;

  ${Heading} + ${Heading} {
    margin-top: ${spacing(1)}px;
  }

  ${Heading} + ${Text} {
    margin-top: ${spacing(5)}px;
  }
`;
