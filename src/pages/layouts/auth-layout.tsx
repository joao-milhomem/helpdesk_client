import { Logo } from "@/components/logo"
import type React from "react"
import { Outlet } from "react-router-dom"

export const AuthLayout: React.FC = () => {
	return (
		<div className="grid min-h-screen grid-cols-2 place-content-center">
			<div className="grid min-h-screen place-content-center bg-muted">
				<div className="ont-semibold mt-[-2rem] flex flex-col items-center gap-2">
					<Logo className="w-60" />

					<h1 className="mt-4 mb-2 space-x-0.5 font-bold text-4xl text-muted-foreground tracking-tight">
						Need
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
