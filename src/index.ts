import { Users } from "./resources/users";

export class HostCoreClient {
  users: Users;

  constructor(config: { apiKey: string, apiUrl: string }) {
    this.users = new Users(config)
  }
}