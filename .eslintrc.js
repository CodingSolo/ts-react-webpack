module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowTypedFunctionExpressions: true,
            },
        ],
        "@typescript-eslint/indent": ["error", 4],
        "react/prop-types": "off",
    },
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
    ],
};
