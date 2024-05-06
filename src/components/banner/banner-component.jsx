import { guaranteeList } from "../../../lib/data";

export default function BannerComponent() {
  return (
    <section className="bg-gradient-to-br from-blue-300 to-blue bg-opacity-90 flex flex-wrap justify-center gap-3 p-2 lg:justify-evenly ">
      {guaranteeList.map((item) => {
        return (
          <div
            key={item.name}
            className="flex flex-col items-center text-black"
          >
            <div className="text-xl">{item.icon}</div>
            <div>{item.name}</div>
          </div>
        );
      })}
    </section>
  );
}
