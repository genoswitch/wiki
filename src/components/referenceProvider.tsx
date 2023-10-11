import * as React from "react";

import { Divider } from "@mui/material";

import { ReferenceProviderProps, ReferenceType } from "../types/reference";

const ReferenceProvider = ({ references }: ReferenceProviderProps) => {
	if (!references) {
		throw new Error("Null references passed to ReferenceProvider!");
	} else {
		return (
			<>
				<Divider variant="middle" />
				<h4>References</h4>
				{references.map((ref: ReferenceType) => {
					return (
						<p id={`ref_note-${ref?.number}`}>
							{ref?.number}. <a href={`#ref_${ref?.number}`}>^</a> {ref?.author}, "{ref?.title}",{" "}
							{ref?.journal ? <i>{ref?.journal}</i> : <></>}
							{ref?.volume ? `, ${ref.volume}` : ""}, {ref?.published_date}, Available:{" "}
							{ref?.doi ? (
								<a
									target="_blank"
									href={`https://doi.org/${ref?.doi}`}
								>{`https://doi.org/${ref?.doi}`}</a>
							) : (
								<></>
							)}
							{ref?.link ? (
								<a target="blank" href={ref?.link}>
									{ref?.link}
								</a>
							) : (
								<></>
							)}
						</p>
					);
				})}
			</>
		);
	}
};

export default ReferenceProvider;
