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

const HPEducation = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: Event, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Card raised>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs value={value} onChange={handleChange} aria-label="Disease Profiles">
						<Tab label="Our Education Strategy" {...a11yProps(0)} />z
						<Tab label="Assembly at CLSG" {...a11yProps(1)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
                One of our main aims for the project was education. The problem we have encountered many times during our research is the lack of knowledge around PCOS, endometriosis, breast and ovarian cancer. When we carried out a survey we collected data that corroborated our theories - that very few people (especially men) are capable of naming the main symptoms of these four diseases. One of the great benefits of our test is the speed at which it provides results in comparison to modern day diagnostic methods; however, if no one can identify the symptoms to begin with, they will not be aware that they should test themselves. This is when we decided to make education one of the goals of our project.
We initially established social media presence on Instagram, Twitter and Facebook - ensuring we tended to the trending platforms for all age groups. On these platforms, we shared posts about our project and will continue to share easily digestible information about the diseases our project is focused on.
Our engagement in the two schools began with an article in The Citizen, the CLS (City of London School (for boys)) weekly newspaper to start conversations about our project and the diseases we were researching, accompanied by articles in the weekly newsletters at CLSG (City of London School for Girls). We then followed up with an assembly at CLSG talking about our project, the diseases and overall about synthetic biology.
We also spoke to Macademia, an international kids EdTech company that focuses on online education for children between the ages of 2-18 years old and adults to gain more of an understanding on what is the most engaging for this age group. They gave us advice on how to make information digestible especially when tackling topics that require a lot of information to be communicated in a short space of time.
Overall, we sought the expertise of experienced individuals in the field of education for children to produce interactive assemblies and online resources - reaching the school community through newsletters, magazines and newspapers. Also using our school communities to collect information through a survey that helped further inform our project and increase our understanding.
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
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

export default HPEducation;
