import React from "react";
import { Heading, Link, FontWeight } from "styled-typography";
import styled from "styled-components";
import NextLink from "next/link";
import { useRouter, NextRouter } from "next/router";
import { Stylable } from "../../types/component.types";
import { spacing, Breakpoints } from "../../utils/spacing.util";
import { ThemeSwitcher } from "./theme_switcher.component";

type Props = Stylable;

const getPath = (router: NextRouter) => (!!router ? router.asPath : "");

export const RawHeader = ({ className }: Props) => {
	const router = useRouter();
	const currentPath = getPath(router);

	console.log({ currentPath });

	return (
		<header className={className}>
			<Heading displayLevel={3} fontWeight={FontWeight.Medium}>
				Styled Typography
			</Heading>
			<nav>
				<ul className="plain-list">
					<li>
						<NextLink href="/" passHref>
							<Link data-active={currentPath === "/"}>Home</Link>
						</NextLink>
					</li>
					<li>
						<NextLink href="/docs" passHref>
							<Link data-active={currentPath === "/docs"}>Docs</Link>
						</NextLink>
					</li>
					<li>
						<NextLink href="/faq" passHref>
							<Link data-active={currentPath === "/faq"}>FAQ</Link>
						</NextLink>
					</li>
					<li>
						<Link
							href="https://github.com/mike-engel/styled-typography"
							target="_blank"
						>
							GitHub ➚
						</Link>
					</li>
				</ul>
			</nav>
			<ThemeSwitcher />
		</header>
	);
};

export const Header = styled(RawHeader)`
	padding: ${spacing(1)}px ${spacing(3)}px;
	display: flex;
	flex-direction: column;
	align-items: baseline;

	${Heading} {
		margin: 0;
	}

	ul {
		display: flex;
		align-items: top;
		margin: ${spacing(1)}px 0 0 0;
	}

	li + li {
		margin-left: ${spacing(3)}px;
	}

	[data-active="true"] {
		text-decoration: line-through;
	}

	@media (hover) {
		${Link}:hover {
			text-decoration-line: underline;
			text-decoration-style: wavy;
		}
	}

	@media (min-width: ${Breakpoints.Tablet}px) {
		padding: ${spacing(1)}px ${spacing(6)}px;
		flex-direction: row;

		ul {
			display: inline-flex;
			margin: 0 0 0 ${spacing(6)}px;
		}
	}
`;
