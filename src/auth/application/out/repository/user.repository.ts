import { User } from 'src/auth/domain/model/user.model';

export interface UserRepository {
  save: (user: User) => Promise<User>;
  getById: (id: string) => Promise<User | null>;
}
