/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query AboutData {\n        aboutUses {\n            title\n            aboutList {\n                title\n                description {\n                    raw\n                }\n                photo {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n": typeof types.AboutDataDocument,
    "\n    query AchievementData {\n        achievementLists {\n            title\n            achievementItem {\n                date\n                name\n                description {\n                    raw\n                }\n                image\n            }\n        }\n    }\n": typeof types.AchievementDataDocument,
    "\n    query CollectionData {\n        collectionsPages {\n            title\n            description {\n                raw\n            }\n        }\n    }\n": typeof types.CollectionDataDocument,
    "\n    query FooterData {\n        contactInfos {\n            bio {\n                raw\n            }\n            location {\n                raw\n            }\n            instagram\n            email\n        }\n    }\n": typeof types.FooterDataDocument,
    "\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": typeof types.FeaturedDataDocument,
    "\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n            announcement {\n                raw\n            }\n        }\n    }\n": typeof types.HomeDataDocument,
    "\n    query MarketData {\n        marketLists {\n            title\n            marketItem {\n                marketDate\n                location\n                streetAddress\n                time\n                description {\n                    raw\n                }\n                photos {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n": typeof types.MarketDataDocument,
    "\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": typeof types.SeasonalDataDocument,
};
const documents: Documents = {
    "\n    query AboutData {\n        aboutUses {\n            title\n            aboutList {\n                title\n                description {\n                    raw\n                }\n                photo {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n": types.AboutDataDocument,
    "\n    query AchievementData {\n        achievementLists {\n            title\n            achievementItem {\n                date\n                name\n                description {\n                    raw\n                }\n                image\n            }\n        }\n    }\n": types.AchievementDataDocument,
    "\n    query CollectionData {\n        collectionsPages {\n            title\n            description {\n                raw\n            }\n        }\n    }\n": types.CollectionDataDocument,
    "\n    query FooterData {\n        contactInfos {\n            bio {\n                raw\n            }\n            location {\n                raw\n            }\n            instagram\n            email\n        }\n    }\n": types.FooterDataDocument,
    "\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": types.FeaturedDataDocument,
    "\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n            announcement {\n                raw\n            }\n        }\n    }\n": types.HomeDataDocument,
    "\n    query MarketData {\n        marketLists {\n            title\n            marketItem {\n                marketDate\n                location\n                streetAddress\n                time\n                description {\n                    raw\n                }\n                photos {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n": types.MarketDataDocument,
    "\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": types.SeasonalDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query AboutData {\n        aboutUses {\n            title\n            aboutList {\n                title\n                description {\n                    raw\n                }\n                photo {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query AboutData {\n        aboutUses {\n            title\n            aboutList {\n                title\n                description {\n                    raw\n                }\n                photo {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query AchievementData {\n        achievementLists {\n            title\n            achievementItem {\n                date\n                name\n                description {\n                    raw\n                }\n                image\n            }\n        }\n    }\n"): (typeof documents)["\n    query AchievementData {\n        achievementLists {\n            title\n            achievementItem {\n                date\n                name\n                description {\n                    raw\n                }\n                image\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query CollectionData {\n        collectionsPages {\n            title\n            description {\n                raw\n            }\n        }\n    }\n"): (typeof documents)["\n    query CollectionData {\n        collectionsPages {\n            title\n            description {\n                raw\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FooterData {\n        contactInfos {\n            bio {\n                raw\n            }\n            location {\n                raw\n            }\n            instagram\n            email\n        }\n    }\n"): (typeof documents)["\n    query FooterData {\n        contactInfos {\n            bio {\n                raw\n            }\n            location {\n                raw\n            }\n            instagram\n            email\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n            announcement {\n                raw\n            }\n        }\n    }\n"): (typeof documents)["\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n            announcement {\n                raw\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query MarketData {\n        marketLists {\n            title\n            marketItem {\n                marketDate\n                location\n                streetAddress\n                time\n                description {\n                    raw\n                }\n                photos {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query MarketData {\n        marketLists {\n            title\n            marketItem {\n                marketDate\n                location\n                streetAddress\n                time\n                description {\n                    raw\n                }\n                photos {\n                    image\n                    captionAltText\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                pastProduct\n                productPhoto\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;