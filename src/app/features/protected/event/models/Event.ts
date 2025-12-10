export interface MyEvent {
  title: string;
  episode_id: number;
}

export interface EventsResponse {
  results: MyEvent[];
}
