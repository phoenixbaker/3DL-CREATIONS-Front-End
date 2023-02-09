import MultipleSelectChip from "../../../../components/MaterialUI/MultipleSelectChip";

type TagsSectionType = {
  data: string[];
  selected: string[];
  setSelected: (res: string[]) => void;
};

export default function TagsSection({
  data,
  selected,
  setSelected,
}: TagsSectionType) {
  function handleSelected(e: string[]) {
    if (!e.length) return setSelected(["All Tags"]);
    let res = e.filter((tag) => tag !== "All Tags");
    return setSelected(res);
  }

  return (
    <div className="flex flex-col w-full items-center bg-white p-4 px-8 ">
      <div className="w-full bg-white text-xl">Tags</div>

      <MultipleSelectChip
        values={data}
        label="Tags"
        setSelected={handleSelected}
        selected={selected}
      />
    </div>
  );
}
