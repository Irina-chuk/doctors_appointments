import "./vizit_item.scss";
import moment from "moment";
import doctorImg from "../../icons/doctor.png";
import doctorHarkov from "../../icons/harkov.png";

const VizitItem = ({vizit, onCancelItem}) => {
    moment.updateLocale("en", {week: {dow: 1}});
    const {date, clinica, doctor} = vizit;
    const dataItem = moment(date, "X").format("DD.MM.YYYY");
    const weekday = moment(date, "X").format("e");
    const timeItem = moment(date, "X").format("kk:mm");
    const photoDoctor = doctor.name === "Харьков В. С." ?  doctorHarkov : doctorImg;
    const transformWeekday = (weekday) => {
        switch (weekday) {
            case "0":  return "Понедельник";
            case "1":  return "Вторник";
            case "2":  return "Среда";
            case "3":  return "Четверг";
            case "4":  return "Пятница";
            case "5":  return "Суббота";
            case "6":  return "Воскресенье";
        }
    }
    const weekdayItem = transformWeekday(weekday);
    
    
    
    return (
        
        <div className="vizit__item">
            <div className="vizit__item-day">
                <div className="vizit__item-data">{weekdayItem} {dataItem}</div> | 
                <div className="vizit__item-time">{timeItem}</div>
            </div>
            
            <div className="vizit__item-clinic">{clinica}</div>
            <div className="vizit__item-wrapper">
                <div className="vizit__item-doctor">
                    <div className="vizit__item-photo"><img src={photoDoctor} alt="photo" /></div>
                    <div className="vizit__item-info">
                        <div className="vizit__item-name">{doctor.name}</div>
                        <div className="vizit__item-depart">{doctor.departament}</div>
                    </div>
                </div>
                <button type="button" className="button button__item" onClick={onCancelItem}>Отменить</button>
            </div>
        </div>
    )
}

export default VizitItem;