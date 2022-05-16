import Calendar from "../calendar/calendar";
import VizitItem from "../vizit_item/vizit_item";
import {Link} from "react-router-dom";
import back from "../../icons/back.png";


import "./managin_vizits.scss";

const ManagingVizits = ({vizits, onCancelItem}) => {
    const elements = vizits.map(item => {
        const {id} = item;
        return (<VizitItem
            key={id}
            vizit={item}
            onCancelItem={() => onCancelItem(id)}/>)      
    });
    return (
        <div className="managing">
            <div className="managing__wrapper">
                <Link to={"/"}><div className="managing__wrapper-link"><img src={back} alt="back"/> Мои записи</div></Link>
                <div className="managing__vizits-wrapper">
                    {elements}
                </div>
            </div>
            
            <Calendar/>
        </div>
    )
}
export default ManagingVizits;