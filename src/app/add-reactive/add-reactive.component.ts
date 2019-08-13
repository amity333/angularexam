import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {

  cust: Customer={id: 0, name: '', email: '', phone: 0};
  custForm:FormGroup;
  status= 'INVALID';
  constructor(private service: CustomerService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.custForm=this.formBuilder.group({
      id:['',Validators.required,'',Validators.pattern('[0-9]{3,}')],
      name:['',Validators.required,'',Validators.pattern('[A-Z]{1}[a-z]{2,}')],
      email:['',Validators.required,'',Validators.email],
      phone:['',Validators.required,'',Validators.pattern('[0-9]{10}')],
    });
  }

  add()
  {
    this.cust = this.custForm.value;
  
    console.log(this.cust);
    
    if(this.custForm.invalid) 
      return;
    else
    {
      this.status = 'VALID';
      this.service.addCustomer(this.cust);
      alert('customer added');
     // this.router.navigate(['list']);
    }

  }

}
