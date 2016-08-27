block('user-info').content()(function () {
    var block = this.block;
    var ctx = this.ctx;
    var url = ctx.url;
    var username = ctx.username;
    var mods=ctx.mods;

    return [
        {
            block: 'userpic',
            mix: { block: block, elem: 'userpic' },
            username: username,
            src: ctx.src,
            url: url,
            size: 48
        },
        {
            block: 'username',
            mix: { block: block, elem: 'username' },
            url: url,
            content: username
        },
        {
            elem: 'fullname',
            content: ctx.fullname
        },
        this.ctx.subscribe && {
            block : 'button',
            mix: {block: 'user-info', elem:'button'},
            mods : { theme : 'islands', size : 'm', type : 'link' },
            url : this.ctx.subscribe,
            text : 'подписаться'
        }

    ];
});
