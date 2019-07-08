import { expect } from "chai";
import {
	defaultTheme,
	getTheme,
	TypographyProps,
	getDefault,
	TextType,
	getFontFamily,
	getFontSize,
	getFontWeight,
	getFontStyle,
	getFontColor,
	getLineHeight,
	getExtras
} from "../src/utils";
import { FontWeight, FontStyle } from "../src/types";

describe("utils", () => {
	context("getTheme", () => {
		it("provides a default theme if none is provided", () => {
			expect(getTheme({ theme: {} })).to.deep.equal(defaultTheme);
			expect(getTheme({ theme: { typography: {} } })).to.deep.equal(
				defaultTheme
			);
		});

		it("uses the default theme for missing configurations", () => {
			const themeOverride: Partial<TypographyProps> = {
				headingFontFamily: "times new roman, times, serif",
				fontSizes: ["4rem", "3rem", "2rem", "1rem", "0.5rem", "10px"]
			};

			expect(getTheme({ theme: { typography: themeOverride } })).to.deep.equal({
				...defaultTheme,
				...themeOverride
			});
		});
	});

	context("getDefault", () => {
		it("should provide default body styles", () => {
			expect(getDefault(TextType.Body, "body", "heading", "span")).to.equal(
				"body"
			);
			expect(
				getDefault(TextType.Body, "body", "heading", "span", "link")
			).to.equal("body");
		});

		it("should provide default heading styles", () => {
			expect(getDefault(TextType.Heading, "body", "heading", "span")).to.equal(
				"heading"
			);
			expect(
				getDefault(TextType.Heading, "body", "heading", "span", "link")
			).to.equal("heading");
		});

		it("should provide default span styles", () => {
			expect(getDefault(TextType.Span, "body", "heading", "span")).to.equal(
				"span"
			);
			expect(
				getDefault(TextType.Span, "body", "heading", "span", "link")
			).to.equal("span");
		});

		it("should provide default link styles", () => {
			expect(getDefault(TextType.Link, "body", "heading", "span")).to.equal(
				"span"
			);
			expect(
				getDefault(TextType.Link, "body", "heading", "span", "link")
			).to.equal("link");
		});
	});

	context("getFontFamily", () => {
		const fontFamilies = {
			bodyFontFamily: "serif",
			headingFontFamily: "monospace"
		};
		const customTheme = { theme: { typography: fontFamilies } };

		it("should provide the default body font family", () => {
			expect(getFontFamily(TextType.Body)({ theme: {} })).to.equal(
				defaultTheme.bodyFontFamily
			);
		});

		it("should use the custom body font family", () => {
			expect(getFontFamily(TextType.Body)(customTheme)).to.equal(
				fontFamilies.bodyFontFamily
			);
		});

		it("should provide the default heading font family", () => {
			expect(getFontFamily(TextType.Heading)({ theme: {} })).to.equal(
				defaultTheme.headingFontFamily
			);
		});

		it("should use the custom heading font family", () => {
			expect(getFontFamily(TextType.Heading)(customTheme)).to.equal(
				fontFamilies.headingFontFamily
			);
		});

		it("should provide the inherited font family for spans", () => {
			expect(getFontFamily(TextType.Span)({ theme: {} })).to.equal("inherit");
		});

		it("should provide the inherited font family for links", () => {
			expect(getFontFamily(TextType.Link)({ theme: {} })).to.equal("inherit");
		});
	});

	context("getFontSize", () => {
		const fontSizes = {
			bodySize: 3,
			headingSize: 2
		};
		const customTheme = { theme: { typography: fontSizes } };

		it("should use the level 4 size for body text by default", () => {
			expect(getFontSize(TextType.Body)({ theme: {} })).to.equal(
				defaultTheme.fontSizes[3]
			);
		});

		it("should use the custom body size for body text", () => {
			expect(getFontSize(TextType.Body)(customTheme)).to.equal(
				defaultTheme.fontSizes[2]
			);
		});

		it("should use the level prop size for body text", () => {
			expect(getFontSize(TextType.Body)({ level: 5, ...customTheme })).to.equal(
				defaultTheme.fontSizes[4]
			);
			expect(
				getFontSize(TextType.Body)({ level: "inherit", ...customTheme })
			).to.equal("inherit");
		});

		it("should use the level 1 size for heading text by default", () => {
			expect(getFontSize(TextType.Heading)({ theme: {} })).to.equal(
				defaultTheme.fontSizes[0]
			);
		});

		it("should use the custom heading size for heading text", () => {
			expect(getFontSize(TextType.Heading)(customTheme)).to.equal(
				defaultTheme.fontSizes[1]
			);
		});

		it("should use the level prop size for heading text", () => {
			expect(
				getFontSize(TextType.Heading)({ level: 2, ...customTheme })
			).to.equal(defaultTheme.fontSizes[1]);
			expect(
				getFontSize(TextType.Heading)({ level: "inherit", ...customTheme })
			).to.equal("inherit");
		});

		it("should use the displayLevel prop size for heading text", () => {
			expect(
				getFontSize(TextType.Heading)({
					level: 2,
					displayLevel: 5,
					...customTheme
				})
			).to.equal(defaultTheme.fontSizes[4]);
			expect(
				getFontSize(TextType.Heading)({
					level: 2,
					displayLevel: "inherit",
					...customTheme
				})
			).to.equal("inherit");
		});

		it("should use inherit for span type text by default", () => {
			expect(getFontSize(TextType.Span)({ theme: {} })).to.equal("inherit");
			expect(getFontSize(TextType.Link)({ theme: {} })).to.equal("inherit");
		});

		it("should use level prop for span type text", () => {
			expect(getFontSize(TextType.Span)({ level: 1, theme: {} })).to.equal(
				defaultTheme.fontSizes[0]
			);
			expect(getFontSize(TextType.Link)({ level: 1, theme: {} })).to.equal(
				defaultTheme.fontSizes[0]
			);
		});
	});

	context("getFontWeight", () => {
		const fontWeights = {
			bodyWeight: FontWeight.Light,
			headingWeight: FontWeight.Heavy
		};
		const customTheme = { theme: { typography: fontWeights } };

		it("should use normal for body text by default", () => {
			expect(getFontWeight(TextType.Body)({ theme: {} })).to.equal(
				defaultTheme.bodyWeight
			);
		});

		it("should use the custom theme for body text", () => {
			expect(getFontWeight(TextType.Body)(customTheme)).to.equal(
				FontWeight.Light
			);
		});

		it("should use the fontWeight prop for body text", () => {
			expect(
				getFontWeight(TextType.Body)({
					fontWeight: FontWeight.ExtraLight,
					...customTheme
				})
			).to.equal(FontWeight.ExtraLight);
		});

		it("should use bold for heading text by default", () => {
			expect(getFontWeight(TextType.Heading)({ theme: {} })).to.equal(
				defaultTheme.headingWeight
			);
		});

		it("should use the custom theme for heading text", () => {
			expect(getFontWeight(TextType.Heading)(customTheme)).to.equal(
				FontWeight.Heavy
			);
		});

		it("should use the fontWeight prop for heading text", () => {
			expect(
				getFontWeight(TextType.Heading)({
					fontWeight: FontWeight.ExtraBold,
					...customTheme
				})
			).to.equal(FontWeight.ExtraBold);
		});

		it("should use inherit for span type text by default", () => {
			expect(getFontWeight(TextType.Span)({ theme: {} })).to.equal("inherit");
			expect(getFontWeight(TextType.Link)({ theme: {} })).to.equal("inherit");
		});

		it("should use the fontWeight prop for span type text", () => {
			expect(
				getFontWeight(TextType.Span)({
					fontWeight: FontWeight.ExtraBold,
					theme: {}
				})
			).to.equal(FontWeight.ExtraBold);
			expect(
				getFontWeight(TextType.Link)({
					fontWeight: FontWeight.ExtraBold,
					theme: {}
				})
			).to.equal(FontWeight.ExtraBold);
		});
	});

	context("getFontStyle", () => {
		const fontStyles = {
			bodyStyle: FontStyle.Italic,
			headingStyle: FontStyle.Oblique
		};
		const customTheme = { theme: { typography: fontStyles } };

		it("should use normal for body text by default", () => {
			expect(getFontStyle(TextType.Body)({ theme: {} })).to.equal(
				defaultTheme.bodyStyle
			);
		});

		it("should use the custom theme for body text", () => {
			expect(getFontStyle(TextType.Body)(customTheme)).to.equal(
				FontStyle.Italic
			);
		});

		it("should use the fontStyle prop for body text", () => {
			expect(
				getFontStyle(TextType.Body)({
					fontStyle: FontStyle.Oblique,
					...customTheme
				})
			).to.equal(FontStyle.Oblique);
		});

		it("should use normal for heading text by default", () => {
			expect(getFontStyle(TextType.Heading)({ theme: {} })).to.equal(
				defaultTheme.headingStyle
			);
		});

		it("should use the custom theme for heading text", () => {
			expect(getFontStyle(TextType.Heading)(customTheme)).to.equal(
				FontStyle.Oblique
			);
		});

		it("should use the fontStyle prop for heading text", () => {
			expect(
				getFontStyle(TextType.Heading)({
					fontStyle: FontStyle.Italic,
					...customTheme
				})
			).to.equal(FontStyle.Italic);
		});

		it("should use inherit for span type text by default", () => {
			expect(getFontStyle(TextType.Span)({ theme: {} })).to.equal("inherit");
			expect(getFontStyle(TextType.Link)({ theme: {} })).to.equal("inherit");
		});

		it("should use the fontStyle prop for span type text", () => {
			expect(
				getFontStyle(TextType.Span)({ fontStyle: FontStyle.Oblique, theme: {} })
			).to.equal(FontStyle.Oblique);
			expect(
				getFontStyle(TextType.Link)({ fontStyle: FontStyle.Oblique, theme: {} })
			).to.equal(FontStyle.Oblique);
		});
	});

	context("getFontColor", () => {
		const colors = {
			bodyColor: "rebeccapurple",
			headingColor: "red"
		};
		const customTheme = { theme: { typography: colors } };

		it("should use black for body text by default", () => {
			expect(getFontColor(TextType.Body)({ theme: {} })).to.equal(
				defaultTheme.bodyColor
			);
		});

		it("should use the custom theme for body text", () => {
			expect(getFontColor(TextType.Body)(customTheme)).to.equal(
				"rebeccapurple"
			);
		});

		it("should use the color prop for body text", () => {
			expect(
				getFontColor(TextType.Body)({ color: "orange", ...customTheme })
			).to.equal("orange");
		});

		it("should use black for heading text by default", () => {
			expect(getFontColor(TextType.Heading)({ theme: {} })).to.equal(
				defaultTheme.headingColor
			);
		});

		it("should use the custom theme for heading text", () => {
			expect(getFontColor(TextType.Heading)(customTheme)).to.equal("red");
		});

		it("should use the color prop for heading text", () => {
			expect(
				getFontColor(TextType.Heading)({ color: "blue", ...customTheme })
			).to.equal("blue");
		});

		it("should use currentcolor for span type text by default", () => {
			expect(getFontColor(TextType.Span)({ theme: {} })).to.equal(
				"currentcolor"
			);
			expect(getFontColor(TextType.Link)({ theme: {} })).to.equal(
				"currentcolor"
			);
		});

		it("should use the color prop for span type text", () => {
			expect(
				getFontColor(TextType.Span)({ color: "violet", theme: {} })
			).to.equal("violet");
			expect(
				getFontColor(TextType.Link)({ color: "violet", theme: {} })
			).to.equal("violet");
		});
	});

	context("getLineHeight", () => {
		const lineHeights = {
			bodyLineHeight: 1.6,
			headingLineHeight: 1.0
		};
		const customTheme = { theme: { typography: lineHeights } };

		it("should use 1.4 for body text by default", () => {
			expect(getLineHeight(TextType.Body)({ theme: {} })).to.equal(
				defaultTheme.bodyLineHeight
			);
		});

		it("should use the custom theme for body text", () => {
			expect(getLineHeight(TextType.Body)(customTheme)).to.equal(1.6);
		});

		it("should use the lineHeight prop for body text", () => {
			expect(
				getLineHeight(TextType.Body)({ lineHeight: 2.0, ...customTheme })
			).to.equal(2.0);
		});

		it("should use 1.2 for heading text by default", () => {
			expect(getLineHeight(TextType.Heading)({ theme: {} })).to.equal(
				defaultTheme.headingLineHeight
			);
		});

		it("should use the custom theme for heading text", () => {
			expect(getLineHeight(TextType.Heading)(customTheme)).to.equal(1.0);
		});

		it("should use the lineHeight prop for heading text", () => {
			expect(
				getLineHeight(TextType.Heading)({ lineHeight: 1.8, ...customTheme })
			).to.equal(1.8);
		});

		it("should use inherit for span type text by default", () => {
			expect(getLineHeight(TextType.Span)({ theme: {} })).to.equal("inherit");
			expect(getLineHeight(TextType.Link)({ theme: {} })).to.equal("inherit");
		});

		it("should use the lineHeight prop for span type text", () => {
			expect(
				getLineHeight(TextType.Span)({ lineHeight: 1.7, theme: {} })
			).to.equal(1.7);
			expect(
				getLineHeight(TextType.Link)({ lineHeight: 1.7, theme: {} })
			).to.equal(1.7);
		});
	});

	context("getExtras", () => {
		const extraStyles = {
			body: `background: red;`,
			heading: `background: blue;`,
			span: `background: pink;`,
			link: `background: orange;`
		};
		const customTheme = { theme: { typography: { extra: extraStyles } } };

		it("should return empty strings by default", () => {
			expect(getExtras(TextType.Body)({ theme: {} })).to.deep.equal(``);
			expect(getExtras(TextType.Heading)({ theme: {} })).to.deep.equal(``);
			expect(getExtras(TextType.Span)({ theme: {} })).to.deep.equal(``);
			expect(getExtras(TextType.Link)({ theme: {} })).to.deep.equal(``);
		});

		it("should return the proper extra styles", () => {
			expect(getExtras(TextType.Body)(customTheme)).to.deep.equal(
				extraStyles.body
			);
			expect(getExtras(TextType.Heading)(customTheme)).to.deep.equal(
				extraStyles.heading
			);
			expect(getExtras(TextType.Span)(customTheme)).to.deep.equal(
				extraStyles.span
			);
			expect(getExtras(TextType.Link)(customTheme)).to.deep.equal(
				extraStyles.link
			);
		});
	});
});
