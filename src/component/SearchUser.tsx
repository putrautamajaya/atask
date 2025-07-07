import { Button, Input, Space } from "@mantine/core";
import { useState } from "react";
import useUsersStore from "../store/users-store";
import { getUsers } from "../api/api";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const { setUsers } = useUsersStore();

  const handleSearch = async () => {
    const res = await getUsers(userName);
    if (!res) return;
    setUsers(res.data.items);
  };

  return (
    <div className="shrink-0">
      <Input
        placeholder="Search User"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Space h="md" />

      <Button variant="filled" fullWidth onClick={handleSearch}>
        Search
      </Button>
      <Space h="sm" />

      {userName && <div>Showing users for "{userName}"</div>}
    </div>
  );
};

export default SearchUser;
