import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    GET_HIGHLIGHT_INDEX_PHOTO: 'face/GET_HIGHLIGHT_INDEX_PHOTO',
};

//action creators
export const actions = {
    getHighlightIndexPhoto: () => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/highlight/${window.localStorage.getItem("id")}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setHighlightIndexPhoto(res.body))
                    dispatch(appActions.finishFetch())
                }
            })();
        }
    },
    setHighlightIndexPhoto: (highlightIndexPhoto) => {
        return {
            type: types.GET_HIGHLIGHT_INDEX_PHOTO,
            highlightIndexPhoto: highlightIndexPhoto
        }
    },
}
const initialState = {
    highlightIndexPhoto: {
        EveryTime: {
            tandP: [{
                date: "",
                src: ""
            }]
        },
    },
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_HIGHLIGHT_INDEX_PHOTO:
            return {...state, highlightIndexPhoto: action.highlightIndexPhoto}
        default:
            return state
    }
}
