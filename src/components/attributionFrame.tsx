import * as React from "react";
import useAttributionFrameSizeListener from "../hooks/useAttributionFrameSizeListener";

/**
 * Modified from [iGEM Template attributions.html (permalink, gitlab)](https://gitlab.igem.org/2023/city-of-london-uk/-/blob/f9da5548d18a8318ff39d7ac3f8b1097c748307d/wiki/pages/attributions.html#L21)
 *
 */
export const AttributionFrame = () => {
	// <script> tag from the original source
	// translated to a React Hook.
	useAttributionFrameSizeListener();
	return (
		<iframe
			style={{ width: "100%", border: 0, padding: 8 }}
			id="igem-attribution-form"
			src="https://attributions.igem.org?team=City-of-London-UK&year=2023"
		/>
	);
};
