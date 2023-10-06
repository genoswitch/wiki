import * as React from "react";

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";
import { Container } from "@mui/material";

export default class BiologyProtocols extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Biology Protocols</h1>
					<b>
						In this section, you will find all the protocols that we used during our time in the
						labs!
					</b>
					<div style={{ padding: 8 }}></div>
					<h2>Stock solutions for creating competent bacteria</h2>
					<ol>
						<li>
							{" "}
							<b>LB medium 200 ml</b> in 1L flask (2g Tryptone, 1g Yeast extract, 1g NaCl and H₂O to
							200ml). Close with sponge and foil. Label, <b>autoclave</b> at 125°C for 15 minutes
							and store at room temperature.
						</li>
						<li>
							LB agar 2 x 50ml in 125ml flask: (500mg Tryptone, 250mg Yeast extract, 250mg NaCl,
							750mg Agar and H₂O to 50ml). Close with sponge and foil. Label, autoclave at 125°C for
							15 minutes and store at room temperature.
						</li>
						<li>
							0.1 M MgCl₂ solution (2.033 g of MgCl₂·6H₂O in 100ml of H₂O) in 100ml Pyrex bottle.
							Autoclave and store at 4°C.
						</li>
						<li>
							0.1 M CaCl₂ solution (11 g of CaCl₂·6H₂O in 500 ml of H₂O) in 500ml Pyrex bottle.
							Autoclave and store at 4°C.
						</li>
						<li>
							50% glycerol solution (5ml of glycerol and 5ml H₂O in 20ml) culture tube with screw
							cup. Autoclave and store at 4°C.
						</li>
					</ol>
					<div style={{ padding: 16 }}></div>
					<h2>Antibiotic Stock Solutions</h2>
					Ampicillin 100 mg/ml – 1g in 10ml of MilliQ water
					<i>
						The stock solutions is filtered through a 0.2 mm filter, aliquoted and stored at -20°C
						until use.
					</i>
					<i>The final working concentration of all antibiotics is 1:1000 of the stock solution.</i>
					<div style={{ padding: 16 }}></div>
					<h2>Pouring agar Plates</h2>
					<ol>
						<li>Wipe down the bench to with 70% EtOH or bleach.</li>
						<li>Remove foil cover from LB agar flask but leave sponge.</li>
						<li>Melt LB agar in microwave and cool to 50.</li>
						<li>Remove 2 sterile Petri dishes from plastic bag.</li>
						<li>Work under flame.</li>
						<li>
							<i>Optionally, if antibiotic is required, add solution to the LB agar and mix.</i>
						</li>
						<li>
							Pour a layer 25 ml of LB agar into each plate being careful to not lift the cover off
							excessively.
						</li>
						<li>
							Let each plate to set until its solid (~30 min) then flip so as to avoid condensation
							on the agar and leave for an additional 30 min.
						</li>
						<li>Store plates in plastic bags in fridge with name, date and contents.</li>
					</ol>
					<div style={{ padding: 16 }}></div>
					<h2>Preparing Cells</h2>
					<ul>
						<li>XL1 Blue and DH5α E. coli cells are used for plasmid preparation</li>
						<li>
							BL21 (DE3), BL21 (DE3)pRARE and Rosetta gami B (DE3) E. coli are used for protein
							expression
						</li>
					</ul>
					<ol>
						<li>Work under a flame.</li>
						<li>
							Streak 10 ml of E. coli cells onto one of the LB agar plates containing no antibiotic
							or specific for the cell type.
						</li>
						<li>
							Grow cells overnight at 37°C, with the plate upside down, for no more than 16 hours.
						</li>
						<li>Wrap cells in a parafilm, and store at 4°C</li>
					</ol>
					<div style={{ padding: 16 }}></div>
					<h2>Making Competent Cells</h2>
					<ol>
						<li>
							Pick a single colony of the cells from the LB agar plate into 10 ml of LB media
							containing no antibiotic or specific for the cell type. Grow the cultures overnight at
							37°C with shaking at 250 rpm.
						</li>
						<li>
							Inoculate 200ml of prewarmed to 37°C LB medium (no antibiotics or specific for the
							cell type) with 10ml of the overnight cultures, and grow at 37°C for 60 minutes, with
							vigorous shaking 250rpm or until the OD600 is 0.4 - 0.5.
						</li>
						<li>
							Put the flask on ice for 30 minutes. At the same time chill sterile falcon
							(centrifuge) tubes.
						</li>
						<li>Aliquot culture into 50 ml each 4 x 50 ml chilled falcon (centrifuge) tubes.</li>
						<li>
							Harvest the cells by centrifugation for 7 min at 3500 rpm, at 4°C and discard
							supernatants completely.
						</li>
						<li>Resuspend cells in each tube in 12.5ml of 0.1 M MgCl₂.</li>
						<li>Centrifuge for 7 minutes at 3500rpm, at 4°C and discard supernatants.</li>
						<li>Resuspend cells in each tube in 25ml of 0.1 M CaCl₂.</li>
						<li>Incubate cells on ice for 30 minutes.</li>
						<li>Centrifuge for 7 minutes at 3500rpm, at 4°C and discard supernatants.</li>
						<li>
							Resuspend cells in each tube in 700µl of 0.1 M CaCl₂ and 300µl of 50% glycerol. Final
							volume 1ml in each tube.
						</li>
						<li>
							Aliquot 50µl aliquots into 1.5ml sterile microcentrifuge tubes on ice and store at
							–80°C.
						</li>
					</ol>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Biology Protocols" description="TBD" />;
