module.exports = {
    root: true,
    extends: "@react-native-community",
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",

        quotes: ["warn", "double"],
        "comma-dangle": ["warn", "never"],
        semi: ["warn", "never"]
    }
}
