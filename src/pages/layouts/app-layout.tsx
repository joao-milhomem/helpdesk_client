import { Header } from "@/components/header"
import type React from "react"
import { Outlet } from "react-router-dom"

export const AppLayout: React.FC = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<div>
				<Outlet />
			</div>
		</div>
	)
}
