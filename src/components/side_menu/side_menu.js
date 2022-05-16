import heart from "../../icons/heart.png";
import doctor from "../../icons/vector.png";
import speak from "../../icons/speak.png";
import test from "../../icons/test.png";
import book from "../../icons/book.png";
import help from "../../icons/help.png";

import "./side_menu.scss";

const SideMenu = () => {
    return (
            <div className="side__menu">
                <nav>
                    <ul>
                        <li className="side__menu-link side__menu-link_active"><img src={heart} alt="heart" /><a href="#">Профиль</a></li>
                        <li className="side__menu-link"><img src={doctor} alt="doctor" /><a href="#">Врачи и клиники</a></li>
                        <li className="side__menu-link"><img src={speak} alt="speak" /><a href="#">Сообщения</a></li>
                        <li className="side__menu-link"><img src={test} alt="test" /><a href="#">Тестирование</a></li>
                        <li className="side__menu-link"><img src={book} alt="book" /><a href="#">Полезно знать</a></li>
                    </ul>
                    <button type="button" className="button">Подать заявку</button>
                </nav>
                <div className="help"><a href="#"><img src={help} alt="help" />Помощь</a></div>
            </div>
    )
}
export default SideMenu;
