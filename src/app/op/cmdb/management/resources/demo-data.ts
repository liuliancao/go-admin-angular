export const demoData = [
    {
        label: 'input',
        field: 'bbc',
        type: 'textInput',
        group: 'Basic',
        maxLength: 10,
        validateRules: [
            { required: true },
            { whitespace: true },
            { minlength: 3 },
            { maxlength: 10 },
            {
                pattern: /[0-9]+/,
                message: {
                    'zh-cn': '只能包含数字',
                    'en-us': 'The value can contain only digits.',
                    default: '只能包含数字',
                },
            },
        ],
    },
];
