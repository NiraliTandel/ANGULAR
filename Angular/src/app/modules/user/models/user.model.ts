export interface User {
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    gender:boolean;
    date:Date;
    department:number;
    profileImg: string;
}

export interface Department {
    id:number;
    name:string;
}