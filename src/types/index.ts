export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'licence' | 'master' | 'general';
}

export interface Student {
  id: string;
  name: string;
  image: string;
  achievements: string[];
  year: number;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Course {
  id: string;
  name: string;
  documents: {
    courses: string[];
    assignments: string[];
    exams: string[];
  };
}

export interface Program {
  id: string;
  name: string;
  semesters: {
    id: number;
    courses: Course[];
  }[];
}