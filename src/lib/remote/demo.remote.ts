import { query } from '$app/server'

export const getFakeData = query(async () => {
	const fakeData = {
		name: 'John Doe',
		age: 30,
		email: 'john.doe@example.com'
	}

	await new Promise((resolve) => setTimeout(resolve, 1500))

	return fakeData
})
