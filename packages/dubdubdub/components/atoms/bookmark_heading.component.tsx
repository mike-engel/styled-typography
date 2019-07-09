import React, { ReactChild } from "react";
import styled from "styled-components";
import NextLink from "next/link";
import { Heading, Link, TypeProps } from "styled-typography";
import { Stylable } from "../../types/component.types";

type Props = Stylable &
	TypeProps & {
		children: ReactChild;
		id: string;
	};

export const RawBookmarkHeading = ({
	className,
	children,
	id,
	...rest
}: Props) => (
	<Heading className={className} {...rest} id={id}>
		<NextLink href={`#${id}`} passHref>
			<Link>
				<svg
					width={24}
					height={24}
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-link-2"
				>
					<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
					<line x1={8} y1={12} x2={16} y2={12} />
				</svg>
			</Link>
		</NextLink>
		{children}
	</Heading>
);

export const BookmarkHeading = styled(RawBookmarkHeading)`
	position: relative;

	${Link} {
		position: absolute;
		top: 50%;
		left: -44px;
		transform: translateY(-50%);
		padding: 10px;
		line-height: 0;
	}

	@media (hover) {
		${Link} {
			opacity: 0;
		}

		&:hover ${Link} {
			opacity: 1;
		}
	}
`;
