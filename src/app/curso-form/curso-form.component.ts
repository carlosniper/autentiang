import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../service/curso.service';
import { Curso } from '../model/curso/curso';
import { Profesor } from '../model/profesor/profesor';
import { ProfesorService } from '../service/profesor.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent {
	
	curso: Curso;
	profesores: Profesor[];

  constructor( 
		private route: ActivatedRoute,
			private router: Router,
				private cursoService: CursoService,
					private profesorService: ProfesorService){
		this.curso = new Curso();
		this.profesorService.findAll().subscribe(data => {
			this.profesores = data;
		});
	}

	onSubmit() {
		this.cursoService.create(this.curso).subscribe(result => this.goToCursoList());
	}
	
	goToCursoList() {
		this.router.navigate(['/']);
	}
	
}
