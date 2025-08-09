import { useState } from "react";
import axios from "axios";
import { UserCard } from "../components/UserCard";
import { cleanUser } from "../libs/CleanUser";

export default function RandomUserPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genAmount, setGenAmount] = useState(1);

  const generateBtnOnClick = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get(`https://randomuser.me/api/?results=${genAmount}`);
      // response.results เป็น array ของ user
      const cleanedUsers = resp.data.results.map((user: any) => cleanUser(user));
      setUsers(cleanedUsers);
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">Users Generator</p>
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          min={1}
          value={genAmount}
          onChange={(e) => setGenAmount(Number(e.target.value))}
        />
        <button className="btn btn-dark" onClick={generateBtnOnClick}>
          Generate
        </button>
      </div>

      {isLoading && (
        <p className="display-6 text-center fst-italic my-4">Loading ...</p>
      )}

      {!isLoading && users.length > 0 && users.map((user) => (
        <UserCard
          key={user.email} 
          name={user.name}
          imgUrl={user.imgUrl}
          address={user.address}
          email={user.email}
        />
      ))}
    </div>
  );
}
