const moment = require('moment');


const festivos = [
    {
        fecha: '2014-06-23T05:00:00.000Z'
    },
    {
        fecha: '2014-06-24T05:00:00.000Z'
    },
    {
        fecha: '2014-06-25T05:00:00.000Z'
    },
    {
        fecha: '2014-06-26T05:00:00.000Z'
    },
    {
        fecha: '2014-06-27T05:00:00.000Z'
    },
    {
        fecha: '2014-08-07T05:00:00.000Z'
    }
];

const format1 = 'YYYY-MM-DD HH:mm:ss';
const format2 = 'YYYY-MM-DD';

function esFestivo(fecha)  {


    let futureMonth = moment(fecha);
    let esFestivo = true;
    let dayName = '';


    do {

        console.log(`        
        *************************************************************+
        `)

        const festivo = festivos.find(x => {
            const fecha = futureMonth.format(format2);
            const festv = moment(x.fecha).format(format2);
            return fecha  === festv;
        });

        dayName =  futureMonth.format('dddd');

        console.log('llego festivo ' + JSON.stringify(festivo));
        console.log('llego dia ' + dayName);

        if(dayName === 'Saturday') {
            console.log('se le sumaron dos dias');
            futureMonth = futureMonth.add(2, 'd');
        } else if (dayName === 'Sunday') {
            console.log('se le sumaron un dia');
            futureMonth = futureMonth.add(1, 'd');
        }

        if(festivo) {
            futureMonth = futureMonth.add(1, 'd');
        } else {
            esFestivo = false;
        }

        dayName =  futureMonth.format('dddd');

        console.log('finaliza festivo ' + JSON.stringify(festivo));
        console.log('finaliza dia ' + dayName);

        console.log(`        
        *************************************************************+
        `)

    } while (esFestivo || (dayName === 'Sunday' || dayName === 'Sunday'));

    return futureMonth;
}

console.log(esFestivo('2014-06-23T05:00:00.000Z'));
