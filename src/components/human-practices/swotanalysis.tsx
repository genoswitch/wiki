import * as React from "react";
import Reference from "../reference";

import {
	Card,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	colors,
} from "@mui/material";
import ReferenceProvider from "../referenceProvider";
import { ReferenceType } from "../../types/reference";

type Row = {
	left: React.ReactNode;
	right: React.ReactNode;
    leftColor: string;
    rightColor: string;
};

const Colours = {
	GREEN: colors.green[200],
	YELLOW: colors.yellow[200],
	RED: colors.red[200],
    BLUE: colors.blue[200],
};

const rows: Row[] = [
	{
		left: (
			<>
				<h3>Strengths:</h3>
                <ul>
                    <li>Will replace the slate of tests required to form a specific diagnosis (cutting down on both time and cost).
                    For cancers, it allows healthcare providers to pinpoint the location required to scan in order to more accurately (and cost effectively) confirm diagnosis.
                    </li>
                    <li>Cost savings for both Patient (if USA/Private), and system (NHS in our case).</li>
                    <li>People are worried of side effects / injuries caused by laparoscopy, so uptake in screening programmes is lower.</li>
                    <li>As the test is a blood test, there are less risks associated with the process, and the technique is more familiar to the general public (patients), who would be less anxious about this diagnostic tool (especially when compared to a laparoscopy).</li>
                    <li>Standard part of annual health checkup for females over the age of 40, as this test is relatively inexpensive, and relatively non-invasive. This can be added to a yearly screening programme if family history leads to a genetic predisposition of disease.</li>
                    <li>As the sample required can be taken  results from a blood test, the sample can be taken as part of a larger blood test order (such as alongside Full Blood Count).</li>
                </ul>
			</>
		),
		right: (
			<>
				<h3>Weaknesses:</h3>
				<ul>
                    <li>Patient agency is important, so would be a useful test that could occur at home, as more coverage would be possible as no backlog in labs.</li>
                    <li>Our test cannot currently be performed at home, as blood must be taken in a hospital/clinic/pharmacy/GP, and the sample must be sent to a lab in order for the test to be carried out.</li>
                </ul>
			</>
		),
		leftColor: Colours.GREEN, 
        rightColor: Colours.RED
	},
	{
		left: (
			<>
				<h3>Opportunities:</h3>
                <ul>
                    <li>Cost of Living - Finding cheaper ways for healthcare users to access care.</li>
                    <li>NHS Austerity - NHS needs to find more cost effective ways to perform diagnostic services.</li>
                    <li>Because the test is formed of a modular blood test, if there is an outbreak of anything present in the bloodstream, toehold switches could be modified easily to test for any miRNA biomarkers necessary (until a more specific test is developed).</li>
                    <li>As the test is a blood test, there is a relatively lower feeling of anxiety surrounding the procedure, especially when compared to more invasive diagnsostic tests, such as a laparoscopy.</li>
                </ul>
			</>
		),
		right: (
			<>
				<h3>Threats:</h3>
                <ul>
                    <li>Our system is reliant on the RP2040 Chip, made by Raspberry Pi. If the chip were to be unavailable, firmware would be able to be ported to another component, however this would involve rewriting a portion of the firmware.</li>
                    <li>Our current component to measure voltages (translated from light) is made by Microchip. If this is discontinued, there are very few viable replacements that could currently be used instead.</li>
                    <li>Change in policies may affect where our test can be used, as can a change in regulations for blood tests, amongst other factors.</li>
                </ul>
			</>
		),
		leftColor: Colours.BLUE, 
        rightColor: Colours.YELLOW
	},
];


const SWOTAnalysis = () => {
	return (
		<>
			<Card raised>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="SWOT Analysis">
						<TableBody>
							{rows.map(row => (
								<TableRow key={`swotRow-${rows.indexOf(row)}`}>
									<TableCell style={{ backgroundColor: row.leftColor }}>{row.left}</TableCell>
									<TableCell style={{ backgroundColor: row.rightColor }}>{row.right}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Card>
		</>
	);
};

export default SWOTAnalysis;
