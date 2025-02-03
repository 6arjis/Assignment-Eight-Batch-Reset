import { Link, NavLink } from "react-router";

const Card = ({ item }) => {
  const { product_title, product_image, price, product_id } = item;
  return (
    <Link to={`/product/${product_id}`}>
      <div className="card bg-base-100 w-72 shadow-xl m-2">
        <figure>
          <img
            className="h-[200px] w-[full]"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body bg-purple-200 rounded-b-xl">
          <h2 className="card-title">{product_title}</h2>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <NavLink
              to="/product_details"
              className="btn outline text-purple-700 outline-purple-700"
            >
              Show Details
            </NavLink>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
