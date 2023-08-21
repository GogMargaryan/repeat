import EarringTemplateFooterCare from "./earring-template-footer-care/EarringTemplateFooterCare"
import EarringTemplateFooterContact from "./earring-template-footer-contact/EarringTemplateFooterContact"
import EarringTemplateFooterCustomer from "./earring-template-footer-customer/EarringTemplateFooterCustomer"
import EarringTemplateFooterAbout from "./earring-template-footer-customer/earring-template-footer-about/EarringTemplateFooterAbout"
import EarringTemplateFooterLocation from "./earring-template-footer-location/EarringTemplateFooterLocation"
import EarringTemplateFooterSignUp from "./earring-template-footer-sign-up/EarringTemplateFooterSignUp"

const EarringTemplateFooter = () => {

    return (
        <div className="earring-template-footer">
            <div className="earring-template-footer-info">
                <EarringTemplateFooterCustomer />
                <EarringTemplateFooterAbout />
                <EarringTemplateFooterCare />
                <EarringTemplateFooterLocation />
            </div>
            <div className="earring-template-footer-contact">
                <EarringTemplateFooterSignUp />
                <EarringTemplateFooterContact />
            </div>
        </div>
    )
}

export default EarringTemplateFooter