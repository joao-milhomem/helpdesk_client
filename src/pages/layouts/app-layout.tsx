import type React from "react"
import { Outlet } from "react-router-dom"

export const AppLayout: React.FC = () => {
	return (
		<div>
			<header>
				<h1>Helpdesk App</h1>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}
