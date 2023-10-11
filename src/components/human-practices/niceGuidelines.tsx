import * as React from "react";
import Reference from "../reference";

import "./niceGuidelines.css"
import { colors } from "@mui/material";

type RowProps = {
    left: React.ReactNode;
    right: React.ReactNode;
    rightColor: string;
}

const Colours = {
    GREEN: colors.green[200],
    YELLOW: colors.yellow[200],
    RED: colors.red[200]

}


const Row = ({ left, right, rightColor }: RowProps) => {
    return (
        <tr>
            <td>
                {left}
            </td>
            <td style={{ backgroundColor: rightColor }}>
                {right}
            </td>
        </tr>
    )

};

const NiceGuidelines = () => {
    return (
        <>
            <table>
                <tr>
                    <th>
                        <b>UK NSC Criteria</b>
                    </th>
                    <th>
                        <b>
                            Our Diagnostic Tool
                        </b>
                    </th>
                </tr>
                <Row left={
                    <>
                        The condition being screened should be an important health problem as judged by its frequency and/or severity.
                    </>
                } right={
                    <>
                        <u>Endometriosis</u>
                        <p>1
                            0% of women worldwide have endometriosis (176 million).<Reference prefix={"hpNiceGuidelines"} number={1} /> Symptoms include heavy periods and debilitating chronic pelvic pain (which is exasperated during periods and physical activity), and the condition / treatment can cause infertility.<Reference prefix={"hpNiceGuidelines"} number={2} />
                        </p>
                        <u>PCOS</u>
                        <p>
                            Polycystic Ovary Syndrome affects roughly 10% of women worldwide. It can increase the risk of developing type 2 diabetes and high cholesterol later in life, as well as cause infertility and irregular/no periods / severe menstrual pain.<Reference prefix={"hpNiceGuidelines"} number={3} />
                        </p>
                        <u>Ovarian Cancer</u>
                        <p>
                            There are approximately 7,500 new ovarian cancer cases in the UK each year, with a 35% survival rate over a ten year period.11 In the US, there were an estimated 236,511 women in the United States alone living with ovarian cancer.<Reference prefix={"hpNiceGuidelines"} number={10} /> Symptoms include difficulty eating and persistent abdominal / pelvic pain.<Reference prefix={"hpNiceGuidelines"} number={5} />
                        </p>
                        <u>Breast Cancer</u>
                        <p>
                            As the most common cancer worldwide<Reference prefix={"hpNiceGuidelines"} number={6} />, breast cancer affects both men and women, however it has a much higher incidence in women. In 2020, 2.3 million women were diagnosed with breast cancer and an estimated 685,000 of these cases resulted in death.<Reference prefix={"hpNiceGuidelines"} number={7} />
                        </p>
                        <br />
                        <p>
                            In combination these conditions pose a serious health threat for a wide demographic. Most can cause severe symptoms and some have high mortality rates as well as the possibility to give rise to other life-threatening conditions.
                        </p>
                    </>
                } rightColor={Colours.GREEN} />

                <Row left={"placeholder"} right={"placeholder"} rightColor={Colours.YELLOW} />

                <Row left={"placeholder"} right={"placeholder"} rightColor={Colours.RED} />
            </table>
        </>
    )
};

export default NiceGuidelines;
