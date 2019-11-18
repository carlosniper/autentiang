import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoService } from './service/curso.service';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { ProfesorService } from './service/profesor.service';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    CursoFormComponent,
		JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		FormsModule
  ],
  providers: [
		CursoService,
		ProfesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
