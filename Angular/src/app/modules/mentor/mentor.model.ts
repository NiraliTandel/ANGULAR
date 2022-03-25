export class Mentor {
  public id: number;
  public firstname: string;
  public lastname: string;
  public email: string;
  public contact: string;
  public department: number;
  public office: number;
  public date: number;
  public age: string;
  public gender: string;
  constructor(
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    contact: string,
    department: number,
    office: number,
    date: number,
    age: string,
    gender: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.contact = contact;
    this.department = department;
    this.office = office;
    this.date = date;
    this.age = age;
    this.gender = gender;
  }
}

export class MentorForm {
  public firstname: string;
  public lastname: string;
  public email: string;
  public contact: string;
  public department: number;
  public office: number;
  public date: number;
  public age: string;
  public gender: string;
  constructor(
    firstname: string,
    lastname: string,
    email: string,
    contact: string,
    department: number,
    office: number,
    date: number,
    age: string,
    gender: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.contact = contact;
    this.department = department;
    this.office = office;
    this.date = date;
    this.age = age;
    this.gender = gender;
  }
}

export interface Department {
  id: number;
  name: string;
}

export interface Office {
  id: number;
  name: string;
}

export interface FilterData {
  firstname: string;
  age: string;
  gender: string;
}
