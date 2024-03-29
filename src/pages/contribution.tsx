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

import { navigate } from "gatsby";

type Part = {
	number: string;
	name: string;
	type: string;
};

type miRNA = {
	miRNA: string;
	disease: string;
	source: string;
};

export default class HumanPracticesPage extends React.Component {
	parts: Part[] = [
		{
			number: "BBa_K4642000",
			name: "Gen3 145-199a AND-Gate Toehold Switch",
			type: "Basic",
		},
		{
			number: "BBa_K4642001",
			name: "Gen3 145-199a AND-Gate Toehold Switch Anti-miRNA",
			type: "Basic",
		},
		{
			number: "BBa_K4642002",
			name: "T7 / Gen3 145-199a AND-Gate / Luciferase / Double Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642003",
			name: "T7 / Gen3 145-199a AND-Gate Anti-miRNA / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642004",
			name: "T7 / Gen3 145-199a AND-Gate / Luciferase / Double Terminator / T7 / Gen3 145-199a AND-Gate Anti-miRNA / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642005",
			name: "Gen4 145-199a-125b Double AND-Gate Toehold Switch",
			type: "Basic",
		},
		{
			number: "BBa_K4642006",
			name: "Gen4 145-199a-125b Double AND-Gate Toehold Switch Anti-miRNA 125b-199a",
			type: "Basic",
		},
		{
			number: "BBa_K4642007",
			name: "Gen4 145-199a-125b Double AND-Gate Toehold Switch Anti-miRNA 199a-145",
			type: "Basic",
		},
		{
			number: "BBa_K4642008",
			name: "T7 / Gen4 145-199a-125b Double AND-Gate / Luciferase / Double Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642009",
			name: "T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 125b-199a / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642010",
			name: "T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 199a-145 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642011",
			name: "T7 / Gen4 145-199a-125b Double AND-Gate / Luciferase / Double Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 125b-199a / Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 199a-145 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642012",
			name: "T7 / Gen4 145-199a-125b Double AND-Gate / mCherry / Double Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642013",
			name: "T7 / Gen4 145-199a-125b Double AND-Gate / mCherry / Double Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 125b-199a / Terminator / T7 / Gen4 145-199a-125b Double AND-Gate Anti-miRNA 199a-145 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642014",
			name: "Gen4 486-19b-1260a Double AND-Gate Toehold Switch",
			type: "Basic",
		},
		{
			number: "BBa_K4642015",
			name: "Gen4 486-19b-1260a Double AND-Gate Toehold Switch Anti-miRNA 1260a-19b",
			type: "Basic",
		},
		{
			number: "BBa_K4642016",
			name: "Gen4 486-19b-1260a Double AND-Gate Toehold Switch Anti-miRNA 19b-486",
			type: "Basic",
		},
		{
			number: "BBa_K4642017",
			name: "T7 / Gen4 486-19b-1260a Double AND-Gate / GFP / Double Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642018",
			name: "T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 1260a-19b / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642019",
			name: "T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 19b-486 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642020",
			name: "T7 / Gen4 486-19b-1260a Double AND-Gate / GFP / Double Terminator / T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 1260a-19b / Terminator / T7 / Gen4 486-19b-1260a Double AND-Gate Anti-miRNA 19b-486 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642021",
			name: "TGen4 373-21-24 Double AND-Gate Toehold Switch",
			type: "Basic",
		},
		{
			number: "BBa_K4642022",
			name: "Gen4 373-21-24 Double AND-Gate Toehold Switch Anti-miRNA 24-21",
			type: "Basic",
		},
		{
			number: "BBa_K4642023",
			name: "Gen4 373-21-24 Double AND-Gate Toehold Switch Anti-miRNA 21-373",
			type: "Basic",
		},
		{
			number: "BBa_K4642024",
			name: "T7 / Gen4 373-21-24 Double AND-Gate / Venus / Double Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642025",
			name: "T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 24-21 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642026",
			name: "T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 21-373 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642027",
			name: "T7 / Gen4 373-21-24 Double AND-Gate / Venus / Double Terminator / T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 24-21 / Terminator / T7 / Gen4 373-21-24 Double AND-Gate Anti-miRNA 21-373 / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642028",
			name: "Gen4 320b-320a-4640 Double AND-Gate Toehold Switch",
			type: "Basic",
		},
		{
			number: "BBa_K4642029",
			name: "Gen4 320b-320a-4640 Double AND-Gate Toehold Switch Anti-miRNA 4640-320a",
			type: "Basic",
		},
		{
			number: "BBa_K4642030",
			name: "Gen4 320b-320a-4640 Double AND-Gate Toehold Switch Anti-miRNA 320a-320b",
			type: "Basic",
		},
		{
			number: "BBa_K4642031",
			name: "T7 / Gen4 320b-320a-4640 Double AND-Gate / mCerulean / Double Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642032",
			name: "T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 4640-320a / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642033",
			name: "T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 320a-320b / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642034",
			name: "T7 / Gen4 320b-320a-4640 Double AND-Gate / mCerulean / Double Terminator / T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 4640-320a / Terminator / T7 / Gen4 320b-320a-4640 Double AND-Gate Anti-miRNA 320a-320b / Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642035",
			name: "hsa-miR-145 Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642036",
			name: "hsa-miR-145 Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642037",
			name: "hsa-miR-199a Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642038",
			name: "hsa-miR-199a Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642039",
			name: "hsa-miR-125b Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642040",
			name: "hsa-miR-125b Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642041",
			name: "hsa-miR-486 Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642042",
			name: "hsa-miR-486 Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642043",
			name: "hsa-miR-19b Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642044",
			name: "hsa-miR-19b Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642045",
			name: "hsa-miR-1260a Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642046",
			name: "hsa-miR-1260a Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642047",
			name: "hsa-miR-125b Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642048",
			name: "hsa-miR-373 Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642049",
			name: "hsa-miR-21 Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642050",
			name: "hsa-miR-21 Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642051",
			name: "hsa-miR-24 Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642052",
			name: "hsa-miR-24 Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642053",
			name: "hsa-miR-320b Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642054",
			name: "hsa-miR-320b Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642055",
			name: "hsa-miR-320a Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642056",
			name: "hsa-miR-320a Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642057",
			name: "hsa-miR-4640 Probe 1",
			type: "Basic",
		},
		{
			number: "BBa_K4642058",
			name: "hsa-miR-4640 Probe 2",
			type: "Basic",
		},
		{
			number: "BBa_K4642059",
			name: "T7 / Breast Cancer / Endometriosis / Ovarian Cancer / PCOS / Double Terminator",
			type: "Composite",
		},
		{
			number: "BBa_K4642060",
			name: "T7 / Breast Cancer / Endometriosis / Ovarian Cancer / PCOS / Double Terminator / Anti-miRNAs / Terminator",
			type: "Composite",
		},
	];

