export async function getMenu(lang) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${lang}/menu`
	)
	const menu = await response.json()

	return menu
}
