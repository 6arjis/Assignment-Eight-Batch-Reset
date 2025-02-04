import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div>
      <div
        className="flex flex-col gap-7 pb-20
       justify-center items-center text-center bg-purple-700 p-4 relative top-0 left-0 w-full"
      >
        <h1 className="md:text-6xl text-3xl mt-3 font-bold text-white">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-md text-white">
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <button className="btn btn-outline text-md w-28 bg-white text-purple-700 rounded-xl">
          <NavLink to="/dashboard">Show Now</NavLink>
        </button>
      </div>
      <div className="flex justify-center items-center relative bottom-16">
        <img
          src="/banner.jpg"
          className="md:w-[1062px] md:h-[500px] rounded-xl md:border-15 border-white
          "
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
