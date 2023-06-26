import TeamTag from "./teamTag";

export type FilterChipEntry = {
	tag: TeamTag;
	enabled: boolean;
};

export type FilterChip = FilterChipEntry[];
