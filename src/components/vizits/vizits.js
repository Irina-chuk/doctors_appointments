import VizitItem from "../vizit_item/vizit_item";
import {Link} from "react-router-dom";

import "./vizits.scss";
const Vizits = ({vizits, onCancelItem}) => {
    const elements = vizits.map(item => {
        const {id} = item;
        return (<VizitItem
            key={id}
            vizit={item}
            onCancelItem={() => onCancelItem(id)}
           />)      
    });
    const elementsVisible = elements.slice(0, 2);
    const elementsInvisible = elements.length - 2;
    return (
        <div className="vizits">
            Записи на прием
            <div className="vizits__wrapper">
                {elementsVisible}
                <div className="vizits__link">
                    Еще <span>{elementsInvisible}</span> записи <br/>
                    <Link to={"/vizits-managing"}>Подробнее</Link>
                </div>
            
            </div>
        </div>
    );
}

export default Vizits;