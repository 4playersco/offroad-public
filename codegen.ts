import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const {
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_ENVIRONMENT,
  VITE_CONTENTFUL_ACCESS_TOKEN,
} = process.env;

const config: CodegenConfig = {
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${VITE_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENTFUL_ENVIRONMENT}`]:
      {
        headers: {
          Authorization: `Bearer ${VITE_CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
  },
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./src/__generated__/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
