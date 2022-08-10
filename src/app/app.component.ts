import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";

import * as NProgress from "nprogress";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-universal-app";
  loading = false;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          NProgress.start();
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          NProgress.done();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: "keywords", content: "Angular, Universal, Example" },
      { name: "description", content: "Angular Universal Example" },
      { name: "robots", content: "index, follow" },
    ]);
  }
}
