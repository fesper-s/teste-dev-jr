type User = {
    id: number,
    name: string,
    age: number,
    isActive: boolean
}

type ActiveUser = {
    id: number,
    name: string
}

export function transformData(users: User[]): ActiveUser[] {
    return users
        .filter(user => user.isActive)
        .map(users => ({
            id: users.id,
            name: users.name
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
}
