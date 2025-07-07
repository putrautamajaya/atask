import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconStarFilled } from "@tabler/icons-react";
import { User as IUser } from "../interfaces/user";
import { MinimalRepository } from "../interfaces/repo";
import { useState } from "react";
import { getRepositories } from "../api/api";

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps) => {
  const [repos, setRepos] = useState<MinimalRepository[] | []>([]);
  const [opened, { toggle }] = useDisclosure(false);

  const handleClick = async () => {
    const res = await getRepositories(user.login);
    if (!res) return;
    setRepos(res.data);
    toggle();
  };

  return (
    <div>
      <div
        className="w-full p-2 bg-gray-100 rounded-b-md cursor-pointer truncate flex justify-between items-center hover:bg-gray-50 "
        onClick={handleClick}
      >
        <div>{user.login}</div>
        <IconChevronDown color="gray" />
      </div>

      <Collapse in={opened} className="pl-4">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-blue-100 p-2 rounded-md my-2">
            <div className="font-bold flex flex-row justify-between items-center gap-2">
              <div className="truncate">{repo.name}</div>
              <div className="flex flex-row gap-2">
                <div>{repo.stargazers_count}</div>
                <IconStarFilled color="gold" />
              </div>
            </div>
            <div>{repo.description}</div>
          </div>
        ))}
      </Collapse>
    </div>
  );
};

export default User;
