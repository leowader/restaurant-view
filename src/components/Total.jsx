// eslint-disable-next-line react/prop-types
export default function Total({ tipo, total }) {
  return (
    <div className="flex gap-2 p-2 drop-shadow-xl shadow-md rounded-lg w-full">
      <div className=" font-bold">
        {" "}
        Total {tipo}
        <br />
        <span
          className={`${
            tipo === "Desayuno" ? "text-[#51E140]" : "text-[#E2903B] "
          }`}
        >
          {total}
        </span>
      </div>
      <div className="w-full flex justify-end">
        <div
          className={`${
            tipo === "Desayuno"
              ? "bg-[#51E140] bg-opacity-30 "
              : "bg-[#E2903B] bg-opacity-30 "
          } rounded-full h-12 w-12 flex justify-center items-center `}
        >
          <div
            className={`rounded-full h-8 w-8 flex justify-center items-center text-white ${
              tipo === "Desayuno" ? "bg-[#51E140]" : "bg-[#E2903B]"
            } `}
          >
            {total}
          </div>
        </div>
      </div>
    </div>
  );
}
