export interface Sourse {
  id?: string;
  name?: string;
}


export interface NewItem {
  source?: Sourse;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}
