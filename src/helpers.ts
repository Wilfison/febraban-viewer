
/**
  * Encontra o conteudo em uma string pela posicao
  * @param text String onde será feito a busca
  * @param positions Array indicando posição inicial e final da busca: ex: [0, 5]
  */
export function contentByPosition(text: string, positions: Array<number>): string {
  let formatedString = ` ${text} `.replace(/(\r\n|\n|\r)/gm, "");

  return formatedString.substring(positions[0], positions[1] + 1);
}
