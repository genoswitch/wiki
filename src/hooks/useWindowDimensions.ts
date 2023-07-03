// useWindowDimensions.ts
// Sourced, unmodified from iGEM 2022 Vilnius Lithuania
// https://gitlab.igem.org/2022/vilnius-lithuania/-/blob/main/src/hooks/useWindowDimensions.ts

import { useState, useEffect } from "react";

function getWindowDimensions() {
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
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
