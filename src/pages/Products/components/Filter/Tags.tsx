import MultipleSelectChip from "../../../../components/MaterialUI/MultipleSelectChip";
import useProducts from "../../../../hooks/useProducts";

export default function TagsSection() {
  const { selectedFilter, filter, setSelectedFilter } = useProducts();

  return (
    <div className="flex flex-col w-full items-center bg-white p-4 px-12 ">
      <div className="w-full bg-white text-xl">Tags</div>
      <MultipleSelectChip
        values={filter.tags}
        label="Tags"
        setSelected={(res) =>
          setSelectedFilter((prevObj) => ({
            ...prevObj,
            tags: res,
          }))
        }
        selected={selectedFilter.tags}
      />
    </div>
  );
}
