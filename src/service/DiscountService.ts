export class DiscountService {


    public applyDiscount(totalProducts: number, coupon: string): number {

        const discount = this.getDiscountByCoupon(coupon);
        return this.calculatePercentage(totalProducts, discount);
    }

    private calculatePercentage(totalProducts: number, percentage: number): number {
        return (totalProducts / 100) * percentage;
    }


    //TODO: This method will find discount in the database
    private getDiscountByCoupon(coupon: string): number {
        if (coupon === "1234") {
            return 10;
        } else if (coupon === "45678") {
            return 20;
        }
    }


}