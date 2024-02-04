module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    semi: 'off',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Adjust the patterns to match your project files
      rules: {
        'linebreak-style': 'off',
        semi: 'off',
      },
    },
    {
      files: [
        '.eslintrc.js',
        '.eslintrc.cjs',
        '.eslintrc.xjs',
        '.eslintrc.ts',
        '.eslintrc.tsx',
      ],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
}
