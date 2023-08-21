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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { BasicInsertionDto } from '../model/basicInsertionDto';
import { PageBasicInsertionDto } from '../model/pageBasicInsertionDto';
import { ServiceError } from '../model/serviceError';
import { V1InsertionsBody } from '../model/v1InsertionsBody';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {CookiesService} from "./cookies.service";


@Injectable()
export class InsertionService {

    protected basePath = 'https://localhost:8010/vintedProject-api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, private CookiesService : CookiesService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addInsertion(body?: V1InsertionsBody, observe?: 'body', reportProgress?: boolean): Observable<BasicInsertionDto>;
    public addInsertion(body?: V1InsertionsBody, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BasicInsertionDto>>;
    public addInsertion(body?: V1InsertionsBody, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BasicInsertionDto>>;
    public addInsertion(body?: V1InsertionsBody, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<BasicInsertionDto>('post',`${this.basePath}/v1/insertions`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public all4(page: number, observe?: 'body', reportProgress?: boolean): Observable<PageBasicInsertionDto>;
    public all4(page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageBasicInsertionDto>>;
    public all4(page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageBasicInsertionDto>>;
    public all4(page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling all4.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }

        let headers = this.defaultHeaders;

        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageBasicInsertionDto>('get',`${this.basePath}/v1/insertions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAllInsertionByUserId(userId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteAllInsertionByUserId(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteAllInsertionByUserId(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteAllInsertionByUserId(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteAllInsertionByUserId.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/insertions/${encodeURIComponent(String(userId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param insertionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteInsertionById(insertionId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteInsertionById(insertionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteInsertionById(insertionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteInsertionById(insertionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (insertionId === null || insertionId === undefined) {
            throw new Error('Required parameter insertionId was null or undefined when calling deleteInsertionById.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/insertions/${encodeURIComponent(String(insertionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param insertionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteInsertionForAdmin(insertionId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteInsertionForAdmin(insertionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteInsertionForAdmin(insertionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteInsertionForAdmin(insertionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (insertionId === null || insertionId === undefined) {
            throw new Error('Required parameter insertionId was null or undefined when calling deleteInsertionForAdmin.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/insertions/admin/${encodeURIComponent(String(insertionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param idInsertion
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public generateCapabilities(idInsertion: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public generateCapabilities(idInsertion: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public generateCapabilities(idInsertion: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public generateCapabilities(idInsertion: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idInsertion === null || idInsertion === undefined) {
            throw new Error('Required parameter idInsertion was null or undefined when calling generateCapabilities.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('get',`${this.basePath}/v1/insertions/token/${encodeURIComponent(String(idInsertion))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param brand
     * @param page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByBrand(brand: string, page: number, observe?: 'body', reportProgress?: boolean): Observable<PageBasicInsertionDto>;
    public getByBrand(brand: string, page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageBasicInsertionDto>>;
    public getByBrand(brand: string, page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageBasicInsertionDto>>;
    public getByBrand(brand: string, page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (brand === null || brand === undefined) {
            throw new Error('Required parameter brand was null or undefined when calling getByBrand.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getByBrand.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageBasicInsertionDto>('get',`${this.basePath}/v1/insertions/brand/${encodeURIComponent(String(brand))}/${encodeURIComponent(String(page))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param category
     * @param page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCategory(category: string, page: number, observe?: 'body', reportProgress?: boolean): Observable<PageBasicInsertionDto>;
    public getByCategory(category: string, page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageBasicInsertionDto>>;
    public getByCategory(category: string, page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageBasicInsertionDto>>;
    public getByCategory(category: string, page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling getByCategory.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getByCategory.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageBasicInsertionDto>('get',`${this.basePath}/v1/insertions/category/${encodeURIComponent(String(category))}/${encodeURIComponent(String(page))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param title
     * @param page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByTitle(title: string, page: number, observe?: 'body', reportProgress?: boolean): Observable<PageBasicInsertionDto>;
    public getByTitle(title: string, page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageBasicInsertionDto>>;
    public getByTitle(title: string, page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageBasicInsertionDto>>;
    public getByTitle(title: string, page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (title === null || title === undefined) {
            throw new Error('Required parameter title was null or undefined when calling getByTitle.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getByTitle.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageBasicInsertionDto>('get',`${this.basePath}/v1/insertions/title/${encodeURIComponent(String(title))}/${encodeURIComponent(String(page))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param insertionId
     * @param observe? set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress?? flag to report request and response progress.
     */
    public getInsertionById(insertionId: number | undefined, observe?: "body", reportProgress?: boolean): Observable<BasicInsertionDto>;
    public getInsertionById(insertionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BasicInsertionDto>>;
    public getInsertionById(insertionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BasicInsertionDto>>;
    public getInsertionById(insertionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (insertionId === null || insertionId === undefined) {
            throw new Error('Required parameter insertionId was null or undefined when calling getInsertionById.');
        }

        let headers = this.defaultHeaders;

        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<BasicInsertionDto>('get',`${this.basePath}/v1/insertions/${encodeURIComponent(String(insertionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param userEmail
     * @param page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInsertionByUserEmail(userEmail: string, page: number, observe?: 'body', reportProgress?: boolean): Observable<PageBasicInsertionDto>;
    public getInsertionByUserEmail(userEmail: string, page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageBasicInsertionDto>>;
    public getInsertionByUserEmail(userEmail: string, page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageBasicInsertionDto>>;
    public getInsertionByUserEmail(userEmail: string, page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userEmail === null || userEmail === undefined) {
            throw new Error('Required parameter userEmail was null or undefined when calling getInsertionByUserEmail.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getInsertionByUserEmail.');
        }

        let headers = this.defaultHeaders;

        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageBasicInsertionDto>('get',`${this.basePath}/v1/insertions/user/email/${encodeURIComponent(String(userEmail))}/${encodeURIComponent(String(page))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param idUser
     * @param page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInsertionByUserId(idUser: number, page: number, observe?: 'body', reportProgress?: boolean): Observable<PageBasicInsertionDto>;
    public getInsertionByUserId(idUser: number, page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageBasicInsertionDto>>;
    public getInsertionByUserId(idUser: number, page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageBasicInsertionDto>>;
    public getInsertionByUserId(idUser: number, page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idUser === null || idUser === undefined) {
            throw new Error('Required parameter idUser was null or undefined when calling getInsertionByUserId.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getInsertionByUserId.');
        }

        let headers = this.defaultHeaders;

        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageBasicInsertionDto>('get',`${this.basePath}/v1/insertions/user/id/${encodeURIComponent(String(idUser))}/${encodeURIComponent(String(page))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPrivateInsertion(token: string, observe?: 'body', reportProgress?: boolean): Observable<BasicInsertionDto>;
    public getPrivateInsertion(token: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BasicInsertionDto>>;
    public getPrivateInsertion(token: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BasicInsertionDto>>;
    public getPrivateInsertion(token: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling getPrivateInsertion.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<BasicInsertionDto>('get',`${this.basePath}/v1/insertions/private/${encodeURIComponent(String(token))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modifyInsertion(body: BasicInsertionDto, observe?: 'body', reportProgress?: boolean): Observable<BasicInsertionDto>;
    public modifyInsertion(body: BasicInsertionDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BasicInsertionDto>>;
    public modifyInsertion(body: BasicInsertionDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BasicInsertionDto>>;
    public modifyInsertion(body: BasicInsertionDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling modifyInsertion.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<BasicInsertionDto>('put',`${this.basePath}/v1/insertions/`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param body
     * @param insertionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public modifyInsertionById(body: BasicInsertionDto, insertionId: number, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public modifyInsertionById(body: BasicInsertionDto, insertionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public modifyInsertionById(body: BasicInsertionDto, insertionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public modifyInsertionById(body: BasicInsertionDto, insertionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling modifyInsertionById.');
        }

        if (insertionId === null || insertionId === undefined) {
            throw new Error('Required parameter insertionId was null or undefined when calling modifyInsertionById.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.CookiesService.getTokent()) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.CookiesService.getTokent()
                : this.CookiesService.getTokent();
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('put',`${this.basePath}/v1/insertions/admin/${encodeURIComponent(String(insertionId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
