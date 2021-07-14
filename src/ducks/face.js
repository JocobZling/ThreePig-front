import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    GET_FACE_EIGHT_INDEX_PHOTO: 'face/GET_FACE_EIGHT_INDEX_PHOTO',
    GET_FACE_ALL_INDEX_PHOTO: 'face/GET_FACE_ALL_INDEX_PHOTO',
    GET_FACE_ALL_PHOTO: 'face/GET_FACE_ALL_PHOTO'
};

//action creators
export const actions = {
    getFaceIndexEightPhoto: () => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/face/eight/one/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setFaceIndexEightPhoto(res.body))
                    dispatch(appActions.finishFetch())
                }
            })();
        }
    },
    getFaceIndexAllPhoto: () => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/face/all/one/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setFaceIndexAllPhoto(res.body))
                    dispatch(appActions.finishFetch())
                }
            })();
        }
    },
    getFaceAllPhoto: (clusteringId) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/face/oneKlass/${clusteringId}/all/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setAllFacePhoto(res.body))
                    dispatch(appActions.finishFetch())
                }
            })();
        }
    },
    updateClusteringName: (name, clusteringId) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.update(`./api/face/update/${clusteringId}/clusteringName/${window.localStorage.getItem("id")}`, name);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.getFaceAllPhoto(clusteringId))
                    dispatch(appActions.finishFetch())
                }
            })();
        }
    },
    setFaceIndexEightPhoto: (indexEightFaceList) => {
        return {
            type: types.GET_FACE_EIGHT_INDEX_PHOTO,
            indexEightFaceList: indexEightFaceList
        }
    },
    setFaceIndexAllPhoto: (indexAllFaceList) => {
        return {
            type: types.GET_FACE_ALL_INDEX_PHOTO,
            indexAllFaceList: indexAllFaceList
        }
    },
    setAllFacePhoto: (allFacePhoto) => {
        return {
            type: types.GET_FACE_ALL_PHOTO,
            allFacePhoto: allFacePhoto
        }
    }
}
const initialState = {
    indexEightFaceList: [{
        position: ""
    }],
    indexAllFaceList: [{
        position: ""
    }],
    allFacePhoto: {
        facePosition: "",
        clusteringName: "",
        photoDisplayVoList: [{
            src: "",
            width: "",
            height: ""
        }]
    },
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_FACE_EIGHT_INDEX_PHOTO:
            return {...state, indexEightFaceList: action.indexEightFaceList}
        case types.GET_FACE_ALL_INDEX_PHOTO:
            return {...state, indexAllFaceList: action.indexAllFaceList}
        case types.GET_FACE_ALL_PHOTO:
            return {...state, allFacePhoto: action.allFacePhoto}
        default:
            return state
    }
}
