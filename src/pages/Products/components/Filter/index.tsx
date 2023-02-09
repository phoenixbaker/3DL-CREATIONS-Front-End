import React, { useEffect, useState } from "react";

import Header from "./Header";
import Stock from "./Stock";
import Price from "./Price";
import Size from "./Size";
import Tags from "./Tags";
import { getFilter } from "../../../../api/filter";

export type FilterType = {
  price: number[];
  stock: string[];
  size: number[];
  tags: string[];
};

type FilterMenuType = {
  setFilterSearch: (res: FilterType) => void;
};

export default function FilterMenu({ setFilterSearch }: FilterMenuType) {
  const [filter, setFilter] = useState<FilterType>({} as FilterType);
  const [selected, setSelected] = useState<FilterType>({} as FilterType);
  const [toggle, setToggle] = useState(false);
  const [load, setLoad] = useState(
    !!Object.values(selected).filter((filter) => filter !== null).length
  );

  useEffect(() => {
    const fetchFilter = async () => {
      const { data, ok, problem } = await getFilter();
      if (!ok) return console.warn(problem);
      if (data) {
        setFilter({ ...data, stock: ["All", "In Stock", "Print On Demand"] });
        setSelected({ ...data, stock: ["All"], tags: ["All Tags"] });
        setLoad(true);
      }
    };

    fetchFilter();
  }, []);

  useEffect(() => {
    setFilterSearch(selected);
  }, [selected]);

  return (
    <div
      id="Filter"
      className="flex flex-col w-3/4 mx-12 items-center col-span-3 h-fit shadow-md"
    >
      <Header
        onClick={() => setToggle((prev) => !prev)}
        handleReset={() => {
          setToggle(true);
          setSelected({ ...filter, stock: ["All"], tags: ["All Tags"] });
        }}
      />
      {!toggle && load && (
        <>
          <Price
            data={filter.price}
            selected={selected.price}
            setRange={(e) =>
              setSelected((prevObj) => ({
                ...prevObj,
                price: e,
              }))
            }
          />
          <Tags
            data={filter.tags}
            selected={selected.tags}
            setSelected={(e) =>
              setSelected((prevObj) => ({
                ...prevObj,
                tags: e,
              }))
            }
          />
          <Stock
            data={filter.stock}
            selected={selected.stock}
            setStock={(e) =>
              setSelected((prevObj) => ({
                ...prevObj,
                stock: [e],
              }))
            }
          />
          <Size
            data={filter.size}
            selected={selected.size}
            setRange={(e) =>
              setSelected((prevObj) => ({
                ...prevObj,
                size: e,
              }))
            }
          />
        </>
      )}
    </div>
  );
}
