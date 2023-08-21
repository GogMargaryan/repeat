import { createSlice } from "@reduxjs/toolkit";
import Diamond from "../../assets/images/diamond.svg";
import Mini from "../../assets/images/mini.svg";
import Dangling from "../../assets/images/dangling.svg";
import Star from "../../assets/images/star.svg";
import Spherical from "../../assets/images/spherical.svg";
import Leaf from "../../assets/images/leaf.svg";
import Chain from "../../assets/images/chain.svg";
import Chained from "../../assets/images/chained.svg";

const initialState = {
    earrings: [
        {
            id: 1,
            popularity: 1,
            img: Diamond,
            type: "DIAMOND STUDS",
            price: "$200.00",
            gemstone: 1.03,
        },
        {
            id: 2,
            popularity: 2,
            img: Mini,
            type: "MINI HOOPS",
            price: "$90.00",
            gemstone: 1.07,
        },
        {
            id: 3,
            popularity: 13,
            img: Dangling,
            type: "DANGLING LEAVES",
            price: "$60.00",
            gemstone: 0.03,
        },
        {
            id: 4,
            popularity: 45,
            img: Star,
            type: "STAR BUNDLE STUDS",
            price: "$100.00",
            gemstone: 9.03,
        },
        {
            id: 5,
            popularity: 5,
            img: Spherical,
            type: "SPHERICAL DROPS",
            price: "$150.00",
            gemstone: 1.3,
        },
        {
            id: 6,
            popularity: 21,
            img: Leaf,
            type: "LEAF STUDS",
            price: "$40.00",
            gemstone: 6.03,
        },
        {
            id: 7,
            popularity: 15,
            img: Chain,
            type: "CHAIN DROPS",
            price: "$40.00",
            gemstone: 1,
        },
        {
            id: 8,
            popularity: 8,
            img: Chained,
            type: "CHAINED STUDS",
            price: "$100.00",
            gemstone: 0.03,
        }
    ]
}

const earringsSlice = createSlice({
    name: "earrings",
    initialState,
    reducers: {
        sortedEarrings: ((state, { payload }) => {

            state.earrings = state.earrings.sort((a, b) => {
                if (a[payload.type] > b[payload.type]) {
                    return 1
                } else if (a[payload.type] < b[payload.type]) {
                    return -1
                } else {
                    return 0
                }
            })
        })
    }
});

export const { sortedEarrings } = earringsSlice.actions;
export default earringsSlice.reducer;