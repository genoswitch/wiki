import * as React from "react";

import { Container } from "@mui/material";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";

import HPDiseaseProfiles from "../components/human-practices/diseaseProfiles";
import HPExternalOutreach from "../components/human-practices/externalOutreach";
import HPEducation from "../components/human-practices/education";
import NiceGuidelines from "../components/human-practices/niceGuidelines";
import SWOTAnalysis from "../components/human-practices/swotanalysis";

export default class HumanPracticesPage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Human Practices</h1>
					<h2 style={{ paddingTop: 8 }}>SWOT Analysis</h2>
					<SWOTAnalysis />
					<h2 style={{ paddingTop: 8 }}>Values of our Project</h2>
					When designing our project, we focused our efforts on making a test that would have a
					strong social and scientific impact. It was important to us to create a tool that both
					empowered females and helped healthcare professionals diagnose these diseases. We are
					using a cell-free system, meaning our test is safe, has very few possible complications
					and is a process relatively familiar to the general public. Unlike the current invasive
					procedures, our tool consists of a simple blood test, so it is much more accessible and
					should be much less costly for the NHS. Due to the familiarity of a simple blood test,
					which many people will have had before, the test will have less anxiety associated with it
					compared to other diagnostic procedures such as a laparoscopy. Patients will still have to
					undergo the regular procedure after testing positive, but we believe that our test will
					greatly increase the number of people who are willing to get tested initially, as instead
					of going through a surgical procedure they can take a straightforward and easy lateral
					flow test. As well as this, our diagnostic tool should decrease wait times for diagnosis,
					as GPs can ask patients to take the test immediately after identifying their symptoms. In
					addition, we have made an effort to educate the public through iGEM sessions at school and
					a social media outreach programme. We did this to make sure that our project didn't just
					focus on diagnosis, but also worked to increase awareness about females' health issues and
					how to spot symptoms early, so that females don;t need to be in the late stages of their
					condition to notice it.
					<h2 style={{ paddingTop: 8 }}>Responsible and User-minded Design</h2>
					Currently, the diagnostic processes for endometriosis, PCOS and breast and cervical
					cancers are mostly invasive and uncomfortable for patients. As there are no other options
					for diagnosis, when a GP suspects a patient has one of these conditions, they undergo a
					long process to rule out any other option, and then a surgical procedure to diagnose
					definitively. Our tool would help reduce the time between a patient presenting their
					symptoms and diagnosis, as it is accessible and easy-to-use, meaning it can be taken as
					soon as the diseases are suspected. As well as this, females might be more likely to get
					tested regularly because the test is much faster and only requires a simple blood test. As
					part of our project, we would recommend introducing a screening programme similar to those
					already in place for cervical and breast cancers, as they have been influential in saving
					lives by catching diseases early. We would also endeavour to make this test a part of the
					yearly health checks that females undergo after turning 40 (if we were to build a company
					from this product). With our test, we would help more people get diagnosed in the earliest
					stages, greatly reducing the damage the condition can inflict across the conditions. As
					well as this, our test would reduce the burden on GPs and the NHS to screen for and
					diagnose these conditions, as our tool is more cost-effective and convenient than the full
					diagnostic tests, so GPs can be more certain in their decision to send patients for
					surgical procedures. At the moment, our diagnostic tool is being tested with the four
					conditions listed above, but the aim of our project is for it to be used for a multitude
					of diseases that could fit the test. Since the test is modular, the toehold switch
					mechanisms can be modified to be able to identify most blood biomarkers for any disease.
					This means the benefit our test gives to the world would be expanded to a larger
					demographic, not just those who experience gynaecological diseases.
					<h2 style={{ paddingTop: 8 }}>Project Impact</h2>
					We hope that our project can drastically decrease the time between symptoms arising, and a
					diagnosis of diseases such as endometriosis, PCOS, ovarian cancer, and breast cancer, at a
					fraction of the cost of current diagnostic methods. At present, many patients struggle to
					get a diagnosis for these conditions, having to struggle to convince medical professionals
					that the symptoms that they face are real. By producing a more efficient tool for
					diagnosis, we hope that the unnecessary suffering that patients go through whilst waiting
					for a diagnosis would be minimised. We also hope that by increasing education in these
					diseases, as if more people are aware of symptoms of diseases, understanding of these
					conditions will increase. As a result, we have led sessions for pupils in CLS, CLSG, and a
					session with the year 6 cohort of City Junior School, with the hope of further educating
					young people on these diseases, to help them in the future. Our sessions also had the aim
					of teaching pupils about Genetic Engineering, hopefully inspiring them to do further
					research into the field, and be members of the City of London UK teams in the future. We
					envision that our tool would be used by phlebotomy departments in Integrated Care Systems
					in the NHS, to test blood samples of patients in the early stages of a referral to a
					secondary healthcare, or patients who have been referred to the department to form the
					basis of a preliminary diagnosis of PCOS, Endometriosis, Cervical Cancer & Breast Cancer.
					This would be done through the use of a blood test (which can be done in GP Surgeries,
					before being sent to the lab, or in the department itself), a sample can be taken and
					miRNA can be detected using our tool. As a result, a preliminary diagnosis for
					endometriosis, PCOS, ovarian cancer, and breast cancer can be given, to more quickly
					provide grounds for referrals to more specialised tests to confirm the diagnosis. We
					believe that by using our tool, a diagnosis of these diseases can occur more rapidly,
					easily, and cost-effectively, ultimately decreasing the level of suffering of patients
					awaiting a diagnosis.
					<h2 style={{ paddingTop: 8 }}>Fundraising</h2>
					We began by forming a fundraising strategy roughly outlining the steps we would take:
					write an investment brief, create a fundraising pitch deck. Then email the brief to every
					biotech investment firm under the sun, livery companies, biotech design companies,
					charities, past investors of the COL iGEM projects and anyone we thought might be
					interested, and then pitch to any companies that wanted an in-person pitch. When writing
					our investment brief, we kept it accessible to those who had experience in biotech
					investment and those who didn’t. We included the intricate details of our project and how
					it worked but also ensured that anyone who skimmed through this very biology-heavy section
					would still fully understand the project and its aims. First and foremost, one will
					usually write how the investment will benefit them and their team; however, we emphasised
					how these investing individuals and companies would profit from the exposure that our iGEM
					team would bring them. In the iGEM jamboree, in front of many teams and companies, their
					logo (either in pitch decks, on our team hoodies etc.) would be displayed - demonstrating
					their philanthropy and kindness. In the end, we didn’t have to give in person pitches to
					any of our investors - but our biggest win was emphasising how a contribution would
					benefit us, and also how it would benefit them!
					<h2 style={{ paddingTop: 8 }}>Data Collection</h2>
					“What are the most pressing issues in women's healthcare today?”. This is one of the big
					questions that the City of London iGEM team was tasked with answering when developing
					Project Genoswitch. To find out more, we surveyed the wider community, asking a range of
					questions which provided us with an insight into the importance of education of female
					healthcare.
					<br />
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/figure1.webp"
					/>
					<p>
						Interestingly, respondents ranked their awareness of women's health concerns at 5.51 out
						of 10 on average. There was a range of 4 across age groups, as seen in Figure 1.
						However, those between 50 and 60 had the highest average of 8 out of 10, and those aged
						between 19 and 25 had the lowest average of 4. When comparing responses between men and
						women, there was an average difference of 0.71, which was much lower than expected. On
						average, women rated their awareness of women's health concerns at 5.83/10, whereas men
						ranked their awareness of women's health concerns at 5.12/10. This highlighted the
						general limited access to female health education, and the impact this has on both men
						and women. As many of the participants were of school age, we expected a significant
						number of people to be receiving health information from their schools.
					</p>
					<br />
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/figure2.webp"
					/>
					<p>
						However, as seen in Figure 2, only 41.9% of respondents got any kind of information from
						their schools, with many saying that the information they received was “surface level”,
						“minimal", “focused on biology GCSE”, and not discussed outside of science lessons. The
						internet was shown to be the second most popular place to find information, with 65.3%
						of surveyors getting information from family and friends. Some participants identified
						that it was due to the lack of direction towards trustworthy information online, as many
						used social media but were unsure about the reliability of the content they saw. By
						asking family and friends about the issues surrounding female healthcare, participants
						were able to understand the impact it has on people they are close to, but many
						mentioned they did not understand the bodily processes that occur when someone has a
						period, or what it means to have PCOS. This lack of knowledge was reflected in the
						general inability to name symptoms of common health problems in women, specifically
						endometriosis, PCOS, ovarian cancer, and breast cancer.
					</p>
					<br />
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/figure3.webp"
					/>
					<p>
						As shown in Figure 3, the group who consistently had the largest proportion of people
						unable to name any symptoms of these diseases were men. Overall, it can be seen that
						participants struggled the most to name symptoms of ovarian cancer, with PCOS at a close
						second.
					</p>
					<br />
					<img
						style={{ maxWidth: "100%" }}
						src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/hp-figure4-1.webp"
					/>
					<p>
						To gain an understanding of what knowledge participants had of these diseases, they were
						asked to name common symptoms of PCOS, endometriosis, ovarian cancer, and breast cancer.
						The symptoms most frequently identified were 'lump', 'pain', and 'heavy periods', as
						shown in Figure 4. Another shocking statistic was men only being able to name 7/10
						common symptoms between the 4 diseases mentioned. This once again showed us the
						importance of educating people on these conditions, which have the propensity to impact
						50% of the population. To play our part in educating the community, we created short
						profiles summarising the main symptoms, diagnostic methods and barriers to diagnosis of
						PCOS, endometriosis, ovarian cancer, and breast cancer. Many of the respondents of the
						survey expressed a desire to know more about these diseases. By creating these profiles,
						we are able to share brief and useful information about an area of healthcare which many
						people are unaware of.
					</p>
					<h2 style={{ paddingTop: 8 }}>Disease Profiles</h2>
					<HPDiseaseProfiles />
					<h2 style={{ paddingTop: 8 }}>External Outreach</h2>
					<HPExternalOutreach />
					<h2 style={{ paddingTop: 8 }}>Education</h2>
					<HPEducation />
					<h2 style={{ paddingTop: 8 }}>UK NSC Criteria for Screening Programmes</h2>
					We have assessed our project against the UK National Screening Committee's criteria for
					appraising the viability, effectiveness and appropriateness of a population screening
					programme. Each criteria has been marked as: Green for fulfilled, yellow for partially met
					/ unable to complete, red for unfulfilled.
					<br/>
					<i>
						Some criteria can not be fulfilled as of yet as we have not put our test through
						clinical trials.
					</i>
					<NiceGuidelines />
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Human Practices" description="TBD" />;
