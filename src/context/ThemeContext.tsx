import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

export type Theme = "dark" | "light";
export type ThemeContext = {
	theme: Theme;
	toggleTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext>({
	theme: "light",
	toggleTheme: () => {},
});

type ThemeContextProvider = {
	children: ReactNode;
};
export const ThemeContextProvider = ({ children }: ThemeContextProvider) => {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
		document.documentElement.classList.toggle("dark");
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return { theme, toggleTheme };
};
