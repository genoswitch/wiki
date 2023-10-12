import * as React from "react";

import { Card, CardContent, Container, Typography } from "@mui/material";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";

import { navigate } from "gatsby";

type DayCardProps = {
	date: string;
	register: string;
	time: string;
};
class DayCard extends React.Component<DayCardProps, {}> {
	render(): React.ReactNode {
		return (
			<div style={{ paddingTop: 16, paddingBottom: 16 }}>
				<Card variant="outlined" raised={true}>
					<CardContent>
						<Typography variant="h5" component="div">
							{this.props.date}
						</Typography>
						<Typography color="text.secondary">Register: {this.props.register}</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							Time: {this.props.time}
						</Typography>
						{this.props.children}
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default class BiologyLabWorkPage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<DayCard
						date={"Monday, 17th July 2023"}
						time={"10am-1pm"}
						register={"Astrid, Dave, Emily, Hester, Lottie, Matt, Tobi, Yilu"}
					>
						<Typography variant="h6" component="div">
							Overview
						</Typography>
						<p>
							Today we delivered the equipment to the lab and started the briefing with Dr Markiv at
							10am. This included safety briefing about bins, gloves and coats, as well as some core
							skills such as pipetting. Dr Markiv also gave us a quick tour of the facilities
							including the Faculty of Dentistry, Oral & Craniofacial Sciences. After going through
							our equipment, we decided what we might need to use from KCL's equipment and what our
							plan was for the rest of the week. We also found that in ordering the E.coli, they
							were not competent cells, as we had planned to use, so our timescales would have to
							accommodate the new protocols to prepare them for transformations.
						</p>
						Stock solutions prep for making competent E.coli:
						<ul>
							<li>20g/L LB broth x2; 500ml water flask</li>
							<li>
								0.1 M CaCl2 solution (7.35 g of CaCl2·2H2O in 500 ml of H2O) in a 500 ml Pyrex
								bottle. Autoclave and store at 4 oC.
							</li>
							<li>
								0.1 M MgCl2 solution (10.165 g of MgCl2 ·6H2O in 500ml of H2O) in a 500ml Pyrex
								bottle. Autoclave and store at 4 oC.
							</li>
							<li>
								50% glycerol solution (100 ml of glycerol and 100 ml H2O) in a 200 ml Pyrex bottle.
								Autoclave and store at 4 oC.
							</li>
						</ul>
						Stock solutions prep for Petri dishes:
						<ul>
							<li>
								<p>
									LB agar 2x 400ml in 500ml Pyrex bottle; 20g/L LB broth (8g) + 2% weight per volume
									agar (8g) in 400ml water
								</p>
								<p>
									Close with sponge and foil. Label, Autoclave 125 oC/15 min and store at room
									temperature.
								</p>
							</li>
							<li>
								<p>20g/L LB broth; 200ml</p>
								<p>
									Close with sponge and foil. Label, Autoclave 125 oC/15 min and store at room
									temperature.
								</p>
							</li>
							<li>
								<p>Ampicillin 100 mg/ml - 1 g in 10 ml of MilliQ water.</p>
								<p>
									<i>
										The stock solution is filtered through a 0.2 mm filter, aliquoted into 10 tips
										(1μ/ml each) and stored at -20oC until use. The final working concentration of
										all antibiotics is 1:1000 of the stock solution (1000x ampicillin).
									</i>
								</p>
							</li>
						</ul>
						<Typography variant="h6" component="div">
							Onward Plan
						</Typography>
						<p>
							Inoculating the E.coli cells onto agar plates which will have been prepared earlier.
						</p>
						<Typography variant="h6" component="div">
							Photos
						</Typography>
						<p>
							<ImageGallery
								lazyLoad={true}
								showThumbnails={false}
								showIndex={true}
								items={[
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/170823-1.webp",
										description: "Aliquoting and labelling the ampicillin into tips. (1 of 2)",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/170823-2.webp",
										description: "Aliquoting and labelling the ampicillin into tips. (2 of 2)",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/170823-3.webp",
										description:
											"Our labelled stock solutions for LB broth, LB agar, 50% glycerol, CaCl2.2H2O and MgCl2.6H2O.",
									},
								]}
							/>
						</p>
					</DayCard>
					{/** Day 2 */}
					<DayCard
						date={"Thursday 20th July 2023"}
						time={"10am-1pm"}
						register={"Astrid, Emily, Dave, Hester, Lottie, Tobi, Yilu"}
					>
						<Typography variant="h6" component="div">
							Overview
						</Typography>
						<p>
							Yesterday, we sorted our inoculation of our cells,the protocol of which can be found
							below, to make competent cells and transform them. We also found that the plasmids
							that we ordered, didn't have four random nucleotides on the ends of both restriction
							enzymes. As a result, they were too close to the end which made it more difficult for
							RNA polymerase to “break” the restriction enzymes..
						</p>

						<ul>
							<li>
								We used a mass spectrometer to measure the growth of E. Coli, based on its optical
								density in respect to the density of the media alone (in our case LB Broth)
							</li>
							<li>detects absorbance 600 Nm</li>
							<li>
								first measurement was 0.3, so we let the bacteria grow in a shaking incubator for 20
								mins
							</li>
							<li>
								the second measurement was 0.585, which is within the range we needed (0.4-0.6)
							</li>
							{/** Photos */}
							<li>now we place cells on ice for 30 mins</li>
							<li>cells centrifuged in solutions</li>
							<li>leave on ice</li>
							<li>made agar plates</li>
						</ul>

						<p>Primers:</p>
						<ul>
							<li>
								Need to order primers in order to amplify our GeneBricks as the restriction sites
								are too close to the end. For fwd Primer, take first 18 nucleotides, or slightly
								more as long as it ends on C or G. add 4 random nucleotides to the BEGINNING of the
								sequence
							</li>
							<li>
								for Rvs Primer, take the last 18 nucleotides and take the complementary bases, again
								ending in C or G. Add 4 nucleotides to the BEGINNING of the sequence. ACTG
							</li>
							<li>
								<u>NOTE FOR FUTURE TEAMS</u>: when ordering synthetic parts, always add 4 random
								nucleotides to the ends of your sequence so the restriction sites can be reached
								easily.
							</li>
						</ul>

						<p>Inoculating and preparing cells:</p>
						<i>K12 E.coli cells are being used (LZB 035) for transformations of both plasmids.</i>
						<ol>
							<li>Work under flame.</li>
							<li>
								Streak 10 ml of <i>E. coli</i> cells onto one of the LB agar plates containing no
								antibiotic or specific for the cell type.
							</li>
							<li>Grow the cells overnight at 37 oC, no more than 16 h.</li>
							<li>Wrap plate in a parafilm and store at 4 oC.</li>
						</ol>
						<i>Cells are stored upside down to ensure that the cells don’t dry out overnight.</i>

						<p>Making competent cells:</p>
						<ol>
							<li>
								Pick a single colony of the cells from the LB agar plate into 10 ml of LB media
								containing no antibiotic or specific for the cell type. Grow the cultures overnight
								at 37 oC with shaking at 250 rpm.
							</li>
							<li>
								Inoculate 200 ml of prewarmed to 37oC LB medium (no antibiotics or specific for the
								cell type) with 10 ml of the overnight cultures, and grow at 37oC for 60 min, with
								vigorous shaking 250 rpm or until the OD600 is 0.4 - 0.5.
							</li>
							<li>
								Put the flask on ice for 30 min. At the same time chill sterile falcon (centrifuge)
								tubes.
							</li>
							<li>Aliquot culture into 50 ml each 4 x 50 ml chilled falcon (centrifuge) tubes.</li>
							<li>
								Harvest the cells by centrifugation for 7 min at 3500 rpm, at 4oC and discard
								supernatants completely.
							</li>
							<li>
								Resuspend cells in each tube in 12.5 ml of 0.1 M MgCl<sub>2</sub>.
							</li>
							<li>Centrifuge for 7 min at 3500 rpm, at 4oC and discard supernatants.</li>
							<li>
								Resuspend cells in each tube in 25 ml of 0.1 M CaCl<sub>2</sub>.
							</li>
							<li>Incubate cells on ice for 30 min.</li>
							<li>Centrifuge for 7 min at 3500 rpm, at 4oC and discard supernatants.</li>
							<li>
								Resuspend cells in each tube in 700 ml of 0.1 M CaCl<sub>2</sub> and 300 ml of 50%
								glycerol. Final volume 1 ml in each tube.
							</li>
							<li>
								Aliquot 50 ml aliquots into 1.5 ml sterile microcentrifuge tube on ice and stored at
								-80oC.
							</li>
						</ol>

						<Typography variant="h6" component="div">
							Onward Plan
						</Typography>
						<p>
							Begin filming for our iGEM promotional video within the labs. + Order primers to add
							onto GeneBricks. + Turn GeneBricks into plasmids.
						</p>

						<Typography variant="h6" component="div">
							Photos
						</Typography>
						<p>
							<ImageGallery
								lazyLoad={true}
								showThumbnails={false}
								showIndex={true}
								items={[
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/200823-1.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/200823-2.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/200823-3.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/200823-4.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/200823-5.webp",
									},
								]}
							/>
						</p>
					</DayCard>
					{/** Day 3 */}
					<DayCard
						date={"Monday 21st August 2023"}
						time={"10am- 5pm"}
						register={"Dave, Matt, Yilu"}
					>
						<Typography variant="h6" component="div">
							Objective
						</Typography>
						<p>
							Beginning PCR for the THS T7 GFP and mCherry circuits, then confirming amplification
							with gel electrophoresis.
						</p>

						<Typography variant="h6" component="div">
							Overview
						</Typography>
						<p>
							5ng/mL - PCR Prep 25microL GoTaq Master Mix 2x concentrated (using 2-20 pipette, 10
							and 15) 10 microL from template DNA (either 1 - mCherry and 2 - GFP) 5microL of each
							primers (6F and 6R) 5microL of nuclease free water Start with larger volume first, so
							that there is no liquid left in the pipette when inserting into pipette Using
							centrifuge to get rid of air bubbles in the tubes A-test 95 52 - annealing temperature
							72 1% agarose x2
						</p>
						<ul>
							<li>Stir the gel and TAE buffer with avoiding getting the sediment up the side</li>
							<li>
								{">"}1kb of DNA use 1% agarose, and \{"<"}1kb DNA use {"<"}1% agarose
							</li>
							<li>
								Microwave until the gel powder dissolves into the buffer, without over microwaving
								(which would lower the concentration)
							</li>
						</ul>
						<p>
							1kb DNA ladder 10microL GelRed Nucleic acid into each 1% gel agarose Pour into the
							tray with comb 100W power
						</p>

						<Typography variant="h6" component="div">
							Photos
						</Typography>
						<p>
							<ImageGallery
								lazyLoad={true}
								showThumbnails={false}
								showIndex={true}
								items={[
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/21082301.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/21082302.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/21082303.webp",
									},
								]}
							/>
						</p>
					</DayCard>
					{/** Day 4 */}
					<DayCard date={"Tuesday 22nd August 2023"} time={"2pm-5pm"} register={"Dave, Matt, Yilu"}>
						<Typography variant="h6" component="div">
							Overview
						</Typography>
						<p>
							Repeated PCR prep with different annealing temperature A-test 95 55 72 Changed agarose
							gel to 2% 10microL GelRed Nucleic acid Took photos not under UV to prevent mutation
							risk of the DNA. Used a blue light filter box. The second set (GFP) of gel
							electrophoresis was successful, showing only one band which is what we expected to be
							shown from the amplification / PCR and one lower down for the primers (fewer base
							pairs). The first set however showed 3 bands. The faintest being primers again, but
							the larger ones harder to "diagnose". Through comparison between the first and second
							gels, as well as the sample ladder, it seemed most likely that the top band was the
							sequence that we wanted. We removed both regardless.
						</p>
						<Typography variant="h6" component="div">
							Onward Plan
						</Typography>
						<p>
							Transform linear DNA into plasmids using backbone; Insert our plasmids into competent
							e. Coli; test our THS's
						</p>
						<Typography variant="h6" component="div">
							Photos
						</Typography>
						<p>
							<ImageGallery
								lazyLoad={true}
								showThumbnails={false}
								showIndex={true}
								items={[
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/22082301.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/22082302.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/22082303.webp",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/22082304.webp",
										description: "mCherry",
									},
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/22082305.webp",
										description: "GFP",
									},
								]}
							/>
						</p>
					</DayCard>
					{/** Day 5 */}
					<DayCard
						date={"Wednesday 23rd August 2023"}
						time={"11am-3pm"}
						register={"Matt, Hester, Yilu"}
					>
						<p>
							Repeated PCR again - difficulty with the number of bands shown in gel electrophoresis
							Possibly due to problems with volumes of primers used (unequal) Found that tap water
							was used, instead of distilled water, which explains why the number of bands did not
							correlate with the results which we expected, as there were contaminants which would
							have been removed in dH2O (as a precipitated solid). 10 microL of stock primer and 90
							microL of water (FWD and REV) New master mix (perhaps a different level of ATCG-ase to
							help with the annealing) GoTaq Long PCR Master Mix 2x A-test thermocycle temperature
							95 - denaturing temperature 57 - annealing temperature (increased from yesterday) 72 -
							extension temperature 20 mL TAE buffer 50x, fill to 1L pure water 2.4g of agarose,
							120mL of TAE buffer dilute 10microL Blue/Orange 6X Loading Dye to GoTaq Long PCR
							Master Mix tube (=60microL) Load the agarose gel with 30:20 GoTaq (Green) and 30:30
							GoTaq Long Difficulties with the actual toehold switch mechanism: regarding E.coli vs
							human ribosomal activity and whether proteins will be expressed
						</p>
						<Typography variant="h6" component="div">
							Photos
						</Typography>
						<p>
							<ImageGallery
								lazyLoad={true}
								showThumbnails={false}
								items={[
									{
										original:
											"https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/23082301.webp",
									},
								]}
							/>
						</p>
					</DayCard>
					{/** Day 6 */}
					<DayCard
						date={"Thursday 24th August 2023"}
						time={"Unknown"}
						register={"Hester, Lottie, Yilu"}
					>
						<Typography variant="h6" component="div">
							General Notes
						</Typography>
						Today we realised it would be worthwhile making significant changes to our method. With
						the help of Dr Markiv we have devised the below questions so we can continue lab work as
						soon as possible.
						<ol>
							<li>
								What <u>exactly</u> do we want to do?
								<ul>
									<li>Two fluorescent proteins and many miRNA?</li>
									<li>Which backbone do we want to use to clone the plasmid DNA</li>
								</ul>
							</li>
						</ol>
						Following this we have come up with an action plan so we are able to continue our work:
						<Typography variant="h6" component="div">
							To-Do
						</Typography>
						<ol>
							<li>Organise a call with Dr Markiv to discuss our new plans</li>
							<li>
								Choose a backbone
								<ul>
									<li>
										ampicillin or chloramphenicol - ask him to tell us which antibiotic to use
									</li>
								</ul>
							</li>
							<li>
								Check the validity of our{" "}
								<a target="_blank" href="https://2021.igem.org/Team:Mingdao/Measurement">
									TXTL protocol
								</a>
							</li>
							<li>
								Organise wet lab availability with all members of the team to continue lab work
								later in the year.
							</li>
						</ol>
					</DayCard>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Biology Lab Work" description="Biology Lab Work" />;
