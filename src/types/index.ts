// Common types for the portfolio application

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  completedAt: Date;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'other';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current?: boolean;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

export interface EnvironmentConfig {
  nodeEnv: string;
  apiUrl: string;
  enableAnalytics: boolean;
  enableDebug: boolean;
}

// Component Props Types
export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface ComponentWithClassName {
  className?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

// Remotion specific types
export interface VideoCompositionProps {
  title: string;
  description: string;
  duration: number;
}

// Legacy types for backwards compatibility
export interface ProjectData extends Project {
  liveUrl?: string; // alias for demoUrl
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type WithId<T> = T & { id: string };
