import {Avatar, Button, Card} from "antd";
import React, {useEffect, useState} from "react";
import {getHomePageQuestionAPI} from "@/apis/question";
import Meta from "antd/es/card/Meta";


const CollectionItem = ({item}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card style={{marginBottom: 10}} >
            <Meta style={{marginBottom: '10px'}}
                  avatar={<Avatar className={'flexCenter'} src={item.avatar}/>}
                  title={
                      <div className={'flexBetween'}>
                          <span>{item.name}</span>
                          <span>
                            <Button type="link" size="small" style={{marginLeft: 8}}>
                                + Follow
                            </Button>
                        </span>
                      </div>
                  }
            />
            <div className={'post-content ' + (isExpanded ? '' : 'truncate-text')}
                 dangerouslySetInnerHTML={{__html: item.content}}/>
            {!isExpanded && <Button type={"text"} onClick={toggleExpansion}>see more</Button>}

        </Card>
    )
}




const Collection = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(getHomePageQuestionAPI());
    }, []);

    return (
        <div>
            {data.map((item)=>(
                <CollectionItem item={item}/>
            ))}
        </div>
    )
}

export default Collection