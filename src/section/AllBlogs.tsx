import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

import Button from "@/atoms/Button";
import Dropdown, { DropdownOption } from "@/atoms/Dropdown";
import Loader from "@/atoms/Loader";
import { getClient } from "@/lib/getClient";
import { BlogCard } from "@/molecules/BlogCard";
import getURL from "@/utility/getURL";

export default function AllBlogs({ title }: { title: string }) {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [limit, setLimit] = useState(9);
  const [categories, setCategories] = useState<DropdownOption[]>([]);
  const [dropdownOptions, setDropdownItems] = useState([]);

  const [blogsData, setBlogsData] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const [loader, setLoader] = useState(false);
  const [pageLoader, setPageLoader] = useState(true);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function updateWidths() {
      setWindowWidth(window.innerWidth);
    }
    updateWidths();

    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  useEffect(() => {
    (async () => {
      setPageLoader(true);
      const categories = (
        await getClient().fetch(groq`*[_type == "category"]`)
      ).map((el: any) => {
        return {
          value: el._id,
          displayLabel: el.name,
        };
      });
      if (windowWidth > 1024) {
        setCategories(categories);
        setDropdownItems(categories?.slice(2));
      } else {
        setCategories([]);
        setDropdownItems(categories);
      }

      setPageLoader(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoader(true);
      let data;
      if (!selectedOption) {
        data = await getClient().fetch(
          groq`*[_type == "post"] | order(date desc) [${
            limit - 9
          }...${limit}]{timetoRead,title,slug,coverImage,excerpt,_createdAt,date,category->{name}}`
        );
      } else {
        data = await getClient().fetch(
          groq`*[_type == "post" && category._ref == $category] | order(date desc) [${
            limit - 9
          }...${limit}]{
            timetoRead, 
            title, 
            slug, 
            coverImage, 
            _createdAt
            excerpt, 
            date, 
            category->{name}
          }`,
          { category: selectedOption.value } // Passing the variable to the query
        );
      }

      if (data?.length < 3) {
        setShowMore(false);
      }

      // @ts-ignore
      setBlogsData([...blogsData, ...data]);
      setLoader(false);
    })();
  }, [limit, selectedOption]);

  const changeOption = (option: any) => {
    if (option) {
      const index = categories.indexOf(option);
      if (index > 3) {
        const [item] = categories.splice(index, 1);
        categories.splice(3, 0, item);
      }
      setCategories([...categories]);
    }
    setBlogsData([]);
    setLimit(9);
    setShowMore(true);
    setSelectedOption(option);
  };
  if (pageLoader) {
    return <Loader />;
  }
  return (
    <section className="outerContainer mx-auto">
      <div className="flex justify-between items-center">
        <h1>{title}</h1>

        <div className="flex flex-row gap-0 lg:gap-4 items-center">
          {(categories?.length > 0 || dropdownOptions.length > 0) &&
            selectedOption && <ClearFilter changeOption={changeOption} />}
          {categories
            ?.slice(0, dropdownOptions?.length == 1 ? 3 : 2)
            ?.map((category) => (
              <p
                className={
                  "text-heading-secondary text-p15 font-semibold hover:text-btn-primary cursor-pointer min-w-fit" +
                  (selectedOption?.value == category.value
                    ? "underline text-btn-primary"
                    : "")
                }
                key={category.value}
                onClick={() => {
                  changeOption(category);
                }}
              >
                {category.displayLabel}
              </p>
            ))}

          <div className="">
            {dropdownOptions && dropdownOptions?.length > 1 && (
              <Dropdown
                setSelectedOption={changeOption}
                options={dropdownOptions}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-12 justify-between flex-wrap gap-y-6 items-start">
        {!loader && blogsData.length == 0 && (
          <p className="mx-auto text-heading-primary font-medium">
            No Data Found{" "}
            <span
              className="border-b border-btn-primary text-btn-primary font-semibold cursor-pointer"
              onClick={() => changeOption(null)}
            >
              Clear Filter
            </span>
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData?.map((blogData: any) => (
            <BlogCard
              key={blogData.link}
              link={"/blog/" + blogData.slug.current}
              imageUrl={getURL(blogData?.coverImage?.asset?._ref)?.url() ?? ""}
              title={blogData.title}
              excerpt={blogData.excerpt}
              category={blogData.category.name}
              timeToRead={blogData.timetoRead}
              date={blogData.date}
            />
          ))}
        </div>
      </div>
      {loader && (
        <div className="flex justify-center items-center mt-4">
          <Loader />
        </div>
      )}
      {!loader && showMore && (
        <div className="flex justify-center items-center mt-[45px]">
          <Button
            label="Load More Insights"
            handleClick={() => {
              setLimit(limit + 9);
            }}
            type="solid"
            arrow
          />
        </div>
      )}
    </section>
  );
}

function ClearFilter({ changeOption }: { changeOption: any }) {
  return (
    <div
      className="flex justify-center items-center -mr-3 md:-mr-0 z-30 cursor-pointer"
      onClick={() => changeOption(null)}
    >
      <RxCrossCircled color="#0C84B8" />
      <p className="hidden lg:block text-btn-primary font-semibold w-max">
        Clear Filter
      </p>
    </div>
  );
}
