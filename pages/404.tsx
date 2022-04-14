/* eslint-disable @next/next/link-passhref */
import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <style jsx>{`
                 .page-not-found-col {
                    text-align:center;
                    margin: 8rem 0 0 0;
                }

                .page-not-found-title{
                    font-size: 2rem;
                    font-weight: 800;
                    color: #af151f;
                    margin: 0 0 1.5rem 0;
                }
                .page-not-found-brief{
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #222;
                    margin: 0 0 1.5rem 0;
                }
                .page-not-found-button{
                    box-shadow: none !important;
                    text-transform: none !important;
                    font-size: 0.97rem !important;
                    font-weight: 700 !important;
                    padding: 0.8rem 2rem !important;
                    border-radius: 0.625rem !important;
                    font-family: 'Almarai', sans-serif !important;
                    border: 0 !important;
                    background-color: #af151f !important;
                    border: 0.125rem solid #af151f !important;
                    color:white !important;
                }
                .page-not-found-button:hover,.page-not-found-button:active{
                    box-shadow: none !important;
                        background-color: #9d151e !important;
                        border: 0.125rem solid #9d151e !important;
                }

                @media (max-width:575px){
                        .page-not-found-col {
                    margin: 20rem 0 0 0;
                    }

                    .page-not-found-title{
                        font-size: 5rem;
                        margin: 0 0 3.75rem 0;
                    }
                    .page-not-found-brief{
                        font-size: 2.5rem;
                        margin: 0 0 3.75rem 0;
                    }
                    .page-not-found-button{
                        font-size: 2.425rem !important;
                        padding: 2rem !important;
                        border-radius: 1.56rem !important;
                        border: 0.3rem solid #af151f !important;
                    }
                    .page-not-found-button:hover,.page-not-found-button:active{
                            border: 0.3rem solid #9d151e !important;
                    }
                    }
            `}
            </style>
            <Container fluid="xxl">
                <Row>
                    <Col xs={12} >
                        <div className='page-not-found-col'>
                            <div className='page-not-found-title'>
                                الصفحة غير موجودة
                            </div>
                            <div className='page-not-found-brief'>
                                عذراً ... الصفحة التي تحاول الوصول إليها غير موجودة
                            </div>
                            <Link href='/'>
                                <button className='page-not-found-button'> الصفحة الرئيسية </button>
                            </Link>

                        </div>

                    </Col>
                </Row>
            </Container>

        </>
    )
}
