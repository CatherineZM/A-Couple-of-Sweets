import { gql } from "@/modules/gql";

export const ACHIEVEMENT_DATA = gql(`
    query AchievementData {
        achievementLists {
            title
            achievementItem {
                date
                name
                description {
                    raw
                }
                image
            }
        }
    }
`);
