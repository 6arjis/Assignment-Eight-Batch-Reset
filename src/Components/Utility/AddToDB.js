import { toast } from "react-toastify";
const getShoppingCardData = () => {
  const shoppingCartDataStr = localStorage.getItem("cart-item");
  console.log(shoppingCartDataStr);
  if (shoppingCartDataStr) {
    const shoppingCartData = JSON.parse(shoppingCartDataStr);
    return shoppingCartData;
  } else {
    return [];
  }
};

const addToShoppingCart = (id) => {
  const cartData = getShoppingCardData();
  if (cartData.includes(id)) {
    console.log("Item already Exist");
  } else {
    cartData.push(id);
    const cartDataStr = JSON.stringify(cartData);
    localStorage.setItem("cart-item", cartDataStr);
    toast("New Item has been added to cart");
  }
};

const getWishListData = () => {
  const wishListDataStr = localStorage.getItem("wish-list");
  console.log(wishListDataStr);
  if (wishListDataStr) {
    const wishListData = JSON.parse(wishListDataStr);
    return wishListData;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const wishData = getWishListData();
  if (wishData.includes(id)) {
    console.log("Item already exist");
  } else {
    wishData.push(id);
    const wishListStr = JSON.stringify(wishData);
    localStorage.setItem("wish-list", wishListStr);
    toast("Item has been added to wishlist");
  }
};

export { addToShoppingCart, addToWishList };
