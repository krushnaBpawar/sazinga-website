export type BlogData = {
  timetoRead: string;
  content: any[]; // Use a more specific type if the content array structure is known
  coverImage: Record<string, any>; // Use a more specific type if the coverImage object structure is known
  excerpt: string;
  layout: Record<string, any>; // Use a more specific type if the layout object structure is known
  category: Record<string, any>; // Use a more specific type if the category object structure is known
  title: string;
  slug: Record<string, any>; // Use a more specific type if the slug object structure is known
  date: string;
};
