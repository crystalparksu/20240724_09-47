
//드롭다운 네비 메뉴
export const menuItemsData = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Movie',
        url: '/',
        submenu: [
            {
                title: 'All Movie',
                url: '/',
            },
            {
                title: 'Fantasy',
                url: '/',
            },
            {
                title: 'SF',
                url: '/',
            },
            {
                title: 'Animation',
                url: '/',
            },
            {
                title: 'Documentary',
                url: '/',
            },
        ],
    },
    {
        title: 'Notice',
        url: '/',
    },
    {
        title: 'Admin',
        url: '/',
        submenu: [
            {
                title: 'Member',
                url: '/',
                submenu: [
                    {
                        title: 'Member list',
                        url: '/',
                    },
                ],
            },
            {
                title: 'Movie',
                url: '/',
                submenu: [
                    {
                        title: 'Movie Upload',
                        url: '/',
                    },
                ],
            },
            {
                title: 'Notice',
                url: '/',
                submenu: [
                    {
                        title: 'Notice Upload',
                        url: '/',
                    },
                ],
            },
        ],
    },
    {
        title: 'Login',
        url: '/',
        submenu: [
            {
                title: 'Login',
                url: '/',
                submenu: [
                    {
                        title: '아이디 찾기',
                        url: '/',
                    },
                    {
                        title: '비밀번호 찾기',
                        url: '/',
                    },
                ],
            },
            {
                title: 'Join',
                url: '/',
                submenu: [
                    {
                        title: '회원가입',
                        url: '/',
                    },
                    {
                        title: '구글 회원가입',
                        url: '/',
                    },
                ],
            },
        ],
    },
    //...
];