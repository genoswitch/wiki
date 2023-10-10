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

const HPDiseaseProfiles = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: Event, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Card raised>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs value={value} onChange={handleChange} aria-label="Disease Profiles">
						<Tab label="Endometriosis" {...a11yProps(0)} />
						<Tab label="PCOS" {...a11yProps(1)} />
						<Tab label="Ovarian Cancer" {...a11yProps(2)} />
						<Tab label="Breast Cancer" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
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
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
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
					levels). Patients must then meet 2 of 3 “official” criteria to be diagnosed:
					<ul>
						<li>Irregular or infrequent periods.</li>
						<li>Blood tests show high levels of “male hormones” such as testosterone.</li>
						<li>Scans showing polycystic ovaries.</li>
					</ul>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
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
				</CustomTabPanel>
				<CustomTabPanel value={value} index={3}>
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
				</CustomTabPanel>
			</Box>
		</Card>
	);
};

export default HPDiseaseProfiles;
