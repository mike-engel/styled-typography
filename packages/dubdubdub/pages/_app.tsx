import React from "react";
import App, { Container, NextAppContext, AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalTypeStyles, Heading } from "styled-typography";
import Head from "next/head";
import { ErrorBoundary } from "../components/organisms/error_boundary.component";
import { Stylable } from "../types/component.types";
import { spacing, Breakpoints } from "../utils/spacing.util";
import { ThemeManager } from "../components/hocs/theme_manager.component";
import { getThemeProp } from "../utils/styles.util";
import { light } from "../components/atoms/color.component";
import { Header } from "../components/molecules/header.component";

type ComponentProps = {
  path: string;
  pageProps: any;
};

type Props = Stylable & AppProps & ComponentProps;

const Main = styled("main")``;

const GlobalStyles = createGlobalStyle`
  body {
    position: relative;
    background: ${getThemeProp("background")};
  }

  #__next {
    min-width: 100vw;
    min-height: 100vh;
  }

  section {
    max-width: 40em;
    margin-left: auto;
    margin-right: auto;
  }

  code {
    background: ${getThemeProp("highlight")};
    padding: ${spacing(0.25)}px ${spacing(0.5)}px;
    border-radius: ${spacing(0.5)}px;
  }

  pre {
    padding: ${spacing(2)}px;
    white-space: pre-wrap;
    border-radius: ${spacing(0.5)}px;
    font-size: 14px;
  }

  ${Heading} + ${Heading} {
    margin-top: ${spacing(2)}px;
  }

  pre + ${Heading} {
    margin-top: ${spacing(4)}px;
  }

  ${Heading} code,
  pre code {
    background: transparent;
    padding: initial;
    border-radius: 0;
  }
`;

export class RawApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component && Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const { Component, pageProps, className } = this.props;
    const defaultDescription = "Typograpy components for react and styled-components";
    const defaultTitle = "Styled Typography";
    const meta = pageProps.meta || {};

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content={meta.description ? meta.description : defaultDescription}
          />
          <meta name="viewport" content="initial-scale=1.0,width=device-width,viewport-fit=cover" />
          <meta httpEquiv="Accept-CH" content="Viewport-Width" />
          <meta name="theme-color" content={light} />

          <link rel="stylesheet" href="https://unpkg.com/a11y-css-reset@^1/combo.min.css" />

          <title>{meta.title ? `${meta.title} | ${defaultTitle}` : defaultTitle}</title>
        </Head>
        <ThemeManager>
          <>
            <GlobalStyles />
            <GlobalTypeStyles />
            <div className={className}>
              <ErrorBoundary>
                <Header />
                <Main>
                  <Component {...pageProps} />
                </Main>
              </ErrorBoundary>
            </div>
          </>
        </ThemeManager>
      </Container>
    );
  }
}

export default styled(RawApp)`
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  ${Main} {
    position: relative;
    padding: ${spacing(3)}px;

    @media (min-width: ${Breakpoints.Tablet}px) {
      padding: ${spacing(6)}px;
    }
  }
`;
