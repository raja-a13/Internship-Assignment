import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt,faArrowLeft,faArrowRight,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import "./ControlIcons.css"
function ControlIcons({onLeftArrow,onRightArrow,onTrash,currentIndex}){
    return(
    <p>
        <button className="controlButtons">
            <span className="handle">
                <FontAwesomeIcon icon={faArrowsAlt} />
            </span>
        </button>
        <button className="controlButtons tooltip" onClick={() => onLeftArrow(currentIndex)}>
            <span class="tooltiptext">Outdent</span>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="controlButtons tooltip" onClick={() => onRightArrow(currentIndex)} >
            <span class="tooltiptext">Indent</span>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button className="controlButtons tooltip" onClick={() => onTrash(currentIndex)}>
            <span class="tooltiptext">Delete</span>
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
    </p>
    )
}

export default ControlIcons;