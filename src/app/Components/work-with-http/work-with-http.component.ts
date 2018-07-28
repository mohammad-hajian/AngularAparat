import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../Services/http-service.service';
import { IUserDetails } from '../../Interfaces/IUser';

@Component({
  selector: 'app-work-with-http',
  templateUrl: './work-with-http.component.html',
  styleUrls: ['./work-with-http.component.css']
})
export class WorkWithHttpComponent implements OnInit {

  constructor(private Service1:HttpServiceService) { }

  ListFard;
  ngOnInit() {
    this.Service1.GetListFard().subscribe(Data => this.ListFard = Data);
  }

}
