export class Todo {
  Id: number;
  Name: string;
  IsComplete: boolean;
  CreatedAt: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
