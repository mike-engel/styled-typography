# styled-typography

> Typograpy components for react and styled-components

![current version](https://badgen.net/npm/v/styled-typography)
![current version](https://badgen.net/github/license/mike-engel/styled-typography)
![min-zip size](https://badgen.net/bundlephobia/minzip/styled-typography)

`styled-typography` is a small set of components, using [`styled-components`](https://styled-components.com), to better manage typographic styles within your app. The API was born out of years of managing large single page applications and design systems. It's flexible to be used however you need and to be customized further, but simple enough to have a small API. Additionally, care has been taken to ensure accessibility when adding it to your apps.

`styled-typography` aims to be as small as possible and thus has no dependencies. It requires `styled-components` v4 or above and that's it! To get started, keep reading.

## Usage

The minimum to get started is to have a `ThemeProvider` somewhere near the top of your react tree. You don't need to provide a theme if you want the default configuration, which will automatically be used if you don't provide one.

```jsx
import React from "react";
import { ThemeProvider } from "styled-components";

export const App = ({ children }) => (
	<ThemeProvider theme={{}}>{children}</ThemeProvider>
);
```

To configure the typographic setup, you can pass any and all [configuration options](#options) listed below.

```jsx
import React from "react";
import { ThemeProvider } from "styled-components";

// only customizes these three options. The rest will come from the default implementation
const typographyTheme = {
	fontSizes: ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.75rem", "10px"],
	bodyFontFamily: "Source Code Pro, Input, monospace",
	headingFontFamily: "SF Display, Helvetica Neue, Circular, sans-serif"
};

export const App = ({ children }) => (
	<ThemeProvider theme={{ typography: typographyTheme }}>
		{children}
	</ThemeProvider>
);
```

### Components

`styled-typography` provides components for you to use and extend if needed: `GlobalTypeStyles`, `Text`, `Heading`, `Span`, and `Link`.

#### `GlobalTypeStyles`

The `GlobalStyleStyles` component is a way to quickly get global type styles into your app. This is useful if you intent to use `Span` or `Link` outside of `Text`/`Heading`, or other non-`styled-typography` components in your app. It's important, however, that you place it within the `ThemeProvider` component.

```jsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalTypeStyles } from "styled-typography";

export const App = ({ children }) => (
	<ThemeProvider theme={{}}>
		<GlobalTypeStyles />
		{children}
	</ThemeProvider>
);
```

#### `Text`

The `Text` component resolves, by default, to a `p` component within the DOM. It accepts all props passable to `p`, as well as `TextProps`.

```jsx
import React from "react";
import { Text, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
	<Text
		className={className}
		level={4}
		fontWeight={FontWeight.Bold}
		fontStyle={FontStyle.Normal}
		color="red"
		lineHeight={1.3}
	>
		Hello, World!
	</Text>
);
```

#### `Heading`

The `Heading` component resolves, by default, to a `div` component within the DOM. It accepts all props passable to `div`, as well as `TextProps`.

But wait, you say! That's not accessible! I know. By default, a `div` is not semantically an `h1` element. `ARIA`, however, provides attributes that _can_ make it a semantic header. Thus, the `Header` component automatically gets `role="heading" and`aria-level="#"` attributes.

```jsx
import React from "react";
import { Heading, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
	<Heading
		className={className}
		level={1} // semantic level
		displayLevel={2} // display/visual level
		fontWeight={FontWeight.Bold}
		fontStyle={FontStyle.Normal}
		color="red"
		lineHeight={1}
	>
		Hello, World!
	</Heading>
);
```

#### `Span`

The `Span` component resolves, by default, to a `span` component within the DOM. It accepts all props passable to `span`, as well as `TextProps`.

```jsx
import React from "react";
import { Span, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
	<Span
		className={className}
		level={4}
		fontWeight={FontWeight.Bold}
		fontStyle={FontStyle.Normal}
		color="red"
		lineHeight={1.3}
	>
		Hello, World!
	</Span>
);
```

#### `Link`

The `Link` component resolves, by default, to an `a` component within the DOM. It accepts all props passable to `a`, as well as `TextProps`.

```jsx
import React from "react";
import { Link, FontWeight, FontStyle } from "styled-typography";

export const HelloWorld = ({ className }) => (
	<Link
		className={className}
		level={4}
		fontWeight={FontWeight.Bold}
		fontStyle={FontStyle.Normal}
		color="red"
		lineHeight={1.3}
		href="https://reactjs.org"
		target="_blank"
	>
		Hello, World!
	</Link>
);
```

### Options

Each of these options has what I consider to be a good default. You may override all of them, or choose just a few to change.

- [fontSizes](#fontsizes)
- [bodyFontFamily](#bodyfontfamily)
- [bodySize](#bodysize)
- [bodyWeight](#bodyweight)
- [bodyStyle](#bodystyle)
- [bodyColor](#bodycolor)
- [bodyLineHeight](#bodylineheight)
- [headingFontFamily](#headingfontfamily)
- [headingSize](#headingsize)
- [headingWeight](#headingweight)
- [headingStyle](#headingstyle)
- [headingColor](#headingcolor)
- [headingLineHeight](#headinglineheight)
- [extras](#extra)

#### **`fontSizes`**

**Type**: `[string, string, string, string, string, string]`  
**Default**: `["2.369rem", "1.777rem", "1.333rem", "1rem", "0.750rem", "10px"]`

`fontSizes` controls the 6 font size levels available to you. This generally corresponds to `h1` through `h6`. 6 levels are required. If your app has less than that, just duplicate the smallest value until there are 6.

If only having 6 levels doesn't work for you, please file an issue!

#### **`bodyFontFamily`**

**Type**: `string`  
**Default**: `"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"`

`bodyFontFamily` sets the font family for `Text` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`bodySize`**

**Type**: `number`  
**Default**: `4`

`bodySize` sets the default font size level for `Text` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`bodyWeight`**

**Type**: `FontWeight`  
**Default**: `FontWeight.Normal`

`bodyWeight` sets the default `font-weight` for `Text` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

Available options are tied to the [common name mapping system](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping):

- `FontWeight.Hairline` = `"100"`,
- `FontWeight.ExtraLight` = `"200"`,
- `FontWeight.Light` = `"300"`,
- `FontWeight.Normal` = `"400"`,
- `FontWeight.Medium` = `"500"`,
- `FontWeight.SemiBold` = `"600"`,
- `FontWeight.Bold` = `"700"`,
- `FontWeight.ExtraBold` = `"800"`,
- `FontWeight.Heavy` = `"900"`,
- `FontWeight.Inherit` = `"inherit"`

#### **`bodyStyle`**

**Type**: `FontStyle`  
**Default**: `FontStyle.Regular`

`bodyStyle` sets the default `font-style` for `Text` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

Available options are tied to the [standard `font-style` options](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style#Values) with an exception for `oblique <angle>`:

- `FontStyle.Italic` = `"italic"`,
- `FontStyle.Oblique` = `"oblique"`,
- `FontStyle.Normal` = `"normal"`,
- `FontStyle.Inherit` = `"inherit"`

#### **`bodyColor`**

**Type**: `string`  
**Default**: `"#000000"`

`bodyColor` sets the default `color` for `Text` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`bodyLineHeight`**

**Type**: `number | string`  
**Default**: `1.4`

`bodyLineHeight` sets the default `line-height` for `Text` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`headingFontFamily`**

**Type**: `string`  
**Default**: `"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"`

`headingFontFamily` sets the font family for `Heading` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`headingSize`**

**Type**: `number`  
**Default**: `4`

`headingSize` sets the default font size level for `Heading` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`headingWeight`**

**Type**: `FontWeight`  
**Default**: `FontWeight.Normal`

`headingWeight` sets the default `font-weight` for `Heading` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

Available options are tied to the [common name mapping system](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping):

- `FontWeight.Hairline` = `"100"`,
- `FontWeight.ExtraLight` = `"200"`,
- `FontWeight.Light` = `"300"`,
- `FontWeight.Normal` = `"400"`,
- `FontWeight.Medium` = `"500"`,
- `FontWeight.SemiBold` = `"600"`,
- `FontWeight.Bold` = `"700"`,
- `FontWeight.ExtraBold` = `"800"`,
- `FontWeight.Heavy` = `"900"`,
- `FontWeight.Inherit` = `"inherit"`

#### **`headingStyle`**

**Type**: `FontStyle`  
**Default**: `FontStyle.Regular`

`headingStyle` sets the default `font-style` for `Heading` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

Available options are tied to the [standard `font-style` options](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style#Values) with an exception for `oblique <angle>`:

- `FontStyle.Italic` = `"italic"`,
- `FontStyle.Oblique` = `"oblique"`,
- `FontStyle.Normal` = `"normal"`,
- `FontStyle.Inherit` = `"inherit"`

#### **`headingColor`**

**Type**: `string`  
**Default**: `"#000000"`

`headingColor` sets the default `color` for `Heading` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`headingLineHeight`**

**Type**: `number | string`  
**Default**: `1.4`

`headingLineHeight` sets the default `line-height` for `Heading` elements. `Span` and `Link` will inherit the global styles unless used within a `Text` or `Heading` element.

#### **`extra`**

**Type**: `{ text: string, heading: string, span: string, link: string }`  
**Default**: `{}`

`extra` injects extra styles for each type of component. Template strings and plain strings are acceptable values for each key.

## Differences from [`react-typography`](https://github.com/KyleAMathews/typography.js#reactjs-helper-components)

The main difference is that `react-typography`, and `typography.js` both are meant to setup typographic styling at the root level (i.e. at the `body` element). They don't provide components to use throughout the app.

The main issue I have with this approach is that it's not very `JSX`-like. To customize each instance of `p`, `h#`, `span`, etc, you must override each or create your own components. This is ok, but also time consuming.

`styled-typography` takes a different approach, by providing components that feel like react and have an API that allows you to customize each one as needed with props rather than a `className` or `style` prop.

Please use whichever you prefer! I personally prefer the API and components used in `styled-typography`, which is why I created it, but everyone's different!

## Contibuting

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Issues and pull requests are welcome!

### Setup

This project is setup as a monorepo using [lerna](https://lerna.js.org). Lerna is pretty small, so there isn't too much to learn. In summary, you should be able to use the following command to start on this project:

```sh
# install dependencies
lerna bootstrap --hoist
```

#### npm package

To contribute to the npm package, there's only a handful of `npm run` commands. In general, you probably only need `npm run test:watch`.

```sh
# run tests with a coverage report
npm run test:coverage

# run tests without a coverage report
npm run test

# run tests and re-test when files change
npm run test:watch

# run a quick typecheck on the code
npm run typecheck

# build the project to ./dist/
npm run build
```

To see your changes, you can run the `dubdubdub` project, or use `npm link` to include it in another one of your projects locally.

#### Public site (a.k.a `dubdubdub`)

To contribute to the public facing website, there's also a handful of relevant `npm run` scripts you'll need to use. Other commands are meant to be used for deployment, which you shouldn't have to worry about ✨

```sh
# start the development server
npm run dev

# run a quick typecheck on the code
npm run typecheck
```

## [License](LICENSE.md)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
	<tr>
		<td align="center"><a href="https://www.mike-engel.com"><img src="https://avatars0.githubusercontent.com/u/464447?v=4" width="100px;" alt="Mike Engel"/><br /><sub><b>Mike Engel</b></sub></a><br /><a href="#question-mike-engel" title="Answering Questions">💬</a> <a href="https://github.com/mike-engel/styled-typography/commits?author=mike-engel" title="Code">💻</a> <a href="https://github.com/mike-engel/styled-typography/commits?author=mike-engel" title="Documentation">📖</a> <a href="#example-mike-engel" title="Examples">💡</a> <a href="https://github.com/mike-engel/styled-typography/commits?author=mike-engel" title="Tests">⚠️</a> <a href="#review-mike-engel" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-mike-engel" title="Maintenance">🚧</a> <a href="#design-mike-engel" title="Design">🎨</a> <a href="#infra-mike-engel" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#ideas-mike-engel" title="Ideas, Planning, & Feedback">🤔</a> <a href="#content-mike-engel" title="Content">🖋</a></td>
	</tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
