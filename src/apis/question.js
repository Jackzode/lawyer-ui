import {request} from "@/utils";


export function addQuestion(data) {
    return request({
        url: '/post/addPost',
        method: 'POST',
        data: data
    })
}

export  function getQuestionAPI(page, pageSize, cond) {
    return request({
        url: '/post/getPostByPage',
        method: 'GET',
        params : {
            page: page,
            pageSize: pageSize,
            cond: cond,
        }
    })
}

export  function getPersonalQuestionsAPI(page, pageSize, username) {
    return request({
        url: '/post/getPersonalPost',
        method: 'GET',
        params : {
            page: page,
            pageSize: pageSize,
            cond: "newest",
            username: username,
        }
    })

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
            avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg'
        },
        {
            id: 2,
            name: 'jack',
            des: 'engineer',
            avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg'
        },
        {
            id: 3,
            name: 'jack',
            des: 'software ',
            avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg'
        },
        {
            id: 4,
            name: 'jack',
            des: 'software ',
            avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg'
        },
        {
            id: 5,
            name: 'jack',
            des: 'software ',
            avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg'
        },
    ]
}


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
                avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg',
            }
        },
        {
            src: "mention",
            content: "jack @ you",
            time: "9m",
            userInfo: {
                name: "jack",
                description: "google",
                avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg',
            }
        },
        {
            src: "comment",
            content: "jack comments youprivate chatsv",
            time: "9m",
            userInfo: {
                name: "jack",
                description: "google",
                avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg',
            }
        },
        {
            src: "chats",
            content: " private chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chatsprivate chats",
            time: "9m",
            userInfo: {
                name: "jack",
                avatar: 'https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg',
                description: "google",
            }
        },

    ]
}

