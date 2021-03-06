export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Picture {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  created_at: Date;
  updated_at: Date;
}

export interface People {
  id: number;
  name: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  picture: Picture;
}


export interface Project {
  id: string;
  name: string;
  description: string;
  status: boolean;
  project_manager: People;
  assigned_to: People;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}
