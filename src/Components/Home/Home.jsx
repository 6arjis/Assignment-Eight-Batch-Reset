import Hero from "../Hero/Hero";
import ItemsHome from "../Items-Home/ItemsHome";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero></Hero>
      <ItemsHome></ItemsHome>
    </div>
  );
};

export default Home;
