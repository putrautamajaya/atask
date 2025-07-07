import { Space } from "@mantine/core";
import useUsersStore from "../store/users-store";
import User from "./User";

const UserList = () => {
  const { users } = useUsersStore();

  return (
    <div className="max-h-full overflow-y-auto">
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
          <Space h="md" />
        </div>
      ))}
    </div>
  );
};

export default UserList;
