import useUnit from "../hooks/useUnit";

export default function Details() {
  const { unit } = useUnit();
  return (
    <>
      <h1 className="font-bold text-2xl">{unit.name}</h1>
      <h1 className="text-sm font-light">{unit.description}</h1>
      <div className="flex items-end justify-between">
        <h1 className=" text-xl font-bold">{unit.stock}</h1>
        <h1>{"$" + unit.price}</h1>
      </div>
    </>
  );
}
