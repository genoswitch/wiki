/**
 * Footer has a GraphQL query passed to it, therefore we do not know which specific query will be used.
 * We are currently using a type including all possible query contents.
 *
 * It may be possible to add a query in another file for just the fragments we need.
 * However, this may break gatsby as it expects queries only in page files.
 */
export type FooterProps = {
	data?: Queries.FooterDataQuery;
};
