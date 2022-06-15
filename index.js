import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

server.get("/holydays", (request, response) => {
    response.send(holidays)
})

server.get("is-today-holiday", (request, response) => {
    response.send(isHolyday);
})

const hoje = new Date().toLocaleDateString();

function convertDate(date) {
    const pieces = date.split("/");
    let newDate = (`${pieces[1]}/${pieces[0]}/${pieces[2]}`);
    return newDate;
}

function checkHolyday() { 
    for (let i = 0; i > holidays.length; i++) {

        const holydayDate = convertDate(holidays[i]);
        const holydayName = holidays[i].name;

        if (holydayDate == hoje) {
            return `Sim, hoje é ${holydayName}`;
        } else {
            return `Não hoje não é feriado`;
        }
    }
}

const isHolyday = checkHolyday();
server.listen(4000);