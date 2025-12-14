export interface Legend {
  id: string;
  name: string;
  club: 'FCB' | 'EST';
  image: string;
  role: string;
  years: string;
  description: string;
  achievements: string[];
  quote?: string;
  wikiLink: string;
}

export interface Trophy {
  id: string;
  name: string;
  club: 'FCB' | 'EST';
  image: string;
  count: number;
  years: string;
  description: string;
}

export interface Stadium {
  name: string;
  club: 'FCB' | 'EST';
  capacity: string;
  location: string;
  description: string;
  image: string;
  features: string[];
}

export interface MatchMoment {
  id: string;
  title: string;
  date: string;
  score: string;
  club: 'FCB' | 'EST';
  description: string;
  image: string;
}

export interface FanCulture {
  club: 'FCB' | 'EST';
  title: string;
  groupName: string;
  description: string;
  image: string;
  chants: string[];
}