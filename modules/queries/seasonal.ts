import { gql } from "@/modules/gql";

export const SEASONAL_DATA = gql(`
    query SeasonalData {
        seasonalDrops {
            collectionName
            pastCollection
            homepageDisplay
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
