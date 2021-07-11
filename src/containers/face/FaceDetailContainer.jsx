import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {Row, Col} from 'antd';
import FaceDetail from "../../components/Face/FaceDetail";
import {actions as faceAction} from "../../ducks/face";


const FaceDetailContainer = ({getFaceAllPhoto, allFacePhoto, match}) => {
    useEffect(() => {
        getFaceAllPhoto(match.params.clusteringId);
    }, [])

    return (
        <FaceDetail faceList={allFacePhoto}/>
    )
}


const mapStateToProps = ({face}) => ({
    allFacePhoto: face.allFacePhoto
});

const mapDispatchToProps = dispatch => ({
    getFaceAllPhoto: (clusteringId) => dispatch(faceAction.getFaceAllPhoto(clusteringId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FaceDetailContainer);
