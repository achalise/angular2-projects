export class User {
  id: string;

  constructor(public name: string,
              public avatarSrc: string) {
    this.id = '30' + Math.random();
  }
}