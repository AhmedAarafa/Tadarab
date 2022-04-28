/* eslint-disable @next/next/no-img-element */
import React, { useEffect,useState }  from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./sub-category-description.module.css";
import Image from 'next/image';

export default function SubCategoryDescription(props:any) {
    console.log('props.subcategories', props?.data);
    const [subcategory, setSubcategory] = useState<any>([])

    useEffect(() => {
        //console.log(props.data.courses);      
        setSubcategory(props.data.subcategories?.filter((obj:any) => {

            return obj.slug === props.data.slug
          }))
              
        console.log("subcategory",subcategory);          

      }, [props]);


    return (
        <>
        <Row >
            <Col xs={12} className={styles["category-description"]}>
                <div className={styles["category-description__description"]}>
                    <div className={styles["category-description__img"]}>
                    <Image src={`/images/${props?.data?.parent_icon}.svg`} alt={props?.data?.parent_icon} id={styles[props?.data?.parent_icon]}
                    />

                    </div>
                    <div className={styles["category-description__info"]}>
                        <div> موضوع </div>
                        <div>
                        {subcategory !== undefined ? subcategory[0]?.title : "" }
                            <span> من تخصص الفنون </span>
                        </div>
                        <div>
                            <span> 48 </span>
                            دورة
                        </div>
                    </div>
                </div>
                <p className={styles["category-description__brief"]} dangerouslySetInnerHTML={{__html: props.data?.description}}></p>
            </Col>
        </Row>
            
        </>
    )
}
