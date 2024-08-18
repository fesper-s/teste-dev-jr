export async function fetchUserData(): Promise<any> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        return users.filter((user: any) => user.username.startsWith("C"))
    } catch (error) {
        console.error(error)
        return []
    }
} 
