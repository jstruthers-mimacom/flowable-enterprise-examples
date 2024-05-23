/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.stories.@(js|md|tsx)',
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
