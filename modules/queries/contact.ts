import { gql } from "@/modules/gql";

export const FOOTER_DATA = gql(`
    query FooterData {
        contactInfos {
            bio {
                raw
            }
            location {
                raw
            }
            instagram
            email
        }
    }
`);
