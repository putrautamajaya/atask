import { IconStarFilled } from "@tabler/icons-react";
import { MinimalRepository } from "../interfaces/repo";

const style = {
  container: "bg-blue-100 p-2 rounded-md my-2",
  containerStar: "flex flex-row gap-2",
  title: "font-bold flex flex-row justify-between items-center gap-2",
};

const RepoDetail = ({ repo }: { repo: MinimalRepository }) => {
  return (
    <div key={repo.id} className={style.container}>
      <div className={style.title}>
        <div className="truncate">{repo.name}</div>
        <div className={style.containerStar}>
          <div>{repo.stargazers_count}</div>
          <IconStarFilled color="gold" />
        </div>
      </div>
      <div>{repo.description}</div>
    </div>
  );
};

export default RepoDetail;
