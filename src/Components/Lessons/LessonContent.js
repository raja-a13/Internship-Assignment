import React,{useRef} from "react"

import EditableText from "./EditableText"
function LessonContent({title,currentIndex,onChange}){

    const inputRef = useRef();

    return (
    <p>
        <EditableText text={title} placeholder="Some Random Standard" childref={inputRef} type="input">
            <input
                ref={inputRef}
                type="text"
                name="lesson"
                placeholder="Type Standard here"
                value={title}
                onChange={e => onChange(currentIndex,e.target.value)}
            />
        </EditableText>
    </p>
    )
}


export default LessonContent;