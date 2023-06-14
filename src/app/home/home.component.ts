import { Component } from '@angular/core';
interface NewsArticle {
  title: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newsData: NewsArticle[] = [
 
   
  ];

 

}