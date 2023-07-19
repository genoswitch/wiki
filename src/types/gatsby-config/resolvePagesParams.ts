import File from "./file";
import Page from "./page";

type ResolvePagesParams = {
	allSitePage: {
		nodes: Page[];
	};
	allFile: {
		nodes: File[];
	};
};

export default ResolvePagesParams;
