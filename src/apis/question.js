import {request} from "@/utils";


export function addQuestion(data) {
    return request({
        url: '/post/addPost',
        method: 'POST',
        data: data
    })
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
export  function getQuestionAPI(page, pageSize, cond) {
    return request({
        url: '/post/getPost',
        method: 'GET',
        data : {
            page: page,
            pageSize: pageSize,
            cond: cond,
        }
    })
    // const response = new Promise((resolve) => {
    //     setTimeout(() => {
    //
    //         const totalItems = 50; // Assume there are a total of 50 items
    //         const data = Array.from({length: pageSize}, (_, index) => ({
    //             id: (page - 1) * pageSize + index + 1,
    //             name: "jack",
    //             content:
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "您可以在文件URL中通过添加处理参数来处理文件。\n" +
    //                 "\n" +
    //                 "对于允许匿名访问的公共读或者公共读写文件，可以直接在文件URL中通过添加处理参数的方式处理文件。对于不允许匿名访问的私有文件，需要通过SDK的方式将处理操作加入签名URL中。\n" +
    //                 "\n" +
    //                 "目前文档处理不支持匿名访问。\n" +
    //                 "\n" +
    //                 "通过文件URL访问图片时，默认是下载行为。如需确保通过文件URL访问图片时是预览行为，您需要绑定自定义域名并添加CNAME记录。具体操作，请参见绑定自定义域名至Bucket默认域名。" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<h3>拉萨的库哈斯</h3>\n" +
    //                 "<p><span style=\"font-family: impact, sans-serif;\"><em><strong>啊打发</strong></em></span></p>\n" +
    //                 "<p><img src=\"https://dimg04.c-ctrip.com/images/0M73s12000b7e01kk0103.png_.webp\" alt=\"\" width=\"1000\" height=\"667\"></p>",
    //             image: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
    //             likes: 100,
    //             avatar: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
    //         }));
    //         resolve({data, total: totalItems});
    //     }, 1000);
    // });
    // return response
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


/*
* const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
    };
* */