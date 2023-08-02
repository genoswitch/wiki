import * as React from "react";

type ReferenceProps = {
	number: number;
};

const Reference = ({ number }: ReferenceProps) => {
	return (
		<sup id={`ref_${number}`}>
			{`[`}
			<a href={`#ref_note-${number}`}>{number}</a>
			{`]`}
		</sup>
	);
};

export default Reference;
