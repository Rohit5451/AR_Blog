import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  afs: any;

  constructor() { }


  loadData(){
    return  this.afs.collection('categories').snapshotChanges().pipe(
       map(actions =>{
         return map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return{id,data};
         })
       })
     )
   }
}
