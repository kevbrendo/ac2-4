import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CalcularJurosSimplesComponent } from './calcular-juros-simples/calcular-juros-simples.component';
import { ExemploDiretivaComponent } from './exemplo-diretiva/exemplo-diretiva.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { ListaCompraClienteComponent } from './cliente/lista-compra-cliente/lista-compra-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReativeComponent } from './form-reative/form-reative.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'calcular-juros', component: CalcularJurosSimplesComponent },
  { path: 'diretivas', component: ExemploDiretivaComponent },
  { path: 'tarefa', component: TarefaComponent },
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      { path: 'lista-cliente', component: ListaClienteComponent },
      { path: 'lista-compra', component: ListaCompraClienteComponent },
      { path: 'editar-cliente/:id', component: EditarClienteComponent },
    ],
  },
  { path: 'form-template', component: FormTemplateDrivenComponent },
  { path: 'form-reactive', component: FormReativeComponent },
  { path: 'usuarios', component: UsuariosComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
