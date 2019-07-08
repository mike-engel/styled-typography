import React, { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import { Text, Heading, Link } from "styled-typography";
import Head from "next/head";
import { Stylable } from "../../types/component.types";
import { GenericContainer } from "../atoms/generic_container.component";

type Props = Stylable & {
	children: ReactNode;
};

type State = {
	hasError: boolean;
	error?: Error;
};

export class RawErrorBoundary extends Component<Props, State> {
	state: State = {
		hasError: false,
		error: undefined
	};

	componentDidCatch(err: Error, info: ErrorInfo & { [key: string]: any }) {
		this.setState(() => ({ hasError: true, error: err }));

		console.groupCollapsed("Caught exception in error boundary");
		console.log("info:", info.componentStack);
		console.error("error:", err);
		console.groupEnd();
	}

	render() {
		const { children, className } = this.props;

		if (this.state.hasError) {
			return (
				<GenericContainer className={className}>
					<Head>
						<title>This is embarrasing / Styled Typography</title>
					</Head>
					<Heading>This is embarrasing</Heading>
					<Text>
						{/* prettier-ignore */}
						Something bad happened that we didn’t plan for. Try refreshing the
						page or go back. If this keeps happening, please send us a message
						at{" "}
						<Link href="mailto:mike@mike-engel.com">mike@mike-engel.com</Link>.
					</Text>
				</GenericContainer>
			);
		}

		return children;
	}
}

export const ErrorBoundary = styled(RawErrorBoundary)``;
