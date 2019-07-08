import React, {
	ReactChild,
	createContext,
	Dispatch,
	useState,
	SetStateAction,
	useEffect
} from "react";
import { ThemeProvider } from "styled-components";
import { TypographyProps, defaultTheme } from "styled-typography";
import cookie from "cookie";
import { light, dark, pSBC } from "../atoms/color.component";

export enum Theme {
	Light = "LIGHT",
	Dark = "DARK",
	Serif = "SERIF",
	GoldenRatio = "GOLDEN_RATIO",
	Spacey = "SPACEY"
}

type Props = {
	theme?: Theme;
	children: ReactChild;
};

type ThemeConfig = Record<string, any> & {
	typography: Partial<TypographyProps>;
};

export const ThemeManagerContext = createContext<{
	dispatch: Dispatch<SetStateAction<Theme>>;
	theme: Theme;
}>({ dispatch: () => Theme.Light, theme: Theme.Light });

export const commonTypographyConfig = {
	extra: {
		heading: `
			margin: 1.5em 0 .5em 0;
		`
	}
};

export const themes: Record<Theme, ThemeConfig> = {
	[Theme.Light]: {
		foreground: dark,
		background: light,
		highlight: pSBC(-0.1, light),
		typography: {
			...defaultTheme,
			...commonTypographyConfig,
			bodyColor: dark,
			headingColor: dark
		}
	},
	[Theme.Dark]: {
		foreground: light,
		background: dark,
		highlight: pSBC(0.1, dark),
		typography: {
			...defaultTheme,
			...commonTypographyConfig,
			bodyColor: light,
			headingColor: light
		}
	},
	[Theme.Serif]: {
		foreground: dark,
		background: light,
		highlight: pSBC(-0.1, light),
		typography: {
			...defaultTheme,
			...commonTypographyConfig,
			bodyFontFamily: "palatino, times new roman, times, serif",
			headingFontFamily: "palatino, times new roman, times, serif",
			bodyColor: dark,
			headingColor: dark
		}
	},
	[Theme.GoldenRatio]: {
		foreground: dark,
		background: light,
		highlight: pSBC(-0.1, light),
		typography: {
			...defaultTheme,
			...commonTypographyConfig,
			fontSizes: ["4.236rem", "2.618rem", "1.618rem", "1rem", "10px", "10px"],
			bodyColor: dark,
			headingColor: dark
		}
	},
	[Theme.Spacey]: {
		foreground: dark,
		background: light,
		highlight: pSBC(-0.1, light),
		typography: {
			...defaultTheme,
			...commonTypographyConfig,
			bodyLineHeight: 2.0,
			headingLineHeight: 2.0,
			bodyColor: dark,
			headingColor: dark
		}
	}
};

export const ThemeManager = ({ theme: cookieTheme, children }: Props) => {
	const [theme, setTheme] = useState(cookieTheme || Theme.Light);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const setCookie = cookie.serialize("theme", theme);

			document.cookie = setCookie;
		}
	}, [theme]);

	return (
		<ThemeManagerContext.Provider value={{ dispatch: setTheme, theme }}>
			<ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
		</ThemeManagerContext.Provider>
	);
};
