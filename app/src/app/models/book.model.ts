export interface Book {
    _id: string;
    title: string;
    genre: string;
    author: string;
    price: number;
    description: string;
    image?: string;
}