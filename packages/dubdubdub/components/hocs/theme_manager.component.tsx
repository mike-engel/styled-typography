import React, { ReactChild, useReducer, createContext, Dispatch } from "react";
import { ThemeProvider } from "styled-components";
import { TypographyProps, defaultTheme } from "styled-typography";
import { light, dark, pSBC } from "../atoms/color.component";

export enum ThemeManagerActions {}

export type Action<P> = {
	type: ThemeManagerActions;
	payload?: P;
};

type Props = {
	children: ReactChild;
};

type State = Record<string, any> & {
	typography: Partial<TypographyProps>;
};

export const ThemeManagerContext = createContext<Dispatch<Action<any>>>(
	() => {}
);

export const initialState = {
	foreground: dark,
	background: light,
	highlight: pSBC(-0.1, light),
	typography: {
		...defaultTheme,
		bodyColor: dark,
		headingColor: dark
	}
};

const reducer = (state: State, action: Action<any>) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const ThemeManager = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ThemeManagerContext.Provider value={dispatch}>
			<ThemeProvider theme={state}>{children}</ThemeProvider>
		</ThemeManagerContext.Provider>
	);
};
