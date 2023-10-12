type ReferenceType = {
	number?: number;
	author?: string;
	title?: string;
	journal?: string;
	volume?: string;
	published_date?: string;
	doi?: string;
	link?: string;
};

type ReferenceProviderProps = {
	references: ReferenceType[] | undefined;
	prefix?: string;
};

export { ReferenceType, ReferenceProviderProps };
