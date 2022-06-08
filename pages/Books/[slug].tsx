import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { Container } from "react-bootstrap";
import { useRouter } from 'next/router';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';

const BookDetails = dynamic(() => import("modules/Books page/Book details/BookDetails"));
const SimilarBooks = dynamic(() => import("modules/Books page/Similar books/SimilarBooks"));
const TadarabUnlimited = dynamic(() => import("modules/Books page/Tadarab unlimited/TadarabUnlimited"));

export default function Books() {
    const Router = useRouter();
    const [bookDetails, setBookDetails] = useState<any>({});
    const { slug } = Router.query;

    useEffect(() => {
        toggleLoader("show");
    }, []);

    useEffect(() => {
        if (Router.query.slug) {
            axiosInstance
                .get(`ebook/${slug}/?country_code=null`)
                .then(function (response: any) {
                    setBookDetails(response.data.data);
                    FBPixelEventsHandler(response.data.fb_tracking_events, null);
                    toggleLoader("hide");
                })
                .catch(function (error) {
                    toggleLoader("hide");
                    console.log(error);
                });
        }
    }, [Router.query.slug]);

    return (
        <>
            <MetaTagsGenerator
                title={bookDetails?.seo_title}
                description={bookDetails?.seo_metadesc}
                img={bookDetails?.seo_image} />
            <Container fluid="xxl">
                <BookDetails data={bookDetails} />
                <div className="d-none d-sm-flex">
                    <TadarabUnlimited />
                </div>
                <SimilarBooks data={bookDetails}/>
            </Container>
        </>
    )
}
