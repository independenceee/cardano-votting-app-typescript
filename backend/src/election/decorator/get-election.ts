import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetElection = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
        const request: Express.Request = ctx.switchToHttp().getRequest();
        if (data) {
            return request.election[data];
        }
        return request.election;;
    },
);
