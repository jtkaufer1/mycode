import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [require('@babel/preset-env'), require('@babel/preset-react')],
        },
      },
    });

    return config;
  },
};

