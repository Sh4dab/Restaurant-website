import Card from "../component/Card";
import useGetData from "../hook/getData";
import { useEffect, useState } from "react";

function MenuPage() {

  const [category, setCategory] = useState("All");
  const [data, setData] = useState([]);
  const categoryData = useGetData({ name: category });

  useEffect(() => {
    setData(categoryData);
  }, [categoryData]);

  return (
    <>
      <div className="bg-[#dfc499] p-20 ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4 text-lg font-semibold ">
            <button
              className={`px-2 py-1 rounded-xl ${category === "All" ? 'bg-[#886255] text-white' : 'bg-[#FBEEC1]'}`}
              onClick={() => setCategory("All")}>
              All
            </button>

            <button
              className={`px-2 py-1 rounded-xl ${category === "Breakfast" ? 'bg-[#886255] text-white' : 'bg-[#FBEEC1]'}`}
              onClick={() => setCategory("Breakfast")}>
              Breakfast
            </button>

            <button
              className={`px-2 py-1 rounded-xl ${category === "Vegetarian" ? 'bg-[#886255] text-white' : 'bg-[#FBEEC1]'}`}
              onClick={() => setCategory("Vegetarian")}>
              Veg
            </button>

            <button
              className={`px-2 py-1 rounded-xl ${category === "Chicken" ? 'bg-[#886255] text-white' : 'bg-[#FBEEC1]'}`}
              onClick={() => setCategory("Chicken")}>
              Non Veg
            </button>

            <button
              className={`px-2 py-1 rounded-xl ${category === "Dessert" ? 'bg-[#886255] text-white' : 'bg-[#FBEEC1]'}`}
              onClick={() => setCategory("Dessert")}>
              Dessert
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {data.map((d) => (
            <div key={d.idMeal}>
              <Card
                name={d.strMeal}
                price="999"
                image={d.strMealThumb}
              />
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default MenuPage;
