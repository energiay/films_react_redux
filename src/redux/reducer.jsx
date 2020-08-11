
export default function reducer(store, action) {

    if (action.type === 'update') {
        return {
            ...store,
            ...action.payload
        }
    }

    return store;
}
