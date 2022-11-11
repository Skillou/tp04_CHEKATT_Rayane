import { Client } from '../model/Client';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})

export class FormClientComponent implements OnInit {

  validate: boolean = false;
  civilities: string[] = ['Homme', 'Femme', 'Autres'];

  // client: Client = new Client();

  client: Client = new Client({
    civility: '',
    firstName: '',
    lastName: '',
    email: '',
    telphone: NaN,
    street: '',
    city: '',
    zipCode: NaN,
    login: '',
    password: ''
  });

  public clientForm: FormGroup = this.fb.group({
    civility: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telphone: ['', [Validators.required, Validators.pattern(/^((\+)33|0)[1-9](\d{2}){4}$/)]],
    street: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern(/(?:0[1-9]|[13-8][0-9]|2[ab1-9]|9[0-5])(?:[0-9]{3})?|9[78][1-9](?:[0-9]{2})?/)]],
    login: ['', [Validators.required, Validators.min(5)]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  get civility() { return this.clientForm.get('civility'); }

  get firstName() { return this.clientForm.get('firstName'); }

  get lastName() { return this.clientForm.get('lastName'); }

  get email() { return this.clientForm.get('email'); }

  get telphone() { return this.clientForm.get('telphone'); }

  get street() { return this.clientForm.get('street'); }

  get city() { return this.clientForm.get('city'); }

  get zipCode() { return this.clientForm.get('zipCode'); }

  get login() { return this.clientForm.get('login'); }

  get password() { return this.clientForm.get('password'); }

  get confirmPassword() { return this.clientForm.get('confirmPassword'); }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.validate = true;
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
      this.client.civility = this.clientForm.get('civility')?.value;
      this.client.firstName = this.clientForm.get('firstName')?.value;
      this.client.lastName = this.clientForm.get('lastName')?.value;
      this.client.email = this.clientForm.get('email')?.value;
      this.client.telphone = this.clientForm.get('telphone')?.value;
      this.client.street = this.clientForm.get('street')?.value;
      this.client.city = this.clientForm.get('city')?.value;
      this.client.zipCode = this.clientForm.get('zipCode')?.value;
      this.client.login = this.clientForm.get('login')?.value;
      this.client.password = this.clientForm.get('password')?.value;
    }
    else {
      console.log(this.clientForm)
    }
  }
}