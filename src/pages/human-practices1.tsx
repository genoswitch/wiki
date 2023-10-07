import * as React from "react";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";
import { Container } from "@mui/material";

export default class HumanPracticesPage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Human Practices</h1>
					<h2 style={{ paddingTop: 8 }}>Ethics (Title TBC)</h2>
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
					<h2 style={{ paddingTop: 8 }}>Ethics 3 (Title TBC)</h2>
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
					surgical procedures.
					<br />
					At the moment, our diagnostic tool is being tested with the four conditions listed above,
					but the aim of our project is for it to be used for a multitude of diseases that could fit
					the test. Since the test is modular, the toehold switch mechanisms can be modified to be
					able to identify most blood biomarkers for any disease. This means the benefit our test
					gives to the world would be expanded to a larger demographic, not just those who
					experience gynaecological diseases.
					<h2 style={{ paddingTop: 8 }}>Project Impact</h2>
					We hope that our project can drastically decrease the time between symptoms arising, and a
					diagnosis of diseases such as endometriosis, PCOS, ovarian cancer, and breast cancer, at a
					fraction of the cost of current diagnostic methods. At present, many patients struggle to
					get a diagnosis for these conditions, having to struggle to convince medical professionals
					that the symptoms that they face are real. By producing a more efficient tool for
					diagnosis, we hope that the unnecessary suffering that patients go through whilst waiting
					for a diagnosis would be minimised.
					<br />
					We also hope that by increasing education in these diseases, as if more people are aware
					of symptoms of diseases, understanding of these conditions will increase. As a result, we
					have led sessions for pupils in CLS, CLSG, and a session with the year 6 cohort of City
					Junior School, with the hope of further educating young people on these diseases, to help
					them in the future. Our sessions also had the aim of teaching pupils about Genetic
					Engineering, hopefully inspiring them to do further research into the field, and be
					members of the City of London UK teams in the future.
					<br />
					We envision that our tool would be used by phlebotomy departments in Integrated Care
					Systems in the NHS, to test blood samples of patients in the early stages of a referral to
					a secondary healthcare, or patients who have been referred to the department to form the
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
					<h2 style={{ paddingTop: 8 }}>Disease Profiles</h2>
					<h3 style={{ paddingTop: 2 }}>Endometriosis</h3>
					<i>Average time until formal diagnosis after onset of symptoms: 7-9 years.</i>
					<h4 style={{ paddingTop: 4 }}>Barriers to Diagnosis:</h4>
					Social:
					<ul>
						<li>
							Normalisation of pain in females, symptoms disregarded as more severe menstrual
							symptoms - which aren't usually addressed.
						</li>
						<li>Stigma surrounding periods and menstruation.</li>
						<li>Lack of non-invasive means to diagnose the condition.</li>
					</ul>
					<br />
					Medical:
					<ul>
						<li>May not be painful, and so might not be flagged to doctors.</li>
						<li>Many different clinical presentations.</li>
						<li>Uncertainty surrounding normal and abnormal pain in the female genitalia.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Groups predominantly affected:</h4>
					<ul>
						<li>30-40 year old females.</li>
						<li>Those who have not had children.</li>
						<li>Those whose menstrual cycle usually lasts more than 7 days.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Usual symptoms:</h4>
					<ul>
						<li>
							Pain in your lower tummy or back - pelvic pain – usually worse during your period.
						</li>
						<li>Period paid that stops you doing your normal activities.</li>
						<li>Pain during or after sex.</li>
						<li>Pain when peeing or pooping during your period.</li>
						<li>
							Feeling sick, constipation, diarrhoea, or blood in your urine or faeces during your
							period.
						</li>
						<li>Difficulty getting pregnant.</li>
						<li>Very heavy bleeding.</li>
						<li>Depression / low mood.</li>
						<li>Pain in other areas of the body (bleeding and damage to organs).</li>
						<li>Increased likelihood of infections.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Current Diagnostic Method:</h4>
					There is only one definitive method: a laparoscopy. This is a surgery where a small cut is
					made below the navel and a camera is inserted in the pelvis to check for pelvic
					abnormalities. It is a highly invasive procedure that can cause infection, bleeding and
					organ damage.
					<h3 style={{ paddingTop: 6 }}>PCOS</h3>
					<i>Average time until formal diagnosis after onset of symptoms: 2-3 years.</i>
					<h4 style={{ paddingTop: 4 }}>Barriers to Diagnosis:</h4>
					Symptoms (such as heavy menstrual bleeding or irregular periods) could have a variety of
					potential causes:
					<ul>
						<li>Uterine fibroids</li>
						<li>Polyps.</li>
						<li>Bleeding disorders (haemophilia, etc.).</li>
						<li>Certain medications.</li>
						<li>Pelvic inflammatory disease.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Groups predominantly affected:</h4>
					<ul>
						<li>All females of reproductive age.</li>
						<li>
							People with type 1, type 2 or gestational diabetes, hypertension, metabolic syndrome
							or dyslipidemia (or a family history of any of these)
						</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Usual symptoms:</h4>
					<ul>
						<li>Irregular periods or no periods.</li>
						<li>Difficulty getting pregnant as a result of irregular ovulation or no ovulation.</li>
						<li>Excessive hair growth (hirsutism) usually on the face, chest, back or buttocks</li>
						<li>Weight gain.</li>
						<li>Thinning hair and hair loss.</li>
						<li>Oily skin or acne.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Current Diagnostic Method:</h4>
					There is no single test for diagnosing PCOS. Patients will undergo an ultrasound (to look
					for a high number of follicles in your ovary) and a blood test (testing for low FSH
					levels).
					<br />
					Patients must then meet 2 of 3 “official” criteria to be diagnosed:
					<ul>
						<li>Irregular or infrequent periods.</li>
						<li>Blood tests show high levels of “male hormones” such as testosterone.</li>
						<li>Scans showing polycystic ovaries.</li>
					</ul>
					<h3 style={{ paddingTop: 2 }}>Ovarian Cancer</h3>
					<i>
						Average global time until formal diagnosis after onset of symptoms: 31 weeks, or 7.75
						months.
					</i>
					<h4 style={{ paddingTop: 4 }}>Barriers to Diagnosis:</h4>
					Social:
					<ul>
						<li>Doctors not taking concerns seriously.</li>
						<li>Lack of access to healthcare services.</li>
						<li>Lack of knowledge about ovarian cancer.</li>
					</ul>
					<br />
					Medical:
					<ul>
						<li>Non-specific presentations.</li>
						<li>No reliable screening tests to detect the disease in early stages.</li>
						<li>
							Vague symptoms, which often undetected until it has spread to the pelvis and abdomen.
						</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Groups predominantly affected:</h4>
					<ul>
						<li>
							Those with a family history of breast, ovarian, endometrial or colorectal cancer
							(Those with BRCA1 and BRCA2 gene mutations).
						</li>
						<li>Post-menopausal females.</li>
						<li>Those of Ashkenazi descent.</li>
						<li>Those who have not delivered children.</li>
						<li>Those with endometriosis.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Usual symptoms:</h4>
					<ul>
						<li>Increased abdominal size/bloating that does not go away.</li>
						<li>Difficulty eating.</li>
						<li>Feeling full quickly.</li>
						<li>Pain in pelvic and abdominal regions.</li>
						<li>Urgent or frequent urination.</li>
						<li>Changes in bowel habits.</li>
						<li>Abnormal bleeding.</li>
						<li>Extreme fatigue.</li>
						<li>Unexplained weight loss.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Current Diagnostic Method:</h4>A blood test and scans are
					done first, but other tests are needed to diagnose ovarian cancer. Whilst Ultrasounds, CT
					scans, laparoscopies and laparotomies are commonly used, a biopsy is the only definitive
					way to diagnose ovarian cancer.
					<h3 style={{ paddingTop: 2 }}>Breast Cancer</h3>
					<i>
						Average time until formal diagnosis after onset of symptoms: 16 days for symptomatic
						patients, up to 3 months otherwise.
					</i>
					<h4 style={{ paddingTop: 4 }}>Barriers to Diagnosis:</h4>
					Social:
					<ul>
						<li>
							Stigma surrounding cancer, as some people think that it is infectious or discriminate
							against those who are sick.
						</li>
						<li>Access and cost of care.</li>
						<li>Inadequate knowledge about breast cancer and its presentation.</li>
					</ul>
					<br />
					Medical:
					<ul>
						<li>Unavailability of speciality physicians.</li>
						<li>Low quality of health care.</li>
						<li>Misdiagnosis and long waiting times.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Groups predominantly affected:</h4>
					<ul>
						<li>Females.</li>
						<li>Females over the age of 50.</li>
						<li>Those with a family history of breast cancer or ovarian cancer.</li>
						<li>Those with dense breast tissue.</li>
						<li>
							Increased exposure to oestrogen (those who had periods at a young age or experienced
							menopause later than normal).
						</li>
						<li>Not having children, or having children late in life.</li>
						<li>Those taking the contraceptive pill.</li>
						<li>Those who are overweight or obese.</li>
						<li>Those with exposure to radiation.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Usual symptoms:</h4>
					<ul>
						<li>Breast Lumps.</li>
						<li>Change in size or shape of one or both breasts.</li>
						<li>Discharge of fluid from nipples.</li>
						<li>Lumps or swelling in armpits.</li>
						<li>Change in look or feel of skin.</li>
						<li>Change in appearance of nipple.</li>
						<li>Rash, crusting, scaly or itchy skin on or around nipple.</li>
					</ul>
					<h4 style={{ paddingTop: 4 }}>Current Diagnostic Method:</h4>A GP examination will be
					followed by a referral to a specialist breast cancer clinic. A mammogram and/or ultrasound
					is then used to further examine the lump(s). A sample of cells are then taken from the
					breast in a biopsy and are tested to see if they are cancerous.
					<h2 style={{ paddingTop: 8 }}>External Outreach (Title TBC)</h2>
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
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Human Practices" description="TBD" />;