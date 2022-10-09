interface IExercise {
  type?: "strength" | "cardio";
  objectId: string;
  sets?: ISet[];
  name?: string;
  description?: string;
  weight?: number;
}

interface ISet {
  exercise?: string;
  objectId: string;
  createdAt: Date;
  finished?: boolean;
  weight?: number;
}

export { IExercise, ISet };
