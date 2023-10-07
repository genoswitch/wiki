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
					empowered women and helped healthcare professionals diagnose women's diseases. We are
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
					focus on diagnosis, but also worked to increase awareness about women's health issues and
					how to spot symptoms early, so that women don’t need to be in the late stages of their
					condition to notice it.
					<h2 style={{ paddingTop: 8 }}>Ethics 3 (Title TBC)</h2>
					Currently, the diagnostic processes for endometriosis, PCOS and breast and cervical
					cancers are mostly invasive and uncomfortable for patients. As there are no other options
					for diagnosis, when a GP suspects a patient has one of these conditions, they undergo a
					long process to rule out any other option, and then a surgical procedure to diagnose
					definitively. Our tool would help reduce the time between a patient presenting their
					symptoms and diagnosis, as it is accessible and easy-to-use, meaning it can be taken as
					soon as the diseases are suspected. As well as this, women might be more likely to get
					tested regularly because the test is much faster and only requires a simple blood test. As
					part of our project, we would recommend introducing a screening programme similar to those
					already in place for cervical and breast cancers, as they have been influential in saving
					lives by catching diseases early. We would also endeavour to make this test a part of the
					yearly health checks that women undergo after turning 40 (if we were to build a company
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
					<h2 style={{ paddingTop: 8 }}>Disease Profiles</h2>
					<h3 style={{ paddingTop: 4 }}>Endometriosis</h3>
					<i>Average time until formal diagnosis after onset of symptoms: 7-9 years</i>
					<h3 style={{ paddingTop: 4 }}>Barriers to Diagnosis:</h3>
					Social:
					<ul>
						<li>
							Normalisation of pain in women, symptoms disregarded as more severe menstrual symptoms
							- which aren't usually addressed.
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
					<h3 style={{ paddingTop: 4 }}>Groups predominantly affected:</h3>
					<ul>
						<li>30-40 year old women.</li>
						<li>Those who have not had children.</li>
						<li>Those whose menstrual cycle usually lasts more than 7 days.</li>
					</ul>
					<h3 style={{ paddingTop: 4 }}>Usual symptoms:</h3>
					<ul>
						<li>Pain in your lower tummy or back - pelvic pain – usually worse during your period.</li>
						<li>Period paid that stops you doing your normal activities.</li>
						<li>pain during or after sex.</li>
						<li>Pain when peeing or pooping during your period.</li>
						<li>Feeling sick, constipation, diarrhoea, or blood in your urine or faeces during your period.</li>
						<li>Difficulty getting pregnant.</li>
						<li>Very heavy bleeding.</li>
						<li>Depression / low mood.</li>
						<li>Pain in other areas of the body (bleeding and damage to organs).</li>
						<li>Increased likelihood of infections.</li>
					</ul>
					<h3 style={{ paddingTop: 4 }}>Current Diagnostic Method:</h3>
						There is only one definitive method: a laparoscopy. This is a surgery where a small cut is made below the navel and a camera is inserted in the pelvis to check for pelvic abnormalities. It is a highly invasive procedure that can cause infection, bleeding and organ damage.
					<h2 style={{ paddingTop: 8 }}>External Outreach (Title TBC)</h2>
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Human Practices" description="TBD" />;
