import { Component } from '@angular/core';
import { Article  } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
     this.articles.push(
       new Article(title.value, link.value)
     ) 

    title.value = "";
    link.value = "";
    return false;
  }

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 5),
      new Article('ReactJS', 'https://reactjs.org', 8),
      new Article('VueJS', 'https://vuejs.org', 2),
      new Article('GraphQL', 'https://graphql.org', 3),
      new Article('PHP', 'http://php.net', 8)
    ]
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }
}
