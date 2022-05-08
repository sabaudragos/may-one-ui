export class User {
  id: number;
  firstName: string;
  secondName: string;
  clientId: number;
  email: string;
  password: string;

  public static getBlankUser(): User {
    return new User();
  }
}


