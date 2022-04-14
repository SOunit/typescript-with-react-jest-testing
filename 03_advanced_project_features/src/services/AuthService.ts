import { User, UserAttribute } from "../models/Model";

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

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push(
      { Name: "description", Value: "Best user ever!!!" },
      { Name: "job", Value: "engineer" },
      { Name: "age", Value: "28" },
      { Name: "experience", Value: "3 years" }
    );
    return result;
  }
}
