import { Category } from "./Category";
import { Trainer } from "./Trainer";

export interface Course{
   
        id: Number,
        type: String,
        categories: Category[],
        tags?: String[],
        title: String,
        image: String,
        description: String,
        description_no_html: String,
        details: String,
        key_points: String[],
        key_features: [
            {
                icon: String,
                text: String
            }
        ],
        requirements: String[],
        level: Number,
        price: Number,
        discounted_price: Number,
        discounted_price_usd: Number,
        currency_code: String,
        subscribers_count?: Number,
        duration: Number,
        trainer: Trainer,
        comments_count: Number,
        is_in_favorites: Boolean,
        is_purchased: Boolean,
        is_in_cart: Boolean
}