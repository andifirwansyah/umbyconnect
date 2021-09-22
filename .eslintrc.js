module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          actions: './src/actions',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          navigations: './src/navigations',
          reducers: './src/reducers',
          scenes: './src/scenes',
          stores: './src/stores',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    },
  },
};
