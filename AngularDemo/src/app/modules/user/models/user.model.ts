export interface User {
    id:number;
    firstname:string;
    email:string;
    gender:boolean;
    date:Date;
    department:number;
}

export interface Department {
    id:number;
    name:string;
}