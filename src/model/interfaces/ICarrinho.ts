import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface ICarrinho {

    id: string,
    user: IUser,
    products: IProduct[],
    discountCoupon: string
}