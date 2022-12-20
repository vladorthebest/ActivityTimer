import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor (private cookieService: CookieService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            withCredentials: true,
            headers: req.headers.set('X-CSRFToken', this.cookieService.get('csrftoken'))
        });

        return next.handle(req);
    }
}
