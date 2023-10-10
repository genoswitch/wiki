import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import * as React from "react";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const HPExternalOutreach = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: Event, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Card raised>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs value={value} onChange={handleChange} aria-label="Disease Profiles">
						<Tab label="Macademia - Azoomee and DaVinci" {...a11yProps(0)} />z
						<Tab label="Feasibility of At-Home Testing" {...a11yProps(1)} />
						<Tab label="Dr Omi Ohizua" {...a11yProps(2)} />
						<Tab label="Dr Albert Aka" {...a11yProps(3)} />
						<Tab label="CLSG Presentation Write-up" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					As part of our education aims, we talked to a global children's online education company
					called Macademia. Macademia aims to provide educational play through games, challenges and
					engaging content for children from the ages of 2-18 years old through their two brands:
					Azoomee (for kids up to 6 years old) and DaVinci (for grown ups and kids 7+). While their
					content does not touch on women’s health, their expertise in children’s education can help
					us determine how best to capture the interest of audiences of many ages. We spoke to the
					founders of the company, Estelle and Douglas Lloyd, to gain insight on what content is
					engaged with most by young audiences so that we could incorporate these ideas into
					educational plans. Our conversations showed us that children tend to be more receptive to
					games than the bombarding of information that school health education usually entails.
					Having interactive games, videos and experiences means the information learnt will be
					remembered for much longer periods of time, and is more likely to be absorbed. When
					producing educational materials for schools to use, we would keep in mind what is most
					likely to be engaging for children as learning about women’s health requires a lot of
					information to be retained. We would also aim to make these resources a series of short
					sessions that are presented to students over a long period of time - as our research
					showed that many repeated sessions will cause the information to be stored in long-term
					memory, while one long session may also lead to wavering interest over the length of the
					session and information will not be remembered.
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					Prompted by our interview with Dr Omi, we conducted some research into the effects of
					self-testing kits in the hope that it would increase the uptake of our tests. By creating
					home-testing kits, we aim to be able to periodically test for conditions to detect them at
					a much earlier stage as well (as increase the uptake of patients for these tests). In
					other situations where at-home testing is employed, results are promising. The National
					Institute for Health and Care Research conducted an RCT for at home testing for HIV and
					found that HIV self-testing increased overall HIV test frequency by one extra test over a
					six-month time period (95% CI 0.52 to 1.24) and resulted in more first-time testers as for
					9.9% of the participants this was their first test (95% CI 7.4 to 13.8).
					<u>Ref1</u> Recently, the NHS has implemented a program whereby bowel cancer self-testing
					kits are sent to those eligible, which has seen the proportion of people choosing to
					participate in bowel screening has increased to 70.3% – the highest on record.
					<u>Ref2</u> Evidence from a US study surrounding cervical cancer (similarly under screened
					and prone to late diagnosis to endometriosis) showed, in a CRT, that Screening uptake was
					72% among women who received mailed self-testing kits compared to 37% for the other group
					of women. Home-screening “puts women in control” and can “better reach people without
					access to screening” according to study co-author Noel T. Brewer. Currently the NHS offers
					at-home testing through the company <i>MonitorMyHealth</i>.<u>Ref3</u> The company sends a
					test pack to homes and offers a wide range of tests, all using capillary blood collection
					via a finger prick.
					<u>Ref4</u> The capillary tests offered by <i>MonitorMyHealth</i> collect either 600 or
					250µl of blood.
					<u>Ref5</u> However, capillary blood tests can collect up to 1 ml of blood meaning if more
					blood was needed in order to detect sufficient numbers of miRNA for our project there is a
					possibility of developing a further blood test. It is important to note that given
					restricted time in the labs we aren’t able to determine the precise critical value for the
					number of miRNA that need to be present in order for a positive test so the true
					feasibility of at-home testing cannot be determined, although the proposal does offer
					exciting scope for future development.
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					Dr Omi Ohizua is one of the UK’s leading clinicians and emphasised the importance of an
					early screening device such as GENOSWITCH to reduce diagnostic times, particularly for
					endometriosis due to its symptoms which overlap with other conditions. He also noted the
					importance of making our tests cheaper than the current prices of ultrasound scans and
					blood tests which can exceed £200. Dr Omi also encouraged us to make our test as
					non-invasive as possible and our choice to opt for a blood test would minimize the risks
					and increase the patient uptake of the test. Dr Omi also advised our project on the
					importance of patient agency; therefore, we have made sure that the blood test can be done
					at home, sending the results off to a lab. This would not only increase the uptake but
					also increase the speed as there would lesser waiting times with a home test. Dr Omi
					suggested that if we could prove GENOSWITCH’S efficacy in clinical trials, the NHS would
					find it extremely useful. Finally, Dr Omi stated that specificity was the most important
					part of the testing process, guiding us to use 3 miRNA per condition to eliminate
					ambiguity coming from overlap between miRNA of different diseases.
				</CustomTabPanel>
				<CustomTabPanel value={value} index={3}>
					Dr Albert Aka, a gynaecologist and former Senior Consultant in Sexual and Reproductive
					Health, emphasised the importance of raising awareness, prompting our surveys, assembly
					and work with macademia to gather information and educate people on the issues of women’s
					health. Dr Aka also mentioned that women’s health conditions have an almost uniform
					negative impact on women’s careers and that when these conditions remain undiagnosed for
					many years, there is inadequate support for women in the workplace. If we could speed up
					this diagnosis process, the impact of these conditions on women’s careers could be
					drastically reduced. Dr Aka also emphasised the importance of non-invasive testing,
					drawing on his professional experience where patients were fearful of invasive procedures
					such as a laparoscopy. He also mentioned that should GENOSWITCH’s clinical viability be
					proven, he would prefer to use our testing method over those currently available.
				</CustomTabPanel>
				<CustomTabPanel value={value} index={4}>
					Engaging with those in the wider community of the City of London has been central to our
					project from the start. Ensuring that pupils around the Square Mile are made aware of the
					work we are doing is vital for inspiring a generation of budding researchers and problem
					solvers. Given we have focused on tackling female reproductive health conditions, our
					outreach at the City of London School for Girls has been especially important. Delivering
					an assembly there about our work meant explaining the technical side of things in a
					digestible way, clarifying our own understanding and ensuring that those who attended the
					assembly left it curious to find out more. The assembly was also a fantastic opportunity
					to involve pupils in our work by asking them to fill out a form about their awareness of
					the conditions we are targeting and explaining how they can join the project in Years 11
					and 12. Leaving the assembly on a positive note, highlighting how our methods could cut
					down current diagnosis times from 7.5 years to shortly after symptom onset, meant that
					pupils were left inspired and eager to join the team.
				</CustomTabPanel>
			</Box>
		</Card>
	);
};

export default HPExternalOutreach;
