import { GraphQLClient } from "graphql-request";
import { GetServerSidePropsResult } from "next";

export const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
});

export async function getServerSideProps(
    query: any
): Promise<GetServerSidePropsResult<any>> {
    const data = await gqlClient.request(query);

    return { props: data };
}
