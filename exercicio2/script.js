const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
// a)
console.log('Qual o nome do primeiro ator/atriz? ',filme.elenco[0]);
// b)
console.log('Qual o nome do último ator/atriz? ',filme.elenco[3]);
// c)
console.log('Qual o array com todas as transmissões de hoje? ',filme.transmissoesHoje);
// d)
console.log('Qual o horário de transmissão do filme no Canal Brasil? ',filme.transmissoesHoje[1].horario);