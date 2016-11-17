import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NewColonist } from '../models';

@Injectable()
export default class ColonistService {

  COLONISTS_JSON = "https://red-wdp-api.herokuapp.com/api/mars/colonists";

  constructor(private http: Http) { }

   getColonists(): Observable<NewColonist[]> {
    return this.http.get(this.COLONISTS_JSON)
                    .map((res: Response) => res.json().colonists);

}

}