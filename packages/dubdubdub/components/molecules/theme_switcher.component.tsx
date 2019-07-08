import React, {
	useState,
	useContext,
	ReactChild,
	ChangeEventHandler
} from "react";
import styled from "styled-components";
import { Span } from "styled-typography";
import { Stylable } from "../../types/component.types";
import { ThemeManagerContext, Theme } from "../hocs/theme_manager.component";
import { spacing, Breakpoints } from "../../utils/spacing.util";
import { getThemeProp } from "../../utils/styles.util";
import { hexToRgba, pSBC } from "../atoms/color.component";

type Props = Stylable;

type ThemeOptionProps = {
	value: Theme;
	onChange: ChangeEventHandler<HTMLInputElement>;
	checked?: boolean;
	children: ReactChild;
};

export const ThemeOption = ({
	value,
	checked,
	onChange,
	children
}: ThemeOptionProps) => (
	<label data-active={checked}>
		<input
			className="visually-hidden"
			checked={checked}
			type="radio"
			name="theme"
			value={value}
			onChange={onChange}
		/>
		<Span>{children}</Span>
	</label>
);

export const RawThemeSwitcher = ({ className }: Props) => {
	const [open, setOpen] = useState(false);
	const { dispatch, theme } = useContext(ThemeManagerContext);

	const onChange: ChangeEventHandler<HTMLInputElement> = evt => {
		const value = (evt.currentTarget as any).value;

		dispatch(value);
	};

	return (
		<div className={className}>
			<button
				aria-expanded={open}
				aria-controls="theme-menu"
				onClick={() => setOpen(!open)}
			>
				Change theme
			</button>
			<div hidden={!open} id="theme-menu">
				<ThemeOption
					checked={theme === Theme.Light}
					value={Theme.Light}
					onChange={onChange}
				>
					Light
				</ThemeOption>
				<ThemeOption
					checked={theme === Theme.Dark}
					value={Theme.Dark}
					onChange={onChange}
				>
					Dark
				</ThemeOption>
				<ThemeOption
					checked={theme === Theme.Serif}
					value={Theme.Serif}
					onChange={onChange}
				>
					Serif
				</ThemeOption>
				<ThemeOption
					checked={theme === Theme.GoldenRatio}
					value={Theme.GoldenRatio}
					onChange={onChange}
				>
					Golden Ratio
				</ThemeOption>
				<ThemeOption
					checked={theme === Theme.Spacey}
					value={Theme.Spacey}
					onChange={onChange}
				>
					Spacey
				</ThemeOption>
			</div>
		</div>
	);
};

export const ThemeSwitcher = styled(RawThemeSwitcher)`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 99999;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	button {
		appearance: none;
		border: none;
		border-radius: 0 0 0 ${spacing(0.5)}px;
		background: ${getThemeProp("highlight")};
		color: currentcolor;
		font-size: 1rem;
		font-family: inherit;
		padding: ${spacing(0.5)}px ${spacing(1)}px;

		@media (hover) {
			&:hover {
				cursor: pointer;
			}
		}

		@media (min-width: ${Breakpoints.Tablet}px) {
			padding: ${spacing(1)}px ${spacing(2)}px;
		}
	}

	div {
		margin-top: ${spacing(0.5)}px;
		background: ${getThemeProp("highlight")};
		width: ${spacing(30)}px;
		border-radius: ${spacing(0.5)}px 0 0 ${spacing(0.5)}px;
		box-shadow: 0 2px 4px ${({ theme }) => hexToRgba(theme.foreground, 0.2)};
	}

	label {
		display: block;
		padding: ${spacing(1)}px ${spacing(2)}px;
		margin: ${spacing(0.5)}px;
		border-radius: ${spacing(0.5)}px;
		border: ${spacing(0.5)}px solid transparent;

		&[data-active="true"] {
			border-color: ${getThemeProp("foreground")};
		}

		@media (hover) {
			&:hover {
				background-color: ${({ theme }) => pSBC(-0.2, theme.background)};
				cursor: pointer;
			}
		}
	}
`;
