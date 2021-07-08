import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    GET_INDEX_PHOTO_LIST: 'photo/GET_INDEX_PHOTO_LIST',
    GET_INDEX_ONE_DAY_ALL_PHOTO: 'photo/GET_INDEX_ONE_DAY_ALL_PHOTO',
    GET_ALL_PHOTO: 'photo/GET_ALL_PHOTO',
    GET_CLASSIFICATION_INDEX_PHOTO: 'photo/GET_CLASSIFICATION_INDEX_PHOTO',
    GET_CLASSIFICATION_ALL_PHOTO: 'photo/GET_CLASSIFICATION_ALL_PHOTO',
    GET_FACE_EIGHT_INDEX_PHOTO: 'photo/GET_FACE_EIGHT_INDEX_PHOTO',
};

//action creators
export const actions = {
    getAllEightPhoto: () => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/photo/all/eight/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setIndexPhotoList(res.body))
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    getEveryTimesAllPhoto: (date) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/photo/day/${date}/all/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setEveryTimesAllPhoto(res.body))
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    getAllPhoto: () => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/photo/days/all/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setAllPhoto(res.body))
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    getClassificationIndexList: () => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/photo/all/type/one/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setClassificationIndexList(res.body))
                    dispatch(appActions.finishFetch())
                }
            })();
        }
    },
    getClassificationAllPhoto: (type) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/photo/type/${type}/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setClassificationAllPhoto(res.body))
                    dispatch(appActions.finishFetch())
                }
            })();
        }
    },
    setIndexPhotoList: (indexPhotoList) => {
        return {
            type: types.GET_INDEX_PHOTO_LIST,
            indexPhotoList: indexPhotoList
        }
    },
    setEveryTimesAllPhoto: (indexOneDayAllPhoto) => {
        return {
            type: types.GET_INDEX_ONE_DAY_ALL_PHOTO,
            indexOneDayAllPhoto: indexOneDayAllPhoto
        }
    },
    setAllPhoto: (allPhoto) => {
        return {
            type: types.GET_ALL_PHOTO,
            allPhoto: allPhoto
        }
    },
    setClassificationIndexList: (classificationIndexList) => {
        return {
            type: types.GET_CLASSIFICATION_INDEX_PHOTO,
            classificationIndexList: classificationIndexList
        }
    },
    setClassificationAllPhoto: (classificationAllPhoto) => {
        return {
            type: types.GET_CLASSIFICATION_ALL_PHOTO,
            classificationAllPhoto: classificationAllPhoto
        }
    }
}
const initialState = {
    indexPhotoList: [{
        date: "XXXX-XX-XX",
        photoList: [
            {
                position: "",
            }, {
                position: "",
            }, {
                position: "",
            }, {
                position: "",
            }, {
                position: "",
            }, {
                position: "",
            }, {
                position: "",
            }
        ]
    }],
    indexOneDayAllPhoto: [{
        src: "",
        width: "",
        height: ""
    }],
    allPhoto: [{
        src: "",
        width: "",
        height: ""
    }],
    classificationIndexList: [{
        type: "",
        position: ""
    }],
    classificationAllPhoto: [{
        src: "",
        width: "",
        height: ""
    }],
    // allPhoto: [{
    //     date: "XXXX-XX-XX",
    //     photoList: [{
    //         src: "",
    //         width: "",
    //         height: ""
    //     }]
    // }]
    indexFaceList: [
        {
            position: "",
        }]

};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_INDEX_PHOTO_LIST:
            return {...state, indexPhotoList: action.indexPhotoList};
        case types.GET_INDEX_ONE_DAY_ALL_PHOTO:
            return {...state, indexOneDayAllPhoto: action.indexOneDayAllPhoto}
        case types.GET_ALL_PHOTO:
            return {...state, allPhoto: action.allPhoto}
        case types.GET_CLASSIFICATION_INDEX_PHOTO:
            return {...state, classificationIndexList: action.classificationIndexList}
        case types.GET_CLASSIFICATION_ALL_PHOTO:
            return {...state, classificationAllPhoto: action.classificationAllPhoto}
        case types.GET_FACE_EIGHT_INDEX_PHOTO:
            return {...state,}
        default:
            return state
    }
}
