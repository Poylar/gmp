export async function getLangs() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/languages`
	)
	const langs = await response.json()

	return langs
}
