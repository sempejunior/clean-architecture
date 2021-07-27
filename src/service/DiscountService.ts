export class DiscountService {


    public applyDiscount(totalProducts: number, coupon: string): number {

        const percentageDiscount = this.getDiscountByCoupon(coupon);
        console.log("percentageDiscount: " + percentageDiscount);
        return this.calculatePercentage(totalProducts, percentageDiscount);
    }

    private calculatePercentage(totalProducts: number, percentage: number): number {

        const totalDiscount = (totalProducts / 100) * percentage;
        return totalProducts - totalDiscount;
    }


    //TODO: This method will find discount in the database
    private getDiscountByCoupon(coupon: string): number {
        if (coupon === "1234") {
            return 10;
        } else if (coupon === "45678") {
            return 20;
        } else {
            return 0;
        }
    }


}