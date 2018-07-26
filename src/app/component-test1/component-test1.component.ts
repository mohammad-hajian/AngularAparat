import {Component, OnInit} from '@angular/core';@Component({selector: 'app-component-test1', templateUrl: './component-test1.component.html',styleUrls: ['./component-test1.component.css']})export class ComponentTest1Component implements OnInit {
    
  Is_Ok=false;

  Message='Count is zero';
  Count=0;
  OnClick(){
    this.Count++ ;
    this.Message='Count is : ' + this.Count;
  }



  Mouse='Muse is out';
  MouseEnter(){
    this.Mouse='Mouse is in';
  }
  MouseLeave(){
    this.Mouse='Mouse is out';
  }

  ClassText='OutFocus';
  OnFocus(){
    this.ClassText='OnFocus';
  }

  Onblur(){
    this.ClassText='OutFocus';
  }

TextName:string ='';
TextDifferent:string='';
Resault:Number=0;
ShowRes:boolean=false;
Mosavi(t1,t2,ob){
  t1=Number(t1);
  t2=Number(t2);
  if (ob=='+') {
    this.Resault=t1+t2;
  }
  else if (ob=='-') {
    this.Resault=t1-t2;
  }
  else if (ob=='*') {
    this.Resault=t1*t2;
  }
  else if (ob=='/') {
    this.Resault=t1/t2;
  }
  this.ShowRes=true;
}

Taghir(){
  this.ShowRes=false;
}
  constructor() {}
    ngOnInit() {}
}
