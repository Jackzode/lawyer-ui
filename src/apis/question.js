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
            image: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
            likes: 100,
            avatar: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
        },
        {
            id: 2,
            name: "jack",
            content: "我想学习编程！",
            image: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
            likes: 100,
            avatar: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
        },
        {
            id: 3,
            name: "jack",
            content: "我想学习编程！",
            image: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
            likes: 100,
            avatar: "https://app2.sweden.com/wp-content/uploads/2019/10/Hawaii_TopSites_WaikikiBeach.jpg",
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