import * as React from "react";

import { Container } from "@mui/material";

interface VideoUniverseProps {
    embedId: string;
    title: string
}

export default class VideoUniverse extends React.Component<VideoUniverseProps, {}> {
    constructor(props: VideoUniverseProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div style={{ paddingBottom: "16px" }}>
                {/** https://faq.dailymotion.com/hc/en-us/articles/360022841393-How-to-preserve-the-player-aspect-ratio-on-a-responsive-page **/}
                <Container sx={{ position: "relative", paddingBottom: "56.25%" /** 16:9 */ }}>
                    <iframe
                        title={this.props.title}
                        // style: Fill box
                        style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
                        src={`https://video.igem.org/videos/embed/${this.props.embedId}?subtitle=en`}
                        frameBorder="0"
                        allowFullScreen={true}
                        sandbox="allow-same-origin allow-scripts allow-popups"
                    />
                </Container>
            </div>
        )
    }
}