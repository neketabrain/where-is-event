module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: {
          app: './src/app',
          'processes/*': './src/processes/*',
          pages: './src/pages',
          'widgets/*': './src/widgets/*',
          'features/*': './src/features/*',
          'entities/*': './src/entities/*',
          'shared/*': './src/shared/*',
        },
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
