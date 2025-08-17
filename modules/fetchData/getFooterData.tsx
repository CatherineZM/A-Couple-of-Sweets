// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { FOOTER_DATA } from "@/modules/queries/index";
import { MdEmail } from "react-icons/md";

export default async function getFooterData(): Promise<{
    footerData: any;
}> {
    const data = await gqlClient.request(FOOTER_DATA);

    const pageData = data.contactInfos[0];

    const footerData = {
        bio: pageData.bio,
        location: pageData.location,
        instagram: pageData.instagram,
        email: pageData.instagram,
    };

    return { footerData };
}
