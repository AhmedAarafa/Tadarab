/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState, memo } from 'react';
import styles from "./trainers-list.module.css";
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import Router, { useRouter } from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { AddedToCartIcon, AddedToFavouriteIcon, CartIcon, FavouriteIcon, PlayIcon, LiveIcon, ContainedBellIcon, BellIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

function TrainersList() {
  const [trainersList, setTrainersList] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState("1");

  useEffect(() => {
    toggleLoader("show");

    axiosInstance
      .get(`trainers/?limit=16&page=1`)
      .then(function (response: any) {
        setTrainersList(response?.data);
        FBPixelEventsHandler(response.data.fb_tracking_events, null);
        toggleLoader("hide");

      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });

  }, []);

  const handlePageClick = (pgNo: any) => {
    toggleLoader("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(pgNo);
    axiosInstance
      .get(`trainers/?limit=16&page=${pgNo}`)
      .then(function (response: any) {
        setTrainersList(response?.data);
        toggleLoader("hide");

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Row className={styles["trainers-list-row"]}>

        <Col xs={12} className={styles["trainers-list"]}>
          {trainersList?.data?.map((trainer: any, i: number) => {
            return (
              <Link key={i} href={`/trainer/${trainer?.slug}`}>
                <Card className={styles["trainers-list__cards-carousel__card"]}
                  style={{ backgroundImage: `url("${trainer.image}")` }}
                >
                  <div className={styles["trainers-list__cards-carousel__card__card-body"]}>
                    <div className="text-center">
                      <Link href={`/trainer/${trainer?.slug}`}>

                        <div className={styles["trainers-list__cards-carousel__card__trainer"]}>{trainer.name_ar}</div>
                      </Link>
                      <div className={styles["trainers-list__cards-carousel__card__job-title"]}>{trainer.title}</div>
                      <div className={styles["trainers-list__cards-carousel__card__job-history"]}
                      dangerouslySetInnerHTML={{ __html: trainer.bio}}></div>
                    </div>
                  </div>

                </Card>
              </Link>
            )
          })
          }


        </Col>

        <Col xs={12} className={styles["trainers-list__pagination"]}>

          {!(trainersList?.pagination?.count < 16) && <Pagination>
            <Pagination.Prev
              onClick={() => {
                handlePageClick(trainersList?.pagination?.current - 1)
              }}
              className={`${currentPage == "1" && styles["disabled"]}`} />


            <Pagination.Item
              style={{ display: trainersList?.pagination?.previous ? "" : "none" }}
              active={currentPage == trainersList?.pagination?.previous}
              onClick={() => {
                handlePageClick(trainersList?.pagination?.previous)
              }}>
              {trainersList?.pagination?.previous}
            </Pagination.Item>
            <Pagination.Item
              active={currentPage == trainersList?.pagination?.current}
              onClick={() => {
                handlePageClick(trainersList?.pagination?.current);
              }}>
              {trainersList?.pagination?.current}
            </Pagination.Item>
            <Pagination.Item
              style={{ display: trainersList?.pagination?.next ? "" : "none" }}
              active={currentPage == trainersList?.pagination?.next}
              onClick={() => {
                handlePageClick(trainersList?.pagination?.next)
              }}>
              {trainersList?.pagination?.next}
            </Pagination.Item>


            <Pagination.Next
              onClick={() => {
                handlePageClick(trainersList?.pagination?.current + 1)
              }}
              className={`${currentPage == trainersList?.pagination?.pages && styles["disabled"]}`} />
          </Pagination>}

        </Col>
      </Row>

    </>
  )
}

export default memo(TrainersList);
