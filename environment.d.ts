declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BASE_URL: string;
            HYGRAPH_URL: string;
            HYGRAPH_TOKEN: string;
            NEXT_PUBLIC_HYGRAPH_ENDPOINT: string;
        }
    }
}

export {};
