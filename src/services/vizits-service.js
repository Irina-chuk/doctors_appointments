class VizitsService  {
    getResourse = async (url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw Error (`Could not fetch ${url}, status ${res.status}`);
        } 
        return await res.json();
    }

    

    getAllVizits = () => {
        const res = this.getResourse("http://localhost:3002/vizits");
        return res;
        
    }
    getVizitsToDo = (startDay, endDay) => {
        const res = this.getResourse(`http://localhost:3002/vizits?date_gte=${startDay}&date_lte=${endDay}`);
        return res;
        
    }

}
export default VizitsService;