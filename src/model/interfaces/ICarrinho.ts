import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface ICarrinho {

    user: IUser,
    products: IProduct[],
    discountCoupon: string
}