import * as React from "react";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";

type Hazard = {
    name: string,
    riskHazards: string,
    precautions: string,
    infoSource: string

}


export default class BiologySafety extends React.Component {

    hazards: Hazard[] = [
        {
            name: "Ampicillin",
            riskHazards: "Irritating to eyes, respiratory system, and skin.",
            precautions: "Avoid personal contact and wear protective clothing when in use. Thoroughly clean containers.",
            infoSource: "https://datasheets.scbt.com/sc-210812.pdf"
        }, {
            name: "5M NaOH",
            riskHazards: "Skin corrosion/irritation, serious eye damage, damage to respiratory system if fumes are inhaled.",
            precautions: "Wear suitable protective clothing, and wash hands and other exposed areas before exiting the work area. Work in an area of good ventilation.",
            infoSource: "http://www.labchem.com/tools/msds/msds/LC24450.pdf"
        }
    ]

    render(): React.ReactNode {

        return (
            <HeaderFooterProvider>
                <div style={{ padding: 16 }}>
                    <Typography variant="h3">Biology Safety</Typography>

                    <Typography variant="h4">Project Safety Assessment</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Name of Hazard</b></TableCell>
                                    <TableCell><b>Risks/Hazards</b></TableCell>
                                    <TableCell><b>Safety Precautions</b></TableCell>
                                    <TableCell><b>Source of Information</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.hazards.map(hazard => (
                                    <TableRow key={hazard.name}>
                                        <TableCell>{hazard.name}</TableCell>
                                        <TableCell>{hazard.riskHazards}</TableCell>
                                        <TableCell>{hazard.precautions}</TableCell>
                                        <TableCell>{hazard.infoSource}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </HeaderFooterProvider>
        )
    }

}

export const Head = () => (
    <BaseHead
        title="Biology Safety"
        description="TBD"
    />
);
