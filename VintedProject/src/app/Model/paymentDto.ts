/**
 * OpenAPi Vinted
 * OpenApi documentation for Spring Security
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface PaymentDto {
    id: number | null;
    paymentMethod?: PaymentDto.PaymentMethodEnum | string;
    status?: PaymentDto.StatusEnum;
    total: number;
    userId: number;
    orderId: number | null;
}
export namespace PaymentDto {
    export type PaymentMethodEnum = 'CARD' | 'PAYPAL' | 'MARK';
    export const PaymentMethodEnum = {
        CARD: 'CARD' as PaymentMethodEnum,
        PAYPAL: 'PAYPAL' as PaymentMethodEnum,
        MARK: 'MARK' as PaymentMethodEnum
    };
    export type StatusEnum = 'PENDING' | 'APPROVED' | 'REFUSED';
    export const StatusEnum = {
        PENDING: 'PENDING' as StatusEnum,
        APPROVED: 'APPROVED' as StatusEnum,
        REFUSED: 'REFUSED' as StatusEnum
    };
}
