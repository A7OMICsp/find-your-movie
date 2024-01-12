import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      console.log('url: ', url);
    });
  }
}
