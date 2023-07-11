// useWindowDimensions.ts
// Originally sourced from iGEM 2022 Vilnius Lithuania.
// This version has been modified from the original.
// Original source: https://gitlab.igem.org/2022/vilnius-lithuania/-/blob/main/src/hooks/useWindowDimensions.ts

import { useState, useEffect } from "react";

type WindowDimensions = {
	width: number | undefined;
	height: number | undefined;
};

const getWindowDimensions = (): WindowDimensions => {
	if (typeof window !== `undefined`) {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}
	return {
		width: undefined,
		height: undefined,
	};
};

const useWindowDimensions = (): WindowDimensions => {
	const [windowDimensions, setWindowDimensions] = useState({} as WindowDimensions);

	useEffect(() => {
		// Initial call of getWindowDimensions
		setWindowDimensions(getWindowDimensions());

		// Define a helper function to handle resizing of the window
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		// Register (and de-register) an event listener to call the helper function.
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Return the state value.
	return windowDimensions;
};

export default useWindowDimensions;
