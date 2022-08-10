import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

// https://www.freakyjolly.com/angular-7-6-pagination-implement-local-or-server-pagination-in-3-steps/

// https://jsonworld.com/demo/server-side-pagination-in-angular-example-and-tutorial

@Component({
  selector: "app-pagination-demo",
  templateUrl: "./pagination-demo.component.html",
  styleUrls: ["./pagination-demo.component.scss"],
})
export class PaginationDemoComponent implements OnInit {
  config: any;
  collection = [];
  loading = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
    };

    route.queryParams.subscribe(
      (params) =>
        (this.config.currentPage = params["page"] ? params["page"] : 1)
    );

    // setTimeout(() => {
    //   for (let i = 1; i <= 100; i++) {
    //     this.collection.push(`item ${i}`);
    //   }
    //   this.loading = true;
    // }, 5000);

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit() {}

  pageChange(newPage: number) {
    this.router.navigate(["listing"], { queryParams: { page: newPage } });
  }
}
