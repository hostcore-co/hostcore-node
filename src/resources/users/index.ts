import { Base } from "../base";
import type { User } from "./types";

export class Users extends Base {
  getUserById(id: string): Promise<User> {
    return this.request(`/admin/users/${id}`)
  }

  getUsers({ page }: { page: number }): Promise<User> {
    return this.request(`/admin/users?page=${page}`)
  }
}