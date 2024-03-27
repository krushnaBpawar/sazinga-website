import { Reference } from "./Reference";
import { SectionItem } from "./SectionItem";
import { Slug } from "./Slug";

export type Page = {
  _createdAt: string;
  _rev: string;
  _id: string;
  _updatedAt: string;
  isProductPage: boolean;
  slug: Slug;
  footerSection: Reference;
  navbar: Reference;
  _type: "page";
  pageName: string;
  pageDescription: string;
  sections: SectionItem[];
  isBlogRecommendationsNeeded?: boolean;
};
