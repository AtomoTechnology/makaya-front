import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})

export class PaymentCardComponent implements OnInit {

  constructor( private route:Router) { 
   
  }

  ngOnInit(): void {
  }
  validateCard(e:any){    
    e.preventDefault();
    this.route.navigate(['welcome'])
  }

}
