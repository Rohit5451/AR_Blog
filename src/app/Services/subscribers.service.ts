import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
  afs: any;

  constructor() { }

  addSubs(subData : any){
    this.afs.collection('subscribers').add(subData).then(()=>{
      console.log("Subscriber added successfully");
    })
  }

  checkSubs(subEmail : any){
    return this.afs.collection('subscribers',(ref: { where: (arg0: string, arg1: string, arg2: any) => any; }) => ref.where('email','==',subEmail)).get()

  }



}
