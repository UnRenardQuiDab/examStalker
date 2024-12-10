import { useState } from "react"


export default function useApiUrl() {

	const [apiUrl, setApiUrl] = useState(localStorage.getItem("ApiUrl") || "http://localhost:3000")

	const updateApiUrl = (newApiUrl) => {
		setApiUrl(newApiUrl)
		localStorage.setItem("ApiUrl", newApiUrl)
	}

	return {
		apiUrl,
		updateApiUrl
	};
}