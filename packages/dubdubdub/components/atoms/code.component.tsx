import React, { ReactChild } from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
	language?: SyntaxHighlighterProps["language"];
	children: ReactChild;
};

export const Code = ({ language = "jsx", children }: Props) => (
	<Prism language={language} style={tomorrow}>
		{children}
	</Prism>
);
