import { lazy } from "react"
import type {  RouteType } from "./types"

const Dashboard=lazy(()=>import("../pages/dashboard"))
const Categories=lazy(()=>import("../pages/categories"))
export const routes:RouteType[]=[
    {
        element:Dashboard,
        path:"/",
        id:1
    },
 
    {
        element:Categories,
        path:"/categories",
        id:2
    },
]