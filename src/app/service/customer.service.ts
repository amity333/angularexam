import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

/* 
this is service class
*/
export class CustomerService {

  url: string = '../assets/customer.json';
  customers: Customer[];
  
  status: string; 
  filteredData: Customer[];
  index: number;
  customer :Customer;
  
  /*
  @param HttpClient
  constructor initalize the http object
  invoking the getCustomers(); and initalize the customer
  */
  constructor(private http: HttpClient) 
  {
    this.getCustomers();
  }

  /*
  http object getting data from json file
  */

  getData(): Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.url).pipe(retry(2), catchError(this.handleError));
  }

  handleError(error)
  {
    console.log(error);
    return throwError(error);
  }

  getCustomers()
  {
    this.getData().subscribe((data: Customer[]) => {
      this.customers = data;
      console.log('Data are '+ this.customers);
    }, error => { alert('problemwith service/url try again')});
  }

  getAllCustomers()
  {
    return this.customers;
  }

  deleteCustomer(index: number)
  {
    this.customers.splice(index, 1);         
    //'this.employees.pop();                      /
  }

  addCustomer(customer: Customer)
  {
    this.customers.push(customer);
  }

  setSearchedData(data)
  {
    this.filteredData=data;
  }

  getSearchedData()
  {
    return this.filteredData;
  }

  setIndex(i)
  {
     this.index=1;
  }

  getIndex()
  {
    return this.index;
  }

  getCustomer(i)
  {
    return this.customers[i]; 
  }

  update(customer)
  {
    this.customers[this.customers.indexOf[customer]] = customer;
  }
}