	miRNA: miRNA[] = [
		{
			miRNA: "miR-24-3p",
			disease: "Breast Cancer",
			source: "https://doi.org/10.2217/fon-2018-0334",
		},
		{
			miRNA: "miR-21-3p",
			disease: "Breast Cancer",
			source: "https://doi.org/10.3233/DMA-120957",
		},
		{
			miRNA: "miR-373-5p",
			disease: "Breast Cancer",
			source: "https://doi.org/10.1007/s10549-014-3079-3",
		},
		{
			miRNA: "miR-19b-3p",
			disease: "PCOS",
			source: "https://doi.org/10.3389/fendo.2020.00206",
		},
		{
			miRNA: "miR-486-5p",
			disease: "PCOS",
			source: "https://doi.org/10.26355/eurrev_201909_18823",
		},
		{
			miRNA: "miR-1260a",
			disease: "PCOS",
			source: "https://doi.org/10.1016/j.tjog.2022.05.013",
		},
		{
			miRNA: "miR-320a-5p",
			disease: "Ovarian Cancer",
			source: "https://doi.org/10.3389/fonc.2021.581932",
		},
		{
			miRNA: "miR-320b",
			disease: "Ovarian Cancer",
			source: "https://doi.org/10.1371/journal.pone.0255804",
		},
		{
			miRNA: "miR-4640-5p",
			disease: "Ovarian Cancer",
			source: "https://doi.org/10.1016/j.ebiom.2022.104001",
		},
		{
			miRNA: "miR-145-5p",
			disease: "Endometriosis",
			source: "https://doi.org/10.31744/einstein_journal/2021RW5704",
		},
		{
			miRNA: "miR-199a-3p",
			disease: "Endometriosis",
			source: "https://doi.org/10.3390/jcm10163457",
		},
		{
			miRNA: "miR-125b-5p",
			disease: "Endometriosis",
			source: "https://doi.org/10.31744/einstein_journal/2021RW5704",
		},
		{
			miRNA: "miR-103a-3p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-30b-5p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-29a-3p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-4639-5p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-29a-3p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-29c-3p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-19a-3p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-19b-3p",
			disease: "Parkinson's disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072450/#sec7-cells-09-00276title",
		},
		{
			miRNA: "miR-16",
			disease: "Inflammatory Bowel Disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4265084/",
		},
		{
			miRNA: "miR-21",
			disease: "Inflammatory Bowel Disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4265084/",
		},
		{
			miRNA: "miR-192",
			disease: "Inflammatory Bowel Disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9047851/",
		},
		{
			miRNA: "miR-106a",
			disease: "Colorectal Cancer",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8232258/",
		},
		{
			miRNA: "miR-19b",
			disease: "Colorectal Cancer",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8232258/",
		},
		{
			miRNA: "miR-92a",
			disease: "Colorectal Cancer",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8232258/",
		},
		{
			miRNA: "miR-424",
			disease: "Pancreatic Cancer",
			source: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-019-6284-y",
		},
		{
			miRNA: "miR-100",
			disease: "Pancreatic Cancer",
			source: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-019-6284-y",
		},
		{
			miRNA: "hsa-miR-105-5p",
			disease: "Sickle Cell Disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6568309/",
		},
		{
			miRNA: "hsa-miR-188-3p",
			disease: "Sickle Cell Disease",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6568309/",
		},
		{
			miRNA: "hsa-miR-1343-3p",
			disease: "Gastric Cancer",
			source: "https://www.frontiersin.org/articles/10.3389/fgene.2021.779455/full",
		},
		{
			miRNA: "Mirc1/Mir17-92 cluster",
			disease: "Cystic Fibrosis",
			source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7765910/",
		},
		{
			miRNA: "miR-210-3p",
			disease: "Pre-eclampsia",
			source: "https://pubmed.ncbi.nlm.nih.gov/31056162/",
		},
		{
			miRNA: "miR-517-5p",
			disease: "Pre-eclampsia",
			source: "https://pubmed.ncbi.nlm.nih.gov/28182660/",
		},
		{
			miRNA: "miR-15b-5p",
			disease: "Non-small cell lung cancer",
			source: "https://pubmed.ncbi.nlm.nih.gov/22389695/",
		},
		{
			miRNA: "miR-27b-3p",
			disease: "Non-small cell lung cancer",
			source: "https://pubmed.ncbi.nlm.nih.gov/22389695/",
		},
	];

	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Contribution</h1>
					<h2>Parts</h2>
					We have developed a number of parts this year, for future teams to use in their projects:
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="Part Table">
							<TableHead>
								<TableRow>
									<TableCell>
										<b>Part Number</b>
									</TableCell>
									<TableCell>
										<b>Part Name</b>
									</TableCell>
									<TableCell>
										<b>Part Type</b>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.parts.map(part => (
									<TableRow key={part.number}>
										<TableCell>{part.number}</TableCell>
										<TableCell>{part.name}</TableCell>
										<TableCell>{part.type}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<h2 style={{ paddingTop: 8 }}>The Advancement of Toehold Switches</h2>
					Previously, toehold switches were only able to detect a maximum of two RNA strands at a
					time. Many teams in the past have submitted toehold switches with only one input such as
					the 2017 BATMAN project (Part:BBa_K2206000). The 2021 RIBOTOX project developed an
					AND-gate switch which can detect two RNAs simultaneously. The ability to detect two RNAs
					for one condition meant that luciferase was only produced when two trigger RNAs were
					present at sufficient concentrations which helped to increase the specificity. For other
					prevalent conditions however, this could prove problematic if multiple strands need to be
					detected as it is difficult to monitor and create the hardware to help detect a
					conglomerate of RNA. Furthermore, switches which induce a reporter protein in a CDS are
					unspecific. This is because the same miRNAs are upregulated in multiple conditions as
					extra-cellular microRNA networks are complex. We were able to scale up the design of past
					iGEM teams to produce systems that are able to detect several microRNAs. This
					exponentially increased specificity to the conditions we were testing for.
					<h2 style={{ paddingTop: 8 }}>A new method to design toehold switches</h2>
					Our team has created a software tool to generalise, generate and optimise our toehold
					switches for other iGEM teams to use in any desired scenario. It is designed to be very
					user-friendly and have integration with several different standards in bioinformatics to
					speed up the process of creating toehold switches. You can find more information about
					this on our{" "}
					<a href="#" onClick={() => navigate("/software/")}>
						Software page
					</a>
					.<h2 style={{ paddingTop: 8 }}>Issues with further development of Toehold Switches</h2>
					Initially, our project tried to find the maximum generation of toehold switches that would
					feasibly work and react. To do this, prior to any software work, we tested a theoretical
					gen 5 toehold switch using 4 miRNA to compose the trigger structure by writing a script to
					vary the concentration of every strand in one of NUPCK’s tube ensembles. Once this was
					complete, we then wrote another script to find the combinations of concentrations of
					reactants that produced the maximum concentration of products. The maximum yield we found
					was that about 5% of switches would’ve activated, a percentage we deemed too low to
					continue perusing gen 5 switches or above.
					<br />
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/contribution/ths-engineering1.webp"
					/>
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/contribution/ths-engineering2.webp"
					/>
					<h2 style={{ paddingTop: 8 }}>Our Collaborative miRNA Database</h2>
					We have started a Collaborative miRNA database, which we hope future teams will expand
					upon, and use in their future projects using toehold switches and more! You can find our
					full list below:
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
										<TableCell>
											<a href={miRNA.source} target={"_blank"}>
												Source
											</a>
										</TableCell>
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
export const Head = () => <BaseHead title="Contribution" description="Contribution" />;
