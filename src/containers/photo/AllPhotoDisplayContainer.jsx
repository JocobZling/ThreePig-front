import React, {useEffect} from "react";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import AllPhoto from "../../components/Photo/AllPhoto";
import AllPhotoParseDate from "../../components/Photo/AllPhotoParseDate";

const AllPhotoDisplayContainer = ({photos, getAllPhoto}) => {
    useEffect(() => {
        getAllPhoto();
    }, [])
    return (
        <AllPhotoParseDate photos={photos} getAllPhoto={getAllPhoto}/>
    )
}

const mapStateToProps = ({photo}) => ({
    photos: photo.allPhoto
});

const mapDispatchToProps = dispatch => ({
    getAllPhoto: () => dispatch(photoAction.getAllPhoto()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AllPhotoDisplayContainer);
