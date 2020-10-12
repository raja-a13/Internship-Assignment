import React,{useState,useEffect} from "react"
import "./CurriculumAuthoringTool.css"

import CurriculumHeader from "./CurriculumHeader"
import LessonItems from "./Lessons/LessonItems"
import FooterButtons from "./FooterButtons"

import LessonsContextApi from "./util/LessonsContextApi"

import {data} from "./util/SampleData"
function CurriculumAuthoringTool(){
    const [items,setItems] = useState(data)

    const updateItems = (elements) => {
        setItems(elements)
    }

    return (
    <LessonsContextApi.Provider value={{items,upateItems:updateItems}}>
        <div className="tab">
            <CurriculumHeader />
            <LessonItems />
            <FooterButtons />
        </div>
    </LessonsContextApi.Provider>
    )

}
export default CurriculumAuthoringTool;