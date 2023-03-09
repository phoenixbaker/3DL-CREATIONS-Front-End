import { useEffect, useState } from "react";
import { Logo } from "../../components";
import { ProductObjectType } from "../../config/types/Product";
import useProducts from "../../hooks/useProducts";
import TextInputBar, { TextInputBarProps } from "./Components/TextInputBar";

interface SearchBarProps extends TextInputBarProps {
  result?: (res: ProductObjectType) => void;
}

export default function SearchBar({
  placeholder,
  result,
  showDropDown,
}: SearchBarProps) {
  const { products } = useProducts();

  const [res, setRes] = useState<ProductObjectType>({} as ProductObjectType);

  function updateResult(e: ProductObjectType) {
    console.log(e);
    if (result) {
      result(e);
      setRes(e);
    }
  }

  return (
    <section className="w-full h-24 bg-gray-200 sticky top-[63px] shadow-xl">
      <div className="flex w-full flex-col items-center h-full">
        <TextInputBar
          placeholder={placeholder}
          data={products}
          newResult={res}
          showDropDown={showDropDown}
          updateResult={updateResult}
        />
      </div>
    </section>
  );
}
