import React, { memo } from 'react';
import { Row, Col } from "react-bootstrap";
import styles from "./explore-category.module.css";

function ExploreCategory(props: any) {
    return (
        <>
            <Row className={styles["explore-category"]}>
                <Col xs={12}>
                    <div className={styles["explore-category__title"]}>
                        ماذا سوف تتعلم في هذا التخصص؟
                    </div>
                    <div className={styles["explore-category__description"]} dangerouslySetInnerHTML={{ __html: props?.data?.description }}></div>
                </Col>
            </Row>
        </>
    )
}

export default memo(ExploreCategory);
