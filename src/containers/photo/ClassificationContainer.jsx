import React, {useEffect, useRef, useState} from "react";
import Classification from "../../components/Photo/Classification";
import {actions as photoAction} from "../../ducks/photo";
import {actions as faceAction} from "../../ducks/face";
import {connect} from "react-redux";
import FaceAvatar from "../../components/Face/FaceAvatar";
import styled from 'styled-components';
import {Row, Col} from 'antd';

const Wrap = styled('div')`
  min-height:85vh;
  background-image: url(${require('../../images/background_classify.png')});
`

const ClassificationContainer = ({classificationIndexList, getClassificationIndexList, indexEightFaceList, getFaceIndexEightPhoto, indexAllFaceList, getFaceIndexAllPhoto}) => {
    useEffect(() => {
        getClassificationIndexList();
        getFaceIndexEightPhoto();
        getFaceIndexAllPhoto();
    }, [])

    return (
        <Row>
            <Col span={24}>
                <FaceAvatar indexEightFaceList={indexEightFaceList} indexAllFaceList={indexAllFaceList}/>
            </Col>
            <Col span={24}>
                <Classification classificationIndexList={classificationIndexList}
                                getClassificationIndexList={getClassificationIndexList}/>
            </Col>

        </Row>
    )
}


const mapStateToProps = ({photo, face}) => ({
    classificationIndexList: photo.classificationIndexList,
    indexEightFaceList: face.indexEightFaceList,
    indexAllFaceList: face.indexAllFaceList
});

const mapDispatchToProps = dispatch => ({
    getClassificationIndexList: () => dispatch(photoAction.getClassificationIndexList()),
    getFaceIndexEightPhoto: () => dispatch(faceAction.getFaceIndexEightPhoto()),
    getFaceIndexAllPhoto: () => dispatch(faceAction.getFaceIndexAllPhoto())
});
export default connect(mapStateToProps, mapDispatchToProps)(ClassificationContainer);
