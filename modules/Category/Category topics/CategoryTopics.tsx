/* eslint-disable @next/next/link-passhref */
import React from 'react'
import { Row, Col } from "react-bootstrap";
import styles from "./category-topics.module.css";
import Link from 'next/link';

export default function CategoryTopics(props:any) {
    
    function hexToRgbA(hex:string){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            let c:any = hex.substring(1).split('');
            if(c.length == 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.1)';
        }
        throw new Error('Bad Hex');
    }
    
    //hexToRgbA('#fbafff')
    return (
        <>
        <Row className={styles["category-topics"]}>
            <Col xs={12}>
                <div className={styles["category-topics__title"]}>
                المواضيع في {props.data.title}
                </div>

                <div className={styles["category-topics__topics"]}>
                {
                    props.data.subcategories?.map((subcategory:any, i:number)=>{
                    return(
                        <Link key={i} href={`/topic/${subcategory.slug}`}>
                            <div key={i} style={{color:`${props.data.color}` , backgroundColor:`${hexToRgbA(props.data.color)}`}}>{subcategory.title}</div>
                        </Link>
                        )
                })
                }
                </div>

            </Col>
        </Row>
            
        </>
    )
}
