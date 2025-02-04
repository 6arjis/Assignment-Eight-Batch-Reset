import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TiHeartFullOutline } from "react-icons/ti";
import { addToShoppingCart, addToWishList } from "../Utility/AddToDB";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { product_id } = useParams();
  console.log(product_id);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(products);

  const handleAddToShoppingCartButton = (id) => {
    addToShoppingCart(id);
  };
  const handleAddToWishListButton = (id) => {
    addToWishList(id);
    setIsButtonDisabled(true);
  };

  return (
    <div>
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      {products.map((product, idx) =>
        product_id === product.product_id ? (
          <div key={idx}>
            <div>
              <div
                className="flex flex-col gap-4 pb-20
       justify-center items-center text-center bg-purple-700 p-4 relative top-0 left-0 w-full text-purple-200"
              >
                <h1 className="md:text-6xl text-3xl mt-3 font-bold">
                  Product Details
                </h1>
                <p className="text-md mb-20">
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to the coolest accessories,
                  we have it all!
                </p>
              </div>
              <div className="flex justify-center items-center relative bottom-16">
                <div className="hero bg-base-200 min-h-screen">
                  <div
                    className="hero-content flex-col lg:flex-row-reverse rounded-xl bg-purple-300 absolute top-[-80px]
                  "
                  >
                    <div className="text-center lg:text-left md:w-1/2">
                      <h1 className="md:text-4xl  font-bold">
                        {product.product_title}
                      </h1>
                      <p className="my-2">Price : ${product.price}</p>
                      <button
                        className={`btn btn-sm  btn-outline ${
                          product.availability ? "btn-success" : "btn-error"
                        }`}
                      >
                        {product.availability ? "In Stock" : "Out Of Stock"}
                      </button>
                      <p className="py-2">{product.description}</p>
                      <p className="py-2 font-bold">Specifications : </p>
                      {product.specifications.map((spec, idx) => (
                        <li className="text-gray-600" key={idx}>
                          {spec}
                        </li>
                      ))}
                      <div className="md:flex items-center gap-2">
                        <label className="md:text-xl">Ratings : </label>
                        <div className="rating">
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                        <button className=" btn rounded-2xl ">
                          {product.rating}
                        </button>
                      </div>
                      <div className="md:flex gap-2 my-2">
                        <div className="">
                          <button
                            onClick={() =>
                              handleAddToShoppingCartButton(product.product_id)
                            }
                            className="md:flex items-center btn btn-outline btn-success md:text-xl"
                          >
                            Add to cart
                            <RiShoppingBag4Line />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            handleAddToWishListButton(product.product_id)
                          }
                          className={`text-red-600 text-3xl btn rounded-4xl ${
                            isButtonDisabled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={isButtonDisabled}
                        >
                          <TiHeartFullOutline />
                        </button>
                      </div>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                      <div className="card-body">
                        <img src={product.product_image} className="" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ProductDetails;
