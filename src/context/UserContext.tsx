import {
	ReactNode,
	createContext,
	useState,
} from "react";

export type User = {
	firstName: string;
	lastName: string;
	email: string;
	image: null | string;
};
export type UserContext = {
	user: User;
	changeUserInfo: (newUserInfo: User) => void;
};

export const UserContext = createContext<UserContext>({
	user: {
		firstName: "mohammed",
		lastName: "naji",
		email: "mhdnaji763@gmail.com",
		image: null,
	},
	changeUserInfo: () => {},
});

type UserContextProvider = {
	children: ReactNode;
};
export const UserContextProvider = ({ children }: UserContextProvider) => {
	const [user, setUser] = useState<User>({
		firstName: "mohammed",
		lastName: "naji",
		email: "mhdnaij763@gmail.com",
		image: "",
	});

  function changeUserInfo(newUserInfo: User) {
    console.log(newUserInfo);
		setUser({ ...newUserInfo });
  }
	return (
		<UserContext.Provider value={{ user, changeUserInfo }}>
			{children}
		</UserContext.Provider>
	);
};
