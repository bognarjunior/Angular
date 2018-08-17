import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private n1: string;
  private n2: string;
  private resultado: number;
  private operacao: string;

  constructor(
    private calculadoraService: CalculadoraService
  ) { }

  ngOnInit() {
    this.limpar();
  }

  limpar(): void {
    this.n1 = '0';
    this.n2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(n: string): void {
    if(this.operacao === null) {
      this.n1 = this.concatenarNumero(this.n1, n);
    } else {
      this.n2 = this.concatenarNumero(this.n2, n);
    }
  }

  concatenarNumero(nAtual: string, nConcat: string): string {
    if (nAtual === '0' || nAtual === null) {
      nAtual = '';
    }

    if (nConcat === '.' && nAtual === '0') {
      return '0.';
    }

    if (nConcat === '.' && nAtual.indexOf('.') > -1 ) {
      return nAtual;
    }
    return nAtual + nConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if(this.n2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.operacao
      );

      this.n1 = this.resultado.toString();
      this.n2 = null;
      this.resultado = null;
      this.operacao = operacao;
    }
  }

  calcular(): void {
    if (this.n2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.n1),
      parseFloat(this.n2),
      this.operacao
    );
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.n2 !== null) {
      return this.n2;
    }

    return this.n1;
  } 
}
