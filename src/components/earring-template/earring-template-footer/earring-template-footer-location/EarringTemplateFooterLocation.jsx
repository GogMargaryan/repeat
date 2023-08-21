import { useSelector } from "react-redux";

const EarringTemplateFooterLocation = () => {
    const state = useSelector((state) => state.earringTemplateFooter.location)
    return (
        <div className="earring-template-footer-info-location">
            <h4>MAIN LOCATION</h4>
            {
                state.map((item) => {
                    return <div className="earring-template-footer-info-location-item" key={item.id}>{item.text}</div>
                })
            }
        </div>
    )
}

export default EarringTemplateFooterLocation;