import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { CacheService } from '../services/cache.service';
 import { TimerService } from '../services/timer.service';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const _cache = inject(CacheService);
   const _timer = inject(TimerService);

   _timer.startTimer();
    
   let difTime = _timer.getTime();
   if (difTime < 0) {
     _timer.resetTimer();
     _cache.clearCacheWithUrl(req.url);
   }

  if (req.method === "GET") {
    let cache = _cache.get(req.url);

    if (cache) {
      return of(cache);
    }

    return next(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          _cache.put(req.url, event);
        }
      })
    );
  } else {
    return next(req);
  }
};
