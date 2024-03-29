import React, {useEffect} from "react";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import AllPhoto from "../../components/Photo/AllPhoto";
import Back from "../../components/Layout/Back";

const EveryTimesPhotoDisplayContainer = ({photos, getEveryTimesAllPhoto, match}) => {
    useEffect(() => {
        getEveryTimesAllPhoto(match.params.date);
    }, [])
    return (
        <>
            <Back back={'/'}/>
            <AllPhoto photos={photos} getEveryTimesAllPhoto={getEveryTimesAllPhoto} rowHeight={250}/>
        </>
    )
}

const mapStateToProps = ({photo}) => ({
    photos: photo.indexOneDayAllPhoto
});

const mapDispatchToProps = dispatch => ({
    getEveryTimesAllPhoto: (date) => dispatch(photoAction.getEveryTimesAllPhoto(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EveryTimesPhotoDisplayContainer);
