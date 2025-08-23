// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { COLLECTION_DATA } from "@/modules/queries/index";

export default async function getCollectionData(): Promise<{
    collection: any;
}> {
    const data = await gqlClient.request(COLLECTION_DATA);

    const collection = data.collectionsPages;

    return { collection };
}
