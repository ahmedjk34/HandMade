export interface Product {
  _id: string;
  title: string;
  body: string;
  photo: string;
  maker: User;
  price: number;
  catagories: string[];
  rating: number;
  reviews: Review[];
}

export interface Review {
  title: string;
  body: number;
  stars: number;
  author: string;
}
export interface User {
  email: string;
  username: string;
}
