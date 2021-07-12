import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    GET_HIGHLIGHT_INDEX_PHOTO: 'highlight/GET_HIGHLIGHT_INDEX_PHOTO',
    GET_HIGHLIGHT_DETAIL_PHOTO: 'highlight/GET_HIGHLIGHT_DETAIL_PHOTO',
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
    getHighlightDetailPhoto: (type, date) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/highlight/detail/${type}/${window.localStorage.getItem("id")}?date=${date}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setHighlightDetailPhoto(res.body))
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
    setHighlightDetailPhoto: (highlightDetail) => {
        return {
            type: types.GET_HIGHLIGHT_DETAIL_PHOTO,
            highlightDetail: highlightDetail
        }
    },
}
const initialState = {
    highlightIndexPhoto: {
        BestAll: {
            position: ""
        },
        BestPerson: {
            position: ""
        },
        BestRecentAll: {
            position: ""
        },
        BestRecentPerson: {
            position: ""
        },
        EveryTime: {
            tandP: [{
                date: "",
                src: ""
            }]
        },
    },
    highlightDetail: []
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_HIGHLIGHT_INDEX_PHOTO:
            return {...state, highlightIndexPhoto: action.highlightIndexPhoto}
        case types.GET_HIGHLIGHT_DETAIL_PHOTO:
            return {...state, highlightDetail: action.highlightDetail}
        default:
            return state
    }
}
