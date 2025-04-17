import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"
import type React from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { z } from "zod"

const signUpFormSchema = z.object({
	name: z.string().min(3, "Name is required"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(3, "Password must be at least 8 characters"),
})

type SignUpFormTypes = z.infer<typeof signUpFormSchema>

export const SignUp: React.FC = () => {
	const { register, handleSubmit } = useForm<SignUpFormTypes>()

	const onSubmit = async (data: SignUpFormTypes) => {
		const signUpFormParse = signUpFormSchema.safeParse(data)

		await new Promise((resolve) => setTimeout(resolve, 2000))

		if (signUpFormParse.success) {
			console.log(signUpFormParse.data)
		} else {
			console.log(signUpFormParse.error)
		}
	}

	return (
		<div className="min-w-[350px] space-y-8 rounded-md border p-10 shadow-2xl shadow-muted">
			<h1 className="flex items-center gap-2 text-xl ">
				Crie sua conta
				<span>
					<UserPlus />
				</span>
			</h1>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="name">Nome:</Label>
					<Input type="text" id="name" {...register("name")} />
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">Email:</Label>
					<Input type="email" id="email" {...register("email")} />
				</div>

				<div className="space-y-2">
					<Label htmlFor="password">Senha:</Label>
					<Input type="password" id="password" {...register("password")} />
				</div>

				<Button type="submit" className="w-full cursor-pointer font-semibold">
					Cadastrar
				</Button>

				<footer className="text-center text-muted-foreground text-sm">
					Já possui uma conta?{" "}
					<Button asChild variant={"link"} className="p-0">
						<NavLink to={"/auth"}>Faça login</NavLink>
					</Button>
				</footer>
			</form>
		</div>
	)
}
