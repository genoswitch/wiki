import * as React from "react";

import Footer from "./footer";
import NavBar from "./navbar";

type HeaderFooterProviderProps = {
    data?: Queries.FooterDataQuery;
}

export default class HeaderFooterProvider extends React.Component<HeaderFooterProviderProps, {}> {
    render(): React.ReactNode {
        return (
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} className="hfp-root">
                <NavBar />
                <div style={{ flexGrow: 1 }} className="hfp-container">
                    {this.props.children}
                </div>
                {/** Footer: data is optional */}
                <Footer data={this.props.data} />
            </div>
        )
    }
}