import { useDispatch, useSelector } from "react-redux"
import { sortedEarrings } from "../../../redux/slices/earringsSlice";

const EarringTemplateMain = () => {
    const state = useSelector((state) => state.earringsTemplate.earrings);
    // console.log(state);
    const dispatch = useDispatch();
    function sort(type) {
        dispatch((sortedEarrings({ type: type })))
    }
    return (
        <div className="earring-template-main">
            <div className="earring-template-main-about">
                <h2>EARRINGS</h2>
                <p>The most beautiful jewelry with us</p>
            </div>
            <div className="earring-template-main-info">
                <p>SORT BY:</p>
                <p onClick={() => {
                    sort("popularity")
                }} >Popularity</p>
                <p onClick={() => {
                    sort("type")
                }}>Type</p>
                <p onClick={() => {
                    sort("gemstone")
                }}>Gemstone</p>
                <p onClick={() => {
                    sort("price")
                }}>Price</p>
            </div>
            <div className="earring-template-main-jewelry">
                {
                    state.map((item) => {
                        return <div className="earring-template-main-jewelry-img" key={item.id} style={{ width: "250px", padding: "12px" }}>
                            <img src={item.img} alt="img" />
                            <p>{item.type}</p>
                            <p>{item.price}</p>

                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default EarringTemplateMain