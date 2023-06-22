import * as React from "react"

import { graphql, PageProps } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import { CreditEntry } from "../components/team/creditEntry";
import { TeamMemberNode } from "../types/teamMemberNode";

// TypeScript type def for the component state
// https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript
interface TeamPageState {
    isReady: boolean
}

// Use React.PureComponent for TS types on this.props <https://github.com/gatsbyjs/gatsby/issues/8431#issue-362717669>
export default class TeamPage extends React.PureComponent<PageProps<Queries.GetAllTeamMembersAndAssetBasePathQuery>, TeamPageState>  {
    constructor(props: PageProps<Queries.GetAllTeamMembersAndAssetBasePathQuery>) {
        super(props);

        this.state = {
            isReady: false
        }
    }

    // TODO: Definitely assigned (!) - is this wise?
    members!: Queries.GetAllTeamMembersAndAssetBasePathQuery;

    entries: CreditEntry[] = [];

    componentDidMount(): void {
        this.setState({ isReady: false })

        // Set this.members to the result of the query
        this.members = this.props.pageResources.json.data;

        // Iterate over each member and create a entry for each.
        this.members.allTeamMember.nodes.forEach((member: TeamMemberNode) => {
            console.log(`Adding entry for '${member.name}'`)
            this.entries.push(
                <CreditEntry member={member} assetBasePath={this.props.pageResources.json.data.site?.siteMetadata?.assetBasePath} />
            )
            this.setState({ isReady: true })
        })
    }
    render(): React.ReactNode {
        if (!this.state["isReady"]) {

            return (<div>
                Preparing...
            </div>)
        } else {
            return (
                <div>
                    {this.entries}
                </div>
            )
        }
    }
}


/**
 * Get all team members (excluding the Example), ordered by position.
 * 
 * If position is null, the team member will be placed at the bottom of the list.
 * Note that at present the null-positioned members are not sorted alphabetically.

 */
export const query = graphql`
    query GetAllTeamMembersAndAssetBasePath {
        allTeamMember(sort: {position: ASC}, filter: {name: {ne: "Example"}}) {
            nodes {
                name
                picturePath
                title
                description
                tags
                position
            }
        }
        site {
            siteMetadata {
                assetBasePath
            }
        }
    }
`