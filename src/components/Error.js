import { useRouteError } from "react-router";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      Please load correct url. You hit a wall.{" "}
      {err.status + ": " + err.statusText}
    </div>
  );
};

export default ErrorElement;
