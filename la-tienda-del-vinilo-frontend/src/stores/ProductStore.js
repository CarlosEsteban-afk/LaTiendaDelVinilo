import { defineStore } from "pinia";

import data from "@/data/data";


export const useProductStore = defineStore("ProductStore",
    {
        state: () => {
            return{
                data,       //data: data
            }
        }

    },
    //action

    //getters



);
