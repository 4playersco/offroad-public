import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const {
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_ENVIRONMENT,
  VITE_CONTENTFUL_ACCESS_TOKEN,
} = import.meta.env;

const httpLink = new HttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${VITE_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENTFUL_ENVIRONMENT}`,
  headers: {
    Authorization: `Bearer ${VITE_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const link = ApolloLink.from([httpLink]);

// https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
