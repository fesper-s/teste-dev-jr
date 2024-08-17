type ArrayType = {
    id: number,
    [key: string]: any
}

export function mergeArrays(array1: ArrayType[], array2: ArrayType[]): ArrayType[] {
    const result: ArrayType[] = [...array1];

    array2.forEach((item2) => {
        const index: number = result.findIndex(item1 => item1.id === item2.id);
        if (index !== -1) {
            result[index] = { ...result[index], ...item2 };
        }
        else {
            result.push(item2);
        }
    });

    return result;
}
