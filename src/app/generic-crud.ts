import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { retry } from "rxjs/operators";

export class CrudService {

    //Rest Api
    endpoint = 'https://www.googleapis.com/coffees/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';
    
    constructor(private httpClient: HttpClient) { }
    
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json'
      })
    }
    
    getAll<T>(apiMethod: string): Observable<T> {
    
    let callPoint = this.endpoint.concat('/', apiMethod);
    
    return this.httpClient.get<T>(callPoint)
      .pipe(
        retry(1)
      )
    }
}