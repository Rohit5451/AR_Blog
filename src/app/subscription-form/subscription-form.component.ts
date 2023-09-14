import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../Services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  isEmailError : boolean = false;
  isSubscribed : boolean = false;

  constructor(private subService : SubscribersService){}

  onSubmit(formval :any){

   
    const subData : Sub ={
      name : formval.name,
      email:formval.email
    }

    this.subService.checkSubs(subData.email).subscribe(val =>{
      if(val.empty){
        this.subService.addSubs(subData);
        this.isSubscribed = true;
      }else{
        this.isEmailError = true;
      }
    })
    
  }

}
