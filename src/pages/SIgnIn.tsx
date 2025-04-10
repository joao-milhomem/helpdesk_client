import type React from "react"
import { useState } from "react"

export const SignIn: React.FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		console.log("Email:", email)
		console.log("Password:", password)
	}

	return (
		<div>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Sign In</button>
			</form>
		</div>
	)
}
