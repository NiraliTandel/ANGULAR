export class Doctor {
  public id: number;
  public photo: string;
  public specialization: string;
  public gender: string;
  public firstName: string;
  public lastName: string;
  public emailId: string;
  public dateOfEstablishment: string;
  public mobileNo: string;
  public instituteName: string;
  public instituteCertificate: string;
  public doctorDegree: string;
  constructor(
    id: number,
    photo: string,
    specialization: string,
    gender: string,
    firstName: string,
    lastName: string,
    emailId: string,
    dateOfEstablishment: string,
    mobileNo: string,
    instituteName: string,
    instituteCertificate: string,
    doctorDegree: string,
  ) {
    this.id = id;
    this.photo = photo;
    this.specialization = specialization;
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.dateOfEstablishment = dateOfEstablishment;
    this.mobileNo = mobileNo;
    this.instituteName = instituteName;
    this.instituteCertificate = instituteCertificate;
    this.doctorDegree = doctorDegree;
  }
}
