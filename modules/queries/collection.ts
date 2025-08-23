import { gql } from "@/modules/gql";

export const COLLECTION_DATA = gql(`
    query CollectionData {
        collectionsPages {
            title
            description {
                raw
            }
        }
    }
`);
