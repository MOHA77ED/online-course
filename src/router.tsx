import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/Student/Home";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./component/Layout/MainLayout";
import About from "./pages/Student/About/Index";
import Courses from "./pages/Student/Courses/Courses";
import Contact from "./pages/Student/Contact/Contact";
import Login from "./pages/Student/Login/Login";
import Signup from "./pages/Student/Signup/Signup";
import GuestLayout from "./component/Layout/GuestLayout";

export const router = createHashRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/courses",
				element: <Courses />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/",
				element: <GuestLayout />,
				children: [
					{
						path: "/login",
						element: <Login />,
					},
					{
						path: "/signup",
						element: <Signup />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
]);
