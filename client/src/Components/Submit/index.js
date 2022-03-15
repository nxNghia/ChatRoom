import "./style.css";
const Submit = ({value=''}) => {
    return (
        <div>
            <input type="submit" className="logbtn" value={value}>
            </input>
        </div>        
    )
}
export default Submit;
