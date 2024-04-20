import { useThemeContext } from "../../../context/ThemeContext";

export const Home = () => {
	const { theme, toggleTheme } = useThemeContext();
	return (
		<>
			<div>Home Page</div>
			<button onClick={() => toggleTheme(theme)}> change Them </button>
		</>
	);
};
