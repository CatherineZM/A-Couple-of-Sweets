import { gql } from "@/modules/gql";

export const FEATURED_DATA = gql(`
    query FeaturedData {
        featuredLists {
            collectionName
            collectionDescription {
                raw
            }
            productList {
                photos {
                    id
                    fileName
                    size
                    width
                    height
                    url(transformation: {
                        image: {
                            resize: {
                                width: 800
                                height: 800
                                fit: crop
                            }
                        }
                    })
                }
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
