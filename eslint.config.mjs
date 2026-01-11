import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    rules: {
      quotes: ["error", "double", { avoidEscape: true }],
      "no-console": ["error"],
      "comma-dangle": ["error", "always-multiline"],
      indent: ["error", 2, { SwitchCase: 1 }],
      semi: ["error", "always"],

      "vue/html-indent": ["error", 2],
      "vue/script-indent": ["error", 2, { baseIndent: 1 }]
    }
  }
);
