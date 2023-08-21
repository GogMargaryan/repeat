import { useSelector } from "react-redux"

const EarringTemplateFooterCare = () => {
    const state = useSelector((state) => state.earringTemplateFooter.materialCare)
    return (
        <div className="earring-template-footer-info-care">
            <h4>MATERIAL CARE</h4>
            {
                state.map((item) => {
                    return <div className="earring-template-footer-info-care-item" key={item.id}>{item.text}</div>
                })
            }
        </div>
    )
}

export default EarringTemplateFooterCare