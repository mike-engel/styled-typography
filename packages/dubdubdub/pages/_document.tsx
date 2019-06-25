import React, { ReactElement } from "react";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { NextDocumentContext } from "next/document";

type Props = {
  styleTags: ReactElement<any>;
};

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({ enhanceApp: App => props => sheet.collectStyles(<App {...props} />) });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
