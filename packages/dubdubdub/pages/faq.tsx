import React from "react";
import styled from "styled-components";
import { Heading, Text, Link, FontWeight, Span } from "styled-typography";
import { Stylable } from "../types/component.types";
import { spacing } from "../utils/spacing.util";

type Props = Stylable;

export const RawIndex = ({ className }: Props) => (
  <section className={className}>
    <Heading>FAQ</Heading>
    <Heading level={2}>
      How is this different from{" "}
      <Link
        href="https://github.com/KyleAMathews/typography.js#reactjs-helper-components"
        target="_blank"
      >
        react-typography
      </Link>
      ?
    </Heading>
    <Text>
      The main difference is that <code>react-typography</code>, and <code>typography.js</code> both
      are meant to setup typographic styling at the root level (i.e. at the <code>body</code>{" "}
      element). They don’t provide components to use throughout the app.
    </Text>
    <Text>
      The main issue I have with this approach is that it’s not very <code>JSX</code>-like. To
      customize each instance of <code>p</code>, <code>h#</code>, <code>span</code>, etc, you must
      override each or create your own components. This is ok, but also time consuming.
    </Text>
    <Text>
      <Span fontWeight={FontWeight.Bold}>styled-typography</Span> takes a different approach, by
      providing components that feel like react and have an API that allows you to customize each
      one as needed with props rather than a <code>className</code> or <code>style</code> prop.
    </Text>
    <Text>
      Please use whichever you prefer! I personally prefer the API and components used in{" "}
      <Span fontWeight={FontWeight.Bold}>styled-typography</Span>, which is why I created it, but
      everyone’s different!
    </Text>
  </section>
);

export default styled(RawIndex)`
  ${Heading} + ${Heading} {
    margin-top: ${spacing(2)}px;
  }
`;
