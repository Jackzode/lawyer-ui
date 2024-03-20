import Firm from "@/component/firm";
import "./market.css"

const list = [1, 2, 3, 4,5,6,7,8,9, 0]

const Market = () => {

    return <>
        <div className={'marketContainer'}>
            <div className={'marketContent'}>
                {list.map((i, index)=> (<Firm key={index}/>))}
            </div>
        </div>

    </>


}

export default Market