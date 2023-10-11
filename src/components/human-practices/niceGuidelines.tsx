import * as React from "react";
import Reference from "../reference";

import {
	Card,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	colors,
} from "@mui/material";
import ReferenceProvider from "../referenceProvider";
import { ReferenceType } from "../../types/reference";

type Row = {
	left: React.ReactNode;
	right: React.ReactNode;
	rightColor: string;
};

const Colours = {
	GREEN: colors.green[200],
	YELLOW: colors.yellow[200],
	RED: colors.red[200],
};

const rows: Row[] = [
	{
		left: (
			<>
				The condition being screened should be an important health problem as judged by its
				frequency and/or severity.
			</>
		),
		right: (
			<>
				<u>Endometriosis</u>
				<p>
					10% of women worldwide have endometriosis (176 million).
					<Reference prefix={"hpNiceGuidelines"} number={1} /> Symptoms include heavy periods and
					debilitating chronic pelvic pain (which is exasperated during periods and physical
					activity), and the condition / treatment can cause infertility.
					<Reference prefix={"hpNiceGuidelines"} number={2} />
				</p>
				<u>PCOS</u>
				<p>
					Polycystic Ovary Syndrome affects roughly 10% of women worldwide. It can increase the risk
					of developing type 2 diabetes and high cholesterol later in life, as well as cause
					infertility and irregular/no periods / severe menstrual pain.
					<Reference prefix={"hpNiceGuidelines"} number={3} />
				</p>
				<u>Ovarian Cancer</u>
				<p>
					There are approximately 7,500 new ovarian cancer cases in the UK each year, with a 35%
					survival rate over a ten year period.
					<Reference prefix={"hpNiceGuidelines"} number={11} /> In the US, there were an estimated
					236,511 women in the United States alone living with ovarian cancer.
					<Reference prefix={"hpNiceGuidelines"} number={10} /> Symptoms include difficulty eating
					and persistent abdominal / pelvic pain.
					<Reference prefix={"hpNiceGuidelines"} number={5} />
				</p>
				<u>Breast Cancer</u>
				<p>
					As the most common cancer worldwide
					<Reference prefix={"hpNiceGuidelines"} number={6} />, breast cancer affects both men and
					women, however it has a much higher incidence in women. In 2020, 2.3 million women were
					diagnosed with breast cancer and an estimated 685,000 of these cases resulted in death.
					<Reference prefix={"hpNiceGuidelines"} number={7} />
				</p>
				<br />
				<p>
					In combination these conditions pose a serious health threat for a wide demographic. Most
					can cause severe symptoms and some have high mortality rates as well as the possibility to
					give rise to other life-threatening conditions.
				</p>
			</>
		),
		rightColor: Colours.GREEN,
	},
	{
		left: (
			<>
				The epidemiology, incidence, prevalence and natural history of the condition should be
				understood, including development from latent to declared disease. There should be robust
				evidence about the association between the risk or disease marker and serious or treatable
				disease.
			</>
		),
		right: (
			<>
				The natural history and cause of some of the diseases is known but there is ongoing research
				into all conditions, especially breast cancer due to its high frequency. Incidence of
				conditions such as endometriosis is often an approximation, due to the long diagnosis times
				<Reference prefix={"hpNiceGuidelines"} number={2} /> and similarity of symptoms between
				multiple diseases (e.g. endometriosis, characterised by painful periods and heavy
				menstruation can be mistaken for PCOS, multiple cancers, hormonal imbalances, etc.) meaning
				the conditions often go undiagnosed or misdiagnosed. Our biology team has investigated which
				biomarkers would be most effective to test for our chosen conditions. The data they have
				collected shows a strong association between the disease markers and the diseases.
			</>
		),
		rightColor: Colours.YELLOW,
	},
	{
		left: (
			<>
				All the cost-effective primary prevention interventions should have been implemented as far
				as practicable. There are no other cost-effective interventions (such as improving treatment
				or providing other services) that could be introduced within the resources available.
			</>
		),
		right: (
			<>
				<p>
					WHO has multiple strategies to reduce global breast cancer mortality, which include three
					main pillars: health promotion for early detection, timely diagnosis, and comprehensive
					breast cancer management.
					<Reference prefix={"hpNiceGuidelines"} number={7} /> The organisation has a plan to reduce
					breast cancer mortality by 2.5% per year, thereby averting 2.5 million breast cancer
					deaths globally between 2020 and 2040. The NHS has ensured that affiliated practices
					always have easily accessible information on early symptoms of breast cancer in the form
					of leaflets.
				</p>
				<p>
					The NHS has a screening programme in place for breast cancer. Women from the ages of 50-71
					will be called in for a mammogram every 3 years.
				</p>
				<p>
					Breast cancer is usually caused by a combination of a family history with the cancer and
					getting older. This means vaccination programmes and campaigns (for example against
					smoking for lung cancers) are not applicable.
				</p>
				<p>
					There are no screening programmes currently for ovarian cancer, PCOS or endometriosis as
					there is no test that reliably / easily and effectively diagnoses these conditions in the
					early stages.
					<Reference prefix={"hpNiceGuidelines"} number={4} />
					<Reference prefix={"hpNiceGuidelines"} number={12} /> Blood tests in most cases are not
					enough to diagnose the disease and symptoms can represent a multitude of different
					diseases. Endometriosis is diagnosed through the invasive laparoscopy surgery, ovarian
					cancer through a blood test and further ultrasounds, CT scans and laparoscopies, and PCOS
					through an ultrasound scan. These diagnostic methods are difficult to provide to all women
					and are only used when the disease is suspected.
				</p>
				<p>
					For these conditions better understanding of the disease from doctors and more readily
					information about them in GP offices would be the best method of cost-effective primary
					intervention. In our human practices team we are working towards bettering education on
					these diseases and their symptoms through social media.
				</p>
			</>
		),
		rightColor: Colours.GREEN,
	},
	{
		left: <>There should be a simple, safe, precise and validated screening test.</>,
		right: (
			<>
				As we are using a cell free system, our test is safe. Our test would comprise a blood test,
				followed by miRNA purification and fluorescence measurements which are all relatively
				simple. However, for our test to be shown to be precise and validated, further
				characterisation is required with the miRNA biomarkers and validation with a large data set
				of patients.
			</>
		),
		rightColor: Colours.YELLOW,
	},
	{
		left: (
			<>
				The test, from sample collection to delivery of results, should be acceptable to the target
				population.
			</>
		),
		right: (
			<>
				From a patient’s perspective, our sensor would just be a blood test. As such there should
				not be any issues with it. We are using a cell free system which is sterile and abiotic -
				there are no bacteria involved which could potentially give rise to objections.
			</>
		),
		rightColor: Colours.GREEN,
	},
	{
		left: (
			<>
				The benefit gained from screening outweighs any harms, such as false positives, uncertain
				findings and overdiagnosis.
			</>
		),
		right: (
			<>
				<p>
					NHS screening programmes for gynaecological diseases are influential in minimising their
					mortality rate. For example, the NHS states that the screening programme for cervical
					cancer (a related condition) ‘helps save around 5,000 lives each year’.
					<Reference prefix={"hpNiceGuidelines"} number={14} />
				</p>
				<p>
					For breast cancer, screening reduces the number of deaths by about 1,300 a year in the UK.
					<Reference prefix={"hpNiceGuidelines"} number={9} /> Widespread screening programmes using
					our test would likely have a similar, if not greater effect.
				</p>
				<p>
					With a test that is less invasive people would be more open to attending their screenings
					and so the NHS would be able to prevent / treat many more cases than before, and so the
					test would be a huge benefit to both the NHS and the population.
				</p>
				<p>
					Our test would not be offered as a conclusive diagnosis, it would only act as an efficient
					and cost-effective tool to show if a patient should be referred for further testing. As
					our diagnostic tool removes the need for years of GP visits, various medications and
					stress (from the lack of diagnosis), it allows for a much less labour-intensive diagnostic
					process for the patient and will take strain off of the NHS.
				</p>
				<p>
					Overdiagnosis and false positives could pose an issue for the test, but our tool combined
					with other established testing methods should provide an incredibly accurate diagnosis.
				</p>
			</>
		),
		rightColor: Colours.GREEN,
	},
	{
		left: (
			<>
				There should be an agreed policy on further diagnostic investigation of individuals with
				positive test results, as well as which individuals should be offered interventions, and
				which interventions are appropriate to be offered. There should be evidence that
				intervention at a pre-symptomatic phase leads to better outcomes compared to usual care.
				Evidence relating to wider benefits of screening should be taken into account.
			</>
		),
		right: (
			<>
				<p>
					After testing positive using our tool, you would be referred back to the NHS to undergo
					the full diagnostic procedure for the disease (e.g. a laparoscopy for endometriosis). This
					would be to ensure and validate the diagnosis, as our test is not conclusive.
				</p>
				<p>
					There is ‘robust evidence’ to suggest that cancer survival rates are higher at early
					stages of diagnosis, especially with breast and ovarian cancers.
					<Reference prefix={"hpNiceGuidelines"} number={15} /> For conditions such as PCOS or
					endometriosis, earlier diagnosis could help patients deal with pain and discomfort, or
					receive treatments earlier on.
				</p>
			</>
		),
		rightColor: Colours.GREEN,
	},
	{
		left: (
			<>
				The testing, diagnosis and treatment, administration, training and quality assurance of the
				screening programme should be economically balanced with the expenditure on medical care as
				a whole.
			</>
		),
		right: (
			<>
				N/A - We do not have the data to support a cost-effectiveness model / to show the possible
				expenditure as our diagnostic tool has not been run through clinical trials.
			</>
		),
		rightColor: Colours.YELLOW,
	},
	{
		left: (
			<>
				<p>
					Potential participants should be provided with evidence-based information explaining the
					purpose and potential consequences of screening and preventative intervention or
					treatment.
				</p>
				<p>
					Public pressure for widening the eligibility criteria and for increasing the sensitivity
					of the testing process should be anticipated. Decisions about these parameters should be
					scientifically justifiable to the public.
				</p>
			</>
		),
		right: (
			<>
				When the individual is being screened, information, similar to that on our wiki, could be
				presented to them. Evidence for the efficacy of screening could only be given once clinical
				trials have been carried out. The screening interval could also be optimised from these
				trials.
			</>
		),
		rightColor: Colours.YELLOW,
	},
	{
		left: (
			<>
				<p>
					There should be a plan for managing and monitoring the screening programme and an agreed
					set of quality assurance standards.
				</p>
				<p>
					Adequate staffing and facilities for testing, diagnosis, treatment and programme
					management should be available prior to the commencement of the screening programme.
				</p>
				<p>
					Clinical management of the condition and patient outcomes should be optimised in all
					health care providers prior to participation in a screening programme.
				</p>
			</>
		),
		right: (
			<>
				<p>
					Clinical management of PCOS, endometriosis and ovarian and breast cancers are optimised by
					NICE. NICE would be in charge of creating management and monitoring plans for our test,
					were it to be used clinically. Our test would allow healthcare staff, facilities and ward
					space to be freed up for other patients.
					<Reference prefix={"hpNiceGuidelines"} number={13} />
				</p>
				<p>
					Early detection would reduce the number of cancers diagnosed at later stages where the
					only option is palliative care, which is more expensive than earlier stage treatment.
				</p>
				<p>
					Easier and more accessible detection of diseases like endometriosis and PCOS would reduce
					the number of GP visits, for example in the case of endometriosis where 51% of
					pre-diagnosis endometriosis patients will see their GP 10 or more times with symptoms.
					<Reference prefix={"hpNiceGuidelines"} number={8} />
					An effective test would allow patients to receive their diagnoses quickly and so not need
					to continually see healthcare professionals for their symptoms, which would free up
					healthcare facilities and allow patients to receive intervention faster.
				</p>
			</>
		),
		rightColor: Colours.GREEN,
	},
	{
		left: (
			<>
				<p>
					There should be evidence that the complete screening programme (test, diagnostic
					procedures, treatment/ intervention) is clinically, socially and ethically acceptable to
					health professionals and the public.
				</p>
				<p>
					There should be evidence from high quality randomised controlled trials that the screening
					programme is effective in reducing mortality or morbidity, as well as measuring risk for
					tests that provide information on making an ‘informed choice’. The individual being
					screened must readily understand this information.
				</p>
				<p>
					The distribution of test values in the target population should be known and a suitable
					cut-off level defined and agreed.
				</p>
			</>
		),
		right: (
			<>
				N/A as this data is only obtainable after testing. Our diagnostic tools would have to
				undergo large-scale clinical trials to ensure the screening programme would be effective in
				reducing mortality or morbidity. This data would allow the public to make an informed choice
				about the diagnostic tool, which would also ensure it is socially and ethically acceptable
				to health professionals and the public.
			</>
		),
		rightColor: Colours.YELLOW,
	},
];

