import {request} from "@/utils";


export async function addCommentApi(data) {
    return request({
        url: `/comments/add`,
        method: "POST",
        data: data
    });
}

export async function getCommentPageApi(qid, page) {
    return request({
        url: `/comments/getCommentsPage`,
        method: "GET",
        params: {
            object_id: qid,
            page: page,
        }
    });
}


export async function checkLikedApi(qid) {
    return request({
        url: `/post/checkLiked`,
        method: "GET",
        params: {
            question_id: qid
        }
    });
}

export async function checkSavedApi(id) {
    return request({
        url: `/collection/checkSaved`,
        method: "GET",
        params: {
            object_id: id
        }
    })
}



export async function getPersonalCollection(page, pageSize) {
    return request({
        // url: '/post/saved',
        url: '/post/getPersonalCollectionPost',
        method: 'GET',
        params : {
            page: page,
            pageSize: pageSize,
        }
    })
}

export async function savePostItem(data) {
    return request({
        url: '/collection/save',
        method: 'POST',
        data: data,
    })
}



export async function getQuestionLikesCount(data) {
    return request({
        url: `/post/getLikesCount`,
        method: 'GET',
        params: {
            question_id: data.question_id,
            author_id : data.author_id,
        }
    })
}

export async function addQuestionLikes(data) {
    return request({
        url: `/post/likes`,
        method: 'POST',
        data: data
    })
}



export function addQuestion(data) {
    return request({
        url: '/post/addPost',
        method: 'POST',
        data: data
    })
}

export function getQuestionAPI(page, pageSize, cond) {
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

export  function getPersonalQuestionsAPI(page, pageSize) {
    return request({
        url: '/post/getPersonalPost',
        method: 'GET',
        params : {
            page: page,
            pageSize: pageSize,
            cond: "newest",
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
            des: 'software engineer software engineer software engineer',
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

