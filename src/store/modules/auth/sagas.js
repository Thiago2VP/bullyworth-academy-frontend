import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload);
        yield put(actions.loginSuccess({ ...response.data }));

        toast.success('You logged in!');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        payload.history.push(payload.prevPath);
    } catch (e) {
        console.log(payload.location);
        toast.error('Invalid user or password.');

        yield put(actions.loginFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
    const { id, name, email, password, type, biography, media, photo } = payload;

    try {
        if (id) {
            if (!password) {
                yield call(axios.put, '/users', {
                    email,
                    name,
                    biography,
                    media,
                    photo,
                });
                toast.success('Account successfull updated!');
                yield put(actions.registerUpdatedSuccess({ email, name, biography, media, photo }));
            } else {
                yield call(axios.put, '/users/password', {
                    password: password || undefined,
                });
                toast.success('Account successfull updated!');
                yield put(actions.registerUpdatedSuccess({ password }));
            }
        } else {
            yield call(axios.post, '/users', {
                email,
                name,
                password,
                type,
            });
            toast.success('Account successfuly created!');
            yield put(actions.registerCreatedSuccess({ email, name, password, type }));
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('You nedd to login again.');
            yield put(actions.loginFailure());
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error));
        } else {
            toast.error('Unknown error');
        }

        yield put(actions.registerFailure());
    }
}

function* courseRequest({ payload }) {
    const { id, name, description, teacher, photo, history } = payload;

    try {
        if (id) {
            yield call(axios.put, '/courses', {
                name,
                description,
                teacher,
                photo,
            });
            toast.success('Course successfull updated!');
            yield put(actions.courseUpdatedSuccess({ name, description, teacher, photo }));
        } else {
            yield call(axios.post, '/courses', {
                name,
                description,
                teacher,
                photo,
            });
            toast.success('Course successfuly created!');
            yield put(actions.courseCreatedSuccess({ name, description, teacher, photo }));
            history.push('/');
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('You nedd to login again.');
            yield put(actions.loginFailure());
            return history.push('/login');
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error));
        } else {
            toast.error('Unknown error');
        }

        yield put(actions.courseFailure());
    }
}

function* lessonRequest({ payload }) {
    const { id, name, description, duration, order, course, content, history } = payload;

    try {
        if (id) {
            yield call(axios.put, '/lessons', {
                name,
                description,
                duration,
                order,
                course,
                content,
            });
            toast.success('Lesson successfull updated!');
            yield put(actions.lessonUpdatedSuccess({ name, description, duration, order, course, content }));
        } else {
            yield call(axios.post, '/lessons', {
                name,
                description,
                duration,
                order,
                course,
                content,
            });
            toast.success('Lesson successfuly created!');
            yield put(actions.lessonCreatedSuccess({ name, description, duration, order, course, content }));
            history.push('/');
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('You nedd to login again.');
            yield put(actions.loginFailure());
            return history.push('/login');
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error));
        } else {
            toast.error('Unknown error');
        }

        yield put(actions.lessonFailure());
    }
}

function* supportMatRequest({ payload }) {
    const { id, name, file, lesson, history } = payload;

    try {
        if (id) {
            yield call(axios.put, '/supportmaterials', {
                name,
                file,
                lesson,
            });
            toast.success('Support Material successfull updated!');
            yield put(actions.supportMatUpdatedSuccess({ name, file, lesson }));
        } else {
            yield call(axios.post, '/supportmaterials', {
                name,
                file,
                lesson,
            });
            toast.success('Support Material created!');
            yield put(actions.supportMatCreatedSuccess({ name, file, lesson }));
            history.push('/');
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('You nedd to login again.');
            yield put(actions.loginFailure());
            return history.push('/login');
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error));
        } else {
            toast.error('Unknown error');
        }

        yield put(actions.supportMatFailure());
    }
}

function* subscriptionRequest({ payload }) {
    const { id, student, course, history } = payload;

    try {
        if (id) {
            yield call(axios.put, '/subscriptions', {
                student,
                course,
            });
            toast.success('Subscription successfull updated!');
            yield put(actions.subscriptionUpdatedSuccess({ student, course }));
        } else {
            yield call(axios.post, '/subscriptions', {
                student,
                course,
            });
            toast.success('Subscription created!');
            yield put(actions.subscriptionCreatedSuccess({ student, course }));
            history.push('/');
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (status === 401) {
            toast.error('You nedd to login again.');
            yield put(actions.loginFailure());
            return history.push('/login');
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error));
        } else {
            toast.error('Unknown error');
        }

        yield put(actions.subscriptionFailure());
    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
    takeLatest(types.COURSE_REQUEST, courseRequest),
    takeLatest(types.LESSON_REQUEST, lessonRequest),
    takeLatest(types.SUPPORTMAT_REQUEST, supportMatRequest),
    takeLatest(types.SUBSCRIPTION_REQUEST, subscriptionRequest),
]);
