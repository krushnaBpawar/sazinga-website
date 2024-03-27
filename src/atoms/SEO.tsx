// components/SEO.js
import Head from "next/head";
import Script from "next/script";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  slug?: string;
};
const SEO = ({ title, description, url, slug }: SEOProps) => (
  <Head>
    <div></div>
    {/* <title>{title}</title>
    {slug && <link rel="canonical" href={`https://optimus.tech${slug}`} />}
    {description && <meta name="description" content={description} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {slug && <meta property="og:url" content={`https://optimus.tech${slug}`} />}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/andriod-chrome-favicon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/andriod-chrome-favicon-512x512.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-94D66R713Z"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-94D66R713Z');
  `,
      }}
    ></script>
    "
    <script
      type="text/javascript"
      id="zsiqchat"
      dangerouslySetInnerHTML={{
        __html: `
                var $zoho = $zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode: "siqadee0c066e741cf62e30386959a41e1a62094d53e9932057a377b51e2e975174", values: {}, ready: function() {}};
                var d = document;
                var s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "https://salesiq.zohopublic.in/widget";
                var t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);
              `,
      }}
    ></script>
    <script
      type="text/javascript"
      id="zsiqfunctionalitychbox"
      dangerouslySetInnerHTML={{
        __html: `
            document.getElementById("zsiqfunctionalitychbox").checked = false;
              `,
      }}
    ></script>
    <script
      type="text/javascript"
      id="zsiqanalyticschbox"
      dangerouslySetInnerHTML={{
        __html: `
            document.getElementById("zsiqanalyticschbox").checked = false;
              `,
      }}
    ></script>
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "l85tod865q");
          `,
      }}
    ></script>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
 __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Optimus Fintech Inc",
            "url": "https://optimus.tech/",
            "logo": "https://cdn.sanity.io/images/yirofz7m/production/6bc57b02f8a39fe10e3db61c7932426a70947295-1180x558.svg",
            "image": [
              "https://cdn.sanity.io/images/yirofz7m/production/6bc57b02f8a39fe10e3db61c7932426a70947295-1180x558.svg",
              "https://cdn.sanity.io/images/yirofz7m/production/0f3919474cbb28bf3968ae6a7fac04decd759a12-1106x921.png"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "(732) 609-2536",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://twitter.com/OptimusFintech",
              "https://www.linkedin.com/company/optimus-fintech-inc/"
            ]
          }
        ` }} />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-11223117686"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11223117686');
        `,
      }}
    ></script> */}
    {/* <script
      dangerouslySetInnerHTML={{
        __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-11223117686/EwXqCLjqit8YEPbezOcp',
              'event_callback': callback
            });
            return false;
          }
        `,
      }}
    ></script>
    
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script> */}
  </Head>
);

export default SEO;
