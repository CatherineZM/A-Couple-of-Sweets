import { gql } from "@/modules/gql";

export const FEATURED_DATA = gql(`
    query FeaturedData {
        featuredLists {
            collectionName
            collectionDescription {
                raw
            }
            productList {
                productPhoto
                name
                price {
                    raw
                }
                dietary
                flavour {
                    flavourName
                    flavourPrice {
                        raw
                    }
                    dietary
                    flavourDescription {
                        raw
                    }
                }
                shortDescription {
                    raw
                }
                fullDescription {
                    raw
                }
            }
        }
    }
`);
