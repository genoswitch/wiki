import * as React from "react";

import { Divider } from "@mui/material";

type ReferenceProviderProps = {
	references: readonly Queries.Maybe<Queries.MdxFrontmatterReferences>[] | undefined;
};

const ReferenceProvider = ({ references }: ReferenceProviderProps) => {
	if (!references) {
		throw new Error("Null references passed to ReferenceProvider!");
	} else {
		return (
			<>
				<Divider variant="middle" />
				<h4>References</h4>
				{references.map((ref: Queries.Maybe<Queries.MdxFrontmatterReferences>) => {
					// 1. ref number, author, title, doi
					if (
						ref?.number &&
						ref?.author &&
						ref?.title &&
						ref?.journal &&
						ref?.published_date &&
						ref?.doi
					) {
						return (
							<span id={`ref_note-${ref?.number}`}>
								{ref?.number}. <a href={`#ref_${ref?.number}`}>^</a> {ref?.author}, "{ref?.title}",{" "}
								<i>{ref?.journal}</i>, {ref?.published_date}, Available:{" "}
								<a
									target="_blank"
									href={`https://doi.org/${ref?.doi}`}
								>{`https://doi.org/${ref?.doi}`}</a>
							</span>
						);
					}
				})}
			</>
		);
	}
};

export default ReferenceProvider;
