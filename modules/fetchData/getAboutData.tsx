// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { ABOUT_DATA } from "@/modules/queries/index";

export default async function getAboutData(): Promise<{
    aboutData: any;
}> {
    const data = await gqlClient.request(ABOUT_DATA);

    const pageData = data.aboutUses[0];

    const aboutData = {
        title: pageData.title,
        aboutList: pageData.aboutList,
    };

    return { aboutData };
}
