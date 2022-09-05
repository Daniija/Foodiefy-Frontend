import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public avail: boolean = false;
  public msg: string = "";
  public orderid:any;
  private baseUri: string = environment.url+"user/";
  // private baseUri: string = "http://localhost:3000/user/";
  // private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  myprofile() {
    return this.http.get(this.baseUri + "myprofile", { });
  }

  editprofile(body: any) {
    return this.http.post(this.baseUri + "editprofile", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getAllFood() {
    return this.http.get(this.baseUri + "getallfooditem", {  });
  }

  addtocart(body: any) {
    return this.http.post(this.baseUri + "addtocart", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getCount()
  {
    return this.http.get(this.baseUri + "getcount", {  });
  }

  getcart()
  {
    return this.http.get(this.baseUri + "getcart", {  });
  }

  deleteFromCart(body: any)
  {
    return this.http.post(this.baseUri + "deletefromcart", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  // paytm(body: any) {
  //   return this.http.post(this.baseUri+"paytm", body, {
  //     observe: 'body',
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   });
  // }


  placeOrder(body: any) {
    return this.http.post(this.baseUri+"placeorder", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  getAllOrder() {
    return this.http.get(this.baseUri + "getalluserorders", {  });
  }

  setOrderid(id: any)
  {
    this.orderid = id;
  }

  getOrderid()
  {
    return this.orderid;
  }

  getOneOrder(id: any)
  {
    return this.http.get(this.baseUri + "getoneorder/" + id, {  });
  }

  feedback(body: any) {
    return this.http.post(this.baseUri + "sendfeedback", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
