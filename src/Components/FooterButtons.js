import React,{useContext} from "react"

import "./FooterButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


import SaveToJSON from "./util/SaveToJSON"
import LoadFromJSON from "./util/LoadFromJSON.js"

import LessonsContextApi from "./util/LessonsContextApi"


function FooterButtons(){
    const {items,upateItems} = useContext(LessonsContextApi)

    function addNode(){
        let name = ""
        let depth = 0;
        upateItems([...items,{name,depth}])
    }
    return (
        <>
            <button className="btn-addStandard " onClick={addNode} >
                <FontAwesomeIcon icon={faPlusCircle} />Add a standard
            </button>
            <div className="json-buttons">
                <SaveToJSON />
                <LoadFromJSON />
            </div>
        </>
    )
}

export default FooterButtons;