import { useState } from 'react';
const initialState = {
    cart:[]
};

const useInitialState = () =>{
    const [state, setState] = useState(initialState);

    const AddToCart = (payload) => {
        setState({...state,  cart:[...state.cart, payload]}); //los 3 puntos signica, dejeme lo que tienes en este caso en satet y aparte agregame algo
    };
    const removeFromCart = (indexValue) => {
        setState({...state, cart: state.cart.filter((_, index) => index !== indexValue)});
    }
    return {state, AddToCart, removeFromCart};
}

export default useInitialState;