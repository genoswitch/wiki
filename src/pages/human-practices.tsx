import * as React from "react";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";
import { Container } from "@mui/material";

export default class HumanPractices extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Human Practices</h1>
					<div style={{ padding: 8 }}></div>
					<h2>Project Impact</h2>
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
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Human Practices" description="TBD" />;
