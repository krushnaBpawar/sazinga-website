export default function ZohoForm({ html }: { html: string }) {
    return (
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      </>
    );
  }