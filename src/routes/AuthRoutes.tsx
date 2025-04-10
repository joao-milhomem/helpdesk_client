import { SignIn } from "@/pages/SIgnIn"
import { SignUp } from "@/pages/SignUp"
import { AuthLayout } from "@/pages/layouts/AuthLayout"

import type React from "react"

import { Navigate, Route, Routes } from "react-router-dom"

const AuthRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<AuthLayout />}>
				<Route path="/" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="*" element={<Navigate to="/sign-in" replace />} />
			</Route>
		</Routes>
	)
}

export default AuthRoutes
