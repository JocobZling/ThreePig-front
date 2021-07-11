import React, {useState, useCallback} from "react";

import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import UploadPhoto from "../../components/Photo/UploadPhoto";

const UploadPhotoContainer = ({}) => {

    return (
        <UploadPhoto/>
    )
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoContainer);
