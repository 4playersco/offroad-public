import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

import IndexPage from "~/pages";
import AboutPage from "~/pages/About";
import ContactPage from "~/pages/Contact";
import LegalPage from "~/pages/Legal";
import MembershipPage from "~/pages/Membership";
// import NewsPage from "~/pages/News";
import RunInfoPage from "~/pages/RunInfo";
import ThanksPage from "~/pages/Thanks";

import "~/assets/styles/global.scss";

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
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/news" element={<NewsPage />} /> */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/run-info" element={<RunInfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thanks" element={<ThanksPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route index path="/" element={<IndexPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ApolloProvider>
  </StrictMode>
);
