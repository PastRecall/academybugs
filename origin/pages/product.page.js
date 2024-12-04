import { allure } from "allure-playwright";
import { BasePage } from "./base.page"; 

class ProductPage extends BasePage{
    constructor(page) {
        super(page);
        this.commentButton = this.page.getByRole('button', { name: 'Post Comment' });
        this.manufacturerDetails = this.page.locator('.ec_details_manufacturer').getByRole('link');
        this.filterByPriceDetails = this.page.getByRole('link', { name: '$15.00 - $19.99 (1)' });
    }
    async addComment() {
        await allure.step("Оставить комментарий", async () => {
        await this.commentButton.click();
        });
    }
    async openManufacturer() {
        await allure.step("Перейти по ссылке производителя товара", async () => {
        await this.manufacturerDetails.click();
        });
    }
    async filterByPrice() {
        await allure.step("Выбрать ценовой диапазон товаров ", async () => {
        await this.filterByPriceDetails.click();
        });
    }
}
export {ProductPage}; 