const prettierrc = require('@mhirba/eslint-config-base/.prettierrc')

module.exports = Object.assign({}, prettierrc, {
  // use single quotes instead of double quotes in JSX.
  jsxSingleQuote: true,
  // Put the > of a multi-line JSX element at the end of the last line
  jsxBracketSameLine: true,
})