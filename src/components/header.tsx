import { LogOut, MenuIcon, Ticket, User } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function Header() {
	return (
		<header className="border border-b">
			<div className="mx-auto flex max-w-[1280px] items-center justify-between py-8">
				<NavLink to={"/"}>
					<Logo className="w-22" />
				</NavLink>

				<div className="flex items-center gap-4">
					<Button asChild type="button" className="p-6 font-semibold">
						<NavLink to={"/#"}>
							<Ticket className="!h-5 !w-5" />

							<span>Novo ticket</span>
						</NavLink>
					</Button>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								type="button"
								variant="outline"
								className="cursor-pointer p-6 font-semibold"
							>
								<MenuIcon className="!h-5 !w-5" />
							</Button>
						</DropdownMenuTrigger>

						<DropdownMenuContent align="end" className="w-56">
							<DropdownMenuItem className="cursor-pointer p-4">
								<NavLink to="/profile" className="flex items-center gap-2">
									<User />
									<p>
										Perfil
										<span className="ml-2 text-muted-foreground text-sm italic">
											(Em breve)
										</span>
									</p>
								</NavLink>
							</DropdownMenuItem>

							<DropdownMenuItem className="cursor-pointer p-4">
								<NavLink to="/logout" className="flex items-center gap-2">
									<LogOut />
									<p>Sair</p>
								</NavLink>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	)
}
