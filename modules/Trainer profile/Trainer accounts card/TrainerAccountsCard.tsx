import React,{useEffect,useState} from "react";
import styles from "./trainer-accounts-card.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { FbIcon,TwitterIcon,InstagramIcon, LinkedinIcon, SnapChatIcon, YoutubeIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";

export default function TrainerAccountsCard() {
    const dispatch = useDispatch();

    const trainerProfileData = useSelector((state: any) => state.trainerProfileData);
    const [trainerProfile, setTrainerProfile] = useState<any>({});
    const userStatus = useSelector((state:any) => state.userAuthentication);

    useEffect(() => {
        setTrainerProfile(trainerProfileData.data || {});
    }, [trainerProfileData]);

    return (
        <div >
        <div className={styles["trainer-accounts-card"]}>
            <div className={styles["trainer-accounts-card__title"]}>
                <div>حسابات المدرب</div>
                <div>تابع المدرب علي السوشيال ميديا</div>
            </div>

            {
             trainerProfileData.data?.social_link_facebook == "" &&
             trainerProfileData.data?.social_link_twitter == "" &&
             trainerProfileData.data?.social_link_instagram == "" &&
             trainerProfileData.data?.social_link_linkedin == "" &&
             trainerProfileData.data?.social_link_snapchat == "" &&
             trainerProfileData.data?.social_link_youtube == "" &&
            <div className={styles["trainer-accounts-card__no-accounts"]}>
                 لا يوجد حسابات  لهذا المدرب
            </div>}
            <div className={styles["trainer-accounts-card__accounts-btns"]}>
                { trainerProfileData.data?.social_link_facebook !== "" 
                &&
                 <Button href={trainerProfileData.data?.social_link_facebook} target="_blank">
                <FbIcon color="#222"/>
                    <span>فيسبوك</span>
                </Button>}

                { trainerProfileData.data?.social_link_twitter !== "" 
                &&  <Button href={trainerProfileData.data?.social_link_twitter} target="_blank">
                <TwitterIcon color="#222"/>
                    <span>تويتر</span>
                </Button>}

                {trainerProfileData.data?.social_link_instagram !== "" 
                &&
                <Button href={trainerProfileData.data?.social_link_instagram} target="_blank">
                <InstagramIcon color="#222"/>
                    <span>انستجرام</span>
                </Button>}

                {trainerProfileData.data?.social_link_linkedin !== "" 
                &&
                 <Button href={trainerProfileData.data?.social_link_linkedin} target="_blank">
                <LinkedinIcon color="#222"/>
                    <span>لينكدان</span>
                </Button>}

                {trainerProfileData.data?.social_link_snapchat !== "" 
                &&
                 <Button href={trainerProfileData.data?.social_link_snapchat} target="_blank">
                <SnapChatIcon color="#222"/>
                    <span>سناب شات</span>
                </Button>}

                {trainerProfileData.data?.social_link_youtube !== "" 
                &&
                 <Button href={trainerProfileData.data?.social_link_youtube} target="_blank">
                <YoutubeIcon color="#222"/>
                    <span>يوتيوب</span>
                </Button>}
              
            </div>

            <div className={styles["trainer-accounts-card__or"]}>
                <span>أو</span>
            </div>

            <div className={styles["trainer-accounts-card__action-btns"]}>
                <Button>اطلب استشارة</Button>
                <Button>اطلب دورة من المدرب</Button>
            </div>
        </div>
    
    
        </div>
      );
}
