import * as React from "react";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";
import { Container } from "@mui/material";
import { navigate } from "gatsby";

export default class HumanPracticesPage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Human Practices</h1>
					<h2 style={{ paddingTop: 8 }}>
						<u>Values of our Project</u>
					</h2>
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
					<h2 style={{ paddingTop: 8 }}>Outreach/Survey</h2>
					“What are the most pressing issues in women's healthcare today?”. This is one of the big
					questions that the City of London iGEM team was tasked with answering when developing
					Project Genoswitch. To find out more, we surveyed the wider community, asking a range of
					questions which provided us with an insight into the importance of education of female
					healthcare.
					<br />
					<img src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/figure1.webp" />
					Interestingly, respondents ranked their awareness of women's health concerns at 5.51 out
					of 10 on average. There was a range of 4 across age groups, as seen in Figure 1. However,
					those between 50 and 60 had the highest average of 8 out of 10, and those aged between 19
					and 25 had the lowest average of 4. When comparing responses between men and women, there
					was an average difference of 0.71, which was much lower than expected. On average, women
					rated their awareness of women's health concerns at 5.83/10, whereas men ranked their
					awareness of women's health concerns at 5.12/10. This highlighted the general limited
					access to female health education, and the impact this has on both men and women. As many
					of the participants were of school age, we expected a significant number of people to be
					receiving health information from their schools.
					<br />
					<img src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/figure2.webp" />
					However, as seen in Figure 2, only 41.9% of respondents got any kind of information from
					their schools, with many saying that the information they received was “surface level”,
					“minimal", “focused on biology GCSE”, and not discussed outside of science lessons. The
					internet was shown to be the second most popular place to find information, with 65.3% of
					surveyors getting information from family and friends. Some participants identified that
					it was due to the lack of direction towards trustworthy information online, as many used
					social media but were unsure about the reliability of the content they saw. By asking
					family and friends about the issues surrounding female healthcare, participants were able
					to understand the impact it has on people they are close to, but many mentioned they did
					not understand the bodily processes that occur when someone has a period, or what it means
					to have PCOS. This lack of knowledge was reflected in the general inability to name
					symptoms of common health problems in women, specifically endometriosis, PCOS, ovarian
					cancer, and breast cancer.
					<br />
					<img src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/figure3.webp" />
					As shown in Figure 3, the group who consistently had the largest proportion of people
					unable to name any symptoms of these diseases were men. Overall, it can be seen that
					participants struggled the most to name symptoms of ovarian cancer, with PCOS at a close
					second.
					<br />
					<img src="https://static.igem.wiki/teams/4642/wiki/human-practices/survey/figure4.webp" />
					To gain an understanding of what knowledge participants had of these diseases, they were
					asked to name common symptoms of PCOS, endometriosis, ovarian cancer, and breast cancer.
					The symptoms most frequently identified were 'lump', 'pain', and 'period', as shown in
					Figure 4. Another shocking statistic was men only being able to name 7/10 common symptoms
					between the 4 diseases mentioned. This once again showed us the importance of educating
					people on these conditions, which have the propensity to impact 50% of the population. To
					play our part in educating the community, we created short profiles summarising the main
					symptoms, diagnostic methods and barriers to diagnosis of PCOS, endometriosis, ovarian
					cancer, and breast cancer. Many of the respondents of the survey expressed a desire to
					know more about these diseases. By creating these profiles, we are able to share brief and
					useful information about an area of healthcare which many people are unaware of.
					<h2 style={{ paddingTop: 8 }}>
						<u>Disease Profiles</u>
					</h2>
					<u> James please upload it here!!!!!</u>
					<h2 style={{ paddingTop: 8 }}>External Outreach</h2>
					We decided that the social impact of our project, centred around raising awareness and
					empowering women in the workplace was appropriate having researched charities such as
					Endometriosis UK and consulted gynaecologists. The emphasis experts placed on the lack of
					awareness from the general population made it clear to us that educating those around us,
					be it classmates or those in younger years was essential to the social impact of our
					project. We also spoke with gynaecologists about the scientific inadequacies surrounding
					women’s health which, as pointed out by Dr Aka, stems from a chronic lack of funding. We
					subsequently decided that our project would make significant scientific progress. Finally,
					we saw from Project Batman that there was significant potential in using toehold switches
					to diagnose conditions at an accelerated rate. Thus, we decided that this project, and
					making the toehold switches modular, would be a significant advancement in diagnostic
					science related to miRNA.
					<h3 style={{ paddingTop: 8 }}>Macademia - Azoomee and DaVinci</h3>
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
					<h3 style={{ paddingTop: 8 }}>Feasibility of At-Home Testing</h3>
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
					<h3 style={{ paddingTop: 8 }}>Dr Omi Ohizua</h3>
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
					<h3 style={{ paddingTop: 8 }}>Dr Albert Aka</h3>
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
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Human Practices" description="TBD" />;
