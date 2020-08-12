// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

// Função 1
const globalArray = ['HTML', 'CSS', 'JS', 'Git', 'GitHUb']

const transformString = parameterString => {
  return `Trybe ${parameterString} aqui!`
}

console.log(transformString('bebeto'));


// Função 2
function buildSkillsPhrase (paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} aqui!

    Tudo bem?`
  )

  let result = `${fun1(paramOne)}
  Minhas cinco principais habilidades são:`

  globalArray.forEach((skill, index) =>
  result = `${result} - ${skill}`)
  result = `${result}
  #goTrybe`

  return result
}

console.log(buildSkillsPhrase("Keila"))