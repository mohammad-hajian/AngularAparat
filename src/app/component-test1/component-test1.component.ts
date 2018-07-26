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

TextName:string ='...';

  constructor() {}
    ngOnInit() {}
}
