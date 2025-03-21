const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { workspaceRoot } = require('@nx/devkit');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require(join(
      workspaceRoot,
      'libs',
      'ui',
      'tailwind.base.config.js'
    )),
  ],
};
