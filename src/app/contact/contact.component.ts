import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  alertMessage: string[] =
  ['Votre message a bien été envoyer.',
  'Veuillez remplir le formulaire selon les instructions.',
  'Votre message n\'a pas pu être envoyer.'
  ];


  constructor() {
   }



  contactForm = new FormGroup({
    mail: new FormControl('', Validators.compose( [ Validators.email] )),
    subject: new FormControl('', Validators.compose( [Validators.max(50), Validators.required] )),
    message: new FormControl('', Validators.compose( [Validators.max(1000), Validators.required] ))
  });

  get mail(): any { return this.contactForm.get('mail'); }
  get subject(): any { return this.contactForm.get('subject'); }
  get message(): any { return this.contactForm.get('message'); }

  ngOnInit() {
  }

  onSubmit() {
    alert(this.alertMessage[0]);
  }

  eventHandler(event) {
    console.log(event, event.keyCode, event.keyIdentifier);
 }
}
