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
package com.example.vintedandroid.client.models


/**
 * 
 * @param id 
 * @param nickName 
 * @param firstName 
 * @param lastName 
 * @param imageName 
 * @param email 
 * @param birthDate 
 * @param gender 
 * @param addressStreet 
 * @param addressNumber 
 * @param addressCity 
 * @param addressCap 
 * @param addressState 
 * @param addressRegion 
 */
data class UserDto (

    val id: Long? = null,
    val nickName: kotlin.String,
    val firstName: kotlin.String,
    val lastName: kotlin.String? = null,
    val imageName: kotlin.String? = null,
    val email: kotlin.String? = null,
    val birthDate: kotlin.String? = null,
    val gender: Gender? = null,
    val addressStreet: kotlin.String? = null,
    val addressNumber: kotlin.Int? = null,
    val addressCity: kotlin.String? = null,
    val addressCap: kotlin.Int? = null,
    val addressState: kotlin.String? = null,
    val addressRegion: kotlin.String? = null
) {
    /**
    * 
    * Values: MALE,FEMALE,OTHER
    */
    enum class Gender(val value: kotlin.String){
        MALE("MALE"),
        FEMALE("FEMALE"),
        OTHER("OTHER");
    }
}