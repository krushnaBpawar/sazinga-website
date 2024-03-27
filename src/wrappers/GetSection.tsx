import BrandLayout from "@/molecules/BrandLayout";
import BrandList from "@/molecules/BrandList";
import BulletPoints from "@/molecules/BulletPoints";
import ButtonLayout from "@/molecules/ButtonLayout";
import HeroImage from "@/molecules/HeroImage";
import ImageCaraousel from "@/molecules/ImageCaraousel";
import NewImageCaraousel from "@/molecules/NewImageCaraousel";
import ImageLayout from "@/molecules/ImageLayout";
import LineBreak from "@/molecules/LineBreak";
import NormalImage from "@/molecules/NormalImage";
import TestimonialCards from "@/molecules/TestimonialCards";
import TestimonialVideoEmbbed from "@/molecules/TestimonialVideoEmbbed";
import TextBlock from "@/molecules/TextBlock";
import BlogHeader from "@/section/AllBlogs";
import AllResources from "@/section/AllResources";
import Banner from "@/section/Banner";
import BlogPost from "@/section/BlogPost";
import BlogSuggestion from "@/section/BlogSuggestion";
import FlipCardLayout from "@/section/FlipCardLayout";
import FormEmbbed from "@/section/FormEmbbed";
import Heading from "@/section/Heading";
import HeroVideo from "@/section/HeroVideo";
import ImageCard from "@/section/ImageCard";
import { LeftContent } from "@/section/LeftContent";
import PointerSection from "@/section/PointerSection";
import ProductCardSection from "@/section/ProductCardSection";
import ResourceItems from "@/section/ResourceItems";
import RightContent from "@/section/RightContent";
import TabContentLayout from "@/section/TabContentLayout";
import Teams from "@/section/Teams";
import Testimonial from "@/section/Testimonial";
import VerticalTabContentLayout from "@/section/VerticalTabContentLayout";
import { section } from "@/utility/constants";
import { getAlignment } from "@/utility/helperFunction";
import OneColumnLayout from "@/wrappers/OneColumnLayout";
import TwoColumnLayout from "@/wrappers/TwoColumnLayout";
import ImageSlider from "@/molecules/ImageSlider";

