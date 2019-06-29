import React from "react";
import { Heading, Link, FontWeight } from "styled-typography";
import styled from "styled-components";
import NextLink from "next/link";
import { Stylable } from "../../types/component.types";
import { spacing, Breakpoints } from "../../utils/spacing.util";

type Props = Stylable;

export const RawHeader = ({ className }: Props) => (
  <header className={className}>
    <Heading displayLevel={3} fontWeight={FontWeight.Medium}>
      Styled Typography
    </Heading>
    <nav>
      <ul className="plain-list">
        <li>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/docs" passHref>
            <Link>Docs</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/faq" passHref>
            <Link>FAQ</Link>
          </NextLink>
        </li>
        <li>
          <Link href="https://github.com/mike-engel/styled-typography" target="_blank">
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export const Header = styled(RawHeader)`
  padding: ${spacing(1)}px ${spacing(3)}px;
  display: flex;
  align-items: baseline;

  ul {
    display: inline-flex;
    align-items: top;
    margin: 0 0 0 ${spacing(6)}px;
  }

  li + li {
    margin-left: ${spacing(3)}px;
  }

  @media (min-width: ${Breakpoints.Tablet}px) {
    padding: ${spacing(1)}px ${spacing(6)}px;
  }
`;
