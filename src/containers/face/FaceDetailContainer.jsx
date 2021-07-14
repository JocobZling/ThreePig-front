import React, {useEffect} from "react";
import {connect} from "react-redux";
import FaceDetail from "../../components/Face/FaceDetail";
import {actions as faceAction} from "../../ducks/face";


const FaceDetailContainer = ({getFaceAllPhoto, allFacePhoto, match, updateClusteringName}) => {
    useEffect(() => {
        getFaceAllPhoto(match.params.clusteringId);
    }, [])

    return (
        <FaceDetail faceList={allFacePhoto} updateClusteringName={updateClusteringName} id={match.params.clusteringId}/>
    )
}


const mapStateToProps = ({face}) => ({
    allFacePhoto: face.allFacePhoto
});

const mapDispatchToProps = dispatch => ({
    getFaceAllPhoto: (clusteringId) => dispatch(faceAction.getFaceAllPhoto(clusteringId)),
    updateClusteringName: (name, clusteringId) => dispatch(faceAction.updateClusteringName(name, clusteringId))
});
export default connect(mapStateToProps, mapDispatchToProps)(FaceDetailContainer);
