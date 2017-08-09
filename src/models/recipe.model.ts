export class Recipe {
  public name: string;
  public description: string;
  public imagePath: object;

  constructor(name: string, description: string, imagePath: object) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
