import React from "react";
import { NextContext } from "next";
import NextLink from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { Heading, Text, Link } from "styled-typography";
import { Stylable } from "../types/component.types";
import { GenericContainer } from "../components/atoms/generic_container.component";

type Props = Stylable & {
	statusCode?: number;
};

export const RawError = ({ className, statusCode }: Props) => {
	if (statusCode === 404) {
		return (
			<GenericContainer className={className}>
				<Head>
					<title>There’s nothing here / Finances</title>
				</Head>
				<Heading>There’s nothing here</Heading>
				<Text>
					Typo? Bad link? Hacker? Either way, nothing belongs here that we know
					of.
				</Text>
				<NextLink href="javascript:history.back()" passHref>
					<Link>Go back</Link>
				</NextLink>
			</GenericContainer>
		);
	}

	return (
		<GenericContainer className={className}>
			<Head>
				<title>This is embarrasing / Finances</title>
			</Head>
			<Heading>This is embarrasing</Heading>
			<Text>
				{/* prettier-ignore */}
				Something bad happened that we didn’t plan for. Try refreshing the page
				or go back. If this keeps happening, please send us a message at{" "}
				<Link href="mailto:finances@mike-engel.com">
					finances@mike-engel.com
				</Link>
				.
			</Text>
		</GenericContainer>
	);
};

RawError.getInitialProps = ({ res, err }: NextContext) => {
	const statusCode = res
		? res.statusCode
		: err
		? (err as Record<string, any>).statusCode
		: null;

	return { statusCode };
};

export default styled(RawError)``;
