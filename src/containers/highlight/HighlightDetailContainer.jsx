import React, {useEffect} from "react";
import {actions as highlightAction} from "../../ducks/highlight";
import {connect} from "react-redux";
import HighlightDetail from "../../components/Highlight/HighlightDetail";

const HighlightIndexContainer = ({match, getHighlightDetailPhoto, highlightDetail}) => {
    useEffect(() => {
        getHighlightDetailPhoto(match.params.type, match.params.date)
    }, [])
    return <HighlightDetail highlightDetail={highlightDetail}/>
}


const mapStateToProps = ({highlight}) => ({
    highlightDetail: highlight.highlightDetail
});

const mapDispatchToProps = dispatch => ({
    getHighlightDetailPhoto: (type, date) => dispatch(highlightAction.getHighlightDetailPhoto(type, date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HighlightIndexContainer);
