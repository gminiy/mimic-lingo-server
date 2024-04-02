import { User } from 'src/auth/domain/model/user.model';

export interface CreateUserUsecase {
  execute: (email: string, name: string) => Promise<User>;
}
