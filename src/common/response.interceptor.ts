import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    // Todo: google login 테스트 위한 임시 제외 처리. 배포시 제거 필요
    const request = context.switchToHttp().getRequest();
    if (request.path === '/') {
      return next.handle();
    }
    return next.handle().pipe(map((data) => ({ data })));
  }
}
