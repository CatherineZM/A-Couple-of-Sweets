declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // BASE_URL: string;
            NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
            NEXT_CLOUDINARY_API_KEY: string;
            NEXT_CLOUDINARY_API_SECRET: string;
            NEXT_PUBLIC_HYGRAPH_API: string;
            NEXT_HYGRAPH_TOKEN: string;
        }
    }
}

export {};
