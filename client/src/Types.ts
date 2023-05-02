export interface Product {
  _id: string;
  title: string;
  body: string;
  photo: string;
  maker: User;
  price: number;
  in_stock: number;
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
  _id: string;
  email: string;
  username: string;
  profile_picture: string;
}
