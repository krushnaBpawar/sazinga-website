import { BlogData } from "./BlogData";

export type SectionItem = {
  sectionName: string;
  twoColumnLayout?: Record<string, any>; // Replace with the actual type if known
  pointerLayout?: Record<string, any>; // Replace with the actual type if known
  lineBreak?: boolean;
  textBlock?: Record<string, any>; // Replace with the actual type if known
  banner?: Record<string, any>; // Replace with the actual type if known
  _type?: "sectionItems";
  _key: string;
  blogData?: BlogData;
  resourceData?: any;
  blogsPreview?: any;
};
