module.exports = {
  parserOptions: {
    project: ['./packages/*/tsconfig.json', './packages/*/tsconfig.dev.json', 'tsconfig.dev.json'],
    tsconfigRootDir: __dirname,
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
  },
  extends: [
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:regexp/recommended',
    'plugin:security/recommended',
  ],
  plugins: ['simple-import-sort', 'better-styled-components'],
  rules: {
    'no-void': 0,
    'consistent-return': 0,
    'no-console': 0,
    'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],

    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-expressions': [2, { allowShortCircuit: true }],
    '@typescript-eslint/no-floating-promises': [2, { ignoreIIFE: true, ignoreVoid: true }],
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],

    'security/detect-non-literal-regexp': 0,
    'security/detect-object-injection': 0,
    'security/detect-unsafe-regex': 0,

    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,

    'import/first': 2,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-duplicates': 2,
    'import/extensions': [2, 'never', { json: 'always' }],

    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-props-no-spreading': 0,
    'react/display-name': 0,

    'jsx-a11y/click-events-have-key-events': 0, // Disabled (https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)

    'better-styled-components/sort-declarations-alphabetically': 2,

    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
  },
};
