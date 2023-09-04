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

import { ImagesUserBody } from '../model/imagesUserBody';
import { InsertionInsertionIdBody } from '../model/insertionInsertionIdBody';
import { ServiceError } from '../model/serviceError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {CookiesService} from "./cookies.service";


@Injectable()
export class ImageService {

    protected basePath = 'https://localhost:8010/vintedProject-api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, private CookiesService: CookiesService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public adminDeleteImage(userId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public adminDeleteImage(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public adminDeleteImage(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public adminDeleteImage(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling adminDeleteImage.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/admin/images/user/${encodeURIComponent(String(userId))}`,
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
    public adminDeleteImageInsertion(insertionId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public adminDeleteImageInsertion(insertionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public adminDeleteImageInsertion(insertionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public adminDeleteImageInsertion(insertionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (insertionId === null || insertionId === undefined) {
            throw new Error('Required parameter insertionId was null or undefined when calling adminDeleteImageInsertion.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/admin/images/insertion/${encodeURIComponent(String(insertionId))}`,
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
     * @param imagePath
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getImageById(imagePath: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getImageById(imagePath: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getImageById(imagePath: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getImageById(imagePath: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (imagePath === null || imagePath === undefined) {
            throw new Error('Required parameter imagePath was null or undefined when calling getImageById.');
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

        return this.httpClient.request<Blob>('get',`${this.basePath}/v1/images/${encodeURIComponent(String(imagePath))}`,
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
     * @param insertionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public insertInsertionImage(body: InsertionInsertionIdBody, insertionId: number, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public insertInsertionImage(body: InsertionInsertionIdBody, insertionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public insertInsertionImage(body: InsertionInsertionIdBody, insertionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public insertInsertionImage(body: InsertionInsertionIdBody, insertionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling insertInsertionImage.');
        }

        if (insertionId === null || insertionId === undefined) {
            throw new Error('Required parameter insertionId was null or undefined when calling insertInsertionImage.');
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

        return this.httpClient.request<boolean>('post',`${this.basePath}/v1/images/insertion/${encodeURIComponent(String(insertionId))}`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public insertUserImage(body: File, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public insertUserImage(body: File, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public insertUserImage(body: File, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public insertUserImage(body: File, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling insertUserImage.');
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

        return this.httpClient.request<boolean>('post',`${this.basePath}/v1/images/user`,
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
     * @param userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userDeleteImage(userId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public userDeleteImage(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public userDeleteImage(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public userDeleteImage(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling userDeleteImage.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/images/user/${encodeURIComponent(String(userId))}`,
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
    public userImageInsertion(insertionId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public userImageInsertion(insertionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public userImageInsertion(insertionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public userImageInsertion(insertionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (insertionId === null || insertionId === undefined) {
            throw new Error('Required parameter insertionId was null or undefined when calling userImageInsertion.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/images/insertion/${encodeURIComponent(String(insertionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
