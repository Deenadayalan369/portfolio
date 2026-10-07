// All site content lives in src/content/content.json — edit that file to update the site.
// This module only adds types on top of it; you shouldn't need to change anything here.
import content from "@/content/content.json";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  stack: string[];
  description: string;
  highlights: string[];
  github?: string;
  apkPath?: string;
  videoPath?: string;
  image?: string;
  featured?: boolean;
};

export type Job = {
  company: string;
  location: string;
  role: string;
  subRole?: string;
  period: string;
  roleNote?: string;
  project?: string;
  bullets: string[];
  rd?: string[];
};

export const profile = content.profile;
export const stats = content.stats;
export const skillGroups = content.skillGroups;
export const experience: Job[] = content.experience;
export const earlierExperience = content.earlierExperience;
export const projects: Project[] = content.projects;
export const education = content.education;
export const languages = content.languages;
