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
    "\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": typeof types.FeaturedDataDocument,
    "\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n        }\n    }\n": typeof types.HomeDataDocument,
    "\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": typeof types.SeasonalDataDocument,
};
const documents: Documents = {
    "\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": types.FeaturedDataDocument,
    "\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n        }\n    }\n": types.HomeDataDocument,
    "\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n": types.SeasonalDataDocument,
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
export function gql(source: "\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query FeaturedData {\n        featuredLists {\n            collectionName\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n        }\n    }\n"): (typeof documents)["\n    query HomeData {\n        homePages {\n            welcome\n            slogan {\n                raw\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query SeasonalData {\n        seasonalDrops {\n            collectionName\n            pastCollection\n            homepageDisplay\n            collectionDescription {\n                raw\n            }\n            productList {\n                photos {\n                    id\n                    fileName\n                    size\n                    url\n                    width\n                    height\n                }\n                name\n                price {\n                    raw\n                }\n                dietary\n                flavour {\n                    flavourName\n                    flavourPrice {\n                        raw\n                    }\n                    dietary\n                    flavourDescription {\n                        raw\n                    }\n                }\n                shortDescription {\n                    raw\n                }\n                fullDescription {\n                    raw\n                }\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;