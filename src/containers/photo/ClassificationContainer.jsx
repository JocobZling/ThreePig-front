import React, {useEffect, useRef, useState} from "react";
import Classification from "../../components/Classification";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import FaceAvatar from "../../components/FaceAvatar";


const ClassificationContainer = ({classificationIndexList, getClassificationIndexList}) => {
    useEffect(() => {
        getClassificationIndexList();
    }, [])

    return (
        <div >
            <FaceAvatar/>
            <Classification classificationIndexList={classificationIndexList}
                            getClassificationIndexList={getClassificationIndexList}/>
        </div>
    )
}


const mapStateToProps = ({photo}) => ({
    classificationIndexList: photo.classificationIndexList
});

const mapDispatchToProps = dispatch => ({
    getClassificationIndexList: () => dispatch(photoAction.getClassificationIndexList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassificationContainer);
