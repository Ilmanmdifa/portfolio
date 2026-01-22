export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  flows: string[];
  techStack: string[];
  features: string[];
  challenges: string;

  thumbnailImage?: string;
  image: string;
  tags: string[];

  demoUrl?: string;
  githubUrl?: string;
  createdAt: string;
  status: "completed" | "in-development" | "planned";
  version: string;
}
