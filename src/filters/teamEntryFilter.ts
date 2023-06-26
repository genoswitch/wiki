import { CreditEntry } from "../components/team/creditEntry";
import { FilterChip } from "../types/team/filterChip";

const teamEntryFilter = (
	entries: React.JSX.Element[],
	searchQuery: string,
	filterChip: FilterChip
) => {
	return entries.filter(entry => {
		// Cast entry (React.JSX.Element to CreditEntry)
		const entryCast = entry as unknown as CreditEntry;

		return searchFilter(entryCast, searchQuery) && chipFilter(entryCast, filterChip);
	});
};

const searchFilter = (entry: CreditEntry, searchQuery: string) => {
	// If the search query is empty (default state) allow everything
	if (searchQuery == "") {
		return true;
	}
	// Otherwise only return people whose names match the query string.
	else if (entry.props.member.name.toLowerCase().includes(searchQuery.toLowerCase())) {
		return true;
	} else {
		// No match.
		return false;
	}
};

// TODO: if more than one chip is selected, results are correct but teambadges are not.
const chipFilter = (entry: CreditEntry, filterChip: FilterChip) => {
	let isIncluded = false;

	const enabledTags = filterChip
		// Get a list of enabled tags
		.filter(entry => entry.enabled)
		// And map them to return the TeamTag
		.map(e => {
			return e.tag;
		});

	// Iterare over each tag the member has
	entry.props.member.tags.forEach(tagName => {
		// Use this.props.tags (TeamTag[]) to look up the TeamTag instance for this tag.
		// This instance includes the tag colour.
		// All in-use tags are registered in team.tsx.
		// Therefore, we can notNull the find response.
		const tag = entry.props.tags.find(t => t.name == tagName)!;

		if (enabledTags.includes(tag!) && !isIncluded) {
			isIncluded = true;
		}
	});

	return isIncluded;
};

export default teamEntryFilter;
