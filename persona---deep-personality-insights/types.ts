
export enum Dimension {
  EI = 'Extraversion_Introversion',
  SN = 'Sensing_Intuition',
  TF = 'Thinking_Feeling',
  JP = 'Judging_Perceiving'
}

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
  reverse: boolean; 
}

export interface UserResponse {
  questionId: number;
  value: number; 
}

export interface PersonalityScores {
  Extraversion: number;
  Sensing: number;
  Thinking: number;
  Judging: number;
}

export interface AnalysisResult {
  typeCode: string;
  typeName: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  careerPath: string;
  relationshipAdvice: string;
  relatableTraits: string[];
  cognitiveFunctions: {
    dominant: string;
    auxiliary: string;
    explanation: string;
  };
  lifeInsights: {
    work: string;
    friendships: string;
    relationships: string;
    stress: string;
    growth: string;
    unhealthy: string;
  };
  recommendations: {
    careers: string[];
    workStyles: string[];
    learningMethods: string[];
  };
}
