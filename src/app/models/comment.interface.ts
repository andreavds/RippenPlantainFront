export interface Comment {
    content: string;
    author: string;
    movie: string;
    createdAt: Date;
    isReply: boolean;
    parentComment: string;
  }