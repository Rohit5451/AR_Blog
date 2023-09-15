import { Injectable } from '@angular/core';

//import * as firebase from 'firebase/compat';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class PostsService {
  afs: any;

  constructor() { }

  loadFeatured(){
    return  this.afs.collection('posts',(ref: { where: (arg0: string, arg1: string, arg2: boolean) => { (): any; new(): any; limit: { (arg0: number): any; new(): any; }; }; }) => ref.where('isFeatured','==',true).limit(4)).snapshotChanges().pipe(
       map(actions =>{
         return map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return{id,data};
         })
       })
     )
   }

   loadLatest(){
    return  this.afs.collection('posts',(ref: { orderBy: (arg0: string) => any; }) => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions =>{
        return map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id,data};
        })
      })
    )
   }

   

   loadCategoryPosts(categoryId : any){
    return  this.afs.collection('posts',(ref: { where: (arg0: string, arg1: string, arg2: any) => { (): any; new(): any; limit: { (arg0: number): any; new(): any; }; }; }) => ref.where('category.categoryId','==',categoryId).limit(4)).snapshotChanges().pipe(
      map(actions =>{
        return map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id,data};
        })
      })
    )
   }

   loadOnePost(postId : any){
    return this.afs.doc(`posts/${postId}`).valueChanges();
   }

   loadSimilar(catId : any){
    return  this.afs.collection('posts',(ref: { where: (arg0: string, arg1: string, arg2: any) => { (): any; new(): any; limit: { (arg0: number): any; new(): any; }; }; }) => ref.where('category.categoryId','==',catId).limit(4)).snapshotChanges().pipe(
      map(actions =>{
        return map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id,data};
        })
      })
    )
   }

  //  countViews(postId : any){
  //   const viewsCount ={
  //     views: firebase.default.firestore.FieldValue.increment(1)
  //   }
  //   this.afs.doc(`posts/${postId}`).update(viewsCount).then(()=>{
  //     console.log("View Count Updated");
  //   })
  //  }
}
