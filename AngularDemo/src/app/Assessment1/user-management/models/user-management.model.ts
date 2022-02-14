export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    contact: number;
    client: number;
    office: number;
}

export interface Client {
    id: number;
    name: string;
}

export interface Office {
    id: number;
    name: string;
}