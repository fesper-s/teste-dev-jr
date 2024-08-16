type CountOccurrencesResponse = Record<string, number>;

export function countOccurrences(str: string[]): CountOccurrencesResponse {
    return str.reduce<CountOccurrencesResponse>((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}
