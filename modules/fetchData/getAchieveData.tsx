// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { ACHIEVEMENT_DATA } from "@/modules/queries/index";

export default async function getAchieveData(): Promise<{
    achieveData: any;
}> {
    const data = await gqlClient.request(ACHIEVEMENT_DATA);

    const pageData = data.achievementLists[0];

    const achieveData = {
        title: pageData.title,
        achievementItem: pageData.achievementItem,
    };

    return { achieveData };
}
