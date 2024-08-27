import { Expose, Type, Transform, plainToClass } from 'class-transformer';
import { PoeType } from '../poe/poe-type';
import { CompanyType } from '../company/company-type';

export class InternTransformer {
    @Expose({name: "_id"})
    public id!: string;

    @Expose()
    public lastname!: string;

    @Expose()
    public firstname!: string;

    @Expose()
    public gender?: string;

    @Expose()
    public emails?: Array<string>;

    @Expose()
    public phone?: string;

    @Expose({name: "job"})
    public occupation?: string;

    @Expose()
    //@Transform(value => value.name)
    public company?: CompanyType;

    @Expose()
    public poe?: PoeType;
name: any;
}