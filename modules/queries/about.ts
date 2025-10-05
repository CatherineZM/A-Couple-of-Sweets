import { gql } from "@/modules/gql";

export const ABOUT_DATA = gql(`
    query AboutData {
        aboutUses {
            title
            aboutList {
                title
                description {
                    raw
                }
                image
            }
        }
    }
`);