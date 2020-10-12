import React,{useContext} from "react"
import DownloadLink from "react-download-link";



import LessonsContextApi from "../util/LessonsContextApi"
function SaveRecords(){
    const {items,upateItems} = useContext(LessonsContextApi)
    return (
        <button className="btn-footer">
    <DownloadLink
        label="Save/Download"
        filename="data.json"
        exportFile={() => JSON.stringify(items)}
        className="download-link"
    />
    </button>)
}


export default SaveRecords;