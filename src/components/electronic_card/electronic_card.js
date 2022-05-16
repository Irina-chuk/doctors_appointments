import card from "../../icons/card.png";
import lab from "../../icons/lab.png";
import add from "../../icons/add.png";
import clock from "../../icons/clock.png";
import "./electronic_card.scss";


const ElectronicCard = () => {
    return (
        <div className="card">
            Электронная карта
            <div className="card__wrapper">
                <div className="card__item card__item_active">
                    <div className="card__item-img card__item-img_active"><img src={card} alt="card" /></div>
                    <div className="card__item-info">
                        <div className="card__item-title">Информация о пациенте</div>
                        <div className="card__item-divider card__item-divider_active"></div>
                        <ul className="card__item-list">
                            <li><span>Ваши личные данные</span></li>
                            <li><span>Рекомендации врачей</span></li>
                            <li><span>История болезней</span></li>
                        </ul>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__item-img"><img src={lab} alt="lab" /></div>
                    <div className="card__item-info">
                        <div className="card__item-title">Результаты анализов</div>
                        <div className="card__item-divider"></div>
                        <div className="card__item-text">
                            Вы можете узнать здесь результаты своих анализов
                        </div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__item-img"><img src={add} alt="add" /></div>
                    <div className="card__item-info">
                        <div className="card__item-title">Добавить  информацию</div>
                        <div className="card__item-divider"></div>
                        <div className="card__item-text">
                        Добавляйте в свою электронную медицинскую карту новые данные
                        </div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__item-img"><img src={clock} alt="clock" /></div>
                    <div className="card__item-info">
                        <div className="card__item-title">История приемов</div>
                        <div className="card__item-divider"></div>
                        <div className="card__item-text">
                        Вся информация о полученных услугах за все время хранится здесь
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElectronicCard;