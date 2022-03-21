import { Course } from "./Course";

export interface Trainer{
        id: Number,
        image: String,
        name_en: String,
        name_ar: String,
        title: String,
        designation: String,
        bio: String,
        courses:Course[],
        buyers_count: Number,
        social_link_instagram: String,
        social_link_twitter: String,
        social_link_facebook: String,
        social_link_linkedin: String,
        social_link_youtube: String,
        social_link_snapchat: String
}