export default function GetSection({ onlySingleItem, section: sectionData, subComponent }: { section: any; subComponent: boolean; onlySingleItem?: boolean }) {
  switch (sectionData.sectionName) {
    /**
     * image card
     */
    case section.imageCard: {
      return <ImageCard subComponent={subComponent} data={sectionData.imageCard} />;
    }
    /**
     * blog post
     */
    case section.blogPost: {
      return <BlogPost blogData={sectionData.blogData} />;
    }

    case section.resourceItem: {
      return <ResourceItems resourceData={sectionData.resourceData} />;
    }
    /**
     * heading
     */
    case section.heading: {
      return <Heading subComponent={subComponent} data={sectionData.heading} />;
    }
    /**
     * banner
     */
    case section.banner: {
      return <Banner data={sectionData.banner} />;
    }
    /**
     * brand layout
     */
    case section.brandLogo: {
      return <BrandLayout data={sectionData.brandLogos} />;
    }
    /**
     * brand list
     */
    case section.brandList: {
      return <BrandList data={sectionData.brandMention} />;
    }
    /**
     * teams
     */
    case section.teams: {
      return <Teams data={sectionData.teamSection} />;
    }
    /**
     * hero image
     */
    case section.heroImage: {
      return <HeroImage data={sectionData.heroImage} />;
    }
    case section.heroVideo: {
      return <HeroVideo data={sectionData.heroVideo} />;
    }
    case section.normalImage: {
      return <NormalImage data={sectionData.normalImage} />;
    }
    /**
     * line break
     */
    case section.lineBreak: {
      return <LineBreak data={sectionData.lineBreak} subComponent={subComponent} />;
    }
    /**
     * image
     */
    case section.image: {
      return <ImageLayout data={sectionData.image} />;
    }
    /**
     * tab content layout
     */
    case section.tabComponentLayout: {
      return <TabContentLayout data={sectionData.tabComponentLayout} />;
    }
    /**
     *vertical tab content layout
     */
    case section.verticalTabComponentLayout: {
      return <VerticalTabContentLayout data={sectionData.verticalTabComponentLayout} />;
    }
    /**
     * bullet points
     */
    case section.bulletPoints: {
      return <BulletPoints data={sectionData.bulletPoints} />;
    }
    /**
     * image carousel
     */
    case section.imageCaraousel: {
      return <ImageCaraousel data={sectionData.carousel} />;
    }

    case section.newImageCaraousel: {
      return <NewImageCaraousel data={sectionData.newcarousel} />;
    }

    case section.imageSlider: {
      return <ImageSlider data={sectionData.slider} />;
    }
    /**
     * pointer section
     */
    case section.pointers: {
      return (
        <PointerSection
          subComponent={subComponent}
          containerClassName={`${sectionData?.verticalAlign === "center" ? "my-auto" : sectionData?.verticalAlign === "top" ? "mb-auto" : "mt-auto"} ${
            sectionData?.horizontalAlign === "center" ? "sm:mx-auto" : sectionData?.horizontalAlign === "right" ? "lg:ml-auto" : "lg:mr-auto"
          }`}
          data={sectionData.pointerLayout}
        />
      );
    }
    /**
     * product card section
     */
    case section.productCard: {
      return (
        <ProductCardSection
          subComponent={subComponent}
          containerClassName={`${sectionData?.verticalAlign === "center" ? "my-auto" : sectionData?.verticalAlign === "top" ? "mb-auto" : "mt-auto"} ${
            sectionData?.horizontalAlign === "center" ? "sm:mx-auto" : sectionData?.horizontalAlign === "right" ? "lg:ml-auto" : "lg:mr-auto"
          }`}
          data={sectionData.productCardLayout}
        />
      );
    }
    /**
     * all blogs
     */
    case section.allBlogsSection: {
      return <BlogHeader title={sectionData.allBlogsSection.title} />;
    }
    case section.allResourceSection: {
      return <AllResources title={sectionData.allResourceSection.title} />;
    }
    /**
     * text block
     */
    case section.textBlock: {
      return (
        <TextBlock
          horizontalAlign={sectionData?.horizontalAlign}
          verticalAlign={sectionData?.verticalAlign}
          subComponent={subComponent}
          data={sectionData.textBlock}
        />
      );
    }

    case section.flipCardLayout: {
      return <FlipCardLayout data={sectionData.flipCardLayout} />;
    }
    /**
     * button layout
     */
    case section.buttons: {
      return <ButtonLayout data={sectionData} />;
    }
    /**
     * one column layout
     */
    case section.oneColumnLayout: {
      return (
        <OneColumnLayout
          sectionId={sectionData.oneColumnLayout?.fieldId}
          onlySingleItem={onlySingleItem}
          subComponent={subComponent}
          position={sectionData.oneColumnLayout?.horizontalAlign}
          content={<LeftContent data={sectionData.oneColumnLayout?.oneColumnSection?.leftSectionItems} />}
        />
      );
    }
    /**
     * two column layout
     */
    case section.twoColumnLayout: {
      return (
        <TwoColumnLayout
          sectionId={sectionData.twoColumnLayout?.fieldId}
          onlySingleItem={onlySingleItem}
          background={sectionData.twoColumnLayout?.layoutBackground}
          containerClassName={`${getAlignment(sectionData.twoColumnLayout?.verticalAlign, sectionData.twoColumnLayout?.horizontalAlign)} ${
            sectionData.twoColumnLayout?.layoutShadow ? (subComponent ? "shadow-lg p-[24px] rounded-[6px]" : "shadow-lg") : undefined
          } `}
          subComponent={subComponent}
          isReverse={sectionData.twoColumnLayout?.invertPosition}
          showLeftSection={sectionData.twoColumnLayout?.showLeftSection}
          showRightSection={sectionData.twoColumnLayout?.showRightSection}
          leftContent={<LeftContent data={sectionData.twoColumnLayout.leftSection?.leftSectionItems} />}
          rightContent={
            <RightContent isReverse={sectionData.twoColumnLayout?.invertPosition} data={sectionData.twoColumnLayout.rightSection?.rightSectionItems} />
          }
        />
      );
    }
    /**
     * blog suggestion
     */
    case section.blogspreview: {
      return (
        <BlogSuggestion
          title={sectionData.blogsPreview.title || "More like this"}
          preTitle={sectionData.blogsPreview.preTitle}
          excerpt={sectionData.blogsPreview.excerpt}
          buttonSectionData={{ data: sectionData.blogsPreview }}
          categoryRef={sectionData.blogsPreview.category._ref}
        />
      );
    }
    /**
     * testimonial
     */
    case section.testimonial: {
      return <Testimonial subComponent={subComponent} data={sectionData.testimonial} />;
    }
    /**
     * testimonial cards
     */
    case section.testimonialCards: {
      return <TestimonialCards subComponent={subComponent} data={sectionData.testimonialCards} />;
    }
    case section.featuredSource: {
      return <TestimonialVideoEmbbed subComponent={subComponent} data={sectionData.videoEmbed} />;
    }
    case section.formEmbbed: {
      return <FormEmbbed data={sectionData.formEmbbed} horizontalAlign={sectionData?.horizontalAlign} />;
    }
    default: {
      return <div>{sectionData.sectionName}</div>;
    }
  }
}
