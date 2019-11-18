import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profesor } from '../model/profesor/profesor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfesorService {
	
	private profesorUrl: string;

  constructor(private http: HttpClient) {
		this.profesorUrl='http://localhost:8080/profesores';
	}
	
	public findAll(): Observable<Profesor[]>{
		return this.http.get<Profesor[]>(this.profesorUrl);
	}
}
