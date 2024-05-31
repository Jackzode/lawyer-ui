import {request} from "@/utils";

export function getNotification() {
    return [
        {
            src: "system",
            content: "system messageprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chats",
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
            content: "我想学习编程！",
            image: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
            likes: 100,
            comments: 10,
            avatar: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
        },
        {
            id: 2,
            name: "jack",
            content: "我想学习编程！",
            image: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
            likes: 100,
            comments: 10,
            avatar: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
        },
        {
            id: 3,
            name: "jack",
            content: "我想学习编程！",
            image: "https://www.guibook.com/upload/image/202005/15908056758211805.jpg",
            likes: 100,
            comments: 10,
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