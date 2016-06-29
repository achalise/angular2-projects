 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component } from "@angular/core";


@Component({
	selector: 'reddit-article',
	host: {
		class: 'row'
	},
	inputs: ['article'],
	template: `<div class="four wide column center aligned votes">
			      <div class="ui statistic">
			         <div class="value">
			            {{article.votes}}
			         </div>
			         <div class="label">
			            Points
			         </div>
			      </div>
	           </div>
               <div class="twelve wide column">
                  <a class="ui large header" href="{{article.link}}"> {{article.title}}</a> 
                  <ul class="ui big horizontal list voters">
                     <li class="item">
                        <a href (click)="voteUp()">
                           <i class="arrow up icon"></i>
                           upvote
                        </a>
                     </li>
                     <li class="item">
                        <a href (click)="voteDown()">
                           <i class="arrow down icon"></i>
                           downvote
                        </a>
                     </li>
                  </ul>
               </div>
	           `
})

class ArticleComponent {
	article: Article;
	constructor(){
//		this.article = new Article(10, 'MyArticle', 'MyLink');
	}
	voteUp() : boolean {
		this.article.voteUp();
		return false;
	}
	voteDown() : boolean {
		this.article.voteDown();
		return false;
	}
}

class Article {
	votes: number;
	title: String;
	link: String;

	constructor(votes: number, title: String, link: String) {
		this.votes = votes;
		this.title = title;
		this.link = link;
	}

	voteUp() : void {
		this.votes++;
	}

	voteDown() : void {
		this.votes--;
	}

}

 @Component({
 	selector: 'reddit',
 	directives: [ArticleComponent],
 	template: `<form class="ui large form segment">
			       <h3 class="ui header">Add a Link</h3>
			  
			       <div class="field">
			         <label for="title">Title:</label>
			         <input name="title" #newTitle>
			       </div>
			       <div class="field">
			         <label for="link">Link:</label>
			         <input name="link" #newLink>
			       </div>
			       <button (click) = "addArticle(newLink, newTitle)" class="ui positive right floated button"> Submit link </button>
			   </form>
			   <div class="ui grid posts">
			       <reddit-article *ngFor="let article of sortedArticles()" [article]="article"></reddit-article>
			   </div>`
 })

class RedditApp {
	articles: Article[];
	constructor(){
		this.articles = [new Article(1, 'MongoDB', 'http://mongodb.io'), new Article(3, 'AngularJS', 'http://angularjs.org'),
		                 new Article(5, 'Java', 'http://oracle.com')];
	}
	sortedArticles() : Article[] {
		return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
	}
   addArticle(link: HTMLInputElement, title: HTMLInputElement) : void {
      console.log(`Adding title ${title.value} and link ${link.value}`);
      this.articles.push(new Article(0, title.value, link.value));
      title.value = '';
      link.value = '';
   }
}
bootstrap(RedditApp);
