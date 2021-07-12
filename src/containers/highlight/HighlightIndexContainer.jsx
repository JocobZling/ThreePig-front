import React, {useEffect, useRef, useState} from "react";
import HighlightIndex from "../../components/Highlight/HighlightIndex";
import {actions as highlightAction} from "../../ducks/highlight";
import {connect} from "react-redux";

const HighlightIndexContainer = ({getHighlightIndexPhoto, highlightIndexPhoto}) => {
    useEffect(() => {
        getHighlightIndexPhoto();
    }, [])
    return <HighlightIndex highlightIndexPhoto={highlightIndexPhoto} getHighlightIndexPhoto={getHighlightIndexPhoto}/>
}


const mapStateToProps = ({highlight}) => ({
    highlightIndexPhoto: highlight.highlightIndexPhoto
});

const mapDispatchToProps = dispatch => ({
    getHighlightIndexPhoto: () => dispatch(highlightAction.getHighlightIndexPhoto()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HighlightIndexContainer);
