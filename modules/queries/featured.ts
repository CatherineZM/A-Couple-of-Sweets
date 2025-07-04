import { gql } from "@/modules/gql";

export const FEATURED_DATA = gql(`
    query FeaturedData {
        featuredLists {
            collectionName
            collectionDescription {
                raw
            }
            productList {
                photos {
                    id
                    fileName
                    size
                    url
                    width
                    height
                }
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
