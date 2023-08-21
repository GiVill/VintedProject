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

import { ServiceError } from '../model/serviceError';
import { UserDto } from '../model/userDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {CookiesService} from "./cookies.service";


@Injectable()
export class UserService {

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
    public addUser(body: UserDto, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public addUser(body: UserDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public addUser(body: UserDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public addUser(body: UserDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addUser.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<UserDto>('post',`${this.basePath}/v1/users`,
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
     * this is the list of user
     * Get endpoint for user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public all(observe?: 'body', reportProgress?: boolean): Observable<Array<UserDto>>;
    public all(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UserDto>>>;
    public all(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UserDto>>>;
    public all(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<UserDto>>('get',`${this.basePath}/v1/users`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUserById(idUser: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUserById(idUser: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUserById(idUser: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUserById(idUser: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idUser === null || idUser === undefined) {
            throw new Error('Required parameter idUser was null or undefined when calling deleteUserById.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/users/${encodeURIComponent(String(idUser))}`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getById(idUser: number, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public getById(idUser: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public getById(idUser: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public getById(idUser: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idUser === null || idUser === undefined) {
            throw new Error('Required parameter idUser was null or undefined when calling getById.');
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

        return this.httpClient.request<UserDto>('get',`${this.basePath}/v1/users/${encodeURIComponent(String(idUser))}`,
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
     * @param idUser
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUserPassword(body: string, idUser: number, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public updateUserPassword(body: string, idUser: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public updateUserPassword(body: string, idUser: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public updateUserPassword(body: string, idUser: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateUserPassword.');
        }

        if (idUser === null || idUser === undefined) {
            throw new Error('Required parameter idUser was null or undefined when calling updateUserPassword.');
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

        return this.httpClient.request<boolean>('put',`${this.basePath}/v1/password/${encodeURIComponent(String(idUser))}`,
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
