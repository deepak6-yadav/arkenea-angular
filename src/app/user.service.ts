import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userData = new Subject<any>();
  public data: any;
  constructor() { }
}
