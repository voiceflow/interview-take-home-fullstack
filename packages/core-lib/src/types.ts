// THESE TYPES CAN NOT BE CHANGED!

export interface Intent {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  assistantID: string;
}

export interface Utterance {
  id: string;
  text: string;
  intentID: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  assistantID: string;
}
