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
	Typography,
} from "@mui/material";

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";

type Hazard = {
	name: string;
	riskHazards: string;
	precautions: string;
	infoSource: string;
};

export default class BiologySafety extends React.Component {
	hazards: Hazard[] = [
		{
			name: "Ampicillin",
			riskHazards: "Irritating to eyes, respiratory system, and skin.",
			precautions:
				"Avoid personal contact and wear protective clothing when in use. Thoroughly clean containers.",
			infoSource: "https://datasheets.scbt.com/sc-210812.pdf",
		},
		{
			name: "5M NaOH",
			riskHazards:
				"Skin corrosion/irritation, serious eye damage, damage to respiratory system if fumes are inhaled.",
			precautions:
				"Wear suitable protective clothing, and wash hands and other exposed areas before exiting the work area. Work in an area of good ventilation.",
			infoSource: "http://www.labchem.com/tools/msds/msds/LC24450.pdf",
		},
		{
			name: "Agarose",
			riskHazards: "Irritant to skin and eyes, do not ingest.",
			precautions: "Wear PPE, ensure adequate ventilation.",
			infoSource:
				"https://www.fishersci.co.uk/store/msds?partNumber=10776644&productDescription=500GR+Agarose+broad+separation+range+for+DNA%2FRNA%2CGenetic+Analysis+Grade&countryCode=GB&language=en",
		},
		{
			name: "Bacto-Tryptone",
			riskHazards: "No hazards, although care should be taken.",
			precautions: "No special measures required, but care should be taken.",
			infoSource:
				"https://uwm.edu/bms-labs/wp-content/uploads/sites/361/2016/01/Bacto-Tryptone-211705.pdf",
		},
		{
			name: "E. coli",
			riskHazards: "No specific hazards, although care must be taken.",
			precautions: "Wear PPE, wash hands and exposed areas. Ensure adequate ventilation.",
			infoSource:
				"https://www.fishersci.co.uk/store/msds?partNumber=11424109&productDescription=X50+WELLCOLEX+E.+COLI+O157&countryCode=GB&language=en",
		},
		{
			name: "KCl",
			riskHazards: "No specific hazard.",
			precautions: "Wear PPE, ensure adequate ventilation, and avoid ingestion.",
			infoSource:
				"https://www.fishersci.co.uk/store/msds?partNumber=10684732&productDescription=1kg,%20Plastic%20powder%20jar&countryCode=GB&language=en",
		},
		{
			name: "NaCl",
			riskHazards: "No specific hazard.",
			precautions: "Wear PPE and avoid ingestion, along with adequate ventilation.",
			infoSource:
				"https://www.fishersci.co.uk/store/msds?partNumber=10112640&productDescription=1KG+Sodium+chloride%2C+extra+pure%2C+SLR&countryCode=GB&language=en",
		},
		{
			name: "Virkon",
			riskHazards: "Skin irritant, serious eye damage. Respiratory irritant.",
			precautions:
				"Do not ingest, do not get on skin or in eyes, only work in an area with adequate ventilation. Wash hands and exposed areas.",
			infoSource: "https://www.cvear.com/wp-content/uploads/2020/02/Virkon-SDS.pdf",
		},
		{
			name: "β-mercaptoethanol",
			riskHazards: "Skin irritant, Serious eye damage. Avoid ingestion at serious risk.",
			precautions:
				"Wear PPE, do not get on skin or in eyes. Use with adequate ventilation, usually a fume hood.",
			infoSource:
				"https://www.fishersci.co.uk/chemicalProductData_uk/wercs?itemCode=10366313&lang=EN",
		},
		{
			name: "5-bromo-4-chloro-3- indolyl-β-D-galactopyranoside",
			riskHazards: "No serious hazard, or recorded hazard.",
			precautions: "Wear appropriate clothing, take care when handling and wash hands after use.",
			infoSource: "https://www.affymetrix.com/support/technical/usb/msds/10077A.pdf",
		},
		{
			name: "Dimethylformamide",
			riskHazards: "Flammable, skin irritant, serious eye damage, and respiratory irritant.",
			precautions:
				"Wear PPE and use under fume hood in general. Avoid getting in eyes or on skin, and wash hands and exposed skin after use.",
			infoSource:
				"https://www.fishersci.co.uk/store/msds?partNumber=10757894&productDescription=1LT+Dimethylformamide%2C+extra+pure%2C+SLR&countryCode=GB&language=en",
		},
		{
			name: "Isopropyl-1-thio-β-D'Galactopyranoside",
			riskHazards: "No serious hazard, but care should be taken.",
			precautions:
				"Wear PPE, and avoid breathing fumes. Do not ingest, and only use in areas of ventilation.",
			infoSource:
				"https://www.fishersci.com/store/msds?partNumber=BP175510&productDescription=IPTG+DIOXANE+FREE+10GR&vendorId=VN00033897&countryCode=US&language=en",
		},
		{
			name: "1M MgCl2",
			riskHazards: "No serious hazard, although care should be taken.",
			precautions:
				"Wear PPE, and avoid ingestion or inhalation. Use in an area with adequate ventilation.",
			infoSource:
				"https://www.fishersci.com/store/msds?partNumber=AAJ62411AD&productDescription=MAG+CHLORIDE+1M+AQ.+SOLN.+50ML&vendorId=VN00024248&countryCode=US&language=en",
		},
		{
			name: "1M MgSO4",
			riskHazards: "Skin and eye irritant. May be harmful if ingested or inhaled.",
			precautions:
				"Wear PPE, and avoid contact with skin and eyes. Don't ingest or inhale. Wash hands and exposed areas after use.",
			infoSource: "https://fscimage.fishersci.com/msds/13510.htm",
		},
		{
			name: "Yeast Extract",
			riskHazards: "No serious hazards, although care should be taken.",
			precautions:
				"Avoid inhaling, avoid contact with skin and eyes. Wash hands and exposed areas after handling.",
			infoSource:
				"https://www.fishersci.com/content/dam/fishersci/en_US/documents/programs/education/regulatory-documents/sds/chemicals/chemicals-y/S25631.pdf",
		},
	];

	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Biology Safety</h1>
					As a high school team, we are not as used to working in laboratories as other teams, and
					so throughout the process, we we have learnt so much about lab safety in general,
					especially the heightened precautions when working in a university lab in comparison to a
					school lab.
					<div style={{ padding: 8 }}></div>
					<h2>General Laboratory Safety</h2>
					<ul>
						<li>
							Gloves were worn at all times throughout all procedures, and were disposed of
							responsibly on departure.
						</li>
						<li>
							Lab coats were worn at all times and were clean, and were all returned to be washed
							following protocols.
						</li>
						<li>Goggles were worn when handling chemicals or other equipment.</li>
						<li>Long trousers were worn to protect legs.</li>
						<li>Closed toe shoes worn when in the lab.</li>
						<li>
							All belongings were left in a designated area, and any necessary personal items were
							left on a designated bench which was not used for any protocols.
						</li>
					</ul>
					<div style={{ padding: 16 }}></div>
					<h2>Laboratory Chemicals Safety Assessment</h2>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>
										<b>Name of Hazard</b>
									</TableCell>
									<TableCell>
										<b>Risks/Hazards</b>
									</TableCell>
									<TableCell>
										<b>Safety Precautions</b>
									</TableCell>
									<TableCell>
										<b>Source of Information</b>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.hazards.map(hazard => (
									<TableRow key={hazard.name}>
										<TableCell>{hazard.name}</TableCell>
										<TableCell>{hazard.riskHazards}</TableCell>
										<TableCell>{hazard.precautions}</TableCell>
										<TableCell>
											<a href={hazard.infoSource} target={"_blank"}>
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

export const Head = () => <BaseHead title="Biology Safety" description="TBD" />;
