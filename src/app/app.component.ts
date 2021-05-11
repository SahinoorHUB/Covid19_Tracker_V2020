import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid19';
  loadier = false;
  isGlobalResolver: any;

  constructor(private router: Router,
              private route: ActivatedRoute,) {

    router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loadier = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loadier = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

}
