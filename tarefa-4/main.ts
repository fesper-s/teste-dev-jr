import { groupByCategory } from "./groupByCategory";

const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
];
  
console.log(groupByCategory(items));
