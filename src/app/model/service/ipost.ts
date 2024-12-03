export interface Ipost {
    id?: number;
    title: string;
    author: string;
    date: string | Date;
    description: string;
    content?: number;
    imageUrl: string;
}
