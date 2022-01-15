import { PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "./action";

const init = { loading: false, productDetails: [], error: false};

export const reducer = (state = init, {type, payload}) => {
    switch(type) {
        case PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetails: payload,
            }

        case PRODUCTS_ERROR:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}