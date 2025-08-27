// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Authservice } from '../Authservice/authservice';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//   constructor(private authService: Authservice, private router: Router) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const currentUrl = this.router.url;
//     console.log('current url', currentUrl);

//     const blackListRoutes = ['/login'];

//     if (blackListRoutes.includes(currentUrl)) {
//       return next.handle(req);
//     }

//     const token = this.authService.getToken();
//     if (token) {
//       const cloned = req.clone({
//         setHeaders: { Authorization: `Bearer ${token}` },
//       });
//       return next.handle(cloned);
//     }
//     return next.handle(req);
//   }
// }
