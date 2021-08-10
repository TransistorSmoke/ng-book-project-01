export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;  
  };

  voteDown(): void {
    this.votes -= 1;
  };

  domain(): any {    
    try {
      const strDomain = this.link.split('//')[1] || this.link.split('www.')[1];
      return strDomain.split("/")[0];
    } catch(err) {
      console.log(err);
      return null;
    }    
  }
}