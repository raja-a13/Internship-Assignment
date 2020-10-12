import React,{useState,useEffect} from "react"
import "./CurriculumAuthoringTool.css"

function CurriculumHeader(){
    return (
    <div>
        <h3 className="subject-name">MATHEMATICS</h3>
        <div className="heading">
            <div className="col col-left ">
                <p className="table-heading margin-clear">Actions</p>
                <p className="table-sub-heading margin-clear">Move,Indent,Outdent,Delete</p>
            </div>
            <div className="col col-right">
                <p className="table-heading margin-clear">Standard</p>
                <p className="table-sub-heading margin-clear">The text of the standard</p>
            </div>
        </div>
    </div>
    )
}

export default CurriculumHeader;