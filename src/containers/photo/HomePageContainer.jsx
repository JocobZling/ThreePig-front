import React, {useEffect} from "react";
import HomePage from "../../components/HomePage";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";

const HomePageContainer = ({indexPhotoList, getAllEightPhoto}) => {
    useEffect(() => {
        getAllEightPhoto();
    }, [])

    return (
        <HomePage indexPhotoList={indexPhotoList}/>
    )
}

const mapStateToProps = ({photo}) => ({
    indexPhotoList: photo.indexPhotoList
});

const mapDispatchToProps = dispatch => ({
    getAllEightPhoto: () => dispatch(photoAction.getAllEightPhoto()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
