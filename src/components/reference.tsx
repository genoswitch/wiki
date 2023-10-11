import * as React from "react";

type ReferenceProps = {
	number: number;
	prefix: string;
};

const Reference = ({ number, prefix = "default" }: ReferenceProps) => {
	return (
		<sup id={`ref_${number}`}>
			{`[`}
			<a href={`#${prefix}-ref_note-${number}`}>{number}</a>
			{`]`}
		</sup>
	);
};

export default Reference;
