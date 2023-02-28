import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  @Input()DisplayPost:Post={} as Post;


  // likePost():void{
  //  let like:number=0;
  //   for (let i = 0;i ; i++){
  //    like= i += 1;
  //   }
  //   return like;
  //   }
  

}
