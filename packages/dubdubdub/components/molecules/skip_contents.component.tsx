import React from "react";
import NextLink from "next/link";
import { Link } from "styled-typography";
import { Stylable } from "../../types/component.types";
import styled from "styled-components";
import { getThemeProp } from "../../utils/styles.util";

type Props = Stylable;

export const RawSkipContents = ({ className }: Props) => (
	<NextLink href="#main-content" passHref>
		<Link className={`${className} visually-hidden`}>Skip to content</Link>
	</NextLink>
);

export const SkipContents = styled(RawSkipContents)`
	&:focus {
		width: unset;
		height: unset;
		margin: unset;
		padding: 1em;
		clip: unset;
		clip-path: unset;
		z-index: 999999;
		background: ${getThemeProp("background")};
	}
`;
