import React, { useEffect, useState } from "react";

import Header from "./Header";
import Stock from "./Stock";
import Price from "./Price";
import Size from "./Size";
import Tags from "./Tags";
import Sort from "./Sort";
import { getFilter } from "../../../../api/filter";
import useProducts from "../../../../hooks/useProducts";

export default function FilterMenu() {
  const { filter, setFilter, selectedFilter, setSelectedFilter } =
    useProducts();

  const [load, setLoad] = useState(
    !!Object.values(selectedFilter).filter((filter) => filter !== null).length
  );

  useEffect(() => {
    const fetchFilter = async () => {
      const { data, ok, problem } = await getFilter();
      if (!ok) return console.warn(problem);
      if (data) {
        setFilter({ ...data, stock: ["All", "In Stock", "Print On Demand"] });
        setSelectedFilter({ ...data, stock: "All", tags: ["All Tags"] });
        setLoad(true);
      }
    };

    fetchFilter();
  }, []);

  return (
    <div
      id="Filter"
      className="flex flex-col w-3/4 mx-12 bg-white items-center col-span-3 h-fit shadow-lg"
    >
      <Header />
      {load && (
        <>
          <Price />
          <Tags />
          <Stock />
          <Size
            data={filter.size}
            selected={selectedFilter.size}
            setRange={(e) =>
              setSelectedFilter((prevObj) => ({
                ...prevObj,
                size: e,
              }))
            }
          />
          <button
            onClick={() => {
              setSelectedFilter({
                ...filter,
                stock: "All",
                tags: ["All Tags"],
              });
            }}
            className="my-2 w-1/3 rounded-full z-20 p-3 mb-6 bg-primary-blue text-white font-bold"
          >
            RESET FILTER
          </button>
        </>
      )}
      <Sort />
    </div>
  );
}
