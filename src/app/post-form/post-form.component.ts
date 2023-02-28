import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  newPost:Post={} as Post;
  @Output()PostCreated = new EventEmitter<Post>();

  submitPost():void{
    let input:Post={
      title:this.newPost.title,
      thought:this.newPost.thought,
    };
    this.PostCreated.emit(input);
  }

  display:boolean=false;

 toggleDisplay(display:boolean){
  return true;

 }
  
  
 


 

}
