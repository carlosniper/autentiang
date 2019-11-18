import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso/curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
	
	items = [];
	pageOfItems: Array<any>;
	pageSize = 3;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
		this.pageSize = 3;
		this.cursoService.findAll().subscribe(data => {
			this.items = data.filter( c => c.activo);
		});
  }
	
	onChangePage(pageOfItems: Array<any>) {
		this.pageOfItems = pageOfItems;
		
	}

}
