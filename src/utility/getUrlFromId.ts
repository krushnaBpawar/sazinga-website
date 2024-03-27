export const getUrlFromId = (ref: string) => {
  // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
  // We don't need the first part, unless we're using the same function for files and images
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${id}.${extension}`;
};
