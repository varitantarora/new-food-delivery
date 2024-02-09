import Itemlistmenu from "./Itemlistmenu"
import { useState } from "react"
const Categoryrest = () => {

    const [ShowItems, setShowItems] = useState(false)
//if show items is false then set show items to true this will display the items
    const Handleclick = () => {
        ShowItems ? setShowItems(false) : setShowItems(true)
    }

    return (
        <div>
            {/* accordion header */}
            <div onClick={Handleclick}>
                <h4 className="accordion-header"> All restaurants  🔽</h4>
            </div>
            {/* accoordiion body */}
            {/* if show items is set to true then it will display the list of items */}
            {ShowItems && <Itemlistmenu />}
        </div>
    )
}

export default Categoryrest;