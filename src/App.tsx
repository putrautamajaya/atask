import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import SearchUser from "./component/SearchUser";
import CardSearchUser from "./component/CardSearchUser";
import UserList from "./component/UserList";
import Author from "./component/Author";

function App() {
  const style = {
    container:
      "bg-gray-100 w-screen h-screen flex flex-col items-center justify-center p-4",
  };

  return (
    <>
      <MantineProvider>
        <div className={style.container}>
          <CardSearchUser>
            <Author />
            <SearchUser />
            <UserList />
          </CardSearchUser>
        </div>
      </MantineProvider>
    </>
  );
}

export default App;
