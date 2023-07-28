import { useEffect } from "react";

const useAttributionFrameSizeListener = () => {
	useEffect(() => {
		// Define a helper function to handle resizing of the window
		const handleMessage = (e: any) => {
			const { type, data } = JSON.parse(e.data);
			if (type === "igem-attribution-form") {
				const element = document.getElementById("igem-attribution-form");
				element!.style.height = data + 50 + "px";
			}
		};

		// Register (and de-register) an event listener to call the helper function.
		window.addEventListener("message", handleMessage);
		return () => window.removeEventListener("message", handleMessage);
	});
};

export default useAttributionFrameSizeListener;
