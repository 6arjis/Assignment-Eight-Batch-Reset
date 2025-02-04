import ErrorImg from "../../assets/error404.webp";
const ErrorPage = () => {
  return (
    <div>
      <div
        className="flex h-[370px] flex-col gap-4 pb-10
       justify-center items-center text-center bg-purple-700 p-4 relative top-0 left-0 w-full text-purple-200"
      >
        <h1 className="md:text-5xl pb-20 font-bold">
          Oops ! Page Not Found : ({" "}
        </h1>
      </div>
      <div className="flex justify-center items-center relative bottom-45">
        <img
          src={ErrorImg}
          className="md:w-[1062px] md:h-[500px] rounded-xl md:border-15 
          "
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
