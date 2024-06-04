import {request} from "@/utils";

export function getNotification() {
    return [
        {
            src: "system",
            content: "system messageprivate " +
                "chatsprivate chatsprivate chatsprivate " +
                "chatsprivate chatsprivate chatsprivate " +
                "chatsprivate chatsprivate chatsprivate " +
                "chatsprivate chatsprivate chatsprivate " +
                "chatsprivate chatsprivate chatsprivate " +
                "chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chats",
            time: "9m",
            userInfo: {
                name: "jack",
                description: "google",
                avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg',
            }
        },
        {
            src: "mention",
            content: "jack @ you",
            time: "9m",
            userInfo: {
                name: "jack",
                description: "google",
                avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg',
            }
        },
        {
            src: "comment",
            content: "jack comments youprivate chatsv",
            time: "9m",
            userInfo: {
                name: "jack",
                description: "google",
                avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg',
            }
        },
        {
            src: "chats",
            content: " private chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chats",
            time: "9m",
            userInfo: {
                name: "jack",
                avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg',
                description: "google",
            }
        },

    ]
}
export function getHomePageQuestionAPI() {
    // return request({
    //     url: '/homepageQuestion',
    //     method: 'GET'
    // })
    return [
        {
            id: 1,
            name: "jack",
            content: " <p>This is the initial content of the editor.卡号的看法哈口电话</p>\n" +
                "<h3>拉萨的库哈斯</h3>\n" +
                "<h3>拉萨的库哈斯</h3>\n" +
                "<h3>拉萨的库哈斯</h3>\n" +
                "<h3>拉萨的库哈斯</h3>\n" +
                "<h3>拉萨的库哈斯</h3>\n" +
                "<h3>拉萨的库哈斯</h3>\n" +
                "<h3>拉萨的库哈斯</h3>\n" +
                "<p><span style=\"font-family: impact, sans-serif;\"><em><strong>啊打发</strong></em></span></p>\n" +
                "<p><img src=\"https://dimg04.c-ctrip.com/images/0M73s12000b7e01kk0103.png_.webp\" alt=\"\" width=\"1000\" height=\"667\"></p>",
            image: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
            likes: 100,
            comments:  [
                {
                    author: {
                        name: 'Yuxin Zhu',
                        avatar: 'https://example.com/avatar.jpg',
                    },
                    time: '1w',
                    content: 'We\'re hiring https://replo.app/careers',
                },
                {
                    author: {
                        name: 'Haoran Wang',
                        avatar: 'https://example.com/avatar2.jpg',
                    },
                    time: '1w',
                    content: 'Hi Yuxin, I\'ve sent connect request and inmail to you. I am very interested in Software Engineer role at Replo.',
                },
            ],
            avatar: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
        },
        {
            id: 2,
            name: "jack",
            content: "我想学习编程！",
            image: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
            likes: 100,
            comments:  [
                {
                    author: {
                        name: 'Yuxin Zhu',
                        avatar: 'https://example.com/avatar.jpg',
                    },
                    time: '1w',
                    content: 'We\'re hiring https://replo.app/careers',
                },
                {
                    author: {
                        name: 'Haoran Wang',
                        avatar: 'https://example.com/avatar2.jpg',
                    },
                    time: '1w',
                    content: 'Hi Yuxin, I\'ve sent connect request and inmail to you. I am very interested in Software Engineer role at Replo.',
                },
            ],
            avatar: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
        },
        {
            id: 3,
            name: "jack",
            content: "我想学习编程！",
            image: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
            likes: 100,
            comments:  [
                {
                    author: {
                        name: 'Yuxin Zhu',
                        avatar: 'https://example.com/avatar.jpg',
                    },
                    time: '1w',
                    content: 'We\'re hiring https://replo.app/careers',
                },
                {
                    author: {
                        name: 'Haoran Wang',
                        avatar: 'https://example.com/avatar2.jpg',
                    },
                    time: '1w',
                    content: 'Hi Yuxin, I\'ve sent connect request and inmail to you. I am very interested in Software Engineer role at Replo.',
                },
            ],
            avatar: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
        }

    ]

}


export function getRecDataAPI() {
    // return request({
    //     url: '/getRecFollow',
    //     method: 'GET'
    // })
    return [
        {
            id: 1,
            name: 'jack',
            des: 'software engineer',
            avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg'
        },
        {
            id: 2,
            name: 'jack',
            des: 'engineer',
            avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg'
        },
        {
            id: 3,
            name: 'jack',
            des: 'software ',
            avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg'
        },
        {
            id: 4,
            name: 'jack',
            des: 'software ',
            avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg'
        },
        {
            id: 5,
            name: 'jack',
            des: 'software ',
            avatar: 'https://www.guibook.com/upload/image/202005/15908056758211805.jpg'
        },
    ]
}