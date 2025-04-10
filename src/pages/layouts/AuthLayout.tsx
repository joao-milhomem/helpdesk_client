import type React from "react"
import { Outlet } from "react-router-dom"

export const AuthLayout: React.FC = () => {
	return (
		<div>
			<div>
				<h1>Logo</h1>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}
