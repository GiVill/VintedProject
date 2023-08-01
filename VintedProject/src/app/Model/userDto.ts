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

export interface UserDto {
    id?: number;
    //nickname?:string;
    firstName: string;
    lastName: string;
    imageName?: string;
    email?: string;
    addressStreet?: string;
    addressNumber?: number;
    addressCity?: string;
    addressCap?: number;
    addressState?: string;
    addressRegion?: string;
}
