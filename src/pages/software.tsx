import * as React from "react";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";
import { Container } from "@mui/material";

export default class SoftwarePage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Software</h1>
					Toehold switch generating programs have been done before by other iGEM teams, however due
					to the complexity of toehold switching that utilise more than 1 miRNA, we felt it
					necessary to create software to create these toehold switches specifically for these
					scenarios as these switches not only need to be generated, but optimised. Once this was
					programmed as a script, it was used to generate our own toehold switches and then we
					shortly realised that we could expand this idea to generate switches for 1, 2 and 3 miRNA
					as inputs while also making the process as easy and user friendly as possible.
					<h2 style={{ paddingTop: 8 }}>Features:</h2>
					<ul>
						<li>
							Shipping via appimages allowed us to include a beta version of NUPACK (the Nucleic
							Acid Package) within the download.
						</li>
						<li>
							Front end UI makes inputting data as well as reading/exporting results very easy.
						</li>
						<li>
							Full integration with the latest version of miRBase so long as the user is connected
							to the internet.
						</li>
						<li>
							Secondary structures can be viewed visually as a polymer graph from NUPACK’s web app
							or as a more detailed equilibrium base pair probability matrix.
						</li>
						<li>
							Support for importing miRNA strands from .fasta files as well as being able to export
							results to another .fasta file.
						</li>
					</ul>
					<h2 style={{ paddingTop: 8 }}>Usage:</h2>
					We have created a video tutorial for the software which you can view below:
					<b>EMBED RISHABH'S VIDEO HERE</b>
					<h2 style={{ paddingTop: 8 }}>How it works:</h2>
					Normally, a toehold switch will be in a closed state until its trigger binding site binds
					to the correct trigger, allowing for a reporter protein to be translated. This trigger has
					always been a single miRNA strand and past teams’ toehold switch generators have been able
					to generate these for some time, this usually creates issues around specificity due to the
					large overlap between diseases that share miRNA. One solution to this problem is to use
					switches that take more than 1 miRNA strand as an input; this vastly increases the
					specificity however it does complicate the mechanism.
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/software/software1.webp"
					/>
					The diagram above represents the mechanism associated with toehold switches that utilise
					multiple miRNA. The fact that miRNA strands must be joined together before binding to the
					switch means that “and gate” strands made of RNA must also be generated alongside the
					switches.
					<br />
					The design of these And Gate strands depends on the miRNA used as well as the order in
					which they are to be joined as seen in the diagram below picturing the trigger structure
					for our switch designed to test for endometriosis:
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/software/software2.webp"
					/>
					The And Gate strands are designed to be complementary to both of the strands they are to
					join then have a region of many similar bases which will bind to the switch, this is to
					ensure that the binding energy between these unpaired bases and the miRNA is less
					favourable than the binding energy of these unpaired bases to the toehold switch.
					<br />
					What this means for the software is that for a given 3 miRNA strands, there exists a
					“best” order for these strands. THis is determined by taking into account the MFE of the
					trigger complex, how closely the trigger complex resembles its ideal structure and how
					exposed the corresponding toehold switch’s trigger binding site is.
					<br />
					The software finds this best toehold switch and trigger complex by brute force as shown in
					the flowchart below:
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/software/software3.webp"
					/>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Software" description="TBD" />;
