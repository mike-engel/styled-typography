import React, { ReactChild, useReducer, createContext, Dispatch } from "react";
import { ThemeProvider } from "styled-components";
import { TypographyProps, defaultTheme } from "styled-typography";
import cookie from "cookie";
import { light, dark, pSBC } from "../atoms/color.component";

export enum Theme {
	Light = "LIGHT",
	Dark = "DARK",
	Serif = "SERIF",
	GoldenRatio = "GOLDEN_RATIO"
}

export enum ThemeManagerActions {
	ChangeTheme = "CHANGE_THEME"
}

export type Action<P> = {
	type: ThemeManagerActions;
	payload?: P;
};

type Props = {
	theme?: Theme;
	children: ReactChild;
};

type State = Record<string, any> & {
	typography: Partial<TypographyProps>;
};

export const ThemeManagerContext = createContext<{
	dispatch: Dispatch<Action<any>>;
	theme: Theme;
}>({ dispatch: () => {}, theme: Theme.Light });

export const commonTypographyConfig = {
	extra: {
		heading: `
			margin: 1.5em 0 .5em 0;
		`
	}
};

export const themes: Record<Theme, State> = {
	[Theme.Light]: {
		foreground: dark,
		background: light,
		highlight: pSBC(-0.1, light),
		theme: Theme.Light,
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
		theme: Theme.Dark,
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
		theme: Theme.Serif,
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
		theme: Theme.GoldenRatio,
		typography: {
			...defaultTheme,
			...commonTypographyConfig,
			fontSizes: ["4.236rem", "2.618rem", "1.618rem", "1rem", "10px", "10px"],
			bodyColor: dark,
			headingColor: dark
		}
	}
};

export const initialState = (setTheme: Props["theme"]) => {
	if (typeof window !== "undefined") {
		const cookies: { theme?: Theme } = cookie.parse(document.cookie);

		return themes[cookies.theme || Theme.Light];
	}

	return themes[setTheme || Theme.Light];
};

const reducer = (state: State, action: Action<Theme>) => {
	switch (action.type) {
		case ThemeManagerActions.ChangeTheme:
			if (typeof window !== "undefined") {
				const setCookie = cookie.serialize("theme", action.payload!);

				document.cookie = setCookie;
			}

			return {
				...state,
				...themes[action.payload!],
				typography: {
					...state.typography,
					...themes[action.payload!].typography
				},
				theme: action.payload!
			};
		default:
			return state;
	}
};

export const ThemeManager = ({ theme: cookieTheme, children }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState(cookieTheme));

	return (
		<ThemeManagerContext.Provider value={{ dispatch, theme: state.theme }}>
			<ThemeProvider theme={state}>{children}</ThemeProvider>
		</ThemeManagerContext.Provider>
	);
};
