import { transformData } from "./transformData";

const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true }
];

const activeUsers = transformData(users);
console.log(activeUsers);
