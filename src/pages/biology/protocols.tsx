import * as React from "react";

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";
import { Container } from "@mui/material";

export default class BiologyProtocolsPage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Biology Protocols</h1>
					<b>
						In this section, you will find all the protocols that we used during our time in the
						labs!
					</b>
					<h2 style={{ paddingTop: 8 }}>Stock solutions for creating competent bacteria</h2>
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
					<h2 style={{ paddingTop: 16 }}>Antibiotic Stock Solutions</h2>
					Ampicillin 100 mg/ml – 1g in 10ml of MilliQ water
					<i>
						The stock solutions is filtered through a 0.2 mm filter, aliquoted and stored at -20°C
						until use.
					</i>
					<i>The final working concentration of all antibiotics is 1:1000 of the stock solution.</i>
					<h2 style={{ paddingTop: 16 }}>Pouring agar Plates</h2>
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
					<h2 style={{ paddingTop: 16 }}>Preparing Cells</h2>
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
					<h2 style={{ paddingTop: 16 }}>Making Competent Cells</h2>
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
					<h2 style={{ paddingTop: 16 }}>E. coli Transformation</h2>
					<ol>
						<li>Take 50 µl of prepared E. coli competent cells and put on ice for 5 minutes.</li>
						<li>Add 1µl of plasmid DNA and incubate on ice for 5 minutes.</li>
						<li>Heat-shock for 1 min at 42°C.</li>
						<li>Put on ice for 5 minutes.</li>
						<li>Add 250 µl of room temperature SOC buffer.</li>
						<li>Incubate for 1 hour at 37°C with shaking at 250 rpm.</li>
						<li>Plate on one LB agar Petri dish with appropriate antibiotic.</li>
						<li>Incubate at 37°C overnight.</li>
						<li>
							The next day, count cell colony, and wrap the plate in a parafilm, storing it at 4°C.
						</li>
					</ol>
					<h2 style={{ paddingTop: 16 }}>
						Determination of bacterial optical density (OD) using the spectrophotometer
					</h2>
					These steps should be carried out under the flame, with sterile pipet tips to avoid
					contamination of your sterile media stock, and also to protect your cultures from
					contamination, in case they need to grow longer.
					<ol>
						<li>
							Pipet 1 ml of your blank, sterile, uninoculated media – the same that is used for the
							bacterial growth, (LB) into a disposable polystyrene cuvette using sterile technique.
							Label the cuvette on the frosted portion at the top. Do not touch the lower part of
							the cuvette with your fingers, as it will interfere with the reading.
						</li>
						<li>
							Using sterile technique, pipet 1ml of bacterial culture into a labelled cuvette.
							Replace the foam stopper (sponge) and foil, preparing the culture to go back into the
							incubator if it needs to grow longer
						</li>
						<li>Take the cuvette to the spectrophotometer.</li>
						<li>Switch on the spectrophotometer and wait for it to self-calibrate.</li>
						<li>
							Check to make sure the wavelength is 600 nm. If it is not, click on the wavelength
							number (nm) and set it to 600 on the number pad window.
						</li>
						<li>Put the cuvette into the cuvette holder, blank first. Close the lid.</li>
						<li>
							On the spectrophotometers keypad, you will see the word “set ref”. With the cuvette
							holder in position, press “set ref”. This is giving the spec a baseline absorbance of
							the LB so it can subtract it from the reading of your bacterial samples.
						</li>
						<li>
							Remove the blank cuvette and put your sample in the cuvette nest. Close the lid and
							record the OD.
						</li>
						<li>
							If the OD is between 0.4 and 0.6, you may proceed with the induction protocol. If the
							OD is lower, you will need to put your flask back on the shaker and allow the culture to
							grow for longer.
						</li>
						<li>Discard cuvette with blank and your sample safely.</li>
						<li>When finished with the spec, turn the spectrophotometer off.</li>
						<li>Clean up your bench with 70% ethanol.</li>
					</ol>
					<h2 style={{ paddingTop: 16 }}>Conducting Gel Electrophoresis</h2>
					<h3>Materials:</h3>
					<ul>
						<li>Gel box</li>
						<li>Gel Tray</li>
						<li>Comb - 1% agarose in 1x TAE</li>
						<li>SYBR Safe</li>
						<li>100ml beaker</li>
						<li>Distilled water</li>
					</ul>
					<h3 style={{ paddingTop: 4 }}>Preparing the Gel</h3>
					<ol>
						<li>
							Prepare 300ml of the TAE buffer by dissolving 6ml of the 50X concentrated buffer in
							294ml of distilled water.
						</li>
						<li>
							Add 0.5g of agarose powder into 5ml of the diluted buffer and heat whilst stirring
							continually until clear.
						</li>
						<li>Pour into the gel mould and add the comb with a required number of wells.</li>
						<li>Pipette in 3µL of SYBR Safe dye and use the pipette tip to mix it around.</li>
						<li>Mix 3µL of the DNA sample with 2µL of the loading dye.</li>
					</ol>
					<h3 style={{ paddingTop: 4 }}>Running the Gel</h3>
					<ol>
						<li>
							Add enough 1X TAE to fill the reservoirs at both ends of the gel box and cover the
							surface of the gel - the gel should be immersed. You should use the remaining TAE
							buffer from 300ml.
						</li>
						<li>
							Load 1μL prepared ladder (with dye and loading buffer). The concentration is 100μg/ml,
							i.e. there will be a total of 0.1µg = 100nanograms of ladder in the well. The mass of
							the ladder is important to know if you need to quantify your bands by comparison with
							the ladder bands.
						</li>
					</ol>
					<h3 style={{ paddingTop: 4 }}>Load Ladder in Left-Most Lane</h3>
					<ol>
						<li>Use 2 μL loading dye per 3 μL of sample.</li>
						<li>Load samples from left to right.</li>
						<li>
							Place the cover on the gel box such that your samples will run towards the positive,
							red electrode. Make sure that the cables from the cover are connected to the power
							supply correctly.
						</li>
						<li>
							Turn on the power supply and run your gel at ~85 V for 80 minutes (voltage and time
							values can vary). Check regularly to see how far the dye has moved and stop the gel
							when the dye has moved approximately 80% of the distance.
						</li>
						<li>
							Verify that bubbles are rising from the electrodes once you start your gel to ensure
							your gel is running properly.
						</li>
					</ol>
					<h2 style={{ paddingTop: 16 }}>PCR Preparations</h2>
					<b>Section will be uploaded shortly</b>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Biology Protocols" description="TBD" />;
