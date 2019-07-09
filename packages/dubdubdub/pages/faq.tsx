import React from "react";
import styled from "styled-components";
import { Heading, Text, Link, FontWeight, Span } from "styled-typography";
import { Stylable } from "../types/component.types";
import { BookmarkHeading } from "../components/atoms/bookmark_heading.component";

type Props = Stylable;

export const RawIndex = ({ className }: Props) => (
	<section className={className}>
		<Heading>FAQ</Heading>
		<BookmarkHeading id="why" level={2}>
			Why?
		</BookmarkHeading>
		<Text>
			That’s a good question! I wrote this for a few different reasons, any of
			which you may not agree with. As with everything, this is opinionated!
		</Text>
		<ul>
			<li>
				Using <code>className</code> when you’re already using{" "}
				<code>styled-components</code> feels like an anti-pattern
			</li>
			<li>I wanted a consistent API between all typographic elements</li>
			<li>
				I wanted a better API for differentiating between semantic hierarchy and
				visual hierarchy
			</li>
			<li>
				As design systems grow, so do one-off components. I needed typography
				components I could compose as needed without creating many abstractions
			</li>
			<li>
				I was inspired by{" "}
				<Link
					href="https://github.com/necolas/react-native-web"
					target="_blank"
				>
					<code>react-native-web</code>
				</Link>
				, but wanted something that fit in with <code>styled-components</code>
			</li>
		</ul>
		<Text>
			Overall, yes, you could do this with <code>h#</code>, <code>p</code>,{" "}
			<code>span</code>, and <code>a</code> tags. In the end, having a single
			reusable API that fits in with my existing styling framework and
			composition style made the most sense to me. And after tweaking this API
			over several years, it still does!
		</Text>
		<BookmarkHeading id="how-is-this-different-from-react-typography" level={2}>
			How is this different from{" "}
			<Link
				href="https://github.com/KyleAMathews/typography.js#reactjs-helper-components"
				target="_blank"
			>
				react-typography
			</Link>
			?
		</BookmarkHeading>
		<Text>
			The main difference is that <code>react-typography</code>, and{" "}
			<code>typography.js</code> both are meant to setup typographic styling at
			the root level (i.e. at the <code>body</code> element). They don’t provide
			components to use throughout the app.
		</Text>
		<Text>
			The main issue I have with this approach is that it’s not very{" "}
			<code>JSX</code>-like. To customize each instance of <code>p</code>,{" "}
			<code>h#</code>, <code>span</code>, etc, you must override each or create
			your own components. This is ok, but also time consuming.
		</Text>
		<Text>
			<Span fontWeight={FontWeight.Bold}>styled-typography</Span> takes a
			different approach, by providing components that feel like react and have
			an API that allows you to customize each one as needed with props rather
			than a <code>className</code> or <code>style</code> prop.
		</Text>
		<Text>
			Please use whichever you prefer! I personally prefer the API and
			components used in{" "}
			<Span fontWeight={FontWeight.Bold}>styled-typography</Span>, which is why
			I created it, but everyone’s different!
		</Text>
	</section>
);

export default styled(RawIndex)``;
