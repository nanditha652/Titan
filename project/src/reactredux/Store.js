import { configureStore } from "@reduxjs/toolkit";
import reduxlist from './Cartslice';
import fav from './Favslice'

export const storedlist =  configureStore({
    reducer:{
        cartvalue: reduxlist,
        favoritvalue: fav
    }
})