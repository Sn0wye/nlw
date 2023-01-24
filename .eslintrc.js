/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['@sn0wye/eslint-config/react'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          './tsconfig.json',
          './apps/*/tsconfig.json',
          './packages/*/tsconfig.json'
        ]
      },
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_'
          }
        ],
        'import-helpers/order-imports': 'off',
        'tailwindcss/no-custom-classname': 'off'
      }
    }
  ],
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '.eslintrc.js',
    '**/*.config.js',
    '**/*.config.cjs',
    'packages/config/**'
  ]
};

module.exports = config;
