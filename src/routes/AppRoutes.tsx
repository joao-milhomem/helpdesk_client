import { Home } from "@/pages/Home"
import { AppLayout } from "@/pages/layouts/AppLayout"
import { Route, Routes } from "react-router-dom"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	)
}
