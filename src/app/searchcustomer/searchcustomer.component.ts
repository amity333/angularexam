import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {

  customers: Customer[];
  searchedItems: Customer[];

  constructor(private service: CustomerService) { }

  ngOnInit() {
   
  }

  filterData(value:string)
  {
    this.customers = this.service.getAllCustomers();
    
    this.searchedItems = this.customers.filter(
      customers =>customers.name.toLowerCase().indexOf(value.toLowerCase()) !==-1);

      this.service.setSearchedData(this.searchedItems);
    
      if(this.searchedItems.length > 0)
        alert('Data found, to view use showsearched menu');
      else
        alert('Not found please try with other name');
  }

}
