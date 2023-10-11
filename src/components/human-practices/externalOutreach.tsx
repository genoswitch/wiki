import * as React from "react";

import { Box, Card, Tab, Tabs } from "@mui/material";

import { CustomTabPanel, a11yProps } from "../muiCardCommon";
import Reference from "../reference";
import ReferenceProvider from "../referenceProvider";
import { ReferenceType } from "../../types/reference";

const HPExternalOutreach = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: Event, newValue: number) => {
		setValue(newValue);
	};

	const atHomeTestingRefs: ReferenceType[] = [
		{
			number: 1,
			author: "Ci Zhang, Xianhong Li, Mary- Lynn Brecht, Deborah Koniak - Griffin",
			title:
				"Can self-testing increase HIV testing among men who have sex with men: A systematic review and meta-analysis",
			journal: "Public Library of Science",
			volume: "PLOS ONE",
			published_date: "November 30, 2017",
			doi: "10.1371/journal.pone.0188890",
		},
		{
			number: 2,
			author: "NHS England",
			title: "New NHS campaign urges people to use their bowel cancer home testing kit",
			published_date: "February 20, 2023",
			link: "https://www.england.nhs.uk/2023/02/new-nhs-campaign-urges-people-to-use-their-bowel-cancer-home-testing-kit/",
		},
		{
			number: 3,
			author: "Marc Deschka",
			title: "Blood Collection in Practice",
			published_date: "Unknown",
			link: "https://mft.nhs.uk/app/uploads/2019/02/SARSTEDT-Blood-Collection-in-Practice-Brochure.pdf",
		},
		{
			number: 4,
			author: "MonitorMyHealth",
			title: "Collecting your blood sample",
			published_date: "December 10, 2018",
			link: "https://monitormyhealth.org.uk/instructions",
		},
	];

	return (
		<>
			<Card raised>
				<Box sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="Disease Profiles"
							variant="scrollable"
							scrollButtons
							allowScrollButtonsMobile
						>
							<Tab label="Macademia - Azoomee and DaVinci" {...a11yProps(0)} />z
							<Tab label="Feasibility of At-Home Testing" {...a11yProps(1)} />
							<Tab label="Dr Omi Ohizua" {...a11yProps(2)} />
							<Tab label="Dr Albert Aka" {...a11yProps(3)} />
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						As part of our education aims, we talked to a global children's online education company
						called Macademia. Macademia aims to provide educational play through games, challenges
						and engaging content for children from the ages of 2-18 years old through their two
						brands: Azoomee (for kids up to 6 years old) and DaVinci (for grown ups and kids 7+).
						While their content does not touch on women’s health, their expertise in children’s
						education can help us determine how best to capture the interest of audiences of many
						ages. We spoke to the founders of the company, Estelle and Douglas Lloyd, to gain
						insight on what content is engaged with most by young audiences so that we could
						incorporate these ideas into educational plans. Our conversations showed us that
						children tend to be more receptive to games than the bombarding of information that
						school health education usually entails. Having interactive games, videos and
						experiences means the information learnt will be remembered for much longer periods of
						time, and is more likely to be absorbed. When producing educational materials for
						schools to use, we would keep in mind what is most likely to be engaging for children as
						learning about women’s health requires a lot of information to be retained. We would
						also aim to make these resources a series of short sessions that are presented to
						students over a long period of time - as our research showed that many repeated sessions
						will cause the information to be stored in long-term memory, while one long session may
						also lead to wavering interest over the length of the session and information will
						not be remembered.
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						Prompted by our interview with Dr Omi, we conducted some research into the effects of
						self-testing kits in the hope that it would increase the uptake of our tests. By
						creating home-testing kits, we aim to be able to periodically test for conditions to
						detect them at a much earlier stage as well (as increase the uptake of patients for
						these tests). In other situations where at-home testing is employed, results are
						promising. The National Institute for Health and Care Research conducted an RCT for at
						home testing for HIV and found that HIV self-testing increased overall HIV test
						frequency by one extra test over a six-month time period (95% CI 0.52 to 1.24) and
						resulted in more first-time testers as for 9.9% of the participants this was their first
						test (95% CI 7.4 to 13.8). <Reference number={1} /> Recently, the NHS has implemented a
						program whereby bowel cancer self-testing kits are sent to those eligible, which has
						seen the proportion of people choosing to participate in bowel screening has increased
						to 70.3% – the highest on record. <Reference number={2} /> Evidence from a US study
						surrounding cervical cancer (similarly under screened and prone to late diagnosis to
						endometriosis) showed, in a CRT, that Screening uptake was 72% among women who received
						mailed self-testing kits compared to 37% for the other group of women. Home-screening
						“puts women in control” and can “better reach people without access to screening”
						according to study co-author Noel T. Brewer. Currently the NHS offers at-home testing
						through the company MonitorMyHealthThe company sends a test pack to homes and offers a
						wide range of tests, all using capillary blood collection <Reference number={3} /> via a
						finger prick. The capillary tests offered by MonitorMyHealth collect either 600 or 250µl
						of blood <Reference number={4} /> . However, capillary blood tests can collect up to 1
						ml of blood meaning if more blood was needed in order to detect sufficient numbers of
						miRNA for our project there is a possibility of developing a further blood test. It is
						important to note that given restricted time in the labs we aren’t able to determine the
						precise critical value for the number of miRNA that need to be present in order for a
						positive test so the true feasibility of at-home testing cannot be determined, although
						the proposal does offer exciting scope for future development.
						<br />
						<ReferenceProvider references={atHomeTestingRefs} />
					</CustomTabPanel>
					<CustomTabPanel value={value} index={2}>
						Dr Omi Ohizua is one of the UK’s leading clinicians and emphasised the importance of an
						early screening device such as GENOSWITCH to reduce diagnostic times, particularly for
						endometriosis due to its symptoms which overlap with other conditions. He also noted the
						importance of making our tests cheaper than the current prices of ultrasound scans and
						blood tests which can exceed £200. Dr Omi also encouraged us to make our test as
						non-invasive as possible and our choice to opt for a blood test would minimize the risks
						and increase the patient uptake of the test. Dr Omi also advised our project on the
						importance of patient agency; therefore, we have made sure that the blood test can be
						done at home, sending the results off to a lab. This would not only increase the uptake
						but also increase the speed as there would lesser waiting times with a home test. Dr Omi
						suggested that if we could prove GENOSWITCH’S efficacy in clinical trials, the NHS would
						find it extremely useful. Finally, Dr Omi stated that specificity was the most important
						part of the testing process, guiding us to use 3 miRNA per condition to eliminate
						ambiguity coming from overlap between miRNA of different diseases.
					</CustomTabPanel>
					<CustomTabPanel value={value} index={3}>
						Dr Albert Aka, a gynaecologist and former Senior Consultant in Sexual and Reproductive
						Health, emphasised the importance of raising awareness, prompting our surveys, assembly
						and work with macademia to gather information and educate people on the issues of
						women’s health. Dr Aka also mentioned that women’s health conditions have an almost
						uniform negative impact on women’s careers and that when these conditions remain
						undiagnosed for many years, there is inadequate support for women in the workplace. If
						we could speed up this diagnosis process, the impact of these conditions on women’s
						careers could be drastically reduced. Dr Aka also emphasised the importance of
						non-invasive testing, drawing on his professional experience where patients were fearful
						of invasive procedures such as a laparoscopy. He also mentioned that should GENOSWITCH’s
						clinical viability be proven, he would prefer to use our testing method over those
						currently available.
					</CustomTabPanel>
				</Box>
			</Card>
		</>
	);
};

export default HPExternalOutreach;
