import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),//Lembrar de deixar '' vazio.
      senha: new FormControl('', [Validators.required])
    })
  }  

  public login() {
    console.log('Logou na aplicação!', this.loginForm);
    this.clearForm();
  }

  public clearForm() {
    this.loginForm = this.formBuilder.group({
      email: '',
      senha: ''
    })
  }
  

}
