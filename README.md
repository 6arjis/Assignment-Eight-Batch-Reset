# Gadget Heaven - E-Commerce Website

Welcome to the **Gadget Heaven** project! This is a fully functional e-commerce website built using **React** and **Vite**. The website features a dynamic and interactive user experience for browsing and purchasing gadgets.

## Live Website Link

[Live Demo of Gadget Heaven](#) _(Replace with actual link)_

## Requirement Document Link

[Requirement Document](#) _(Replace with actual link)_

## React Fundamental Concepts Used

- **Components**: Modular structure using functional components.
- **Props**: Passing data between components.
- **State Management**: Using React's `useState` and `useContext` for managing state.
- **Routing**: Implementing navigation using `react-router-dom`.
- **Effects**: Using `useEffect` for side effects like fetching data.
- **Custom Hooks**: Creating reusable hooks for specific functionalities.

## Data Handling and Management

- **Local Storage**: Persisting cart and wishlist data even after page reloads.

## Features of Gadget Heaven

1. **Dynamic Navbar**:

   - Includes logo, brand name, dashboard, and stats.
   - Active routes are indicated in the navbar.

2. **Home Page**:

   - Attractive banner with a button linking to the dashboard.
   - Sidebar for gadget categories (computers, phones, smart watches, chargers, power banks).
   - Gadget cards displayed in a grid format with product images, titles, prices, and details buttons.

3. **Details Page**:

   - Displays comprehensive information about each product including image, name, price, description, specifications, availability, and rating.
   - Buttons to add items to the cart or wishlist.

4. **Dashboard Page**:

   - Two tabs for Cart and Wishlist.
   - Cart shows total price and allows sorting by price.
   - Wishlist displays saved items with options to remove them.

5. **Responsive Design**:
   - The layout adapts to different screen sizes ensuring a seamless experience on mobile and desktop devices.

## Additional Functionality

- **404 Page Handling**: Custom error page for invalid routes.
- **Toast Notifications**: Notifications for adding items to the cart or wishlist.
- **Dynamic Page Titles**: Each page has a unique title based on its content.
- **Favicon Integration**: Custom favicon added to enhance branding.

## Challenge Tasks Implemented

- Different background colors for the navbar depending on the current route using `useLocation()`.
- Modal confirmation on purchase with redirection to the home page using `useNavigate()`.
