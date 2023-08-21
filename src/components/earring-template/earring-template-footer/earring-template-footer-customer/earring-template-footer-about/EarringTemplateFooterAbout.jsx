import { useSelector } from "react-redux"

const EarringTemplateFooterAbout = () => {
    const state = useSelector((state) => state.earringTemplateFooter.aboutUs)
    return (
        <div className="earring-template-footer-info-about">
            <h4>ABOUT US</h4>
            {
                state.map((item) => {
                    return <div className="earring-template-footer-info-about-item" key={item.id}>{item.text}</div>
                })
            }
        </div>
    )
}

export default EarringTemplateFooterAbout