import * as React from "react";
import { navigate } from "gatsby";

import {
	Card,
	Container,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import HeaderFooterProvider from "../components/headerFooterProvider";
import Reference from "../components/reference";
import { ReferenceType } from "../types/reference";
import ReferenceProvider from "../components/referenceProvider";

type TableResult = {
	partNo: number;
	red: number;
	green: number;
	baseline: number;
};

export default class HardwarePage extends React.Component {
	references: ReferenceType[] = [
		{
			number: 1,
			author: "Ustuner S, Lindsay MA, Estrela P.",
			title:
				"Pre-concentration of microRNAs by LNA-modified magnetic beads for enhancement of electrochemical detection.",
			journal: "Sci Rep.",
			volume: "2021; 11: 19650",
			published_date: "October 2021",
			doi: "10.1038/s41598-021-99145-8",
		},
	];

	tableResults: TableResult[] = [
		{
			partNo: 5039804,
			red: 700,
			green: 697,
			baseline: 245,
		},
		{
			partNo: 5423683,
			red: 694,
			green: 696,
			baseline: 223,
		},
		{
			partNo: 480622,
			red: 701,
			green: 701,
			baseline: 237,
		},
	];

	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Hardware</h1>
					<h2>Open source links</h2>
					<p>
						<a target="_blank" href="">
							Firmware
						</a>
					</p>
					<h2>Design</h2>
					<p>
						Our hardware stack uses a Raspberry Pi Pico based custom board running FreeRTOS, a free
						and open source real-time operating system. We have developed a number of custom tasks
						that run on this OS in order for the device to be as efficient as possible.
					</p>
					<p>
						We are using WebUSB for communication between the hardware and host device. This means
						that no drivers or other software need to be installed. The device can be fully
						controlled via a website when using a supported browser.
					</p>
					<p>
						However, due to delays in testing, the client site as well as physical PCB designs are
						not yet complete. We hope to complete this soon and will provide an update at the
						Jamboree.
					</p>
					<h3>PCB Design</h3>
					<p>
						To reduce costs, we decided to make a custom PCB based on a Raspberry Pi Pico (whose
						schematics are open-source). We integrated various components into the board such as the
						voltage reference and created a modular board design wherein the ADCs are located on
						seperate boards that can be plugged in as needed. This reduces costs as the user does
						not have to fully populate the device if they do not wish to use all the channels
						available.
					</p>
					<p>
						Note that when designing a PCB with USB lines, special consideration must be taken to
						ensure the device stays within specifications.
					</p>
					<h3>Client Architecture</h3>
					<p>
						The client sends messages using USB vendor defined messages. This provides an easy way
						for the client to send a value (indicating a command) to the device and for the device
						to respond.
					</p>
					<p>
						For bulk communication, a bulk endpoint is used. This allows for higher-speed messaging
						as there is reduced overhead at the expense of data being buffered in, therefore
						requiring extra logic to convert back into packets of data.
					</p>
					<p>
						To maximize throughput, we designed the protocol ourselves. This is documented on the
						software repository.
					</p>
					<h3>Firmware Updates</h3>
					<p>
						Our firmware implements the Device Firmware Update (DFU) version 1.1. specification,
						allowing for the device to be updated and re-flashed without leaving the client site.
					</p>
					<p>
						To accomplish this we refactored an existing library, webdfu, to be more perforrmant and
						easy to use.
					</p>
					<p>
						This forked version of the library can be found{" "}
						<a target="_blank" href="https://github.com/genoswitch/webdfu">
							here on GitHub
						</a>
						. (external link)
					</p>
					<p>
						For ease of use and to aid future teams who may be implementing a similar device, the
						library is extensively documented. Unfortunately due to some technical issues we are not
						able to push this to GitLab at this time.
					</p>
					<h2>Extraction of miRNA</h2>
					<p>
						In project Genoswitch, we have decided to use novel methods of electrochemical detection
						and extraction of miRNA particles in order to achieve our projects’ goals of creating a
						system that is both robust and flexible. After our research
						<Reference number={1} />, we decided to use an extraction method involving
						electromagnetic nanoparticles since we felt that it was a cheaper alternative to PCR,
						but was nonetheless effective for our needs. It is a multi-stage process which involves
						the following:
					</p>
					<ul>
						<li>
							Samples of blood are taken from a patient and added to a solution containing magnetic
							nanoparticles. These nanoparticles often consist of a metal (usually iron) oxide and
							are also coated with a biotin-streptavidin bonded anti-miRNA strand.
						</li>
						<li>
							A set of electromagnets is turned on and off in quick succession, causing the
							nanoparticles to move and stir the solution.
						</li>
						<li>
							During this process, target miRNAs bond to the complementary anti-miRNA via
							base-pairing.
						</li>
						<li>
							Afterwards, the magnetic beads are pulled to the side of the container while the rest
							of the solution is removed.
						</li>
						<li>The miRNA is removed from the beads using an elution buffer.</li>
						<li>
							The previous steps are repeated three times in order to remove the maximum possible
							amount of miRNA for amplification.
						</li>
					</ul>
					<p>
						Amplification of miRNA is discussed more on our{" "}
						<a href="#" onClick={() => navigate("/biology/")}>
							main biology page
						</a>
					</p>

					<h3>Biotin-Streptavidin</h3>

					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/hardware/image5.png"
					/>

					<h3>Diagram from RIBOTOX</h3>

					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/hardware/image9.png"
					/>

					<h2 style={{ paddingTop: 8 }}>Testing the Luminometer</h2>
					<p>We experimented with two different methods for detecting visible light:</p>
					<ul>
						<li>
							Using LDRs and colour filters to determine whether a certain wavelength of light was
							of high enough intensity to suggest a positive result
						</li>
						<li>
							Using parabolic mirrors and a diffraction gradient to reflect a high-intensity beam of
							light from the sample onto a set of LDRs (see the{" "}
							<a href="#" onClick={() => navigate("/model/")}>
								Modelling page
							</a>{" "}
							for more details).
						</li>
					</ul>
					<p>
						Unfortunately, due to errors in ordering, we were unable to test our systems with the
						desired fluorescent proteins in time for the wiki deadline. As such we used directed
						lasers as a proxy for proof of concept.
					</p>
					<p>Ultimately, we ended up attempting the following procedures:</p>
					<p>
						For the LDR-colour filter method, we shone both red and green light through colour
						filters at several different LDRs to test which would be the most sensitive to an
						increase in the intensity of light and as such give better results. Here are our
						findings:
					</p>

					<h3>Test Results with LDR and colour filters:</h3>
					<Card raised>
						<TableContainer aria-label="Test Results">
							<TableHead>
								<TableRow>
									<TableCell>
										<b>Digi-Key Part Number</b>
									</TableCell>
									<TableCell>
										<b>Red</b>
									</TableCell>
									<TableCell>
										<b>Green</b>
									</TableCell>
									<TableCell>
										<b>Baseline</b>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.tableResults.map(result => (
									<TableRow key={`result-${result.partNo}`}>
										<TableCell>{result.partNo}</TableCell>
										<TableCell>{result.red}</TableCell>
										<TableCell>{result.green}</TableCell>
										<TableCell>{result.baseline}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</TableContainer>
					</Card>

					<h3>Graph</h3>
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/engineering/engineering-hardware-1.webp"
					/>

					<p>
						It can be seen from our results that the LDRs achieve similar readings when light is
						shone on them, but there is nonetheless a clear difference when a desired wavelength is
						present.
					</p>
					<p>
						For the diffraction and reflection detection method we demonstrated that, at a nonzero
						angle of incidence, rays do not pass through the focal point as well as test the lasers
						with a diffraction grating. We found that while it was possible to achieve the intended
						effects, it would require careful precision that could not be done easily with human
						hands. Therefore, we think that for future improvements on this idea, it would be
						necessary to create pre-built 3D setups in order to achieve precise reflection and
						diffraction in order to achieve the desired results.
					</p>

					<h3>Conclusions and future prospects for these ideas</h3>
					<p>
						Overall, we have found that the LDR-colour filter method works well as an uncomplicated
						technique for detecting visible light. While currently the changes in the readings when
						light is shone on the LDR are noticeable but not large, we hope that in future, once we
						have access to fluorescent proteins to test with, we will be able to improve on these
						results by using parabolic reflectors to increase the intensity of light emitted from
						the desired light source and lessening the amount of environmental light that can reach
						the LDR.
					</p>
					<p>
						Simultaneously, we also managed to successfully demonstrate that at a nonzero angle of
						incidence, rays did not pass through the focal point as none of the laser rays lined up.
						This correlates with the modelling work that has been done by our team since the laser
						beams that we used were not parallel either. Hence it could be said that the diffraction
						and reflection detection method also demonstrates serious potential due to the control
						that is given to the user over which wavelengths of light are reflected into the LDR.
						However, this is undercut by the fact that this would involve incredibly precise
						measurements and calculations when setting up the parabolic mirrors and diffraction
						grating for each wavelength that you would want to detect. As such, when compared to the
						LDR-colour filter method, it seems that there would be greater setup costs involved with
						the diffraction and reflection detection method, but we are unsure if this would lead to
						better results.{" "}
					</p>
					<p>
						In future, it may be viable to offer a combination of the two methods to allow for more
						control in which wavelengths are directed at the luminometer. As such it could remove
						possible interference or false positives from ambient light sources by directing only
						wavelengths within a desired range towards the luminometer and colour filters using the
						diffraction and reflection detection and result in clearer readings and results.
					</p>

					<h2>Photos from testing</h2>
					<Card raised>
						<ImageGallery
							lazyLoad={true}
							showThumbnails={false}
							showIndex={true}
							items={[
								{
									original: "https://static.igem.wiki/teams/4642/wiki/hardware/image1.jpg",
								},
								{
									original: "https://static.igem.wiki/teams/4642/wiki/hardware/image2.jpg",
								},
								{
									original: "https://static.igem.wiki/teams/4642/wiki/hardware/image3.jpg",
								},
								{
									original: "https://static.igem.wiki/teams/4642/wiki/hardware/image4.jpg",
								},
								{
									original: "https://static.igem.wiki/teams/4642/wiki/hardware/image6.jpg",
								},
								{
									original: "https://static.igem.wiki/teams/4642/wiki/hardware/image8.jpg",
								},
							]}
						/>
					</Card>
					<ReferenceProvider references={this.references} />
				</Container>
			</HeaderFooterProvider>
		);
	}
}
