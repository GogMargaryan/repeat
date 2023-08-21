import { TfiLocationPin } from "react-icons/tfi"
import { BsSearch } from "react-icons/bs"
import { BsHeart } from "react-icons/bs"
import { AiOutlineShopping } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"

const EarringTemplateHeader = () => {
    return (
        <div className="earring-template-header">
            <div className="earring-template-header-about">
                <p><TfiLocationPin /></p>
                <p>JEWELRY</p>
                <p>NEW RELEASES</p>
                <p>GIFTS</p>
            </div>
            <h1>APOLLONIAN</h1>
            <div className="earring-template-header-search">
                <input type="text" />
                <span><BsSearch /></span>
                <p><BsHeart /></p>
                <p><AiOutlineShopping /></p>
                <p><FaRegUser /></p>

            </div>

        </div>
    )
}

export default EarringTemplateHeader;