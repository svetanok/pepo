block('page')
    .mod('view', 'profile')
    .content()(function () {
        var profileUser = this.data.profileUser;

        return {
            block: 'layout',
            content: [
                {
                    block: 'header'
                },
                {
                    block: 'body',
                    content: [
                        {
                            block: this.block,
                            elem: 'subheader',
                            content: {
                                block: 'user-info',
                                user: profileUser,
                                mods: { profile: true }
                            }
                        },
                        {
                            block: 'infinite-list',
                            mods: { type: 'user-messages' },
                            js: { url: '/messages?html&userId=' + profileUser._id },
                            onEmpty: this.data.isOwnProfile
                                ? [
                                    'Вы еще не опубликовали ни одного сообщения. ',
                                    {
                                        block: 'link',
                                        mods: {
                                            theme: 'islands',
                                            size: 'l'
                                        },
                                        url: '/write',
                                        content: 'Написать!'
                                    }
                                ]
                                : [
                                    'Пользователь ',
                                    {
                                        block: 'username',
                                        content: profileUser.username
                                    },
                                    ' не опубликовал еще ни одного сообщения'
                                ]
                        }
                    ]
                }
            ]
        };
    });
