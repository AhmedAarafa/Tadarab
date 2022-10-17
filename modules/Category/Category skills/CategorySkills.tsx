import React , {useEffect, useState }from 'react';
import { Row, Col } from "react-bootstrap";
import styles from "./category-skills.module.css";

export default function CategorySkills(props:any) {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        setTags(props?.data?.category_tags);
    }, [props]);
    
    return (
        <>
        { tags !== undefined && tags !== null && tags.length > 0 &&
            <Row className={styles["category-skills"]}>
                <Col xs={12} className={styles["category-skills__title"]}>مهارات التخصص</Col>
                <Col xs={12} className={styles["category-skills__tag"]}>
                    {(tags?.map((tag: any,i:number) => {
                        return (
                            <div key={i}>{tag}</div>
                        )
                    }))}
                </Col>
            </Row>
        }
        </>
    )
}
