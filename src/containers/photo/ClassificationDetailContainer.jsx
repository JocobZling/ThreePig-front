import React, {useEffect} from "react";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import AllPhoto from "../../components/AllPhoto";

const ClassificationDetailContainer = ({photos, getClassificationAllPhoto, match}) => {
    useEffect(() => {
        getClassificationAllPhoto(match.params.type);
    }, [])
    return (
        <AllPhoto photos={photos} getClassificationAllPhoto={getClassificationAllPhoto}/>
    )
}

const mapStateToProps = ({photo}) => ({
    photos: photo.classificationAllPhoto
});

const mapDispatchToProps = dispatch => ({
    getClassificationAllPhoto: (type) => dispatch(photoAction.getClassificationAllPhoto(type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassificationDetailContainer);
