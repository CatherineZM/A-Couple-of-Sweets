// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { FEATURED_DATA } from "@/modules/queries/index";

export default async function getFeaturedData(): Promise<{
    featuredLists: Array<any>;
}> {
    const data = await gqlClient.request(FEATURED_DATA);

    const featuredLists = data.featuredLists;

    return { featuredLists };
}