const references: ReferenceType[] = [
	{
		number: 1,
		author:
			"Meuleman, C., Vandenabeele, B., Fieuws, S., Spiessens, C., Timmerman, D. and D’Hooghe, T.",
		title:
			"High prevalence of endometriosis in infertile women with normal ovulation and normospermic partners",
		journal: "Fertility and Sterility.",
		volume: "92(1), pp.68-74",
		published_date: "July 2009",
		link: "https://www.fertstert.org/article/S0015-0282(08)00975-8/fulltext",
	},
	{
		number: 2,
		author: "NHS England",
		title: "Endometriosis - Overview",
		journal: "N/A",
		volume: "N/A",
		published_date: "September 2022",
		link: "https://www.nhs.uk/conditions/endometriosis/",
	},
	{
		number: 3,
		author: "NHS England",
		title: "Polycystic Ovary Syndrome - Overview",
		journal: "N/A",
		volume: "N/A",
		published_date: "October 2022",
		link: "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/",
	},
	{
		number: 4,
		author: "Cancer Research UK",
		title: "Screening for ovarian cancer",
		journal: "N/A",
		volume: "N/A",
		published_date: "N/A",
		link: "https://www.cancerresearchuk.org/about-cancer/ovarian-cancer/getting-diagnosed/screening",
	},
	{
		number: 5,
		author: "NHSinform",
		title: "Ovarian cancer symptoms and treatments",
		journal: "",
		volume: "",
		published_date: "February 2023",
		link: "https://www.nhsinform.scot/illnesses-and-conditions/cancer/cancer-types-in-adults/ovarian-cancer",
	},
	{
		number: 6,
		author:
			"Sung, H., Ferlay, J., Siegel, R.L., Laversanne, M., Soerjomataram, I., Jemal, A. and Bray, F.",
		title:
			"Global Cancer Statistics 2020: GLOBOCAN Estimates of Incidence and Mortality Worldwide for 36 Cancers in 185 Countries",
		journal: "CA: Cancer Journal for Clinicians",
		volume: "71(3), pp.209-249",
		published_date: "2021",
		doi: "10.3322/caac.21660",
	},
	{
		number: 7,
		author: "World Health Organisation",
		title: "Breast Cancer",
		journal: "N/A",
		volume: "N/A",
		published_date: "July 2023",
		link: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer",
	},
	{
		number: 8,
		author: "All Party Parliamentary Group",
		title: "Endometriosis in the UK: time for change",
		journal: "N/A",
		volume: "N/A",
		published_date: "2020",
		link: "https://www.endometriosis-uk.org/sites/default/files/files/Endometriosis%20APPG%20Report%20Oct%202020.pdf",
	},
	{
		number: 9,
		author: "Cancer Research UK",
		title: "Breast Cancer Screening",
		journal: "N/A",
		volume: "N/A",
		published_date: "May 2023",
		link: "https://www.cancerresearchuk.org/about-cancer/breast-cancer/getting-diagnosed/screening-breast",
	},
	{
		number: 10,
		author: "National Cancer Institute",
		title: "Cancer Stat Facts: Ovarian Cancer",
		journal: "N/A",
		volume: "N/A",
		published_date: "2018",
		link: "https://seer.cancer.gov/statfacts/html/ovary.html",
	},
	{
		number: 11,
		author: "Cancer Research UK",
		title: "Ovarian cancer statistics",
		journal: "N/A",
		volume: "N/A",
		published_date: "N/A",
		link: "https://www.cancerresearchuk.org/health-professional/cancer-statistics/statistics-by-cancer-type/ovarian-cancer",
	},
	{
		number: 12,
		author: "NHS England",
		title: "Diagnosis - Polycystic ovary syndrome",
		journal: "N/A",
		volume: "N/A",
		published_date: "October 2022",
		link: "https://www.fertstert.org/article/S0015-0282(08)00975-8/fulltext",
	},
	{
		number: 13,
		author: "Cancer Research UK",
		title:
			"Saving lives, averting costs - An analysis of the financial implications of achieving earlier diagnosis of colorectal, lung and ovarian cancer",
		journal: "N/A",
		volume: "N/A",
		published_date: "September 2014",
		link: "https://www.cancerresearchuk.org/sites/default/files/saving_lives_averting_costs.pdf",
	},
	{
		number: 14,
		author: "NHS England",
		title: "NHS urges women to book a cervical screening as a third don’t take up vital offer",
		journal: "N/A",
		volume: "N/A",
		published_date: "January 2023",
		link: "https://www.england.nhs.uk/2023/01/nhs-urges-women-to-book-a-cervical-screening-as-a-third-dont-take-up-vital-offer",
	},
	{
		number: 15,
		author: "Hawkes, N.",
		title: "Cancer survival data emphasise importance of early diagnosis",
		journal: "BMJ",
		volume: "(8185), p.l408",
		published_date: "January 2019",
		doi: "10.1136/bmj.l408",
	},
];

const NiceGuidelines = () => {
	return (
		<>
			<Card raised>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="nice guidelines table">
						<TableHead>
							<TableRow>
								<TableCell>
									<b>UK NSC Criteria</b>
								</TableCell>
								<TableCell>
									<b>Our Diagnostic Tool</b>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => (
								<TableRow key={`niceRow-${rows.indexOf(row)}`}>
									<TableCell>{row.left}</TableCell>
									<TableCell style={{ backgroundColor: row.rightColor }}>{row.right}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Card>
			<ReferenceProvider prefix={"hpNiceGuidelines"} references={references} />
		</>
	);
};

export default NiceGuidelines;
