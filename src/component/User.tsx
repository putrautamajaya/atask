import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { User as IUser } from "../interfaces/user";
import { MinimalRepository } from "../interfaces/repo";
import { useState } from "react";
import { getRepositories } from "../api/api";
import RepoDetail from "./RepoDetail";

interface UserProps {
  user: IUser;
}

const style = {
  container:
    "w-full p-2 bg-gray-100 rounded-b-md cursor-pointer truncate flex justify-between items-center hover:bg-gray-50 ",
};

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
      <div className={style.container} onClick={handleClick}>
        <div>{user.login}</div>
        <IconChevronDown color="gray" />
      </div>

      <Collapse in={opened} className="pl-4">
        {repos.map((repo) => (
          <RepoDetail repo={repo} key={repo.id} />
        ))}
      </Collapse>
    </div>
  );
};

export default User;
