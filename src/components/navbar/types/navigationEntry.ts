type NavigationEntry = {
	name: string;
	slug?: string;
	entries: NavigationEntry[];
};

export default NavigationEntry;
