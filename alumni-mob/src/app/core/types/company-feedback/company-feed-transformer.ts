import { Expose } from "class-transformer";
import { CompanyCategory } from "./company-feed.type";
import { CompanyRating } from "./company-rating.type";


export class CompanyFeedTransformer {
    @Expose()
    public id?: string;

    @Expose()
    public name!: string;

    @Expose()
    public type!: CompanyCategory;

    @Expose()
    public medianRating!: CompanyRating;

    @Expose()
    public logo?: string;

}