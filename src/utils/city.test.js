import {getCityIdByName, getLocationPath} from './city';



describe('formatDate', () => {
    it('test-findCityById', () => {
         // 2021-01-01
        const item = getCityIdByName("温县");
        console.log("res---", item.value)
    });

    it('should-getLocationPath', () => {
        const path = getLocationPath("410825");
        console.log("res---", path)
    });


});

