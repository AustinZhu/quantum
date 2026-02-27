import * as z from 'zod';
import { oc } from '@orpc/contract';

const GetServerTimeOutput = z.number().meta({
  examples: [1445324591],
  description: 'Unix timestamp (UTC) without milliseconds',
});

type GetServerTimeOutput = z.infer<typeof GetServerTimeOutput>;

const getServerTime = oc
  .route({
    method: 'GET',
    path: '/time',
    tags: ['UDF'],
    summary: 'Get Server Time',
    description: 'Returns current server time as unix timestamp',
  })
  .output(GetServerTimeOutput);

export { GetServerTimeOutput, getServerTime };
