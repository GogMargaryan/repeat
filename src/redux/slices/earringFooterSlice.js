import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    customerServices: [
        {
            id: 1,
            text: "Contact Us",
        },
        {
            id: 2,
            text: "Track your Order",
        },
        {
            id: 3,
            text: "Shipping & Returns",
        },
        {
            id: 4,
            text: "Frequently Asked Questions",
        },
        {
            id: 5,
            text: "Schedule an appointment",
        },

    ],

    aboutUs: [
        {
            id: 1,
            text: "Origins"
        },
        {
            id: 2,
            text: "Our Purpose"
        },
        {
            id: 3,
            text: "Careers"
        },
        {
            id: 4,
            text: "Sustainability"
        },
        {
            id: 5,
            text: "Giving Back"
        },
    ],

    materialCare: [
        {
            id: 1,
            text: "Jewelry Repair"
        },
        {
            id: 2,
            text: "Ring Sizing"
        },
        {
            id: 3,
            text: "Metal Allergy Resources"
        },
        {
            id: 4,
            text: "Styling Tips"
        }
    ],

    location: [
        {
            id: 1,
            text: "Chicago, IL"
        },
        {
            id: 2,
            text: "San Francisco, CA"
        },
        {
            id: 3,
            text: "New York, NY"
        },
        {
            id: 4,
            text: "Seattle, WA"
        },
    ]
}


const earringFooterSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {

    }
});

export default earringFooterSlice.reducer;