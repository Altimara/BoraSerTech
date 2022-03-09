const { DateTime } = require('luxon');
const hoje = DateTime.now();
console.log (`Hoje é dia: ${hoje.toLocaleString(DateTime.DATE_SHORT)}`);


// 1: Criar e imprimir o dia de ontem.
const ontem = (hoje.plus({day:-1}));
console.log (`1) Ontém foi dia: ${ontem.toLocaleString(DateTime.DATE_SHORT)}`);


// 2: Criar o dia 5 do mês de Julho deste ano às 15h usando o método fromObject.
const d5jul22 = (DateTime.fromObject({day:5, month:7, year:2022, hour:15}));
console.log(`2) ${d5jul22.toLocaleString(DateTime.DATETIME_HUGE)}`);

// 3: Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980
const Natal1980 = (DateTime.fromObject({day:24, month:12, year:1980},{zone:'Europe/Berlin'}));
const menos15dias = (Natal1980.plus({day:-15}));
console.log (`3) No ano de 1980 o Natal foi numa: ${Natal1980.toLocaleString({weekday: 'long'})}`)
console.log (`15 dias antes do Natel de 1980 em alemão era: ${menos15dias.setLocale ('de-de').toLocaleString(DateTime.DATETIME_HUGE)}`);
