import DropDownSelect from "../../../../components/MaterialUI/DropDownSelect";

type InStockSectionType = {
  setStock: (res: string) => void;
  data: string[];
  selected: string[];
};

export default function InStockSection({
  data,
  setStock,
  selected,
}: InStockSectionType) {
  return (
    <div className="flex flex-col w-full items-center bg-white p-4 px-8 ">
      <div className="w-full bg-white text-xl">In Stock</div>
      <DropDownSelect
        label="Stock"
        selectors={data.map((e) => ({ value: e }))}
        value={selected[0]}
        setStock={setStock}
      />
    </div>
  );
}
