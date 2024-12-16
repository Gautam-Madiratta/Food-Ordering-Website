import { useEffect, useState } from "react";

const UserFunction = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("interval");
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h1>{name} From Function </h1>
      <h3>Location : Bangalore</h3>
      <h4>contact : @GautamMadiratta</h4>
    </div>
  );
};

export default UserFunction;
