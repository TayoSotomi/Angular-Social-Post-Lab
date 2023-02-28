import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {

    ListOfPosts:Post[]=[{
      title:"Beautiful Morning",
      thought:"the sun looks good on me",
      
    },
    {
      title:"bro code",
      thought:"I cant get over this bro",
      
    },
  ];
  onSubmit(newPosts:Post){
    this.ListOfPosts.push(newPosts)
  }

  onDelete(index:number){
    this.ListOfPosts.splice(index,1)
  }
}
