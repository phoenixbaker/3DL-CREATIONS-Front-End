import { ChangeEvent, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import useOutsideAlerterClick from "../../../hooks/useOutsideAlerterClick";
import { ProductObjectType } from "../../../config/types/Product";

export interface TextInputBarProps {
  placeholder?: string;
  data?: ProductObjectType;
  updateResult?: (arg: ProductObjectType) => void;
  newResult?: ProductObjectType;
  showDropDown?: boolean;
}

export default function TextInputBar({
  placeholder,
  data,
  newResult,
  updateResult,
  showDropDown = true,
}: TextInputBarProps) {
  const searchBarRef = useRef(null!);
  const searchClickOutside = useOutsideAlerterClick(searchBarRef);

  const [searchWord, setSearchWord] = useState("");
  const [showRes, setShowRes] = useState(
    newResult && !!Object.keys(newResult).length
  );

  useEffect(() => {
    if (searchClickOutside) setShowRes(false);
    else setShowRes(newResult && !!Object.keys(newResult).length);
  }, [searchClickOutside]);

  const handleFilter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const search = target.value;
    setSearchWord(search);

    if (!search.length) return clearInput();
    if (!data) return;
    const newFilter = Object.values(data);
    let res = newFilter.filter((prod) =>
      prod.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (!res.length)
      res = newFilter.filter(
        (prod) =>
          !!prod.tags.filter((tag) =>
            tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ).length
      );

    let tempObj = {} as ProductObjectType;
    res.forEach((prod) => (tempObj[prod._id] = prod));
    if (updateResult) updateResult(tempObj);
  };

  const clearInput = () => {
    if (updateResult) updateResult(data || ({} as ProductObjectType));
    setSearchWord("");
  };

  return (
    <div className="py-6 z-50">
      <div
        ref={searchBarRef}
        id="searchInputs"
        className="flex w-full items-center rounded-2xl bg-white"
      >
        <input
          type="text"
          value={searchWord}
          placeholder={placeholder}
          className="p-3 rounded-2xl w-full"
          onChange={handleFilter}
        />
        {searchWord.length == 0 ? (
          <SearchIcon id="SearchIcon" className="mx-4" />
        ) : (
          <CloseIcon className="mx-4" onClick={clearInput} />
        )}
      </div>
      {showDropDown && showRes && newResult && (
        // ? Possibly make this an animated div that slides down
        <div
          id="dataResult"
          className="mx-3 mt-1 border-black border-2 w-11/12 max-h-72 rounded-md bg-white overflow-hidden overflow-y-auto"
        >
          {Object.values(newResult)
            .slice(0, 15)
            .map((val, key) => (
              <div key={key} className="py-4 px-4 hover:bg-gray-300">
                {val.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
