import banner from "@files/schemas/banner";
import blogAuthor from "@files/schemas/blogs/blogAuthor";
import blogCategory from "@files/schemas/blogs/blogCategory";
import blogPost from "@files/schemas/blogs/blogPost";
import blogspreview from "@files/schemas/blogs/blogPreview";
import brandList from "@files/schemas/brandList";
import footer from "@files/schemas/common/footer/footer";
import leftFooterSection from "@files/schemas/common/footer/leftFooterSection";
import rightFooterSection from "@files/schemas/common/footer/rightFooterSection";
import footerAddressList from "./common/footer/footerAddressList";
import imageCards from "@files/schemas/common/imageCards";
import sectionItems from "@files/schemas/common/sectionItems";
import error from "@files/schemas/error";
import flipcardLayout from "@files/schemas/flipcardLayout";
import forms from "@files/schemas/forms";
import lineBreak from "@files/schemas/lineBreak";
import navbar from "@files/schemas/navbarItems/navbar";
import navbarMenuItems from "@files/schemas/navbarItems/navbarMenuItems";
import oneColumnLayout from "@files/schemas/oneColumnLayout";
import page from "@files/schemas/page/page";
import pointer from "@files/schemas/pointers/pointer";
import pointerSection from "@files/schemas/pointers/pointerSection";
import cardSection from "@files/schemas/cards/cardSection";
import card from '@files/schemas/cards/card';
import productCard from "@files/schemas/product/productCards";
import productCardsSection from "@files/schemas/product/productCardsSection";
import allResources from "@files/schemas/resources/allResources";
import resourceCategory from "@files/schemas/resources/resourceCategory";
import resourceItems from "@files/schemas/resources/resourceItems";
import resourceLayout from "@files/schemas/resources/resourceLayout";
import resourceLayoutItem from "@files/schemas/resources/resourceLayoutItem";
import tabComponentLayout from "@files/schemas/tabComponentLayout";
import verticalTabComponentLayout from "@files/schemas/verticalTabComponentLayout";
import teams from "@files/schemas/teams";
import testimonialSection from "@files/schemas/testimonialSection";
import leftSection from "@files/schemas/twoColumnLayout/leftSection";
import RightSection from "@files/schemas/twoColumnLayout/rightSection";
import twoColumnLayout from "@files/schemas/twoColumnLayout/twoColumnLayout";

import allBlogs from "./blogs/allBlogs";
import blogLayout from "./blogs/blogLayout";
import blogLayoutItems from "./blogs/blogLayoutItems";
export const schemaTypes = [
  navbar,
  footer,
  page,
  error,
  twoColumnLayout,
  pointer,
  pointerSection,
  card,
  cardSection,
  productCard,
  productCardsSection,
  brandList,
  RightSection,
  leftSection,
  banner,
  blogPost,
  blogCategory,
  blogAuthor,
  imageCards,
  sectionItems,
  lineBreak,

  leftFooterSection,
  rightFooterSection,
  footerAddressList,
  navbarMenuItems,
  tabComponentLayout,
  verticalTabComponentLayout,
  teams,
  blogspreview,
  allBlogs,

  blogLayout,
  blogLayoutItems,
  oneColumnLayout,
  testimonialSection,
  flipcardLayout,
  allResources,
  resourceCategory,
  resourceItems,
  resourceLayout,
  resourceLayoutItem,
  forms,
];
