export interface Comment {
    content: string;
    author: string;
    movie: string;
    fullname: string;
    username: string;
    createdAt: Date;
    isReply: boolean;
    parentComment: string;
    children?: Comment[];
    showReplies?: boolean;
    _id: string;
  }