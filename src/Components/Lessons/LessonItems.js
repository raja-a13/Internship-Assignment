import React,{useContext} from "react"
import "../CurriculumAuthoringTool.css"

import { ReactSortable } from "react-sortablejs";

import LessonItem from "./LessonItem"
import LessonsContextApi from "../util/LessonsContextApi"

function List(){
    const {items,upateItems} = useContext(LessonsContextApi)
    return (
    <ReactSortable tag="div" className="table" list={items} setList={upateItems} handle={".handle"} animation={200}>
            {items.map(({name,depth},index) => {
                return (<LessonItem key={index} title={name} depth={depth} currentIndex={index}/>)
            })}
    </ReactSortable>
    )
}


export default List;