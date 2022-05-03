import { ActionHandler, initialStateType } from "./type";

export default function ceateAyncDispatcher(type: 'GET_USERS' | 'GET_USER', promisefn: (...rest: any) => any) {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    async function actionHandler(dispatch: React.Dispatch<ActionHandler>, ...rest: any[]) {
        try {
            const data = await promisefn(...rest);
            dispatch({
                type: SUCCESS,
                data
            });
        } catch (e:any) {
            dispatch({
                type: ERROR,
                error: e
            })
        }
    }
    return actionHandler;
}
export const initialAsyncState = {
    loading: false,
    data: null,
    error: null
}
const loadingState = {
    loading: true,
    data: null,
    error: null,
};

const success = (data: any) => ({
    loading: false,
    data,
    error: null,
}); // 객체를 반환할 때는 괄호로 감싸야 됨

const error = (e: string | null) => ({
    loading: false,
    data: null,
    error: e,
});

export function createAsyncHandler(type: 'GET_USERS' | 'GET_USER', key: string | number) {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;
    function handler(state: initialStateType, action: any) {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: success(action.data)
                };
            case ERROR:
                return {
                    ...state,
                    [key]: error(action.error)
                }
            default:
                return state;
        }
    }

    return handler;
}