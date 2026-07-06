
import { test as BaseTest } from '@playwright/test';
import { StringLiteral } from 'typescript';
interface TestDataForOrder{
    username: string;
    password: string;
    productname: string;

}

export const customtest=BaseTest.extend<{testDataForOrder: TestDataForOrder}>({
        testDataForOrder : {
            username: "thapa.bipusa@outlook.com",
            password: "Test@practise0",
            productname: "ADIDAS ORIGINAL"
        }
    }
)