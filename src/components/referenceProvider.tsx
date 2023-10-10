import * as React from "react";

import { Divider } from "@mui/material";

type Reference = {
	number?: number;
	author?: string;
	title?: string;
	journal?: string;
	volume?: string;
	published_date?: string;
	doi?: string;
};

type ReferenceProviderProps = {
	references: Reference[] | undefined;
};

const ReferenceProvider = ({ references }: ReferenceProviderProps) => {
	if (!references) {
		throw new Error("Null references passed to ReferenceProvider!");
	} else {
		return (
			<>
				<Divider variant="middle" />
				<h4>References</h4>
				{references.map((ref: Reference) => {
					// Required attributes
					if (ref?.number && ref?.author && ref?.title && ref?.journal && ref?.published_date) {
						return (
							<span id={`ref_note-${ref?.number}`}>
								{ref?.number}. <a href={`#ref_${ref?.number}`}>^</a> {ref?.author}, "{ref?.title}",{" "}
								<i>{ref?.journal}</i>
								{ref?.volume ? `, ${ref.volume}` : ""}, {ref?.published_date}, Available:{" "}
								{ref?.doi ? (
									<a
										target="_blank"
										href={`https://doi.org/${ref?.doi}`}
									>{`https://doi.org/${ref?.doi}`}</a>
								) : (
									<></>
								)}
							</span>
						);
					}
				})}
			</>
		);
	}
};

export default ReferenceProvider;
