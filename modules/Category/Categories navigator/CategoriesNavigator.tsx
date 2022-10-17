/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import { Dropdown } from 'react-bootstrap';
import Router, { useRouter } from "next/router";
import styles from "./categories-navigator.module.css";
import { Row, Col, Button } from "react-bootstrap";

export default function CategoriesNavigator(props: any) {
    const [category, setCategory] = useState<any>("");
    const [categoriesList, setCategoriesList] = useState([]);
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        setCategoriesList(props?.data?.categoriesList);
        setCategory(props?.data?.data?.title);
    }, [props]);

    return (
        <>
            <Row className={styles["categories-navigator"]}>
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        {category}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {categoriesList?.map((cat: any, i: number) => {
                            return (
                                <Dropdown.Item key={i} onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}topic/${cat?.slug}`) }}>{cat?.title}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
        </>
    )
}
