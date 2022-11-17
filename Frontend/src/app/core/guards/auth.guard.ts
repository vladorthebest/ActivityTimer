import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "../services/auth-services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated().pipe(map((response: { userID: number }) => {
            if (response.userID != 0) {
                return true;
            }
            this.router.navigate(['/auth/login']);
            return false;
        }), catchError((error) => {
            this.router.navigate(['/auth/login']);
            return of(false);
        }));
    }
}