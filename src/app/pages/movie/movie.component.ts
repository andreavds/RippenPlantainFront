import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.interface';
import { MovieService } from '../../services/movie.service';
import { CommentService } from '../../services/comment.service'; 
import { Comment } from '../../models/comment.interface'; 
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined;
  apiId: string | null = null;
  userInt: number = 0;
  comments: Comment[] = [];
  newComment: string = '';
  commentToCommentId: string | null = null;
  newCommentForComment: string = '';
  replies: Comment[] = [];
  commentId: string | null = null;
  commentReplies: Comment[] = [];
  newReply: { [key: string]: string } = {};
  replyingToCommentId: string | null = null;
  fullname: string = '';
  username: string = '';
  commentsWithUserData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private commentService: CommentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getMovieIdFromRoute();
    this.getMovieDetails();
    this.getMovieComments()
  }

  getMovieIdFromRoute() {
    this.apiId = this.route.snapshot.paramMap.get('apiId');
    console.log('API ID:', this.apiId);
  }

  getMovieDetails() {
    if (this.apiId) {
      this.movieService.getMovieDetailsByApiId(this.apiId).subscribe((data: Movie) => {
        this.movie = data;
      });
    }
  }

  onRated(rating: number) {
    this.userInt = rating;
  }

  getMovieComments() {
    if (this.apiId) {
      this.commentService.getMovieComments(this.apiId).subscribe((data: Comment[]) => {
        this.comments = data;
      });
    }
  }

  submitComment() {
    if (this.apiId && this.newComment) {
      this.commentService.commentMovie(this.apiId, this.newComment).subscribe(response => {
        console.log('Comentario agregado:', response);
        this.getMovieComments();
        this.newComment = '';
      });
    } else {
      console.error('No se proporcionó un ID de película válido o un comentario.');
    }
  }
  
  submitCommentForComment(commentId: string) {
    if (commentId && this.newCommentForComment) {
      this.commentService.commentComment(commentId, this.newCommentForComment).subscribe(response => {
        console.log('Comentario agregado sobre comentario:', response);
        this.getMovieComments();
        this.newCommentForComment = '';
      });
    } else {
      console.error('No se proporcionó un ID de comentario válido o un comentario.');
    }
  }


  showThankYouMessage: boolean = false;
  submitRating() {
    if (this.apiId && this.userInt) {
      this.movieService.sendRating(this.apiId, this.userInt).subscribe(response => {
        console.log('Puntuación enviada con éxito:', response);
        this.showThankYouMessage = true;
      });
    } else {
      console.error('No se proporcionó el ID de la película o la puntuación.');
    }
  }

  toggleReplies(comment: Comment) {
    if (comment.showReplies) {
      comment.showReplies = false;
      return;
    }

    this.commentService.getCommentReplies(comment._id).subscribe((replies: Comment[]) => {
      comment.children = replies;
      comment.showReplies = true;
    });
  }



  openReplyForm(commentId: string) {
    this.replyingToCommentId = commentId;
  }

}