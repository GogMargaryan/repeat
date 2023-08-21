import { useSelector } from "react-redux"

const EarringTemplateFooterCustomer = () => {
    const state = useSelector((state) => state.earringTemplateFooter.customerServices)

    return (
        <div className="earring-template-footer-info-customer">
            <h4> CUSTOMER SERVICES</h4>
            {
                state.map((item) => {
                    return <div className="earring-template-footer-info-customer-item" key={item.id}>{item.text}</div>
                })
            }
        </div>
    )
}

export default EarringTemplateFooterCustomer
