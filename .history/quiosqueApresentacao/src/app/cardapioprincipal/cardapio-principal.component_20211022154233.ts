import { CardapioPrincipalService } from './cardapio-principal.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean;
  telefone: number = 0;
  codigo: number = 0;
  codigoGerado: number = 0;
  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;
  element5: HTMLElement;
  element6: HTMLElement;
  element7: HTMLElement;
  element8: HTMLElement;

  constructor(private cardapioPrincipalService: CardapioPrincipalService) {
    this.buttonDisabled = false;
    this.telefone = 0;


  }


  ngOnInit(): void {

    if (environment.telefone > 0 && environment.codigo > 0) {
      this.telefone = environment.telefone;
      this.codigo = environment.codigo;
      this.updateClassDisabled();
    }
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;

    this.element1 = document.getElementById('desabilitado1') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;
    this.element3 = document.getElementById('desabilitado3') as HTMLElement;
    this.element4 = document.getElementById('desabilitado4') as HTMLElement;
    this.element5 = document.getElementById('desabilitado5') as HTMLElement;
    this.element6 = document.getElementById('desabilitado6') as HTMLElement;
    this.element7 = document.getElementById('desabilitado7') as HTMLElement;
    this.element8 = document.getElementById('desabilitado8') as HTMLElement;

    this.element1.removeAttribute('disabled');
    this.element2.removeAttribute('disabled');
    this.element3.removeAttribute('disabled');
    this.element4.removeAttribute('disabled');
    this.element5.removeAttribute('disabled');
    this.element6.removeAttribute('disabled');
    this.element7.removeAttribute('disabled');
    this.element8.removeAttribute('disabled');
  }

  validarTelefone(): void {

    if (this.telefone > 0) {
      environment.telefone = this.telefone;
      console.log('validar tel');
      this.enviarCodigo();
    }

  }

  validarCodigo(): void {

    if (this.codigo > 0) {
      environment.codigo = this.codigo;
      // tslint:disable-next-line:semicolon
      this.updateClassDisabled();
    }

  }

  enviarCodigo(): void {
    console.log('enviando codigo');
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    this.codigoGerado = this.getRandomInt( 1000, 9999)  ;
    console.log('codigo gerado' + this.codigoGerado);

    this.cardapioPrincipalService.enviarCodigo(this.telefone.toString(), this.codigoGerado.toString());
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
