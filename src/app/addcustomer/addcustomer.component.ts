import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  cust: Customer={id: 0, name: '', email: '', phone: 0};
  constructor(private service: CustomerService,private router: Router) { }

  ngOnInit() {
  }

  add()
  {
    this.service.addCustomer(this.cust);
     alert("Customer aaded successfully");                      //pop up message
    //  this.cust = { id: 0, name: '', email: '', phone: 0};                         //for reset and avoid duplicate data
     this.router.navigate(['list']);
    
  }

}


