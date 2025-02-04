import { useEffect, useState } from "react";
import Vlog from "../Vlog/Vlog";

const Vlogs = () => {
  const [vlogs, setVlogs] = useState([]);
  useEffect(() => {
    fetch("/vlogs.json")
      .then((response) => response.json())
      .then((data) => setVlogs(data.technology_news));
  }, []);
  console.log(vlogs);
  return (
    <div className="">
      {vlogs.map((vlog, idx) => {
        return <Vlog key={idx} vlog={vlog}></Vlog>;
      })}
    </div>
  );
};

export default Vlogs;
