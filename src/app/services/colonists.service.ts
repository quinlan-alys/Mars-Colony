import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Colonist, NewColonist } from '../models';

@Injectable()
export default class ColonistService {

  COLONISTS_JSON = "https://red-wdp-api.herokuapp.com/api/mars/colonists";

  constructor(private http: Http) { }

   getColonists(): Observable<NewColonist[]> {
    return this.http.get(this.COLONISTS_JSON)
                    .map((res: Response) => res.json().colonists);

}
 submitColonist(colonist: NewColonist): Observable<Colonist> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    return this.http.post(this.COLONISTS_JSON, { colonist }, { headers})
             .map((res: Response) => res.json().encounter);
  }


}

