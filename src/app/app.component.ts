import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';
  sw=true;
  persons=['marco','maria','jorge','lupe'];
  aux=5;
  auxColor ='red';
  auxClass=true;
  name='sergio';

  auxNumber:number=3;
  auxExponent:number=2;

  numbers=[1,2,3,4,5,6,7,8,9,10];

  people=[
    {
      name:'hal',
      lastName:'jordan',
      age: 28,
      enable:true
    },
    {
      name:'barry',
      lastName:'allen',
      age: 26,
      enable:true
    },
    {
      name:'bruce',
      lastName:'wayne',
      age: 35,
      enable:false
    },
    {
      name:'clark',
      lastName:'kent',
      age: 34,
      enable:false
    } 
  ]



  ngOnInit(){
    const array = from([1,2,3,4,5,6]);
    array.subscribe(s => console.log('item:', s))
    
    //const aux = fromEvent(document, 'mousemove');
    
    //const aux = fromEvent<MouseEvent>(document, 'mousemove');
    //aux.subscribe(s => console.log('event: ', s.clientX + ', ' + s.clientY));

  console.log('PURA: ',this.pura(2,2));
  console.log('IMPURA: ',this.impura(2,2));

  }
  clickSaveChild(event){
    console.log('EVENT CHILD: ', event)

  }

  pura(a:number,b:number){
    return a+b;
  }

  impura(a:number,b:number){
    return a+b+Math.random();
  }

}
