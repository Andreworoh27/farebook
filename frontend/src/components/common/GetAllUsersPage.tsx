import { useQuery } from "@apollo/client";
import { GetAllUsersQuery } from "../../queries/Queries";

interface UserProps {
  id: string;
  firstName: string;
  email: string;
  mobileNumber: string;
  dob: string;
  gender: string;
  password: string;
}

interface GetAllUsersData {
  getAllUsers: UserProps[];
}

export default function GetAllUsersPage() {
  const { loading, error, data } = useQuery<GetAllUsersData>(GetAllUsersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data?.getAllUsers.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.firstName}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
