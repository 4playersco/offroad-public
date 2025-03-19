import type { FC } from "react";
import { Helmet } from "react-helmet-async";

import { siteMetadata } from "~/config";

type SEOProps = {
  description?: string;
  lang?: string;
  meta?:
    | { name: string; content: string; property?: undefined }
    | { property: string; content: string; name?: undefined }[];
  keywords?: string[];
  title: string;
};

const SEO: FC<SEOProps> = ({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title,
}) => {
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
