import * as React from "react";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";
import { Container } from "@mui/material";
import VideoUniverse from "../../src/components/videoUniverse";

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
					<br />
					<iframe
						title="City-of-London-UK: A Guide to GENOSWITCH's Software (2023) [English]"
						width="560"
						height="315"
						src="https://video.igem.org/videos/embed/bbb90f4c-002e-4e67-98f9-14b9d3118bac?subtitle=en"
						frameborder="0"
						allowfullscreen=""
						sandbox="allow-same-origin allow-scripts allow-popups"
					></iframe>
					<h3 style={{ paddingTop: 8 }}>Transcript:</h3>
					<details>
						<summary>Video Transcript</summary>
						<p>
							Hi, I’m Rishabh, our team’s head of software. I’ll be showing you how to use our
							team’s software tool. First of all, the software only works on Linux systems because
							those are the only systems on which NUPACK runs. Upon opening the software, you will
							be greeted by this title screen which has 3 different buttons for 3 different methods
							of data entry. They all output the same thing, so first we’ll be going through the
							manual miRNA entry. From this menu you can enter the name of your miRNA as well as the
							sequences, you can add or remove miRNA to your will, and you can also reverse them.
							The reason you would reverse them is because this orientation of miRNA may not give a
							favourable structure. The second way of entering miRNA in the software is pulling
							miRNA from miRbase. By clicking this button, it will pull the latest version of
							miRbase, from which you can then type in your query and add whatever miRNA you want,
							if you miss click you can remove things and reverse them, same as before. The final
							mode of data entry is importing data directly from a .fasta file on your PC. By
							clicking this button, you can open a file manager, from here you can then navigate to
							where your .fasta file is saved, click on it, and import stands that you want. No
							matter how you enter you miRNA strands, every page will have a submit button. Once you
							press the submit button, it will then compute the best possible toehold switch and And
							Gates for the miRNA you’ve input. You can then click next to view your results.
							Moreover, you can save your results to a text file or a .fasta file.
						</p>
					</details>
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
					<br />
					The diagram above represents the mechanism associated with toehold switches that utilise
					multiple miRNA. The fact that miRNA strands must be joined together before binding to the
					switch means that “and gate” strands made of RNA must also be generated alongside the
					switches.
					<br />
					The design of these And Gate strands depends on the miRNA used as well as the order in
					which they are to be joined as seen in the diagram below picturing the trigger structure
					for our switch designed to test for endometriosis:
					<br />
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
