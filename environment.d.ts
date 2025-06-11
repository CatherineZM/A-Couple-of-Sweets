declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // BASE_URL: string;
            NEXT_PUBLIC_HYGRAPH_API: string;
            NEXT_HYGRAPH_TOKEN: string;
        }
    }
}

export {};
