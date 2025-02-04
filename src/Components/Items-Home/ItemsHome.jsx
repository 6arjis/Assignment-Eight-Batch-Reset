import { useEffect, useState } from "react";
import Card from "../Card/Card";

const ItemsHome = () => {
  const [items, setItems] = useState([]);
  const [itemsCategory, setItemsCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const handleActiveCategoryButton = (category) => {
    console.log("Previous Active Category:", activeCategory);
    console.log("Clicked Category:", category);
    setActiveCategory(category);
  };

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        setItems(products);

        // Extract unique categories from items
        const categories = [...new Set(products.map((item) => item.category))];
        categories.unshift("All Products");
        setItemsCategory(categories);

        if (categories.length > 0) {
          setActiveCategory(categories[0]);
        }

        console.log("Fetched Categories:", categories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-purple-700 md:text-6xl text-3xl mt-3 font-bold mb-3">
        Explore Cutting Edge Gadgets
      </h1>
      <div className="max-w-7xl mx-auto md:flex gap-5">
        <div className="md:w-1/6 flex flex-col gap-2.5">
          {itemsCategory.map((category, idx) => {
            return (
              <button
                onClick={() => handleActiveCategoryButton(category)}
                className={`btn ${
                  activeCategory === category
                    ? "bg-purple-700 text-white"
                    : "bg-white text-purple-700"
                }`}
                key={idx}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="w-5/6 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-1">
          {items.map((item) =>
            activeCategory === "All Products" ||
            item.category === activeCategory ? (
              <Card item={item} key={item.product_id} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsHome;
