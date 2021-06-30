import React, {useEffect} from "react";
import Classification from "../../components/Classification";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";


const ClassificationContainer = ({classificationIndexList, getClassificationIndexList}) => {
    useEffect(() => {
        getClassificationIndexList();
    }, [])
    return (
        <Classification classificationIndexList={classificationIndexList}
                        getClassificationIndexList={getClassificationIndexList}/>
    )
}


const mapStateToProps = ({photo}) => ({
    classificationIndexList: photo.classificationIndexList
});

const mapDispatchToProps = dispatch => ({
    getClassificationIndexList: () => dispatch(photoAction.getClassificationIndexList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassificationContainer);
