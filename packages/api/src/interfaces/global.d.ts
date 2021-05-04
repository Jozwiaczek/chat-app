interface Message {
  id: string;
  body: string;
  senderId: string;
  nickname: string;
  createdAt: Date;
}

interface User {
  nickname: string;
  id: string;
}
