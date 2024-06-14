
import {CITYLIST} from 'src/data/data'



const getLocationPath = (cityId) => {
    const path = [];
    const findPath = (list, id) => {
        for (const item of list) {
            if (item.value === id) {
                path.push(item.label);
                return true;
            }
            if (item.children && item.children.length>0 ) {
                if (findPath(item.children, id)) {
                    path.push(item.label);
                    return true;
                }
            }
        }
        return false;
    };
    findPath(CITYLIST, cityId);
    return path.reverse();
};

const findCityIdByName = (list,  name) => {
    for (const item of list) {
        // console.log(item.label, "...")
        if (item.label === name) {
            return item;
        }
        // console.log(item.children, "...ccc")
        if (item.children && item.children.length > 0) {
            const result = findCityIdByName(item.children, name);
            if (result) {
                return result;
            }
        }
    }
    return null;
};


const getCityIdByName = ( name) => {
    const cityItem = findCityIdByName(CITYLIST, name);
    if (cityItem) {
        return cityItem.value;
    }
    return ''
}




export {getCityIdByName, getLocationPath}