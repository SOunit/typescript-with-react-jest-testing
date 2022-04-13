import { User } from "../models/Model";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "123") {
      return {
        userName,
        email: "test@test.com",
      };
    } else {
      return undefined;
    }
  }
}
