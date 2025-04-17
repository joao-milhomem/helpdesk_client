import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn } from "lucide-react"
import type React from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { z } from "zod"

const signInFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3),
})

type SignInFormTypes = z.infer<typeof signInFormSchema>

export const SignIn: React.FC = () => {
	const { register, handleSubmit } = useForm<SignInFormTypes>()

	async function handleSignIn(formInputs: SignInFormTypes) {
		const signInFormParse = signInFormSchema.safeParse(formInputs)

		await new Promise((resolve) => setTimeout(resolve, 2000))

		if (signInFormParse.success) {
			console.log(signInFormParse.data)
		} else {
			console.log(signInFormParse.error)
		}
	}

	return (
		<div className="min-w-[350px] space-y-8 rounded-md border p-10 shadow-2xl shadow-muted">
			<h1 className="flex items-center gap-2 text-xl">
				Acesse sua conta{" "}
				<span>
					<LogIn className="" />
				</span>
			</h1>

			<form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">Email:</Label>
					<Input type="email" id="email" {...register("email")} />
				</div>

				<div className="space-y-2">
					<Label htmlFor="password">Password:</Label>
					<Input type="password" id="password" {...register("password")} />
				</div>
				<Button type="submit" className="w-full cursor-pointer font-semibold">
					Sign In
				</Button>

				<footer className="text-muted-foreground text-sm">
					AInda não tem uma conta ?{" "}
					<Button asChild variant={"link"} className="p-0">
						<NavLink to={"/auth/sign-up"}>Cadastre-se</NavLink>
					</Button>
				</footer>
			</form>
		</div>
	)
}
