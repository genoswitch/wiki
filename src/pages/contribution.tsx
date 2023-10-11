import * as React from "react";

import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import HeaderFooterProvider from "../components/headerFooterProvider";
import { Head as BaseHead } from "../components/head";

type Part = {
    part: string;
    designer: string;
};

type miRNA = {
    miRNA: string;
    disease: string;
    source: string;
};

export default class HumanPracticesPage extends React.Component {
    parts: Part[] = [
        {
            part: "Test",
            designer: "Ryan Yapa",
        },

    ];

    miRNA: miRNA[] = [
        {
            miRNA: "miRNA1",
            disease: "Disease1",
            source: "Source",
        },

    ];

    render(): React.ReactNode {
        return (
            <HeaderFooterProvider>
                <Container>
                    <h1>Contribution</h1>

                    Welcome to the genoswitch wiki! Our Contribution page is a work-in-progress at the moment, but feel free to check out other pages using the navigation bar!

                    <h2>Parts</h2>
                    We have developed a number of parts this year, for future teams to use in their projects:
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="Part Table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <b>miRNA</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Disease</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Source</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.miRNA.map(miRNA => (
                                    <TableRow key={miRNA.miRNA}>
                                        <TableCell>{miRNA.miRNA}</TableCell>
                                        <TableCell>{miRNA.disease}</TableCell>
                                        <TableCell>{miRNA.source}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h2>Collaborative miRNA Database</h2>
                    We have started a Collaborative miRNA database, which we hope future teams will expand upon, and use
                    in their future projects using toehold switches and more! You can find our full list below:
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="Part Table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <b>Part</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Designed by</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.parts.map(part => (
                                    <TableRow key={part.part}>
                                        <TableCell>{part.part}</TableCell>
                                        <TableCell>{part.designer}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Container>
            </HeaderFooterProvider>
        );
    }
}
export const Head = () => <BaseHead title="Contribution" description="TBD" />;
