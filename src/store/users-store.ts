import { create } from "zustand";
import { User } from "../interfaces/user";

interface UsersStore {
  users: User[];
  setUsers: (users: User[]) => void;
}

const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  setUsers: (users: User[]) => set({ users }),
}));

export default useUsersStore;
