export type User = {
    id: string;
    firstName:string;
    lastName:string;
    email:string;
    password: string;
}

export type UserContextType = {
    isLoggedIn: boolean;
    logIn: (username: string, password: string) => boolean;
    logOut: () => void;
    users: User[];
  }