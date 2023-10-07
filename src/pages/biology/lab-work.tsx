import * as React from "react";

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";
import { Container } from "@mui/material";
import { navigate } from "gatsby";

export default class BiologyLabWorkPage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1 style={{ paddingBottom: 8 }}>Biology Lab Work</h1>
					<h2>Monday 17th July 2023</h2>
					Today we delivered the equipment to the lab and started the briefing with Dr Markiv at
					10am. This included safety briefing about disposal, gloves and coats, as well as some core
					skills such as pipetting. We found that in ordering the E. coli, they were not competent
					cells, as we had planned to use, so we would have to accommodate the new protocols to
					prepare the E. coli for transformations. During the day, we prepared the solutions needed
					to create competent bacteria from ours. This included:
					<ul>
						<li> 20g/L LB broth x2; 500ml water flask.</li>
						<li>
							0.1 M CaCl₂ solution (7.35 g of CaCl₂·2H₂O in 500 ml of H₂O) in 500 ml Pyrex bottle.
						</li>
						<li>
							0.1 M MgCl₂ solution (10.165 g of MgCl₂ ·6H₂O in 500ml of ₂O) in 500ml Pyrex bottle.
						</li>
						<li>
							50% glycerol solution (100 ml of glycerol and 100 ml H₂O) in 200 ml Pyrex bottle.
						</li>
					</ul>
					<b style={{ paddingBottom: 8 }}>
						All these solutions would then be autoclaved and stored at 4°C.
					</b>
					We also produced stock solutions for our agar plates using:
					<ul>
						<li>
							LB agar 2x 400ml in 500ml Pyrex bottle; 20g/L LB broth (8g) + 2% weight per volume
							agar (8g) in 400ml water.
						</li>
						<li>20g/L LB broth, making 200ml</li>
						<li>Ampicillin 100 mg/ml – 1g in 10ml of MilliQ water.</li>
					</ul>
					<b style={{ paddingBottom: 8 }}>
						These were closed with sponge and foil, labelled and autoclaved at 125°C for 15 minutes
						and stored at room temperature.
					</b>
					<div style={{ paddingBottom: 16 }}>
						The stock solution is filtered through a 0.2 mm filter, aliquoted into 10 tips (1μ/ml
						each) and stored at -20°C until use. The final working concentration of all antibiotics
						is 1:1000 of the stock solution (1000x ampicillin). With these solutions, we created our
						agar plates and left them to cool and solidify. Our E. coli cells were also inoculated
						and left overnight on agar plates to grow in preparation for making them competent. This
						was done during the week, and we resumed work on Thursday.
					</div>
					<h2>Thursday 20th July 2023</h2>
					We found that the DNA that we ordered was linear and did not have four random nucleotides
					on its ends. As a result, the restriction sites were too close to the end which made it
					difficult for restriction enzymes to “break” the restriction sites. This meant that we
					would have to use primers to add onto the ends of our sequences and turn our linear DNA
					into plasmids using a plasmid backbone. Today, we used a mass spectrometer to measure the
					growth of our E. Coli, based on its optical density in respect to the density of the media
					alone (the LB Broth). The spectrometer detects absorbance 600 Nanometres. The first
					measurement was 0.3, so we let the bacteria grow in a shaking incubator for 20 mins. This
					resulted in the second measurement being 0.585, which is within our working range
					(0.4-0.6). Having obtained a good amount of bacteria, we left them on ice for 30 minutes
					before centrifuging them in the solutions we has prepared on Monday, turning them into
					competent bacteria. You can find the process for this in our{" "}
					<a href="#" onClick={() => navigate("/biology/protocols/")}>
						Protocols page
					</a>
					<div style={{ paddingBottom: 16 }}>
						. Once prepared, 50μl of the cells were aliquoted into 1.5ml sterile microcentrifuge
						tubes and left in a -80°C freezer in the lab.
					</div>
					<h2>Monday 21st August 2023</h2>
					Due to logistical issues regarding our orders and lab availability, not much was done in
					the month prior to our return to the labs. This is why we would recommend starting lab
					procedures as early as you can; this way, if you happen to encounter any issues, there is
					ample time to resolve them. Today we started preparations for Polymerase Chain Reaction
					(PCR) procedures on our Toehold Switch sequences. We created falcon tubes with:
					<ul>
						<li>25μl GoTaq Master Mix 2x concentrated (using 20-200μl pipette)</li>
						<li>10μl from template DNA (either mCherry or GFP)</li>
						<li>5μl of each primer (FWD and REV)</li>
						<li>5μl of nuclease free water</li>
					</ul>
					This mix is then centrifuged to remove any air bubbles in the mixture and once finished,
					put through a thermocycler. Whilst this is heated, we created our gel trays for
					electrophoresis at 1% agarose concentration along with 10μl GelRed nucleic acid. This mix
					is then microwaved. Once cooled, the gel is poured into a tray with the comb and left to
					set. Once this was completed, we conducted electrophoresis on our DNA at 100W for about 1
					hour. Once finished, we were able to analyse our trays using UV light. You can find the
					full protocol for electrophoresis and PCR in our{" "}
					<div style={{ paddingBottom: 16 }}>
						<a href="#" onClick={() => navigate("/biology/protocols/")}>
							Protocols page
						</a>
						.
					</div>
					<h2>Tuesday 22nd August 2023</h2>
					Unfortunately, our DNA had not amplified as expected, so we decided to redo the process
					from Monday with a few adjustments:
					<ul>
						<li>
							PCR was redone, but at a higher annealing temperature (55°C compared to 52°C on
							Monday)
						</li>
						<li>Our gel mix for electrophoresis was made at 2% agarose concentration.</li>
					</ul>
					<h2 style={{ paddingTop: 16 }}>Wednesday 23rd August 2023</h2>
					Today, we decided to redo electrophoresis again since the number of bands that came up on
					the gel ladder were not consistent with our expectations. In addition, we slightly changed
					the protocol to help obtain better results:
					<ul>
						<li>We further increased the annealing temperature to 57°C.</li>
						<li>
							We used a new master mix with our DNA, with a different level of ATCG-ase to help with
							annealing.
						</li>
						<li>Instead of GelRed, we used blue/orange loading dye.</li>
					</ul>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Biology Lab Work" description="TBD" />;
