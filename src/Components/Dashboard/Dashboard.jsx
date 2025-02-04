import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { ImSortNumbericDesc } from "react-icons/im";
import "react-tabs/style/react-tabs.css";
import GroupImage from "../../assets/Group.png";

import {
  emptyShoppingCartData,
  getShoppingCardData,
  getWishListData,
} from "../Utility/AddToDB";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [wishListItem, setWishListItem] = useState([]);
  const [activeTab, setActiveTab] = useState("cart");
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setAllProducts(data.products));
  }, []);
  useEffect(() => {
    const loadCartData = getShoppingCardData();
    const loadWishListData = getWishListData();
    setCartItem(loadCartData);
    setWishListItem(loadWishListData);
  }, []);

  useEffect(() => {
    const newTotalCost = allProducts.reduce((acc, product) => {
      if (cartItem.includes(product.product_id)) {
        return acc + product.price;
      }
      return acc;
    }, 0);
    setTotalCost(newTotalCost);
  }, [cartItem, allProducts]);

  const handlePurchase = () => {
    emptyShoppingCartData();
    setCartItem([]);
  };
  const handleNavigation = () => {
    navigate("/");
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleDescendingOrderSort = () => {
    console.log(cartItem);
    console.log("Items will get sorted here");
    const currentItemsArray = allProducts.filter((product) =>
      cartItem.includes(product.product_id)
    );
    console.log(currentItemsArray);
    const sortedCurrItems = currentItemsArray
      .slice()
      .sort((a, b) => b.price - a.price);
    console.log(sortedCurrItems);
    const sortedItemsId = sortedCurrItems.map((item) => item.product_id);
    setCartItem(sortedItemsId);
    console.log("Sorted IDs:", sortedItemsId);
  };

  return (
    <div>
      <div
        className="flex flex-col gap-4 pb-10
       justify-center items-center text-center bg-purple-700 p-4 relative top-0 left-0 w-full text-purple-200"
      >
        <h1 className="md:text-6xl text-3xl mt-3 font-bold">Dashboard</h1>
        <p className="text-md mb-4">
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => handleTabChange("cart")}
            className={`btn rounded-2xl w-[8rem] text-xl ${
              activeTab === "cart"
                ? "text-purple-700 bg-white"
                : "bg-purple-700 text-white"
            } `}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabChange("wishlist")}
            className={`btn rounded-2xl w-[8rem] text-xl ${
              activeTab === "wishlist"
                ? "text-purple-700 bg-white"
                : "bg-purple-700 text-white"
            } `}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-2">
        {activeTab === "cart" ? (
          <div>
            <div className="md:flex justify-between">
              <h1 className="md:text-2xl font-bold">Cart</h1>
              <div className="flex  items-center md:gap-5">
                <h1 className="md:text-xl font-bold">Price : ${totalCost}</h1>
                <button
                  onClick={handleDescendingOrderSort}
                  className="btn rounded-2xl bg-purple-700 text-white md:text-2xl"
                >
                  Sort by Price <ImSortNumbericDesc />
                </button>
                <a
                  onClick={() => {
                    handlePurchase();
                    document.getElementById("my_modal_4").showModal();
                  }}
                  href="#my_modal_8"
                  disabled={cartItem.length === 0 || totalCost === 0}
                  className="btn rounded-2xl bg-purple-700 text-white md:text-2xl"
                >
                  Purchase
                </a>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl">
              {cartItem.length === 0 ? (
                <h1 className="text-center bg-purple-300 p-4 rounded-xl">
                  No items has been added yet. Visit product details to list
                  them in the cart 😍
                </h1>
              ) : (
                cartItem.map((itemId) => {
                  const product = allProducts.find(
                    (product) => product.product_id === itemId
                  );
                  return product ? (
                    <div
                      className="flex gap-5 bg-purple-300 m-2 p-2 rounded-md"
                      key={product.product_id}
                    >
                      <div className="w-1/6">
                        <img
                          className="h-[120px] w-full rounded-md"
                          src={product.product_image}
                          alt=""
                        />
                      </div>
                      <div className="w-5/6">
                        <div className="flex justify-between">
                          <h1 className="text-2xl font-bold mb-2">
                            {product.product_title}
                          </h1>
                          <button className="btn rounded-4xl text-red-700 text-md">
                            <ImCross />
                          </button>
                        </div>
                        <p className="text-md mb-2">{product.description}</p>
                        <p className="mb-2">Price: ${product.price}</p>
                      </div>
                    </div>
                  ) : null;
                })
              )}
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h1 className="text-2xl font-bold">Wishlist</h1>
              <div className="bg-white p-3 rounded-xl">
                {wishListItem.length === 0 ? (
                  <h1 className="text-center bg-purple-300 p-4 rounded-xl">
                    No items has been added yet. Visit product details to
                    wishlist them 😍
                  </h1>
                ) : (
                  wishListItem.map((wishListId) => {
                    const product = allProducts.find(
                      (product) => wishListId === product.product_id
                    );
                    return product ? (
                      <div
                        className="flex gap-5 bg-purple-300 m-2 p-2 rounded-md"
                        key={product.product_id}
                      >
                        <div className="w-1/6">
                          <img
                            className="h-[130px] w-full rounded-md"
                            src={product.product_image}
                            alt=""
                          />
                        </div>
                        <div className="w-5/6">
                          <div className="flex justify-between">
                            <h1 className="text-2xl font-bold mb-2">
                              {product.product_title}
                            </h1>
                            <button className="btn rounded-4xl text-red-700 text-md">
                              <ImCross />
                            </button>
                          </div>
                          <p className="text-md  mb-2">{product.description}</p>
                          <p className=" mb-2">Price : ${product.price}</p>
                          <button className="btn bg-purple-700 rounded-2xl text-white">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    ) : null;
                  })
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 md:max-w-5xl flex flex-col text-center items-center justify-center">
          <img className="h-[100px] w-[100px]" src={GroupImage} alt="" />
          <p className="py-4">
            Congratulations! <br /> Click the button below to redirect too home
            page
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button
                onClick={handleNavigation}
                className="btn bg-purple-700 text-white"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
