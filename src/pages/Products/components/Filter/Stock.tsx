import DropDownSelect from "../../../../components/MaterialUI/DropDownSelect";
import useProducts from "../../../../hooks/useProducts";

export default function InStockSection() {
  const { filter, selectedFilter, setSelectedFilter } = useProducts();
  return (
    <div className="flex flex-col w-full items-center bg-white p-4 px-12 ">
      <div className="w-full bg-white text-xl">In Stock</div>
      <DropDownSelect
        label="Stock"
        selectors={filter.stock.map((e) => ({ value: e }))}
        value={selectedFilter.stock}
        setData={(e) =>
          setSelectedFilter((prevObj) => ({
            ...prevObj,
            stock: e,
          }))
        }
      />
    </div>
  );
}
