import { useRouteError } from "react-router-dom";

interface RouterError {
  data: string;
  internal: boolean;
  status: number;
  statusText: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouterError;
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <p>Error Data: {error.data}</p>
        <p>Error Status: {error.status}</p>
        <p>Error Message: {error.statusText}</p>
      </p>
    </div>
  );
}
