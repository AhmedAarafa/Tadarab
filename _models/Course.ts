import { Category } from "./Category";

export interface Course{
   
    id: Number,
    type: String,
    categories: Category[],
    tags: [],
    title: String,
    image: String,
    description: String,
    description_no_html: String,
    details: String,
    key_points: String[],
    key_features: String[],
    requirements: String[],
    level: Number,
    price: Number,
    discounted_price: Number,
    currency_code: String,
    subscribers_count: Number | null,
    duration: Number,
    trainer: {
        id: Number,
        name_en: String,
        name_ar: String,
        image: String,
        title: String,
        bio: String,
        courses_count: Number,
        buyers_count: Number
    },
    comments_count: Number,
    is_in_favorites: Boolean,
    is_purchased: Boolean,
    is_in_cart: Boolean

}