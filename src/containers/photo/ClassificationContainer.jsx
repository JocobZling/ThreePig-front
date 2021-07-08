import React, {useEffect, useRef, useState} from "react";
import Classification from "../../components/Classification";
import {actions as photoAction} from "../../ducks/photo";
import {connect} from "react-redux";
import FaceAvatar from "../../components/FaceAvatar";
import styled from 'styled-components';

const Wrap = styled('div')`
  min-height:89vh;
  background-image: url(${require('../../images/background_classify.png')});
`

const ClassificationContainer = ({classificationIndexList, getClassificationIndexList}) => {
    useEffect(() => {
        getClassificationIndexList();
    }, [])

    return (
        <Wrap>
            <FaceAvatar/>
            <Classification classificationIndexList={classificationIndexList}
                            getClassificationIndexList={getClassificationIndexList}/>
        </Wrap>
    )
}


const mapStateToProps = ({photo}) => ({
    classificationIndexList: photo.classificationIndexList
});

const mapDispatchToProps = dispatch => ({
    getClassificationIndexList: () => dispatch(photoAction.getClassificationIndexList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassificationContainer);
