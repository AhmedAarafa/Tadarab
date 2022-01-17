import React from 'react'
import Navbar from "common/components/Navbar/Navbar";
import SubCategoryDescription from "modules/Category/SubCategory description/SubCategoryDescription";
import TrainingCourses from "modules/Category/Training courses/TrainingCourses";

export default function SubCategory() {
    return (
        <>
         <Navbar />
         <SubCategoryDescription />
         <TrainingCourses />
            
        </>
    )
}
