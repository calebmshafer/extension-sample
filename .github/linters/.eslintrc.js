module.exports = {
  env: {
    "browser": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "import",
    "prefer-arrow",
    "rulesdir"
  ],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off", // TODO: May want to turn this on for consistency
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    // Checks for return types of all methods so even wants void/Promise<void>.  Do we want to do that?
    // Otherwise we need to use `allowedTypedFunctionExpressions - false`. Could always do this for only tests.
    //
    // They are not going to allow void, at least for now, https://github.com/typescript-eslint/typescript-eslint/issues/50.
    // May want to fork and implement ourselves...
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "off"
        }
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": null,
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow"
      },
      {
        "selector": "class",
        "format": [
          "PascalCase"
        ],
        "leadingUnderscore": "forbid"
      },
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "leadingUnderscore": "forbid"
      },
      {
        "selector": "method",
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "method",
        "modifiers": [
          "public"
        ],
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "forbid"
      },
      {
        "selector": "property",
        "format": null,
        "modifiers": [
          "private",
          "protected"
        ],
        "prefix": [
          "_"
        ],
        "leadingUnderscore": "require"
      },
      {
        "selector": "property",
        "format": null,
        "modifiers": [
          "public"
        ],
        "leadingUnderscore": "forbid"
      },
      {
        "selector": "enumMember",
        "format": null,
        "leadingUnderscore": "allow"
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "@typescript-eslint/require-await": "off",
    // TODO: Turn off for now
    // "@typescript-eslint/semi": [
    //   "error",
    //   "always"
    // ],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    // TODO: We have assignments of unbound methods all over the place.  There's a github issue open to fix this: https://github.com/typescript-eslint/typescript-eslint/issues/1256
    "@typescript-eslint/unbound-method": [
      "warn",
      {
        "ignoreStatic": true
      }
    ],
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "off",
    "arrow-parens": "error",
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": "off", // Using @typescript-eslint/camelcase instead
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "complexity": "off",
    "constructor-super": "error",
    "curly": [
      "off",
      "multi-line"
    ],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "number",
      "string",
      "boolean",
      "Undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "warn",
    "import/order": "off",
    "max-classes-per-file": "off",
    "max-len": "off",
    "new-parens": "error",
    "no-bitwise": "off",
    "no-caller": "error",
    "no-cond-assign": "off",
    "no-console": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-return-await": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    // TODO: The current implementation does not support the confirgurations we want to allow.  Need to have it extended...
    "no-underscore-dangle": [
      "off",
      {
        "allowAfterThis": true,
        "allowAfterThisConstructor": true,
        "enforceInMethodNames": true
      }
    ],
    "no-unsafe-finally": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-unused-vars": "off", // Using @typescript-eslint/no-unused-vars instead
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "off",
      "never"
    ],
    // TODO: I'd like to enable this but will cause a lot of breaking changes
    "prefer-arrow/prefer-arrow-functions": [
      "off",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ],
    "prefer-const": "error",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "radix": "error",
    "react/prop-types": "off",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "exceptions": [
          "-" // Ignore a '-' immediately after '/*' to allow our copyright header standard
        ]
      }
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    /**
      "@typescript-eslint/tslint/config": [
        "error",
        {
          "rules": {
            "ban": [
              true,
              {
                "name": [
                  "Math",
                  "hypot"
                ],
                "message": "Use Geometry.hypotenuse methods instead"
              }
            ],
            "import-spacing": true,
            "import-within-package": true,
            "jsdoc-format": true,
            "no-const-enum": [
              true,
              {
                "allowLocal": true
              }
            ],
            "no-direct-imports": true,
            "no-reference-import": true,
            "one-line": [
              true,
              "check-catch",
              "check-else",
              "check-finally",
              "check-open-brace",
              "check-whitespace"
            ],
            "prefer-get": true,
            "require-basic-rpc-values": true,
            "tslint-react-set-state-usage": [
              true,
              "allow-object"
            ]
          }
        }
      ],
      */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
