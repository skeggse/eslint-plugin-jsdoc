export default {
  invalid: [
    {
      code: `
          /**
           * @access foo
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          line: 3,
          message: 'Missing valid JSDoc @access level.',
        },
      ],
    },
    {
      code: `
          /**
           * @accessLevel foo
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          line: 3,
          message: 'Missing valid JSDoc @accessLevel level.',
        },
      ],
      settings: {
        jsdoc: {
          tagNamePreference: {
            access: 'accessLevel',
          },
        },
      },
    },
    {
      code: `
          /**
           * @access
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          message: 'Unexpected tag `@access`',
        },
      ],
      settings: {
        jsdoc: {
          tagNamePreference: {
            access: false,
          },
        },
      },
    },
    {
      code: `
      class MyClass {
        /**
         * @access
         */
        myClassField = 1
      }
      `,
      errors: [
        {
          line: 4,
          message: 'Missing valid JSDoc @access level.',
        },
      ],
      parser: require.resolve('@typescript-eslint/parser'),
    },
    {
      code: `
          /**
           * @access public
           * @public
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          message: 'The @access tag may not be used with specific access-control tags (@package, @private, @protected, or @public).',
        },
      ],
    },
    {
      code: `
          /**
           * @access public
           * @access private
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          message: 'At most one access-control tag may be present on a jsdoc block.',
        },
      ],
    },
    {
      code: `
          /**
           * @public
           * @private
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          message: 'At most one access-control tag may be present on a jsdoc block.',
        },
      ],
    },
    {
      code: `
          /**
           * @public
           * @public
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          message: 'At most one access-control tag may be present on a jsdoc block.',
        },
      ],
    },
  ],
  valid: [
    {
      code: `
          /**
           *
           */
          function quux (foo) {

          }
      `,
    },
    {
      code: `
          /**
           * @access public
           */
          function quux (foo) {

          }
      `,
    },
    {
      code: `
          /**
           * @accessLevel package
           */
          function quux (foo) {

          }
      `,
      settings: {
        jsdoc: {
          tagNamePreference: {
            access: 'accessLevel',
          },
        },
      },
    },
    {
      code: `
      class MyClass {
        /**
         * @access private
         */
        myClassField = 1
      }
      `,
      parser: require.resolve('@typescript-eslint/parser'),
    },
    {
      code: `
          /**
           * @public
           */
          function quux (foo) {

          }
      `,
    },
  ],
};
