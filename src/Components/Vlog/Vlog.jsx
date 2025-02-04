import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const Vlog = ({ vlog }) => {
  const { headline, news, writer, likes, dislikes, image } = vlog;
  const [like, setLike] = useState(likes);
  const [disLike, setDisLike] = useState(dislikes);

  const handleLike = () => {
    setLike((prevLike) => prevLike + 1);
  };
  const handleDisLike = () => {
    setDisLike((prevDisLike) => prevDisLike + 1);
  };

  return (
    <div>
      <Helmet>
        <title>Vlogs</title>
      </Helmet>
      <div className="card  lg:card-side bg-base-100 shadow-sm md:p-5 m-2 bg-purple-300">
        <figure className="md:w-1/2">
          <img className="md:w-full" src={image} alt="Album" />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title text-5xl">{headline}</h2>
          <p className="text-xl">{news}</p>
          <p className="font-bold">By {writer}</p>
          <div className="flex  card-actions justify-between">
            <button
              className="btn bg-purple-700
             text-white"
            >
              Listen
            </button>
            <div className="flex gap-2">
              <button onClick={() => handleLike()} className="btn text-xl">
                <AiFillLike /> {like}
              </button>
              <button onClick={handleDisLike} className="btn text-xl">
                <AiFillDislike />
                {disLike}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Vlog.propTypes = {
  vlog: PropTypes.object,
  headline: PropTypes.string,
  news: PropTypes.string,
  writer: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  image: PropTypes.string,
};

export default Vlog;
