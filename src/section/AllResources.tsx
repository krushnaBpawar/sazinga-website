import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

import Button from "@/atoms/Button";
import Dropdown, { DropdownOption } from "@/atoms/Dropdown";
import Loader from "@/atoms/Loader";
import { getClient } from "@/lib/getClient";
import { ResourceCard } from "@/molecules/ResourceCard";
import getURL from "@/utility/getURL";

export default function AllResources({ title }: { title: string }) {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [limit, setLimit] = useState(2); // says how to much to load intially default
  const [categories, setCategories] = useState<DropdownOption[]>([]);
  const [dropdownOptions, setDropdownItems] = useState([]);

  const [resourceData, setResourceData] = useState([]);
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
        await getClient().fetch(groq`*[_type == "resourceCategory"]`)
      ).map((el: any) => {
        return {
          value: el._id,
          displayLabel: el.name,
        };
      });
      if (windowWidth > 768) {
        setCategories(categories);
        setDropdownItems(categories?.slice(4));
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
          // Fetches 0...2, 2..4 and so on
          groq`*[_type == "resourceItem"] | order(_createdAt desc) [${
            limit - 2
          }...${limit}]{title,openResource,slug,coverImage,_createdAt,description,category->{name}}`
        );
      } else {
        data = await getClient().fetch(
          // Fetches 0...2, 2..4 and so on
          groq`*[_type == "resourceItem" && category._ref == $category] | order(_createdAt desc) [${
            limit - 2
          }...${limit}]{
            title, 
            _createdAt,
            slug, 
            openResource,
            coverImage, 
            description, 
            category->{name}
          }`,
          { category: selectedOption.value } // Passing the variable to the query
        );
      }
      // Checks if the data is less than 2, if yes then it will not show the load more button
      if (data?.length < 2) {
        setShowMore(false);
      }

      // @ts-ignore
      setResourceData([...resourceData, ...data]);
      setLoader(false);
    })();
  }, [limit, selectedOption]);

  // Filters
  const changeOption = (option: any) => {
    if (option) {
      const index = categories.indexOf(option);
      if (index > 3) {
        const [item] = categories.splice(index, 1);
        categories.splice(3, 0, item);
      }
      setCategories([...categories]);
    }
    setResourceData([]);
    setLimit(2);
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

        <div className="flex flex-row gap-0 md:gap-4 items-center">
          {(categories?.length > 0 || dropdownOptions.length > 0) &&
            selectedOption && <ClearFilter changeOption={changeOption} />}
          {categories
            ?.slice(0, dropdownOptions?.length == 1 ? 5 : 4)
            ?.map((category) => (
              <p
                className={
                  "text-heading-secondary text-p15 font-semibold hover:text-btn-primary cursor-pointer " +
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
      <div className="mt-12">
        <div className="flex justify-center items-center">
          {!loader && resourceData.length == 0 && (
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[24px]">
          {resourceData?.map((resourceItem: any) => (
            <ResourceCard
              key={resourceItem.link}
              link={"/resource/" + resourceItem.slug.current}
              imageUrl={getURL(resourceItem.coverImage.asset._ref)?.url() ?? ""}
              title={resourceItem.title}
              excerpt={resourceItem.description}
              category={resourceItem.category.name}
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
              setLimit(limit + 2); // Increase the limit by 2 whenever the button is clicked to load more data
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
      className="flex justify-center items-center -mr-3 md:-mr-0 z-30"
      onClick={() => changeOption(null)}
    >
      <RxCrossCircled color="#004EEB" />
      <p className="hidden md:block text-btn-primary font-semibold cursor-pointer w-max">
        Clear Filter
      </p>
    </div>
  );
}
