import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],
    'vue/no-multiple-template-root': 'off',
  },
})
