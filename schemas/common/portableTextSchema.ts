export const portableTextSchema = [
  {
    type: "block",
    styles: [
      {
        title: "H1",
        value: "h1",
      },

      {
        title: "H2",
        value: "h2",
      },
      {
        title: "H3",
        value: "h3",
      },
      {
        title: "H4",
        value: "h4",
      },
      {
        title: "H5",
        value: "h5",
      },
      {
        title: "H6",
        value: "h6",
      },
      // { title: "Paragraph", value: "p" },
      {
        title: "Quote",
        value: "blockquote",
      },
    ],
    marks: {
      decorators: [
        {
          title: "Bold",
          value: "strong",
        },
        {
          title: "Italic",
          value: "em",
        },
      ],
    },
  },
];
