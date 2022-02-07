import BancoRemessaParser from './BancoRemessaParser';
import LinhaParser from './cnab/240/LinhaParser';

/**
 * Transforma Remessa em uma listagem facil de ler
 */
export default class RemessaParser {
  private _text: string;
  private _bancoParser: BancoRemessaParser;

  /**
  * Inicializa a RemessaParser com o conteudo do arquivo
  * @param text O conteudo do arquivo
  */
  constructor(text: string) {
    this._text = this.ensureEndOfRecord(text);
    this._bancoParser = new BancoRemessaParser(this._text);
  }

  /**
 * Garante que o texto fornecido termine com uma nova linha
 * @param text O conteudo do arquivo
 */
	private ensureEndOfRecord(text: string): string {
		if (!this.isNewLine(text[text.length - 1])) {
			text += '\r\n';
		}

		return text;
	}

  /**
	 * Determinar se o caractere fornecido parece ser um caractere de nova linha
	 * @param char O caractere a ser verificado
	 */
	private isNewLine(char: string): boolean {
		return char === '\r' || char === '\n';
	}

  public getLinhas(): LinhaParser[] {
    const linhas: LinhaParser[] = this._bancoParser.getLinhas();

    return linhas;
  }
}
