({
    mustDeps: 'stylus-vars',
    shouldDeps: [
        {
            block: 'conf'
        },
        {
            block: 'i-bem',
            elem: 'dom'
        },
        {
            block: 'jquery'
        },
        {
            block: 'functions',
            elem: 'debounce'
        },
        {
            block: 'validator'
        },
        {
            block: 'form'
        },
        {
            block: 'input',
            mods: {
                theme: 'islands',
                size: 'xl',
                width: 'available',
                'has-clear': true
            }
        },
        {
            block: 'spinner'
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'xl',
                type: 'submit',
                view: 'action'
            }
        }
    ]
});
