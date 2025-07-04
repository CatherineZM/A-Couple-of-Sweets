// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { SEASONAL_DATA } from "@/modules/queries/index";

export default async function getSeasonalData(): Promise<{
    productLists: Array<any>;
}> {
    const data = await gqlClient.request(SEASONAL_DATA);

    const productLists = data.seasonalDrops;

    return { productLists };
}
