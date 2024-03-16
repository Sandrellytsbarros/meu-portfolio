import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ToggleTheme = () => {
	const { darkMode, toggleDark } = useContext(ThemeContext);

	return (
		<div>
			<button className="toggle-darkmode" onClick={toggleDark}>
			{darkMode ? (
				<p>Dark</p>
			) : (
				<p>Light</p>
			)}
			</button>
 		</div>
	)
}

export default ToggleTheme;