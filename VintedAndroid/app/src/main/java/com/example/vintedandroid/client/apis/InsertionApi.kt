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
package com.example.vintedandroid.client.apis

import com.example.vintedandroid.client.infrastructure.ApiClient
import com.example.vintedandroid.client.infrastructure.ClientError
import com.example.vintedandroid.client.infrastructure.ClientException
import com.example.vintedandroid.client.infrastructure.MultiValueMap
import com.example.vintedandroid.client.infrastructure.RequestConfig
import com.example.vintedandroid.client.infrastructure.RequestMethod
import com.example.vintedandroid.client.infrastructure.ResponseType
import com.example.vintedandroid.client.infrastructure.ServerError
import com.example.vintedandroid.client.infrastructure.ServerException
import com.example.vintedandroid.client.infrastructure.Success
import com.example.vintedandroid.client.models.BasicInsertionDto
import com.example.vintedandroid.client.models.PageBasicInsertionDto

import com.example.vintedandroid.client.infrastructure.*

class InsertionApi(basePath: kotlin.String = "https://192.168.1.90:8010/vintedProject-api") : ApiClient(basePath) {

    /**
     * 
     * 
     * @param body  
     * @return BasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun addInsertion(body: BasicInsertionDto): BasicInsertionDto {
        val localVariableBody: kotlin.Any? = body
        val localVariableConfig = RequestConfig(
                RequestMethod.POST,
                "/v1/insertions"
        )
        val response = request<BasicInsertionDto>(
                localVariableConfig, localVariableBody
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as BasicInsertionDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param page  
     * @return PageBasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun all4(page: kotlin.Int): PageBasicInsertionDto {
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>().apply {
            put("page", listOf(page.toString()))
        }
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions", query = localVariableQuery
        )
        val response = request<PageBasicInsertionDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as PageBasicInsertionDto
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
    fun deleteAllInsertionByUserId(userId: kotlin.Long): Unit {
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>().apply {
            put("UserId", listOf(userId.toString()))
        }
        val localVariableConfig = RequestConfig(
                RequestMethod.DELETE,
                "/v1/insertions/{UserId}", query = localVariableQuery
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
     * 
     * 
     * @param id  
     * @return void
     */
    fun deleteInsertionById(id: kotlin.Long): Unit {
        val localVariableConfig = RequestConfig(
                RequestMethod.DELETE,
                "/v1/insertions/{id}".replace("{" + "id" + "}", "$id")
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
     * 
     * 
     * @param idInsertion  
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun generateCapabilities(idInsertion: kotlin.Long): kotlin.String {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions/token/{idInsertion}".replace("{" + "idInsertion" + "}", "$idInsertion")
        )
        val response = request<kotlin.String>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.String
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param brand  
     * @param page  
     * @return PageBasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun getByBrand(brand: kotlin.String, page: kotlin.Int): PageBasicInsertionDto {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions/brand/{brand}/{page}".replace("{" + "brand" + "}", "$brand").replace("{" + "page" + "}", "$page")
        )
        val response = request<PageBasicInsertionDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as PageBasicInsertionDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param category  
     * @param page  
     * @return PageBasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun getByCategory(category: kotlin.String, page: kotlin.Int): PageBasicInsertionDto {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions/category/{category}/{page}".replace("{" + "category" + "}", "$category").replace("{" + "page" + "}", "$page")
        )
        val response = request<PageBasicInsertionDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as PageBasicInsertionDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param title  
     * @param page  
     * @return PageBasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun getByTitle(title: kotlin.String, page: kotlin.Int): PageBasicInsertionDto {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions/title/{title}/{page}".replace("{" + "title" + "}", "$title").replace("{" + "page" + "}", "$page")
        )
        val response = request<PageBasicInsertionDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as PageBasicInsertionDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param id  
     * @return BasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun getInsertionById(id: kotlin.Long): BasicInsertionDto {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions/{id}".replace("{" + "id" + "}", "$id")
        )
        val response = request<BasicInsertionDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as BasicInsertionDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param idUser  
     * @param page  
     * @return PageBasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun getInsertionByUserId(idUser: kotlin.Long, page: kotlin.Int): PageBasicInsertionDto {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions/user/{idUser}/{page}".replace("{" + "idUser" + "}", "$idUser").replace("{" + "page" + "}", "$page")
        )
        val response = request<PageBasicInsertionDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as PageBasicInsertionDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param token  
     * @return BasicInsertionDto
     */
    @Suppress("UNCHECKED_CAST")
    fun getPrivateInsertion(token: kotlin.String): BasicInsertionDto {
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/v1/insertions/private/{token}".replace("{" + "token" + "}", "$token")
        )
        val response = request<BasicInsertionDto>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as BasicInsertionDto
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * 
     * 
     * @param insertionId  
     * @param title  
     * @param price  
     * @param description  
     * @return kotlin.Boolean
     */
    @Suppress("UNCHECKED_CAST")
    fun modifyInsertionById(insertionId: kotlin.Long, title: kotlin.String, price: kotlin.Float, description: kotlin.String): kotlin.Boolean {
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>().apply {
            put("title", listOf(title.toString()))
            put("price", listOf(price.toString()))
            put("description", listOf(description.toString()))
        }
        val localVariableConfig = RequestConfig(
                RequestMethod.PUT,
                "/v1/insertions/{InsertionId}".replace("{" + "InsertionId" + "}", "$insertionId"), query = localVariableQuery
        )
        val response = request<kotlin.Boolean>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.Boolean
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
}
