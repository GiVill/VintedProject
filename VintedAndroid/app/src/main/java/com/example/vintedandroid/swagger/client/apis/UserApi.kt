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
package com.example.vintedandroid.swagger.client.apis

import android.util.Log
import com.example.vintedandroid.swagger.client.infrastructure.ApiClient
import com.example.vintedandroid.swagger.client.infrastructure.ClientError
import com.example.vintedandroid.swagger.client.infrastructure.ClientException
import com.example.vintedandroid.swagger.client.infrastructure.RequestConfig
import com.example.vintedandroid.swagger.client.infrastructure.RequestMethod
import com.example.vintedandroid.swagger.client.infrastructure.ResponseType
import com.example.vintedandroid.swagger.client.infrastructure.ServerError
import com.example.vintedandroid.swagger.client.infrastructure.ServerException
import com.example.vintedandroid.swagger.client.infrastructure.Success
import com.example.vintedandroid.swagger.client.models.UserDto

import com.example.vintedandroid.swagger.client.infrastructure.*

class UserApi(basePath: kotlin.String = "https://192.168.1.90:8010/vintedProject-api") : ApiClient(basePath) {

    /**
     * 
     * 
     * @param body  
     * @return UserDto
     */
    @Suppress("UNCHECKED_CAST")
    fun addUser(body: UserDto): UserDto {
        val localVariableBody: kotlin.Any? = body
        val localVariableConfig = RequestConfig(
                RequestMethod.POST,
                "/v1/admin/users"
        )
        val response = request<UserDto>(
                localVariableConfig, localVariableBody
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as UserDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param userId  
     * @return void
     */
    fun adminDeleteUserById(userId: kotlin.Long): Unit {
        val localVariableConfig = RequestConfig(
                RequestMethod.DELETE,
                "/v1/admin/users/{userId}".replace("{" + "userId" + "}", "$userId")
        )
        val response = request<Any?>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> Unit
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * this is the list of user
     * Get endpoint for user
     * @return kotlin.Array<UserDto>
     */
    @Suppress("UNCHECKED_CAST")
    fun getAll(): kotlin.Array<UserDto> {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/admin/users"
        )
        val response = request<kotlin.Array<UserDto>>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.Array<UserDto>
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param userId  
     * @return UserDto
     */
    @Suppress("UNCHECKED_CAST")
    fun getUserDtoById(userId: kotlin.Long): UserDto {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/users/{userId}".replace("{" + "userId" + "}", "$userId")
        )
        val response = request<UserDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as UserDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param body  
     * @return kotlin.Boolean
     */
    @Suppress("UNCHECKED_CAST")
    fun updateUserPassword(body: kotlin.String): kotlin.Boolean {
        val localVariableBody: kotlin.String = body
        val localVariableConfig = RequestConfig(
                RequestMethod.PUT,
                "/v1/password"
        )
        ConfigureAuthorizationBearer(localVariableConfig)
        val response = request<kotlin.Boolean>(
                localVariableConfig, localVariableBody
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.Boolean
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param userId  
     * @return void
     */
    fun userDeleteUserById(userId: kotlin.Long): Unit {
        val localVariableConfig = RequestConfig(
                RequestMethod.DELETE,
                "/v1/users/{userId}".replace("{" + "userId" + "}", "$userId")
        )
        val response = request<Any?>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> Unit
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
}
