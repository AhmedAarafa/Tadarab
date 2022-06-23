/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./category-description.module.css";
import Image from 'next/image';

export default function CategoryDescription(props:any) {

    return (
        <>
        <Row >
            <Col xs={12} className={styles["category-description"]}>
                <div className={styles["category-description__description"]}>
                    <div className={styles["category-description__img"]} style={{backgroundColor : `${(props.data?.color)}`}}>
                      <img loading="lazy"   src={`/images/${props.data?.parent_icon || props.data?.icon}.svg`}
                       alt={props.data?.parent_icon || props.data?.icon} 
                       id={styles[props.data?.parent_icon || props.data?.icon]}/>

                    </div>
                    <div className={styles["category-description__info"]}>
                        <div> تخصص </div>
                        <h1> {props.data?.title} </h1>
                        <div>
                            { props.data?.parent_id == 0 &&
                             <>
                            <span> {props.data?.subcategories_count} </span>
                            مواضيع 
                            -
                            </>
                            }
                            <span> {props.data?.courses_count} </span>
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
