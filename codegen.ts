
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://us-west-2.cdn.hygraph.com/content/cmbgejxxs04t607w9bf4he98s/master",
    documents: "modules/queries/*.ts",
    generates: {
        "modules/gql/": {
            preset: "client",
            plugins: [],
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
};

export default config;
