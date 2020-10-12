import React,{useContext} from "react"

import LessonsContextApi from "../util/LessonsContextApi"

import LessonContent from "./LessonContent"
import ControlIcons from "./ControlIcons"
function LessonItem({title,depth,currentIndex}){
    const {items,upateItems} = useContext(LessonsContextApi)


    function updateTextElement(index,value){
        let data = items
        data[index]["name"] = value;
        upateItems([...data])
    }


    const nodeStyles = {
        marginLeft:`${20*depth}px`
    }

    function countChildren(index,totalNumOfItems,parentIndexDepth){
        var loopVariable = index+1;
        var numChildren = 0;
        
        while(loopVariable<totalNumOfItems){
            var currentIndexDepth = items[loopVariable]["depth"];
            if(parentIndexDepth < currentIndexDepth){
                numChildren++;
            }
            else{
                break;
            }
            loopVariable++;
        }
        return numChildren;
    }

    function leftIndent(index){
        let data = items

        console.log(index)
        var totalNumOfItems = data.length
        var currentIndexDepth = data[index]["depth"]
        if(index === 0) return
        if(currentIndexDepth <= 1) return
        var numChildren = countChildren(index,totalNumOfItems,currentIndexDepth);
        if(numChildren === 0){
                data[index]["depth"]--;
        }
        else{
            
            for(var loopVariable=0 ;loopVariable <= numChildren;loopVariable++){
                
                data[index+loopVariable]["depth"]--;
            }
        }
        upateItems([...data])
    }
    function rightIndent(index){
        if(index === 0) return
        if(items[index]["depth"] - items[index-1]["depth"] >= 1) return

        let data = items
        data[index]["depth"]++
        upateItems([...data])
    }
    function deleteNode(index){
        if(items[index] === undefined) return

        let data = items
        var totalNumOfItems = data.length
        var parentIndexDepth = data[index]["depth"]
        var numOfItemsToRemove = 1 + countChildren(index,totalNumOfItems,parentIndexDepth);
        
        data.splice(index,numOfItemsToRemove)
        upateItems([...data])
    }
    return (
    <>
        <div className="row">
            <div className="col col-left">
                <ControlIcons onLeftArrow={leftIndent} onRightArrow={rightIndent} onTrash={deleteNode} currentIndex={currentIndex} />
            </div>
            <div className="col col-right box" style={nodeStyles}>
                <LessonContent title={title} onChange={updateTextElement} currentIndex={currentIndex}/>
            </div>
        </div>
    </>
    )
}



export default LessonItem;