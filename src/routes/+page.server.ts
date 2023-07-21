import type { PageServerLoad } from './$types';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const load: PageServerLoad = async () => {
  // await sleep(2000);
};
