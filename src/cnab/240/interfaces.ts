export interface ItemDefaultOptions {
  pos: Array<number>;
  default?: any;
}

export interface IHeaderArquivo {
  codigoBanco: ItemDefaultOptions;
  loteServico?: ItemDefaultOptions;
  tipoRegistro?: ItemDefaultOptions;
  exclusivoFebraban01?: ItemDefaultOptions;
  tipoInscricao?: ItemDefaultOptions;
  numeroInscricao?: ItemDefaultOptions;
  codigoConvenio?: ItemDefaultOptions;
  agencia?: ItemDefaultOptions;
  verificadorAgencia?: ItemDefaultOptions;
  conta?: ItemDefaultOptions;
  verificadorConta?: ItemDefaultOptions;
  verificadorAgenciaConta?: ItemDefaultOptions;
  nomeEmpresa?: ItemDefaultOptions;
  nomeBanco?: ItemDefaultOptions;
  exclusivoFebraban02?: ItemDefaultOptions;
  codigoRemessaRetorno?: ItemDefaultOptions;
  dataGeracao?: ItemDefaultOptions;
  horaGeracao?: ItemDefaultOptions;
  numeroSequencial?: ItemDefaultOptions;
  versaoLayout?: ItemDefaultOptions;
  densidadeGravacao?: ItemDefaultOptions;
  reservadoBanco01?: ItemDefaultOptions;
  reservadoEmpresa01?: ItemDefaultOptions;
  exclusivoFebraban03?: ItemDefaultOptions;
}

interface IHeaderLote extends IHeaderArquivo {
  logradouro: ItemDefaultOptions;
  numero: ItemDefaultOptions;
  complemento: ItemDefaultOptions;
  cidade: ItemDefaultOptions;
  cep: ItemDefaultOptions;
  sufixoCep: ItemDefaultOptions;
  siglaUf: ItemDefaultOptions;
  ocorrencias: ItemDefaultOptions;
  mensagem01: ItemDefaultOptions;
  tipoOperacao: ItemDefaultOptions;
  tipoServico: ItemDefaultOptions;
  formaLancamento: ItemDefaultOptions;
}

interface IRemessaTrailerArquivo extends IHeaderArquivo {
  quantidadeLotes: ItemDefaultOptions;
  quantidadeRegistros: ItemDefaultOptions;
  quantidadeContas: ItemDefaultOptions;
  exclusivoFebraban02: ItemDefaultOptions;
}

interface IRemessaTrailerLote {
  codigoBanco: ItemDefaultOptions;
  loteServico: ItemDefaultOptions;
  tipoRegistro: ItemDefaultOptions;
  exclusivoFebraban01: ItemDefaultOptions;
  quantidadeRegistros: ItemDefaultOptions;
  somatoriaValores: ItemDefaultOptions;
  somatoriaQuantidadeMoedas: ItemDefaultOptions;
  numeroAviso: ItemDefaultOptions;
  exclusivoFebraban02: ItemDefaultOptions;
  ocorrencias: ItemDefaultOptions;
}

interface IRemessaDetalhes {
  segmentoJ: {
    codigoBanco: ItemDefaultOptions;
    loteServico: ItemDefaultOptions;
    tipoRegistro: ItemDefaultOptions;
    numeroRegistro: ItemDefaultOptions;
    codigoSegmento: ItemDefaultOptions;
    tipoMovimento: ItemDefaultOptions;
    codigoMovimento: ItemDefaultOptions;
    codigoBarras: ItemDefaultOptions;
    nomeCedente: ItemDefaultOptions;
    dataVencimentoNominal: ItemDefaultOptions;
    valorTituloNominal: ItemDefaultOptions;
    valorDescontoAbatimento: ItemDefaultOptions;
    valorMoraMulta: ItemDefaultOptions;
    dataPagamento: ItemDefaultOptions;
    valorPagamento: ItemDefaultOptions;
    quantidadeMoeda: ItemDefaultOptions;
    referenciaSacado: ItemDefaultOptions;
    nossoNumero: ItemDefaultOptions;
    codigoMoeda: ItemDefaultOptions;
    exclusivoFebraban01: ItemDefaultOptions;
    ocorrencias: ItemDefaultOptions;
  }
}

export interface IRemessa {
  [key: string]: any;
  headerArquivo: IHeaderArquivo,
  headerLote?: IHeaderLote,
  trailerArquivo?: IRemessaTrailerArquivo,
  trailerLote?: IRemessaTrailerLote,
  detalhes?: IRemessaDetalhes,
}

export interface ISettings {
  servico: string,
  versao: string,
  layout: string,
  remessa: IRemessa,
  retorno: object
}


export interface ILinhaGenerica {
  [key: string]: any;
  codigoBanco?: string;
  loteServico?: string;
  tipoRegistro?: string;
  exclusivoFebraban01?: string;
  tipoInscricao?: string;
  numeroInscricao?: string;
  codigoConvenio?: string;
  agencia?: string;
  verificadorAgencia?: string;
  conta?: string;
  verificadorConta?: string;
  verificadorAgenciaConta?: string;
  nomeEmpresa?: string;
  nomeBanco?: string;
  exclusivoFebraban02?: string;
  codigoRemessaRetorno?: string;
  dataGeracao?: string;
  horaGeracao?: string;
  numeroSequencial?: string;
  versaoLayout?: string;
  densidadeGravacao?: string;
  reservadoBanco01?: string;
  reservadoEmpresa01?: string;
  exclusivoFebraban03?: string;
  quantidadeLotes?: string;
  quantidadeRegistros?: string;
  quantidadeContas?: string;
  tipoOperacao?: string;
  tipoServico?: string;
  formaLancamento?: string;
  mensagem01?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  cidade?: string;
  cep?: string;
  sufixoCep?: string;
  siglaUf?: string;
  ocorrencias?: string;
  somatoriaValores?: string;
  somatoriaQuantidadeMoedas?: string;
  numeroAviso?: string;
  numeroRegistro?: string;
  codigoSegmento?: string;
  tipoMovimento?: string;
  codigoMovimento?: string;
  codigoBarras?: string;
  nomeCedente?: string;
  dataVencimentoNominal?: string;
  valorTituloNominal?: string;
  valorDescontoAbatimento?: string;
  valorMoraMulta?: string;
  dataPagamento?: string;
  valorPagamento?: string;
  quantidadeMoeda?: string;
  referenciaSacado?: string;
  nossoNumero?: string;
  codigoMoeda?: string;
}
