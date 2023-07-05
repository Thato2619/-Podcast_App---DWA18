export type Preview = {
  id: string;
  title: string;
  seasons: string;
  images: string;
  genres: string[];
  updated: string;
};

export type Episode = {
  episode: number;
  description: string;
  title: string;
  file: string;
};

export type Season = {
  season: number;
  title: string;
  image: string;
  episodes: Episode[];
};

export type Show = {
  id: string;
  title: string;
  seasons: Season[];
  image: string;
  genres: string[];
  updated: string;
};

export type Phase = "loading" | "lists" | "single" | "error";
export type Sorting = "a-z" | "z-a" | "oldest-latest" | "latest-oldest";
