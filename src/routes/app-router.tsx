import { AppLayout } from "@/pages/layouts/app-layout"
import { AuthLayout } from "@/pages/layouts/auth-layout"
import { SignIn } from "@/pages/sign-in"
import { SignUp } from "@/pages/sign-up"
import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "",
				element: <SignIn />,
			},
			{
				path: "sign-up",
				element: <SignUp />,
			},
		],
	},
])
