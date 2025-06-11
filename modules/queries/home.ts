import { gql } from "@/modules/gql";

export const HOME_DATA = gql(`
    query HomeData {
        homePages {
            welcome
            slogan {
                raw
            }
        }
    }
`);
