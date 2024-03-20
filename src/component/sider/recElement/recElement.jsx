import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";


const RecElement = ({item}) =>{

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <img src={item.avatar} alt={'loading...'} width={'40px'} height={'40px'}/>
                </div>
                <div>
                    <h3>{item.title}</h3>
                    <h5>{item.des}</h5>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button icon={<PlusOutlined/>} type="text">关注</Button>
            </div>
        </div>
    )

}

export default RecElement