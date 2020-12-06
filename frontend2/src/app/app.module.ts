import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubirtablaComponent } from './component/subirtabla/subirtabla.component';
import { CompararablaComponent } from './component/compararabla/compararabla.component';
import { VertablaComponent } from './component/vertabla/vertabla.component';
import { AdministrartablaComponent } from './component/administrartabla/administrartabla.component';
import { DescargartablaComponent } from './component/descargartabla/descargartabla.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    SubirtablaComponent,
    CompararablaComponent,
    VertablaComponent,
    AdministrartablaComponent,
    DescargartablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
