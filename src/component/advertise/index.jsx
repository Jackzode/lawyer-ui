import React from 'react';
import {Carousel, Image} from 'antd';

const contentStyle = {
    height: '150px',
    width: '100%',
};

const advertise = [
    {
        id: '1',
        img: 'https://hips.hearstapps.com/hmg-prod/images/stephen-curry-gettyimages-1398745379.jpg?crop=0.939xw:0.939xh;0.0340xw,0.0306xh&resize=1200:*'
    },
    {
        id: '2',
        img: "https://people.com/thmb/l8ndZ92PGSfhjZ0Jppu8JzwNB5U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(550x299:552x301):format(webp)/Stephen-Curry-x-Rakuten-081522-2000-06576dfe46f0417c8ad9378f2094f0cf.jpg"
    },

    {
        id: '3',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/LeBron_James_%2815662939969%29.jpg/800px-LeBron_James_%2815662939969%29.jpg'
    },
    {
        id: '4',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/LeBronJamesDunkingHeat.jpg/800px-LeBronJamesDunkingHeat.jpg'
    }
]


const Advert = () => (
    <Carousel autoplay>
        {advertise.map(
            (item) =>
                (<div key={item.id} >
                    <Image style={contentStyle} src={item.img} preview={false}/>
                </div>)
        )}
    </Carousel>
);
export default Advert;