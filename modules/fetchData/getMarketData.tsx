// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { MARKET_DATA } from "@/modules/queries/index";

export default async function getMarketData(): Promise<{
    marketData: any;
}> {
    const data = await gqlClient.request(MARKET_DATA);

    const pageData = data.marketLists[0];

    const marketData = {
        title: pageData.title,
        marketItem: pageData.marketItem
    };

    return { marketData };
}
