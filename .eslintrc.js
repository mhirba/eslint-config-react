module.exports = {
  parserOptions: {
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
      useJSXTextNode: true,
    },
  },
  extends: [
    // uses the recommended rules from @eslint-plugin-react
    '@mhirba/base',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      // tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}', '"'] }],
      },
    },
  ],
}
