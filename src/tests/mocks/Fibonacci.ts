import { setupServer } from 'msw/node';
import { rest } from 'msw';

//Server setting up:
//*********************************************************/
const server = setupServer(
  rest.get('http://localhost:8081/api/fibonacci/*', (_: any, res: any, ctx: any) => {
    return res(ctx.json({ value: 1 }));
  }),
)
//********************************************************/

export default server;