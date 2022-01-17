import React from 'react'
import Navbar from "common/components/Navbar/Navbar";
import CategoryDescription from "modules/Category/Category description/CategoryDescription";
import CategoryCourses from "modules/Category/Category courses/CategoryCourses";
import CategoryTopics from "modules/Category/Category topics/CategoryTopics";
import CategoryTrainers from "modules/Category/Category trainers/CategoryTrainers";
import TrainingCourses from "modules/Category/Training courses/TrainingCourses";

export default function Category() {
    return (
        <>
         <Navbar />
         <CategoryDescription />
         <CategoryCourses />
         <CategoryTopics />
         <CategoryTrainers />
         <TrainingCourses />
            
        </>
    )
}
