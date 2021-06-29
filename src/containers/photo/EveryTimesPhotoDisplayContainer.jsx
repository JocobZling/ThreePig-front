import React from "react";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import UploadPhoto from "../../components/UploadPhoto";
import AllPhoto from "../../components/AllPhoto";

const EveryTimesPhotoDisplayContainer = ({}) => {
    return (
        <AllPhoto/>
    )
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(EveryTimesPhotoDisplayContainer);
