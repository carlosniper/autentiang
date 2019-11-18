import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../model/curso/curso';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursoService {
	
	private cursosUrl: string;
	private createCursoUrl: string;

  constructor(private http: HttpClient) {
		this.cursosUrl = 'http://localhost:8080/cursos';
		this.createCursoUrl = 'http://localhost:8080/curso';
	}
	
	public findAll(): Observable<Curso[]> {
		return this.http.get<Curso[]>(this.cursosUrl);
	}
	
	public create(curso: Curso){
		return this.http.post<Curso>(this.createCursoUrl, curso);
	}
}
