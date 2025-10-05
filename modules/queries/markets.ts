import { gql } from "@/modules/gql";

export const MARKET_DATA = gql(`
    query MarketData {
        marketLists {
            title
            marketItem {
                marketDate
                location
                streetAddress
                time
                description {
                    raw
                }
                photos {
                    image
                    captionAltText
                }
            }
        }
    }
`);
