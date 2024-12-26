import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-blog",
  distFolder: "./dist/my-blog/browser",
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};
