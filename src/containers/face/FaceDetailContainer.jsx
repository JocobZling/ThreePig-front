import React, {useEffect } from "react";
import {connect} from "react-redux";
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
