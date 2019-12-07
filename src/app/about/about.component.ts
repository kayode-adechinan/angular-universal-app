import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = 'angular-universal-app-about';
  id: number;
  page: number;
  persons: [];



  constructor(private titleService: Title, 
    private metaService: Meta, 
    private route: ActivatedRoute,
    private http:HttpClient) { 

    }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Angular, Universal, About'},
      {name: 'description', content: 'Angular Universal About'},
      {name: 'robots', content: 'index, follow'}
    ]);

    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

   });


   this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 0;
      });


      this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => this.persons = data, err => console.log(err))


  }

}
