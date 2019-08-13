import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  cust: Customer = {id: 0, name: '', email: '', phone: 0};

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit() {
    this.cust = this.service.getCustomer(this.service.getIndex());
  }

  update()
  {
    this.service.update(this.cust);
    this.router.navigate(['list']);
  }

}
