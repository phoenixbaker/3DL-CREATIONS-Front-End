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
    <section className="w-full h-24 bg-gray-200">
      <div className="grid grid-cols-3 h-full">
        <Logo className="w-28 h-20 self-center mt-2 ml-12" />
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
