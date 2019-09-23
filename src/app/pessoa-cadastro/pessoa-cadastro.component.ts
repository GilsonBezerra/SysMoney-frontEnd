import { EstadosService } from './../estados/estados.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  estados = [];

  constructor( private estadosService: EstadosService) { }

  ngOnInit() {
    this.carrergarEstados();
  }

  carrergarEstados() {
    return this.estadosService.listarEstados()
      .subscribe(estados => this.estados = estados.map(e => {
        return { label: e.sigla, value: e.id };
      })
      );
  }

}
