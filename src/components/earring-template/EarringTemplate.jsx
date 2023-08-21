import EarringTemplateFooter from "./earring-template-footer/EarringTemplateFooter"
import EarringTemplateHeader from "./earring-template-header/EarringTemplateHeader"
import EarringTemplateMain from "./earring-template-main/EarringTemplateMain"
import "./EarringTemplate.scss";



const EarringTemplate = () => {
    return (
        <div className="earring-template">
            <EarringTemplateHeader />
            <EarringTemplateMain />
            <EarringTemplateFooter />
        </div>
    )
}

export default EarringTemplate
