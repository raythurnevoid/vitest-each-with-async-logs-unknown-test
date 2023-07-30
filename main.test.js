import { describe, it, beforeAll, afterAll } from 'vitest';

describe.concurrent('vitest logs "unknown test"', async () => {
  beforeAll(async () => {
    console.log('beforeAll');
  });

  afterAll(async () => {
    console.log('afterAll');
  });

  await new Promise((r) => setTimeout(r, 1000));

  it.each([1, 2, 3])('test #%s', async (i) => {
    console.log('1st log test #' + i);
    await new Promise((r) => setTimeout(r, 1000));
    console.log('2nd log test #' + i);
  });

  it.each([4, 5, 6])('test #%s', async (i) => {
    console.log('1st log test #' + i);
    await new Promise((r) => setTimeout(r, 1000));
    console.log('2nd log test #' + i);
  });
});
