import configCnab240 from './cnab/240/settings';
import { IHeaderArquivo, IRemessa } from './cnab/240/interfaces';

import { contentByPosition } from './helpers';
import LinhaParser from './cnab/240/LinhaParser';

export default class BancoRemessaParser {
  private _rows: string[] = [];
  private _numeroBanco: number;
  private _cnab: number;
  private _config: IHeaderArquivo;

	/**
  * Inicia BancoRemessaParser com o conteudo da remessa
  * @param text O texto de conteudo da remessa
  */
   constructor(text: string) {
    this._rows = text.split('\n');
    this._cnab = this._rows[0].length;
    this._config = this._cnab === 240 ? configCnab240.remessa.headerArquivo : configCnab240.remessa.headerArquivo;
    this._numeroBanco = this.getNumeroBanco(this._rows[0], this._config);
  }

	/**
	 * Retorna o numero do banco
   * @param text Conteudo da remessa para encontrar o banco
	 */
	private getNumeroBanco(text: string, config: IHeaderArquivo): number {
    const numeroBanco = contentByPosition(text, config.codigoBanco.pos);

    return parseInt(numeroBanco);
	}

	/**
	 * Retorna as linhas da remessa
   * @param text Conteudo da remessa para encontrar o banco
	 */
	public getLinhas(): LinhaParser[] {
    let linhas: LinhaParser[] = [];

    linhas = this._rows.map(linha => (new LinhaParser(linha)));

    return linhas;
	}
}
