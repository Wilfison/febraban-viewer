import { ISettings } from "./interfaces";

const settings: ISettings = {
  servico: "multipag_titulos_cobranca",
  versao: "02",
  layout: "240",
  remessa: {
    headerArquivo: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
        default: 0
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 0
      },
      exclusivoFebraban01: {
        pos: [
          9,
          17
        ],
        default: ""
      },
      tipoInscricao: {
        pos: [
          18,
          18
        ],
      },
      numeroInscricao: {
        pos: [
          19,
          32
        ],
      },
      codigoConvenio: {
        pos: [
          33,
          52
        ],
      },
      agencia: {
        pos: [
          53,
          57
        ],
      },
      verificadorAgencia: {
        pos: [
          58,
          58
        ],
      },
      conta: {
        pos: [
          59,
          70
        ],
      },
      verificadorConta: {
        pos: [
          71,
          71
        ],
      },
      verificadorAgenciaConta: {
        pos: [
          72,
          72
        ],
        default: ""
      },
      nomeEmpresa: {
        pos: [
          73,
          102
        ],
      },
      nomeBanco: {
        pos: [
          103,
          132
        ],
        default: "BANCO BRADESCO S.A."
      },
      exclusivoFebraban02: {
        pos: [
          133,
          142
        ],
        default: ""
      },
      codigoRemessaRetorno: {
        pos: [
          143,
          143
        ],
      },
      dataGeracao: {
        pos: [
          144,
          151
        ],
      },
      horaGeracao: {
        pos: [
          152,
          157
        ],
      },
      numeroSequencial: {
        pos: [
          158,
          163
        ],
      },
      versaoLayout: {
        pos: [
          164,
          166
        ],
        default: 89
      },
      densidadeGravacao: {
        pos: [
          167,
          171
        ],
        default: 0
      },
      reservadoBanco01: {
        pos: [
          172,
          191
        ],
        default: ""
      },
      reservadoEmpresa01: {
        pos: [
          192,
          211
        ],
        default: ""
      },
      exclusivoFebraban03: {
        pos: [
          212,
          240
        ],
        default: ""
      }
    },
    trailerArquivo: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
        default: "9999"
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 9
      },
      exclusivoFebraban01: {
        pos: [
          9,
          17
        ],
        default: ""
      },
      quantidadeLotes: {
        pos: [
          18,
          23
        ],
      },
      quantidadeRegistros: {
        pos: [
          24,
          29
        ],
      },
      quantidadeContas: {
        pos: [
          30,
          35
        ],
      },
      exclusivoFebraban02: {
        pos: [
          36,
          240
        ],
        default: ""
      }
    },
    headerLote: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 1
      },
      tipoOperacao: {
        pos: [
          9,
          9
        ],
        default: "C"
      },
      tipoServico: {
        pos: [
          10,
          11
        ],
      },
      formaLancamento: {
        pos: [
          12,
          13
        ],
      },
      versaoLayout: {
        pos: [
          14,
          16
        ],
        default: 40
      },
      exclusivoFebraban01: {
        pos: [
          17,
          17
        ],
        default: ""
      },
      tipoInscricao: {
        pos: [
          18,
          18
        ],
      },
      numeroInscricao: {
        pos: [
          19,
          32
        ],
      },
      codigoConvenio: {
        pos: [
          33,
          52
        ],
      },
      agencia: {
        pos: [
          53,
          57
        ],
      },
      verificadorAgencia: {
        pos: [
          58,
          58
        ],
      },
      conta: {
        pos: [
          59,
          70
        ],
      },
      verificadorConta: {
        pos: [
          71,
          71
        ],
      },
      verificadorAgenciaConta: {
        pos: [
          72,
          72
        ],
      },
      nomeEmpresa: {
        pos: [
          73,
          102
        ],
      },
      mensagem01: {
        pos: [
          103,
          142
        ],
        default: ""
      },
      logradouro: {
        pos: [
          143,
          172
        ],
      },
      numero: {
        pos: [
          173,
          177
        ],
      },
      complemento: {
        pos: [
          178,
          192
        ],
      },
      cidade: {
        pos: [
          193,
          212
        ],
      },
      cep: {
        pos: [
          213,
          217
        ],
      },
      sufixoCep: {
        pos: [
          218,
          220
        ],
      },
      siglaUf: {
        pos: [
          221,
          222
        ],
      },
      exclusivoFebraban02: {
        pos: [
          223,
          230
        ],
        default: ""
      },
      ocorrencias: {
        pos: [
          231,
          240
        ],
      }
    },
    trailerLote: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 5
      },
      exclusivoFebraban01: {
        pos: [
          9,
          17
        ],
        default: ""
      },
      quantidadeRegistros: {
        pos: [
          18,
          23
        ],
      },
      somatoriaValores: {
        pos: [
          24,
          41
        ],
      },
      somatoriaQuantidadeMoedas: {
        pos: [
          42,
          59
        ],
      },
      numeroAviso: {
        pos: [
          60,
          65
        ],
      },
      exclusivoFebraban02: {
        pos: [
          66,
          230
        ],
        default: ""
      },
      ocorrencias: {
        pos: [
          231,
          240
        ],
      }
    },
    detalhes: {
      segmentoJ: {
        codigoBanco: {
          pos: [
            1,
            3
          ],
          default: 237
        },
        loteServico: {
          pos: [
            4,
            7
          ],
        },
        tipoRegistro: {
          pos: [
            8,
            8
          ],
          default: 3
        },
        numeroRegistro: {
          pos: [
            9,
            13
          ],
        },
        codigoSegmento: {
          pos: [
            14,
            14
          ],
          default: "J"
        },
        tipoMovimento: {
          pos: [
            15,
            15
          ],
          default: ""
        },
        codigoMovimento: {
          pos: [
            16,
            17
          ],
        },
        codigoBarras: {
          pos: [
            18,
            61
          ],
        },
        nomeCedente: {
          pos: [
            62,
            91
          ],
        },
        dataVencimentoNominal: {
          pos: [
            92,
            99
          ],
        },
        valorTituloNominal: {
          pos: [
            100,
            114
          ],
        },
        valorDescontoAbatimento: {
          pos: [
            115,
            129
          ],
        },
        valorMoraMulta: {
          pos: [
            130,
            144
          ],
        },
        dataPagamento: {
          pos: [
            145,
            152
          ],
        },
        valorPagamento: {
          pos: [
            153,
            167
          ],
        },
        quantidadeMoeda: {
          pos: [
            168,
            182
          ],
        },
        referenciaSacado: {
          pos: [
            183,
            202
          ],
        },
        nossoNumero: {
          pos: [
            203,
            222
          ],
        },
        codigoMoeda: {
          pos: [
            223,
            225
          ],
        },
        exclusivoFebraban01: {
          pos: [
            225,
            230
          ],
          default: ""
        },
        ocorrencias: {
          pos: [
            231,
            240
          ],
        }
      }
    }
  },
  retorno: {
    headerArquivo: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
        default: 0
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 0
      },
      exclusivoFebraban01: {
        pos: [
          9,
          17
        ],
        default: ""
      },
      tipoInscricao: {
        pos: [
          18,
          18
        ],
      },
      numeroInscricao: {
        pos: [
          19,
          32
        ],
      },
      codigoConvenio: {
        pos: [
          33,
          52
        ],
      },
      agencia: {
        pos: [
          53,
          57
        ],
      },
      verificadorAgencia: {
        pos: [
          58,
          58
        ],
      },
      conta: {
        pos: [
          59,
          70
        ],
      },
      verificadorConta: {
        pos: [
          71,
          71
        ],
      },
      verificadorAgenciaConta: {
        pos: [
          72,
          72
        ],
        default: ""
      },
      nomeEmpresa: {
        pos: [
          73,
          102
        ],
      },
      nomeBanco: {
        pos: [
          103,
          132
        ],
        default: "BANCO BRADESCO S.A."
      },
      exclusivoFebraban02: {
        pos: [
          133,
          142
        ],
        default: ""
      },
      codigoRemessaRetorno: {
        pos: [
          143,
          143
        ],
      },
      dataGeracao: {
        pos: [
          144,
          151
        ],
      },
      horaGeracao: {
        pos: [
          152,
          157
        ],
      },
      numeroSequencial: {
        pos: [
          158,
          163
        ],
      },
      versaoLayout: {
        pos: [
          164,
          166
        ],
        default: 89
      },
      densidadeGravacao: {
        pos: [
          167,
          171
        ],
        default: 0
      },
      reservadoBanco01: {
        pos: [
          172,
          191
        ],
        default: ""
      },
      reservadoEmpresa01: {
        pos: [
          192,
          211
        ],
        default: ""
      },
      exclusivoFebraban03: {
        pos: [
          212,
          240
        ],
        default: ""
      }
    },
    trailerArquivo: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
        default: "9999"
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 9
      },
      exclusivoFebraban01: {
        pos: [
          9,
          17
        ],
        default: ""
      },
      quantidadeLotes: {
        pos: [
          18,
          23
        ],
      },
      quantidadeRegistros: {
        pos: [
          24,
          29
        ],
      },
      quantidadeContas: {
        pos: [
          30,
          35
        ],
      },
      exclusivoFebraban02: {
        pos: [
          36,
          240
        ],
        default: ""
      }
    },
    headerLote: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 1
      },
      tipoOperacao: {
        pos: [
          9,
          9
        ],
        default: "C"
      },
      tipoServico: {
        pos: [
          10,
          11
        ],
      },
      formaLancamento: {
        pos: [
          12,
          13
        ],
      },
      versaoLayout: {
        pos: [
          14,
          16
        ],
        default: 40
      },
      exclusivoFebraban01: {
        pos: [
          17,
          17
        ],
        default: ""
      },
      tipoInscricao: {
        pos: [
          18,
          18
        ],
      },
      numeroInscricao: {
        pos: [
          19,
          32
        ],
      },
      codigoConvenio: {
        pos: [
          33,
          52
        ],
      },
      agencia: {
        pos: [
          53,
          57
        ],
      },
      verificadorAgencia: {
        pos: [
          58,
          58
        ],
      },
      conta: {
        pos: [
          59,
          70
        ],
      },
      verificadorConta: {
        pos: [
          71,
          71
        ],
      },
      verificadorAgenciaConta: {
        pos: [
          72,
          72
        ],
      },
      nomeEmpresa: {
        pos: [
          73,
          102
        ],
      },
      mensagem01: {
        pos: [
          103,
          142
        ],
        default: ""
      },
      logradouro: {
        pos: [
          143,
          172
        ],
      },
      numero: {
        pos: [
          173,
          177
        ],
      },
      complemento: {
        pos: [
          178,
          192
        ],
      },
      cidade: {
        pos: [
          193,
          212
        ],
      },
      cep: {
        pos: [
          213,
          217
        ],
      },
      sufixoCep: {
        pos: [
          218,
          220
        ],
      },
      siglaUf: {
        pos: [
          221,
          222
        ],
      },
      exclusivoFebraban02: {
        pos: [
          223,
          230
        ],
        default: ""
      },
      ocorrencias: {
        pos: [
          231,
          240
        ],
      }
    },
    trailerLote: {
      codigoBanco: {
        pos: [
          1,
          3
        ],
        default: 237
      },
      loteServico: {
        pos: [
          4,
          7
        ],
      },
      tipoRegistro: {
        pos: [
          8,
          8
        ],
        default: 5
      },
      exclusivoFebraban01: {
        pos: [
          9,
          17
        ],
        default: ""
      },
      quantidadeRegistros: {
        pos: [
          18,
          23
        ],
      },
      somatoriaValores: {
        pos: [
          24,
          41
        ],
      },
      somatoriaQuantidadeMoedas: {
        pos: [
          42,
          59
        ],
      },
      numeroAviso: {
        pos: [
          60,
          65
        ],
      },
      exclusivoFebraban02: {
        pos: [
          66,
          230
        ],
        default: ""
      },
      ocorrencias: {
        pos: [
          231,
          240
        ],
      }
    },
    detalhes: {
      segmentoJ: {
        codigoBanco: {
          pos: [
            1,
            3
          ],
          default: 237
        },
        loteServico: {
          pos: [
            4,
            7
          ],
        },
        tipoRegistro: {
          pos: [
            8,
            8
          ],
          default: 3
        },
        numeroRegistro: {
          pos: [
            9,
            13
          ],
        },
        codigoSegmento: {
          pos: [
            14,
            14
          ],
          default: "J"
        },
        tipoMovimento: {
          pos: [
            15,
            15
          ],
          default: ""
        },
        codigoMovimento: {
          pos: [
            16,
            17
          ],
        },
        codigoBarras: {
          pos: [
            18,
            61
          ],
        },
        nomeCedente: {
          pos: [
            62,
            91
          ],
        },
        dataVencimentoNominal: {
          pos: [
            92,
            99
          ],
        },
        valorTituloNominal: {
          pos: [
            100,
            114
          ],
        },
        valorDescontoAbatimento: {
          pos: [
            115,
            129
          ],
        },
        valorMoraMulta: {
          pos: [
            130,
            144
          ],
        },
        dataPagamento: {
          pos: [
            145,
            152
          ],
        },
        valorPagamento: {
          pos: [
            153,
            167
          ],
        },
        quantidadeMoeda: {
          pos: [
            168,
            182
          ],
        },
        referenciaSacado: {
          pos: [
            183,
            202
          ],
        },
        nossoNumero: {
          pos: [
            203,
            222
          ],
        },
        codigoMoeda: {
          pos: [
            223,
            225
          ],
        },
        exclusivoFebraban01: {
          pos: [
            225,
            230
          ],
          default: ""
        },
        ocorrencias: {
          pos: [
            231,
            240
          ],
        }
      }
    }
  }
};

export default settings;
