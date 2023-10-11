import * as React from "react";

import {
	Container,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";

type Part = {
	partnumber: string;
	partname: string;
	parttype: string;
};

type miRNA = {
	miRNA: string;
	disease: string;
	source: string;
};

export default class HumanPracticesPage extends React.Component {
	parts: Part[] = [
		{
			partnumber: "BBa_K4642000",
			partname: "Gen3 145-199a AND-Gate Toehold Switch",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642001",
			partname: "Gen3 145-199a AND-Gate Toehold Switch Anti-miRNA",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642002",
			partname: "T7 / Gen3 145-199a AND-Gate / Luciferase / Double Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642003",
			partname: "T7 / Gen3 145-199a AND-Gate Anti-miRNA / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642004",
			partname:
				"T7 / Gen3 145-199a AND-Gate / Luciferase / Double Terminator / T7 / Gen3 145-199a AND-Gate Anti-miRNA / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642005",
			partname: "Gen4 145-199a-125b Double AND-Gate Toehold Switch",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642006",
			partname: "Gen4 145-199a-125b Double AND-Gate Toehold Switch Anti-miRNA 125b-199a",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642007",
			partname: "Gen4 145-199a-125b Double AND-Gate Toehold Switch Anti-miRNA 199a-145",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642008",
			partname: "T7 / Gen4 145-199a-125b Double AND-Gate / Luciferase / Double Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642009",
			partname: "T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 125b-199a / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642010",
			partname: "T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 199a-145 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642011",
			partname:
				"T7 / Gen4 145-199a-125b Double AND-Gate / Luciferase / Double Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 125b-199a / Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 199a-145 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642012",
			partname: "T7 / Gen4 145-199a-125b Double AND-Gate / mCherry / Double Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642013",
			partname:
				"T7 / Gen4 145-199a-125b Double AND-Gate / mCherry / Double Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 125b-199a / Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 199a-145 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642014",
			partname: "Gen4 486-19b-1260a Double AND-Gate Toehold Switch",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642015",
			partname: "Gen4 486-19b-1260a Double AND-Gate Toehold Switch Anti-miRNA 1260a-19b",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642016",
			partname: "Gen4 486-19b-1260a Double AND-Gate Toehold Switch Anti-miRNA 19b-486",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642017",
			partname: "T7 / Gen4 486-19b-1260a Double AND-Gate / GFP / Double Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642018",
			partname: "T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 1260a-19b / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642019",
			partname: "T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 19b-486 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642020",
			partname:
				"T7 / Gen4 486-19b-1260a Double AND-Gate / GFP / Double Terminator / T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 1260a-19b / Terminator / T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 19b-486 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642021",
			partname: "TGen4 373-21-24 Double AND-Gate Toehold Switch",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642022",
			partname: "Gen4 373-21-24 Double AND-Gate Toehold Switch Anti-miRNA 24-21",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642023",
			partname: "Gen4 373-21-24 Double AND-Gate Toehold Switch Anti-miRNA 21-373",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642024",
			partname: "T7 / Gen4 373-21-24 Double AND-Gate / Venus / Double Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642025",
			partname: "T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 24-21 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642026",
			partname: "T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 21-373 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642027",
			partname:
				"T7 / Gen4 373-21-24 Double AND-Gate / Venus / Double Terminator / T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 24-21 / Terminator / T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 21-373 / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642028",
			partname: "Gen4 320b-320a-4640 Double AND-Gate Toehold Switch",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642029",
			partname: "Gen4 320b-320a-4640 Double AND-Gate Toehold Switch Anti-miRNA 4640-320a",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642030",
			partname: "Gen4 320b-320a-4640 Double AND-Gate Toehold Switch Anti-miRNA 320a-320b",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642031",
			partname: "T7 / Gen4 320b-320a-4640 Double AND-Gate / mCerulean / Double Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642032",
			partname: "T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 4640-320a / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642033",
			partname: "T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 320a-320b / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642034",
			partname:
				"T7 / Gen4 320b-320a-4640 Double AND-Gate / mCerulean / Double Terminator / T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 4640-320a / Terminator / T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 320a-320b / Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642035",
			partname: "hsa-miR-145 Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642036",
			partname: "hsa-miR-145 Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642037",
			partname: "hsa-miR-199a Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642038",
			partname: "hsa-miR-199a Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642039",
			partname: "hsa-miR-125b Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642040",
			partname: "hsa-miR-125b Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642041",
			partname: "hsa-miR-486 Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642042",
			partname: "hsa-miR-486 Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642043",
			partname: "hsa-miR-19b Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642044",
			partname: "hsa-miR-19b Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642045",
			partname: "hsa-miR-1260a Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642046",
			partname: "hsa-miR-1260a Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642047",
			partname: "hsa-miR-125b Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642048",
			partname: "hsa-miR-373 Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642049",
			partname: "hsa-miR-21 Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642050",
			partname: "hsa-miR-21 Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642051",
			partname: "hsa-miR-24 Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642052",
			partname: "hsa-miR-24 Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642053",
			partname: "hsa-miR-320b Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642054",
			partname: "hsa-miR-320b Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642055",
			partname: "hsa-miR-320a Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642056",
			partname: "hsa-miR-320a Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642057",
			partname: "hsa-miR-4640 Probe 1",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642058",
			partname: "hsa-miR-4640 Probe 2",
			parttype: "Basic",
		},
		{
			partnumber: "BBa_K4642059",
			partname: "T7 / Breast Cancer / Endometriosis / Ovarian Cancer / PCOS / Double Terminator",
			parttype: "Composite",
		},
		{
			partnumber: "BBa_K4642060",
			partname:
				"T7 / Breast Cancer / Endometriosis / Ovarian Cancer / PCOS / Double Terminator / Anti-miRNAs / Terminator",
			parttype: "Composite",
		},
	];

	miRNA: miRNA[] = [
		{
			miRNA: "miRNA1",
			disease: "Disease1",
			source: "Source",
		},
	];

	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Contribution</h1>
					Welcome to the genoswitch wiki! Our Contribution page is a work-in-progress at the moment,
					but feel free to check out other pages using the navigation bar!
					<h2>Parts</h2>
					We have developed a number of parts this year, for future teams to use in their projects:
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="Part Table">
							<TableHead>
								<TableRow>
									<TableCell>
										<b>miRNA</b>
									</TableCell>
									<TableCell>
										<b>Disease</b>
									</TableCell>
									<TableCell>
										<b>Source</b>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.miRNA.map(miRNA => (
									<TableRow key={miRNA.miRNA}>
										<TableCell>{miRNA.miRNA}</TableCell>
										<TableCell>{miRNA.disease}</TableCell>
										<TableCell>{miRNA.source}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<h2>Collaborative miRNA Database</h2>
					We have started a Collaborative miRNA database, which we hope future teams will expand
					upon, and use in their future projects using toehold switches and more! You can find our
					full list below:
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="Part Table">
							<TableHead>
								<TableRow>
									<TableCell>
										<b>Part</b>
									</TableCell>
									<TableCell>
										<b>Designed by</b>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.parts.map(part => (
									<TableRow key={part.partnumber}>
										<TableCell>{part.partname}</TableCell>
										<TableCell>{part.parttype}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Contribution" description="TBD" />;
