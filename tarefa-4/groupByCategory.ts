type Item = {
    name: string,
    category: string
}

type Category = Record<string, Item[]>;

export function groupByCategory(items: Item[]): Category {
    return items.reduce<Category>((acc, curr) => {
        acc[curr.category] = acc[curr.category] || []
        acc[curr.category].push(curr)
        return acc
    }, {});
}
