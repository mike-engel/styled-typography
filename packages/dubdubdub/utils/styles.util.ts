type GetThemePropProps = Record<string, any> & {
	theme: Record<string, any>;
};

export const getThemeProp = (prop: string) => ({ theme }: GetThemePropProps) =>
	theme[prop] || "";
