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
  }
  clickSaveChild(event){
    console.log('EVENT CHILD: ', event)

  }

}
