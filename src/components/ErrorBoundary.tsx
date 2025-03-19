import Layout from "~/components/layout/Layout";
import SEO from "~/components/common/Seo";
import Container from "~/components/utility/Container";

import { isRouteErrorResponse } from "react-router";

interface ErrorBoundaryProps {
  error: unknown;
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <SEO title="404: Not found" />

        <Container small={true}>
          <h1>NOT FOUND</h1>
          <p>You just tried a page that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Layout>
    );
  } else if (error instanceof Error) {
    return (
      <Layout>
        <SEO title="Error" />

        <Container small={true}>
          <h1>ERROR</h1>
          <p>{error.message}</p>
        </Container>
      </Layout>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default ErrorBoundary;
