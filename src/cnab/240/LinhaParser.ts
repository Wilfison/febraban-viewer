import { contentByPosition } from "../../helpers";

import { ILinhaGenerica, ISettings } from "./interfaces";
import configCnab240 from "./settings";

export default class LinhaParser {
  private _linhaRaw: string;
  private _linhaTipo: string;
  private _linhaData: ILinhaGenerica;

  constructor(text: string) {
    this._linhaRaw = text;
    this._linhaTipo = contentByPosition(text, [ 8, 8 ]);

    this._linhaData = this.parseLinha(this._linhaTipo);
  }

  private parseLinha(linhaTipo: string): ILinhaGenerica{
    let linhaData: ILinhaGenerica = {};
    
    switch (linhaTipo) {
      case '0':
        linhaData = this.linhaToJson(configCnab240, 'headerArquivo');
      case '1':
        linhaData = this.linhaToJson(configCnab240, 'headerLote');
        // case '2':
        // case '3':
        //   linhaData = this.linhaToJson(configCnab240, 'detalhes');
      case '5':
        linhaData = this.linhaToJson(configCnab240, 'trailerLote');
        case '9':
          linhaData = this.linhaToJson(configCnab240, 'trailerArquivo');
      default:
        break;
    }

    return linhaData;
  }

  private linhaToJson(config: ISettings, tipoRegistro: string): ILinhaGenerica {
    let linhaData: ILinhaGenerica = {};
    let headerEntries = Object.entries(config.remessa[tipoRegistro]);

    headerEntries.forEach((data) => {
      let [key, value]: [string, any] = data;
      
      linhaData[key] = contentByPosition(this._linhaRaw, value.pos);
    });

    return linhaData;
  }

  public getLinha(): ILinhaGenerica {
    return this._linhaData;
  }

  public getTableRow(): string {
    if(!this._linhaData['codigoBanco']) {
      return '';
    }

    let tableRow = '';

    Object.entries(this._linhaData).forEach(([key, value]) => {
      tableRow = `${tableRow}| ${value} `;
    });

    return `${tableRow}|\n`;
  }
}
