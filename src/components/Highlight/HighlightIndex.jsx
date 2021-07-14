import React from "react";
import TimesViewer from "./TimesViewer";
import HighlightContent from "./Content";

const HighlightIndex = ({highlightIndexPhoto}) => {
    return (
        highlightIndexPhoto !== undefined ?
            <div>
                <TimesViewer everyTime={highlightIndexPhoto.EveryTime.tandP}/>
                <HighlightContent bestAll={highlightIndexPhoto.BestAll}
                                  bestRecentAll={highlightIndexPhoto.BestRecentAll}
                                  bestPerson={highlightIndexPhoto.BestPerson}
                                  bestRecentPerson={highlightIndexPhoto.BestRecentPerson}/>
            </div> : "")

}

export default HighlightIndex
