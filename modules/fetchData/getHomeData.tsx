// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { HOME_DATA } from "@/modules/queries/index";

export default async function getHomeData(): Promise<{
    homeData: {welcome: string; slogan: any; announcement: any;}
}> {
    const data = await gqlClient.request(HOME_DATA);

    const pageData = data.homePages[0];

    const homeData = {
        welcome: pageData.welcome,
        slogan: pageData.slogan,
        announcement: pageData.announcement
    };

    return { homeData };
}
