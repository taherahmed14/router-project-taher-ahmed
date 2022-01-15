import { PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "./action";

export const productLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
};

export const productSuccess = (data) => {
    return {
        type: PRODUCTS_SUCCESS,
        payload: data
    }
};

export const productError = () => {
    return {
        type: PRODUCTS_ERROR,
    }
}