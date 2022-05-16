import Vizits from "../vizits/vizits";
import ElectronicCard from "../electronic_card/electronic_card";

const PersonalAccount = ({vizits, onCancelItem}) => {
    return (
        <div className="personal__account">
            <Vizits vizits={vizits} onCancelItem={onCancelItem}/>
            <ElectronicCard/>
        </div>
    )
}
export default PersonalAccount;