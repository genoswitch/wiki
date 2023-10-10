import * as React from "react";

import { Card, CardContent, Container, Typography } from "@mui/material";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";

import { navigate } from "gatsby";


type DayCardProps = {
	date: string;
	register: string;
	time: string
}
class DayCard extends React.Component<DayCardProps, {}> {
	render(): React.ReactNode {
		return (
			<Card variant="outlined">
				<CardContent>
					<Typography variant="h5" component="div">{this.props.date}</Typography>
					<Typography color="text.secondary">Register: {this.props.register}</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">Time: {this.props.time}</Typography>
					{this.props.children}
				</CardContent>
			</Card >
		)
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

						<Typography variant="h6" component="div">Overview</Typography>
						<p>
							Today we delivered the equipment to the lab and started the briefing with Dr Markiv at 10am.
							This included safety briefing about bins, gloves and coats, as well as some core skills such as
							pipetting. Dr Markiv also gave us a quick tour of the facilities including the Faculty of
							Dentistry, Oral & Craniofacial Sciences. After going through our equipment, we decided what we
							might need to use from KCL's equipment and what our plan was for the rest of the week. We also
							found that in ordering the E.coli, they were not competent cells, as we had planned to use,
							so our timescales would have to accommodate the new protocols to prepare them for transformations.
						</p>

						Stock solutions prep for making competent E.coli:
						<ul>
							<li>20g/L LB broth x2; 500ml water flask</li>
							<li>0.1 M CaCl2 solution (7.35 g of CaCl2·2H2O in 500 ml of H2O) in a 500 ml Pyrex bottle. Autoclave and store at 4 oC.</li>
							<li>0.1 M MgCl2 solution (10.165 g of MgCl2 ·6H2O in 500ml of H2O) in a 500ml Pyrex bottle. Autoclave and store at 4 oC.</li>
							<li>
								50% glycerol solution (100 ml of glycerol and 100 ml H2O) in a 200 ml Pyrex bottle.
								Autoclave and store at 4 oC.
							</li>
						</ul>

						Stock solutions prep for Petri dishes:

						<ul>
							<li>
								<p>
									LB agar 2x 400ml in 500ml Pyrex bottle; 20g/L LB broth (8g) + 2% weight per volume agar (8g) in 400ml water
								</p>
								<p>
									Close with sponge and foil. Label, Autoclave 125 oC/15 min and store at room temperature.
								</p>
							</li>
							<li>
								<p>
									20g/L LB broth; 200ml
								</p>
								<p>
									Close with sponge and foil. Label, Autoclave 125 oC/15 min and store at room temperature.
								</p>
							</li>
							<li>
								<p>
									Ampicillin 100 mg/ml - 1 g in 10 ml of MilliQ water.
								</p>
								<p>
									<i>
										The stock solution is filtered through a 0.2 mm filter, aliquoted into 10 tips (1μ/ml each) and stored at
										-20oC until use. The final working concentration of all antibiotics is 1:1000 of the stock solution
										(1000x ampicillin).
									</i>
								</p>
							</li>
						</ul>


						<Typography variant="h6" component="div">Onward Plan</Typography>
						<p>Inoculating the E.coli cells onto agar plates which will have been prepared earlier.</p>

						<Typography variant="h6" component="div">Photos</Typography>
						<p>
							<ImageGallery
								lazyLoad={true}
								showThumbnails={false}
								showIndex={true}
								items={[
									{
										original: "https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/170823-1.webp",
										description: "Aliquoting and labelling the ampicillin into tips. (1 of 2)"
									},
									{
										original: "https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/170823-2.webp",
										description: "Aliquoting and labelling the ampicillin into tips. (2 of 2)"
									},
									{
										original: "https://static.igem.wiki/teams/4642/wiki/human-practices/labbook/170823-3.webp",
										description: "Our labelled stock solutions for LB broth, LB agar, 50% glycerol, CaCl2.2H2O and MgCl2.6H2O."
									}
								]} />
						</p>
					</DayCard>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Biology Lab Work" description="TBD" />;
