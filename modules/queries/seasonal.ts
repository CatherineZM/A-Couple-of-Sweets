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
                pastProduct
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
