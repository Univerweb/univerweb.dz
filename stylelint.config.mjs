export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    // Les lignes vides entre custom properties regroupent les tokens par rôle (base/_themes.scss)
    'custom-property-empty-line-before': null,
    // Ordre en tête de bloc : custom properties, puis @include, puis déclarations
    'order/order': [
      'custom-properties',
      { type: 'at-rule', name: 'include', hasBlock: false },
      'declarations',
    ],
  },
}
