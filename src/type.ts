export type UsersType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};
export type data = {
    data: UsersType
}

// reducer stat
export type State = {
    loading: boolean;
    data: null | UsersType[];
    error: null | string;
}
export type userState = {
    loading: boolean;
    data: null | UserType;
    error: null | string;
}


export type UserType = {
    id: number
}

export type initialStateType = {
    users: {
        loading: boolean,
        data: null | UsersType[],
        error: null | string,
    },
    user: {
        loading: boolean,
        data: null | UsersType,
        error: null | string,
    },
};
//reducer Action
export type Action = { type: 'LOADING' } | { type: 'USER-SUCCESS', data: UserType } | { type: 'USERS-SUCCESS', data: UsersType[] } | { type: 'ERROR', error: string | null }

export type initialAction = { type: 'GET_USERS' }
    | { type: 'GET_USERS_SUCCESS', data: UsersType[] }
    | { type: 'GET_USER' }
    | { type: 'GET_USER_SUCCESS', data: UsersType }
    | { type: 'GET_USERS_ERROR', error: string | null }
    | { type: 'GET_USER_ERROR', error: string | null }


export type asyncAciton = { type: string, data: any, error: string | null }
export type ActionHandler = {
    type: string,
    data?: any,
    error?: string
}