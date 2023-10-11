import * as React from "react";
import Reference from "../reference";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, colors } from "@mui/material";

type Row = {
	left: React.ReactNode;
	right: React.ReactNode;
	rightColor: string;
};

const Colours = {
	GREEN: colors.green[200],
	YELLOW: colors.yellow[200],
	RED: colors.red[200],
};

const rows: Row[] = [{
	left: (<>
		The condition being screened should be an important health problem as judged by its
		frequency and/or severity.
	</>),
	right: (<>
		<u>Endometriosis</u>
		<p>
			10% of women worldwide have endometriosis (176 million).
			<Reference prefix={"hpNiceGuidelines"} number={1} /> Symptoms include heavy periods
			and debilitating chronic pelvic pain (which is exasperated during periods and
			physical activity), and the condition / treatment can cause infertility.
			<Reference prefix={"hpNiceGuidelines"} number={2} />
		</p>
		<u>PCOS</u>
		<p>
			Polycystic Ovary Syndrome affects roughly 10% of women worldwide. It can increase
			the risk of developing type 2 diabetes and high cholesterol later in life, as well
			as cause infertility and irregular/no periods / severe menstrual pain.
			<Reference prefix={"hpNiceGuidelines"} number={3} />
		</p>
		<u>Ovarian Cancer</u>
		<p>
			There are approximately 7,500 new ovarian cancer cases in the UK each year, with a
			35% survival rate over a ten year period.11 In the US, there were an estimated
			236,511 women in the United States alone living with ovarian cancer.
			<Reference prefix={"hpNiceGuidelines"} number={10} /> Symptoms include difficulty
			eating and persistent abdominal / pelvic pain.
			<Reference prefix={"hpNiceGuidelines"} number={5} />
		</p>
		<u>Breast Cancer</u>
		<p>
			As the most common cancer worldwide
			<Reference prefix={"hpNiceGuidelines"} number={6} />, breast cancer affects both men
			and women, however it has a much higher incidence in women. In 2020, 2.3 million
			women were diagnosed with breast cancer and an estimated 685,000 of these cases
			resulted in death.
			<Reference prefix={"hpNiceGuidelines"} number={7} />
		</p>
		<br />
		<p>
			In combination these conditions pose a serious health threat for a wide demographic.
			Most can cause severe symptoms and some have high mortality rates as well as the
			possibility to give rise to other life-threatening conditions.
		</p>
	</>),
	rightColor: Colours.GREEN
}]

const NiceGuidelines = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="nice guidelines table">
				<TableHead>
					<TableRow>
						<TableCell>
							<b>UK NSC Criteria</b>
						</TableCell>
						<TableCell>
							<b>Our Diagnostic Tool</b>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={`niceRow-${rows.indexOf(row)}`}>
							<TableCell>{row.left}</TableCell>
							<TableCell style={{ backgroundColor: row.rightColor }}>{row.right}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default NiceGuidelines;
