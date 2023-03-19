import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { Container } from "react-bootstrap";
import { useRouter } from 'next/router';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import NotFound from "pages/404";
import { NotFoundRoutesHandler } from "modules/_Shared/utils/notFoundRoutesHandler";
import { useSelector } from "react-redux";

const BookDetails = dynamic(() => import("modules/Books page/Book details/BookDetails"));
const SimilarBooks = dynamic(() => import("modules/Books page/Similar books/SimilarBooks"));
const TadarabUnlimited = dynamic(() => import("common/Tadarab unlimited/TadarabUnlimited"));
const CustomSignupPopup = dynamic(() => import("common/Custom signup popup/CustomSignupPopup"));

export default function Books() {
    const [isCustomSignupModalVisible, setIsCustomSignupModalVisible] = useState(false);
    const Router = useRouter();
    const [bookDetails, setBookDetails] = useState<any>({});
    const [isFound, setIsFound] = useState(true);
    const { slug } = Router.query;
    const themeState = useSelector((state: any) => state.themeState.theme);
    const userStatus = useSelector((state: any) => state.userAuthentication);

    useEffect(() => {
        toggleLoader("show");
    }, []);

    useEffect(() => {
        if (Router.query.slug) {
            axiosInstance
                .get(`ebook/${slug}`)
                .then(function (response: any) {
                    setIsFound(NotFoundRoutesHandler(response));
                    setBookDetails(response.data.data);
                    FBPixelEventsHandler(response.data.fb_tracking_events, null);
                    toggleLoader("hide");
                    setTimeout(() => {
                        if (userStatus.isUserAuthenticated == false) {
                            setIsCustomSignupModalVisible(true);
                        }
                    }, 3000);
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
            {
                isFound ?
                    <Container data-theme={themeState} fluid="xxl" style={{ backgroundColor: "var(--tadarab-light-bg)" }}>
                        <BookDetails data={bookDetails} />
                        {/* <div className="d-none d-sm-flex">
                            <TadarabUnlimited />
                        </div> */}
                        <SimilarBooks data={bookDetails} />
                        <CustomSignupPopup setIsCustomSignupModalVisible={setIsCustomSignupModalVisible} isCustomSignupModalVisible={isCustomSignupModalVisible} />

                    </Container>
                    :
                    <NotFound />
            }
        </>
    )
}
