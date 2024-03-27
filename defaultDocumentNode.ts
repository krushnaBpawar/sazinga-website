/* eslint-disable @typescript-eslint/no-var-requires */
// ./nextjs-pages/sanity/desk/defaultDocumentNode.ts

import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import { SEOPane } from "sanity-plugin-seo-pane";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  context
) => {
  const protocol = window.location.protocol;
  const currentHost = window.location.hostname;
  const currentPort = window.location.port;
  const currentHostname = currentPort
    ? protocol + "//" + currentHost + ":" + currentPort
    : protocol + "//" + currentHost;

  switch (context.schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: any) =>
              doc?.slug?.current
                ? `${currentHostname}/api/preview/${doc.slug.current}`
                : `${currentHostname}/api/preview`,
          })
          .title("Preview Page"),
        S.view
          .component(SEOPane)
          .options({
            keywords: `seo.keywords`,
            synonyms: `seo.synonyms`,
            url: (doc: any) =>
              doc?.slug?.current
                ? `${currentHostname}/api/seo/${doc.slug.current}`
                : `${currentHostname}/api/seo`,
          })
          .title("SEO"),
      ]);

    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: any) =>
              doc?.slug?.current
                ? `${currentHostname}/api/preview/blog/${doc.slug.current}`
                : `${currentHostname}/api/preview/blog/`,
          })
          .title("Preview Page"),
        S.view
          .component(SEOPane)
          .options({
            keywords: `seo.keywords`,
            synonyms: `seo.synonyms`,
            url: (doc: any) =>
              doc?.slug?.current
                ? `${currentHostname}/api/seo/blog/${doc.slug.current}`
                : `${currentHostname}/api/seo/blog/`,
          })
          .title("SEO"),
      ]);

    case `resourceItem`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: any) =>
              doc?.slug?.current
                ? `${currentHostname}/api/preview/resource/${doc.slug.current}`
                : `${currentHostname}/api/preview/resource/`,
          })
          .title("Preview Page"),
        S.view
          .component(SEOPane)
          .options({
            keywords: `seo.keywords`,
            synonyms: `seo.synonyms`,
            url: (doc: any) =>
              doc?.slug?.current
                ? `${currentHostname}/api/seo/resource/${doc.slug.current}`
                : `${currentHostname}/api/seo/resource`,
          })
          .title("SEO"),
      ]);

    default:
      return S.document().views([S.view.form()]);
  }
};
