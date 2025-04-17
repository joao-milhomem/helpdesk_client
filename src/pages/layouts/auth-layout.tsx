import { Logo } from "@/components/logo"
import type React from "react"
import { Outlet } from "react-router-dom"

export const AuthLayout: React.FC = () => {
	return (
		<div className="grid min-h-screen grid-cols-2 place-content-center">
			<div className="grid min-h-screen place-content-center bg-muted">
				<div className="ont-semibold flex flex-col items-center gap-2">
					<Logo />

					<h1 className="space-x-0.5 font-bold text-4xl tracking-tight mt-4 mb-2">
						<span className="text-muted-foreground">Need</span>
						<span className="rounded-md bg-primary p-2 font-extrabold text-muted">
							He!p
						</span>
					</h1>

					<p className="text-muted-foreground text-xl">Your support system</p>
				</div>
			</div>
			<div className="grid place-content-center">
				<Outlet />
			</div>
		</div>
	)
}
