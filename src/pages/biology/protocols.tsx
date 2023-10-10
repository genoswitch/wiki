import * as React from "react";

import HeaderFooterProvider from "../../components/headerFooterProvider";
import { Head as BaseHead } from "../../components/head";
import { Container } from "@mui/material";
import BiologyProtocols from "../../components/biologyprotocols";

export default class BiologyProtocolsPage extends React.Component {
	render(): React.ReactNode {
		return (
			<HeaderFooterProvider>
				<Container>
					<h1>Biology Protocols</h1>
					<b>
						In this section, you will find all the protocols that we used during our time in the
						labs.
					</b>
				</br>
					Please click through the tabs below to look at each of our protocols.
				<br/>
					<BiologyProtocols />
				</Container>
			</HeaderFooterProvider>
		);
	}
}
export const Head = () => <BaseHead title="Biology Protocols" description="TBD" />;
