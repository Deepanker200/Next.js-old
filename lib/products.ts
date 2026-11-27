export type Product = {
    id: number;
    name: string;
    category: string;
}

export const products: Product[] = [
    {   id: 1, name: "Laptop", category: "Electronics" },
    {   id: 2, name: "Smartphone", category: "Electronics" },
    {   id: 3, name: "T-shirt", category: "Clothing" },
    {   id: 4, name: "Jeans", category: "Clothing" },
    {   id: 5, name: "Blender", category: "Home Appliances" },
    {   id: 6, name: "Microwave", category: "Home Appliances" },
    {   id: 7, name: "Novel", category: "Books" },
    {   id: 8, name: "Notebook", category: "Stationery" },
    {   id: 9, name: "Pen", category: "Stationery" },
    {   id: 10, name: "Headphones", category: "Electronics" }
];
