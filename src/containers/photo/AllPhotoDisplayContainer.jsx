import React, {useEffect} from "react";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import AllPhoto from "../../components/AllPhoto";

const AllPhotoDisplayContainer = ({photos, getEveryTimesAllPhoto, match}) => {
    useEffect(() => {
        getEveryTimesAllPhoto(match.params.date);
    }, [])
    return (
        <AllPhoto photos={photos} getEveryTimesAllPhoto={getEveryTimesAllPhoto}/>
    )
}

const mapStateToProps = ({photo}) => ({
    photos: photo.indexOneDayAllPhoto
});

const mapDispatchToProps = dispatch => ({
    getEveryTimesAllPhoto: (date) => dispatch(photoAction.getEveryTimesAllPhoto(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AllPhotoDisplayContainer);
