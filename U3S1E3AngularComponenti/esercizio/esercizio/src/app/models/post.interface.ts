interface Tag {
    name: string;
  }
  
export interface Post {
    id: number,
    title: string,
    body: string,
    active: boolean,
    tags: Tag[],
    reactions: number
}
