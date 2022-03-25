import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Resume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
  resume: Resume;
  

  constructor(
    private fb : FormBuilder,
    private service : ResumeService,
    private route : Router
  ) { }

  ngOnInit(): void {
    console.log(this.myResumeForm);
  }

  myResumeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    designation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    profile: ['', Validators.required],
    skills: this.fb.array([this.skillField()]),
    technical: this.fb.array([this.technicalField()]),
    experience: this.fb.array([this.experienceField()]),
    education: this.fb.array([this.educationField()])
  });
  
  get getvalue() {
    return this.myResumeForm.controls;
  }

  skillField(): FormGroup {
    return this.fb.group({
      skill: ['',Validators.required],
      description: ['',Validators.required]
    })
  }

  get skill() {
    return this.getvalue['skills'] as FormArray;
  }

  addSkills() {
    this.skill.push(this.skillField())
  }

  deleteSkills(index:number){
    if(this.skill.length !=1){
      this.skill.removeAt(index)
    }
    console.log(this.skill.length)
  }

  technicalField(): FormGroup {
    return this.fb.group({
      tech: ['',Validators.required]
    })
  }

  get tech() {
    return this.getvalue['technical'] as FormArray;
  }

  addTechnical() {
    this.tech.push(this.technicalField())
  }

  deleteTechnical(index:number){
    if(this.tech.length !=1){
      this.tech.removeAt(index)
    }
    console.log(this.tech.length)
  }

  experienceField(): FormGroup {
    return this.fb.group({
      expname: ['',Validators.required],
      year: ['',Validators.required],
      post: ['',Validators.required],
      desc: ['',Validators.required],
    })
  }

  get exp() {
    return this.getvalue['experience'] as FormArray;
  }

  addExperience() {
    this.exp.push(this.experienceField())
  }

  deleteExperience(index:number){
    if(this.exp.length !=1){
      this.exp.removeAt(index)
    }
    console.log(this.exp.length)
  }

  educationField(): FormGroup {
    return this.fb.group({
      university: ['',Validators.required],
      gpa: ['',Validators.required]
    })
  }

  get education() {
    return this.getvalue['education'] as FormArray;
  }

  addEducation() {
    this.education.push(this.educationField())
  }

  deleteEducation(index:number){
    if(this.education.length !=1){
      this.education.removeAt(index)
    }
    console.log(this.education.length)
  }

  onSubmit() {
    this.service.deleteData(1).subscribe(()=>{
      this.service.saveData(this.myResumeForm.value).subscribe();
        this.route.navigate(['/resumebuilder/resumeview']);
      })
      console.log(this.myResumeForm.value);   
  }

  resetForm() {
    this.myResumeForm.reset();
  }

}
