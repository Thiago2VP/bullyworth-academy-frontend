import * as types from '../types';

export function loginRequest(payload) {
    return {
        type: types.LOGIN_REQUEST,
        payload,
    };
}

export function loginSuccess(payload) {
    return {
        type: types.LOGIN_SUCCESS,
        payload,
    };
}

export function loginFailure(payload) {
    return {
        type: types.LOGIN_FAILURE,
        payload,
    };
}

export function registerRequest(payload) {
    return {
        type: types.REGISTER_REQUEST,
        payload,
    };
}

export function registerUpdatedSuccess(payload) {
    return {
        type: types.REGISTER_UPDATED_SUCCESS,
        payload,
    };
}

export function registerCreatedSuccess(payload) {
    return {
        type: types.REGISTER_CREATED_SUCCESS,
        payload,
    };
}

export function registerFailure(payload) {
    return {
        type: types.REGISTER_FAILURE,
        payload,
    };
}

export function courseRequest(payload) {
    return {
        type: types.COURSE_REQUEST,
        payload,
    };
}

export function courseUpdatedSuccess(payload) {
    return {
        type: types.COURSE_UPDATED_SUCCESS,
        payload,
    };
}

export function courseCreatedSuccess(payload) {
    return {
        type: types.COURSE_CREATED_SUCCESS,
        payload,
    };
}

export function courseFailure(payload) {
    return {
        type: types.COURSE_FAILURE,
        payload,
    };
}

export function lessonRequest(payload) {
    return {
        type: types.LESSON_REQUEST,
        payload,
    };
}

export function lessonUpdatedSuccess(payload) {
    return {
        type: types.LESSON_UPDATED_SUCCESS,
        payload,
    };
}

export function lessonCreatedSuccess(payload) {
    return {
        type: types.LESSON_CREATED_SUCCESS,
        payload,
    };
}

export function lessonFailure(payload) {
    return {
        type: types.LESSON_FAILURE,
        payload,
    };
}

export function supportMatRequest(payload) {
    return {
        type: types.SUPPORTMAT_REQUEST,
        payload,
    };
}

export function supportMatUpdatedSuccess(payload) {
    return {
        type: types.SUPPORTMAT_UPDATED_SUCCESS,
        payload,
    };
}

export function supportMatCreatedSuccess(payload) {
    return {
        type: types.SUPPORTMAT_CREATED_SUCCESS,
        payload,
    };
}

export function supportMatFailure(payload) {
    return {
        type: types.SUPPORTMAT_FAILURE,
        payload,
    };
}

export function subscriptionRequest(payload) {
    return {
        type: types.SUBSCRIPTION_REQUEST,
        payload,
    };
}

export function subscriptionUpdatedSuccess(payload) {
    return {
        type: types.SUBSCRIPTION_UPDATED_SUCCESS,
        payload,
    };
}

export function subscriptionCreatedSuccess(payload) {
    return {
        type: types.SUBSCRIPTION_CREATED_SUCCESS,
        payload,
    };
}

export function subscriptionFailure(payload) {
    return {
        type: types.SUBSCRIPTION_FAILURE,
        payload,
    };
}
