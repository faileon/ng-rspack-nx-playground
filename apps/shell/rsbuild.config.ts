import { createConfig } from '@ng-rsbuild/plugin-angular';
import { pluginSass } from '@rsbuild/plugin-sass';

export default createConfig(
  {
    browser: './src/main.ts',
    inlineStylesExtension: 'scss',
    styles: ['./src/styles.scss', './src/vendors.scss'],
  },
  {
    plugins: [pluginSass()],
  }
);
