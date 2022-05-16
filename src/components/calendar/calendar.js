import { useState, useEffect } from "react";
import moment from "moment";
import VizitsService from "../../services/vizits-service";
import "./calendar.scss";

const Calendar = () => {
    moment.updateLocale("en", {week: {dow: 1}});
    const [today, setToday] = useState(moment());
    const [vizits, setVizits] = useState([]);
    const weekdayArr = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        startDay = today.clone().startOf("month").startOf("week"),
        totalDays = 42,
        day = startDay.clone().subtract(1),
        daysArr = [...Array(totalDays)].map(() => day.add(1, "day").clone());
    const isCurrentDay = (day) => moment().isSame(day, "day");
    const isCurrentMonth = (day) => today.isSame(day, "month");
    const weekdayItem = weekdayArr.map((item) => {
        return (
            <div className="cell__weekday" key={item}>{item}</div>
        )
        });

    const dayItem = daysArr.map((item) => {
        const classMonth = (isCurrentMonth(item)) ? "cell__wrapper" : "cell__wrapper cell__wrapper_none"
        const classData = (isCurrentDay(item)) ? "cell__row cell__row_current" : "cell__row";
        const countVizits = vizits.filter(vizits => vizits.date >= item.clone().startOf("day").format("X") && vizits.date <= item.clone().endOf("day").format("X")).length;
        const vizitsClass = (countVizits === 0) ? "count__vizits-wrapper_none" : "count__vizits-wrapper";
        return (
            <div key={item.format("DDMMYYYY")} className={classMonth}>
            <div className={vizitsClass}>
                <div className="count__vizits-item">{countVizits}</div>
                </div>
            <div className={classData}>
            {item.format("D")}
            </div> 
            </div>
        )  
    });
    
    
    const prevHandler = () => setToday(today => today.clone().subtract(1, "month"));
    const nextHandler = () => setToday(today => today.clone().add(1, "month"));
    const startDateQuery = startDay.clone().format("X");
    const endDateQuery = startDay.clone().add(totalDays, "days").format("X");
    const vizitsService = new VizitsService();
    useEffect(() => {
        vizitsService.getVizitsToDo(startDateQuery, endDateQuery)
        .then(vizits => setVizits(vizits))
    }, [today]);

    return (
        <div className="calendar">
            <div className="calendar__header">
                <div className="select__data">
                    <button className="button button__nav" onClick={prevHandler}>{'<'}</button>
                    <div className="month">{today.format("MMMM")}, {today.format("YYYY")}</div>         
                    <button className="button button__nav" onClick={nextHandler}>{'>'}</button>
                </div>
                <div className="weekday">{weekdayItem}</div>
            </div>
            <div className="calendar__grid">
                {dayItem}
               </div>
                
        </div>
        
    )
}
export default Calendar;