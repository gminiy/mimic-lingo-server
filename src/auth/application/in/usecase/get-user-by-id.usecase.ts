import { User } from 'src/auth/domain/model/user.model';

export interface GetUserByIdUsecase {
  execute: (id: string) => Promise<User | null>;
}
