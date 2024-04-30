import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().override('nuxt/vue/rules', {
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],
  },
})
