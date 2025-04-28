import type React from "react"

export function Logo(props: React.HTMLProps<HTMLElement>) {
	return (
		<div className={`${props.className}`}>
			<svg
				width="100%"
				height="100%"
				aria-labelledby="minimalist-cube-logo"
				viewBox="0 0 64 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title id="minimalist-cube-logo">Minimalist Cube Logo</title>
				<path
					d="M32 8L56 20V44L32 56L8 44V20L32 8Z"
					fill="currentColor"
					fillOpacity="0.2"
					className="text-primary"
				/>
				<path
					d="M32 8L56 20L32 32L8 20L32 8Z"
					fill="currentColor"
					fillOpacity="0.4"
					className="text-primary"
				/>
				<path
					d="M32 32L56 20V44L32 56V32Z"
					fill="currentColor"
					fillOpacity="0.6"
					className="text-primary"
				/>
				<path
					d="M8 20V44L32 56V32L8 20Z"
					fill="currentColor"
					fillOpacity="0.3"
					className="text-primary"
				/>
				<path
					d="M32 32V56M32 32L8 20M32 32L56 20"
					stroke="currentColor"
					strokeWidth="2"
					className="text-primary"
				/>
			</svg>
		</div>
	)
}
