// Motorcycle data
const WHATSAPP_NUMBER = '5586981732667';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const STORAGE_BASE = 'https://vendedor.site/storage/products/';

const motorcycles = [
    {
        id: 1,
        name: 'POP 110i ES +10%',
        category: 'Street',
        image: 'NSdHtu7pgJjKN6448sUCZJvGvjosdfiwZWkTYc3p.png',
        credit: 'R$ 11.971,00',
        creditValue: 11971,
        description: 'A POP 110i ES é a scooter que une economia e praticidade no seu dia a dia.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '109,1 cc',
            'Potência máxima': '8,0 cv a 7.500 rpm',
            'Torque máximo': '0,89 kgf.m a 5.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': 'Semiautomática, 4 marchas',
            'Capacidade tanque': '4,2 litros',
            'Freio dianteiro': 'Tambor',
            'Freio traseiro': 'Tambor',
            'Partida': 'Elétrica/Pedal'
        },
        plans: [
            { months: 80, value: 'R$ 199,34' },
            { months: 60, value: 'R$ 258,08' },
            { months: 48, value: 'R$ 315,93' },
            { months: 36, value: 'R$ 412,46' },
            { months: 24, value: 'R$ 605,88' },
            { months: 18, value: 'R$ 796,51' },
            { months: 12, value: 'R$ 1.171,78' }
        ]
    },
    {
        id: 2,
        name: 'BIZ 125 ES',
        category: 'Street',
        image: 'KMLe8p4C27UACaWkYhZhAn4aBRwI4au4zD91SoIb.png',
        credit: 'R$ 18.106,00',
        creditValue: 18106,
        description: 'A BIZ 125 ES é ideal para quem busca praticidade e economia com estilo.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '124,9 cc',
            'Potência máxima': '9,2 cv a 7.500 rpm',
            'Torque máximo': '1,05 kgf.m a 5.000 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': 'Semiautomática, 4 marchas',
            'Capacidade tanque': '5,2 litros',
            'Freio dianteiro': 'Tambor',
            'Freio traseiro': 'Tambor',
            'Partida': 'Elétrica/Pedal'
        },
        plans: [
            { months: 80, value: 'R$ 301,42' },
            { months: 60, value: 'R$ 390,22' },
            { months: 48, value: 'R$ 477,85' },
            { months: 36, value: 'R$ 623,87' },
            { months: 24, value: 'R$ 916,58' },
            { months: 18, value: 'R$ 1.204,83' },
            { months: 12, value: 'R$ 1.773,56' }
        ]
    },
    {
        id: 3,
        name: 'ELITE 125',
        category: 'Street',
        image: 'KAJvNxIHJx8Bmzr9T2eY6VTmAmKTkkS45DdfO6pH.png',
        credit: 'R$ 15.656,00',
        creditValue: 15656,
        description: 'O Elite 125 oferece design moderno e eficiência para a cidade.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '124,9 cc',
            'Potência máxima': '8,5 cv a 8.000 rpm',
            'Torque máximo': '1,00 kgf.m a 5.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': 'Automática CVT',
            'Capacidade tanque': '5,5 litros',
            'Freio dianteiro': 'CBS combinado',
            'Freio traseiro': 'CBS combinado',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 260,61' },
            { months: 60, value: 'R$ 337,36' },
            { months: 48, value: 'R$ 413,11' },
            { months: 36, value: 'R$ 539,32' },
            { months: 24, value: 'R$ 792,38' },
            { months: 18, value: 'R$ 1.041,55' },
            { months: 12, value: 'R$ 1.533,14' }
        ]
    },
    {
        id: 4,
        name: 'BIZ 125 EX',
        category: 'Street',
        image: 'rOLnG3mP6hSeYpVy0bfYyvwaKBn9S6IKoPH8cGzr.png',
        credit: 'R$ 19.601,00',
        creditValue: 19601,
        description: 'A BIZ 125 EX é a versão mais completa, com freio a disco e painel digital.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '124,9 cc',
            'Potência máxima': '9,2 cv a 7.500 rpm',
            'Torque máximo': '1,05 kgf.m a 5.000 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': 'Semiautomática, 4 marchas',
            'Capacidade tanque': '5,2 litros',
            'Freio dianteiro': 'Disco',
            'Freio traseiro': 'Tambor',
            'Partida': 'Elétrica/Pedal'
        },
        plans: [
            { months: 80, value: 'R$ 326,31' },
            { months: 60, value: 'R$ 422,46' },
            { months: 48, value: 'R$ 517,33' },
            { months: 36, value: 'R$ 675,37' },
            { months: 24, value: 'R$ 992,23' },
            { months: 18, value: 'R$ 1.304,27' },
            { months: 12, value: 'R$ 1.919,91' }
        ]
    },
    {
        id: 5,
        name: 'CG 160 START',
        category: 'Street',
        image: 'x9l2upZZgCVE01p8QsgfNSLfn1eZWrexcNbgm1fD.png',
        credit: 'R$ 19.030,00',
        creditValue: 19030,
        description: 'A CG 160 Start é a porta de entrada para o mundo das motos Honda 160cc.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '162,7 cc',
            'Potência máxima': '14,9 cv a 9.000 rpm',
            'Torque máximo': '1,49 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '5 marchas',
            'Capacidade tanque': '12 litros',
            'Freio dianteiro': 'Disco',
            'Freio traseiro': 'Tambor',
            'Partida': 'Elétrica/Pedal'
        },
        plans: [
            { months: 80, value: 'R$ 316,80' },
            { months: 60, value: 'R$ 410,15' },
            { months: 48, value: 'R$ 502,23' },
            { months: 36, value: 'R$ 655,63' },
            { months: 24, value: 'R$ 963,23' },
            { months: 18, value: 'R$ 1.266,11' },
            { months: 12, value: 'R$ 1.863,71' }
        ]
    },
    {
        id: 6,
        name: 'PCX CBS',
        category: 'Street',
        image: 'Sflm7trmjrMP7hw3aGKpUBSl7yrPoDTc9ApXZUhy.png',
        credit: 'R$ 22.868,00',
        creditValue: 22868,
        description: 'O PCX CBS é o scooter premium da Honda com design sofisticado.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '156,9 cc',
            'Potência máxima': '15,6 cv a 8.500 rpm',
            'Torque máximo': '1,50 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': 'Automática CVT',
            'Capacidade tanque': '8,1 litros',
            'Freio dianteiro': 'Disco CBS',
            'Freio traseiro': 'Disco CBS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 380,68' },
            { months: 60, value: 'R$ 492,89' },
            { months: 48, value: 'R$ 603,53' },
            { months: 36, value: 'R$ 787,80' },
            { months: 24, value: 'R$ 1.157,44' },
            { months: 18, value: 'R$ 1.521,45' },
            { months: 12, value: 'R$ 2.239,88' }
        ]
    },
    {
        id: 7,
        name: 'CG 160 FAN',
        category: 'Street',
        image: 'xuS073jzyK7OZtudAAnJ9IZlPVOBLQ7b4mH3fqvm.png',
        credit: 'R$ 20.448,00',
        creditValue: 20448,
        description: 'A CG 160 Fan é a moto mais vendida do Brasil com ótimo custo-benefício.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '162,7 cc',
            'Potência máxima': '14,9 cv a 9.000 rpm',
            'Torque máximo': '1,49 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '5 marchas',
            'Capacidade tanque': '12 litros',
            'Freio dianteiro': 'Disco',
            'Freio traseiro': 'Tambor',
            'Partida': 'Elétrica/Pedal'
        },
        plans: [
            { months: 80, value: 'R$ 340,42' },
            { months: 60, value: 'R$ 440,72' },
            { months: 48, value: 'R$ 539,70' },
            { months: 36, value: 'R$ 704,55' },
            { months: 24, value: 'R$ 1.035,09' },
            { months: 18, value: 'R$ 1.360,51' },
            { months: 12, value: 'R$ 2.002,69' }
        ]
    },
    {
        id: 8,
        name: 'CG 160 TITAN',
        category: 'Street',
        image: 'aB5v5NIO7Gf2TlJ154bucmWYMdvZTToBoJP4PIMr.png',
        credit: 'R$ 22.015,00',
        creditValue: 22015,
        description: 'A CG 160 Titan é a versão top de linha da família CG, com painel digital e farol em LED.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '162,7 cc',
            'Potência máxima': '14,9 cv a 9.000 rpm',
            'Torque máximo': '1,49 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '5 marchas',
            'Capacidade tanque': '12 litros',
            'Freio dianteiro': 'Disco',
            'Freio traseiro': 'Tambor com CBS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 366,49' },
            { months: 60, value: 'R$ 474,52' },
            { months: 48, value: 'R$ 581,04' },
            { months: 36, value: 'R$ 758,42' },
            { months: 24, value: 'R$ 1.114,28' },
            { months: 18, value: 'R$ 1.464,74' },
            { months: 12, value: 'R$ 2.156,17' }
        ]
    },
    {
        id: 9,
        name: 'PCX ABS',
        category: 'Street',
        image: '2KGp7k8xxAAxJfbA61qDD2KR1Nbl9BUledXVH070.png',
        credit: 'R$ 24.580,00',
        creditValue: 24580,
        description: 'O PCX ABS é a versão premium do scooter Honda com freios ABS.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '156,9 cc',
            'Potência máxima': '15,6 cv a 8.500 rpm',
            'Torque máximo': '1,50 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': 'Automática CVT',
            'Capacidade tanque': '8,1 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Disco ABS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 409,17' },
            { months: 60, value: 'R$ 529,77' },
            { months: 48, value: 'R$ 648,70' },
            { months: 36, value: 'R$ 846,76' },
            { months: 24, value: 'R$ 1.243,95' },
            { months: 18, value: 'R$ 1.635,16' },
            { months: 12, value: 'R$ 2.407,21' }
        ]
    },
    {
        id: 10,
        name: 'NXR 160 BROS CBS',
        category: 'Adventure',
        image: 'uPwpsnV0yPGYPUS7qUbIr2eq2CV2uOkySdSnpeH9.png',
        credit: 'R$ 25.074,00',
        creditValue: 25074,
        description: 'A NXR 160 Bros CBS é a trail mais versátil da Honda para estradas e caminhos.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '162,7 cc',
            'Potência máxima': '14,9 cv a 9.000 rpm',
            'Torque máximo': '1,49 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '5 marchas',
            'Capacidade tanque': '12 litros',
            'Freio dianteiro': 'Disco',
            'Freio traseiro': 'Tambor com CBS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 417,39' },
            { months: 60, value: 'R$ 540,41' },
            { months: 48, value: 'R$ 661,72' },
            { months: 36, value: 'R$ 863,81' },
            { months: 24, value: 'R$ 1.269,00' },
            { months: 18, value: 'R$ 1.668,05' },
            { months: 12, value: 'R$ 2.455,63' }
        ]
    },
    {
        id: 11,
        name: 'NXR 160 BROS ABS',
        category: 'Adventure',
        image: '7DGCKtLMUZ81i5u7gSkSeKSnD41NvSvPHjzxkstD.png',
        credit: 'R$ 25.074,00',
        creditValue: 25074,
        description: 'A NXR 160 Bros ABS conta com freios ABS para mais segurança.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '162,7 cc',
            'Potência máxima': '14,9 cv a 9.000 rpm',
            'Torque máximo': '1,49 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '5 marchas',
            'Capacidade tanque': '12 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Tambor com CBS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 417,39' },
            { months: 60, value: 'R$ 540,41' },
            { months: 48, value: 'R$ 661,72' },
            { months: 36, value: 'R$ 863,81' },
            { months: 24, value: 'R$ 1.269,00' },
            { months: 18, value: 'R$ 1.668,05' },
            { months: 12, value: 'R$ 2.455,63' }
        ]
    },
    {
        id: 12,
        name: 'CRF 300F',
        category: 'Off Road',
        image: '6aTAV3X9t3JIqf4dMbk9EsIEhDWFf1g7yhvgHsDn.png',
        credit: 'R$ 28.284,00',
        creditValue: 28284,
        description: 'A CRF 300F é a trail off-road da Honda com motor de 286cc.',
        specs: {
            'Motor': '4 tempos, DOHC, 1 cilindro',
            'Cilindrada': '286,0 cc',
            'Potência máxima': '25,4 cv a 7.750 rpm',
            'Torque máximo': '2,52 kgf.m a 6.250 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '6 marchas',
            'Capacidade tanque': '7,8 litros',
            'Freio dianteiro': 'Disco',
            'Freio traseiro': 'Disco',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 470,82' },
            { months: 60, value: 'R$ 609,55' },
            { months: 48, value: 'R$ 746,38' },
            { months: 36, value: 'R$ 974,30' },
            { months: 24, value: 'R$ 1.431,32' },
            { months: 18, value: 'R$ 1.881,38' },
            { months: 12, value: 'R$ 2.770,02' }
        ]
    },
    {
        id: 13,
        name: 'XRE 190',
        category: 'Adventure',
        image: 'OLNAfGURRqn8UeRwU2bgwKEN4wJ8yYP5FVZS7vaS.png',
        credit: 'R$ 25.962,00',
        creditValue: 25962,
        description: 'A XRE 190 é a adventure ideal para quem busca versatilidade.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro',
            'Cilindrada': '186,2 cc',
            'Potência máxima': '16,2 cv a 8.000 rpm',
            'Torque máximo': '1,63 kgf.m a 6.000 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '5 marchas',
            'Capacidade tanque': '13 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Tambor',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 432,18' },
            { months: 60, value: 'R$ 559,56' },
            { months: 48, value: 'R$ 685,17' },
            { months: 36, value: 'R$ 894,39' },
            { months: 24, value: 'R$ 1.313,97' },
            { months: 18, value: 'R$ 1.727,15' },
            { months: 12, value: 'R$ 2.542,63' }
        ]
    },
    {
        id: 14,
        name: 'CB 300F TWISTER CBS',
        category: 'Street',
        image: 'd4wGzH59fpMRRunge9Pz7pKs4CjkYiM7aFcTt2nN.png',
        credit: 'R$ 27.181,00',
        creditValue: 27181,
        description: 'A CB 300F Twister CBS é esportiva e confortável com motor de 293cc.',
        specs: {
            'Motor': '4 tempos, DOHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '293,5 cc',
            'Potência máxima': '25,7 cv a 7.500 rpm',
            'Torque máximo': '2,66 kgf.m a 5.750 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '6 marchas',
            'Capacidade tanque': '14,1 litros',
            'Freio dianteiro': 'Disco CBS',
            'Freio traseiro': 'Disco CBS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 452,48' },
            { months: 60, value: 'R$ 585,82' },
            { months: 48, value: 'R$ 717,28' },
            { months: 36, value: 'R$ 936,30' },
            { months: 24, value: 'R$ 1.375,49' },
            { months: 18, value: 'R$ 1.808,02' },
            { months: 12, value: 'R$ 2.662,21' }
        ]
    },
    {
        id: 15,
        name: 'HONDA ADV',
        category: 'Adventure',
        image: 'm5F3bNTVeLRbibDZIAWAMv2jWLsEuWjny1Y9Ukj0.png',
        credit: 'R$ 27.871,00',
        creditValue: 27871,
        description: 'O Honda ADV é o scooter adventure para quem busca versatilidade e estilo.',
        specs: {
            'Motor': '4 tempos, OHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '156,9 cc',
            'Potência máxima': '15,6 cv a 8.500 rpm',
            'Torque máximo': '1,50 kgf.m a 6.500 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': 'Automática CVT',
            'Capacidade tanque': '8,1 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Disco ABS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 463,96' },
            { months: 60, value: 'R$ 600,65' },
            { months: 48, value: 'R$ 735,48' },
            { months: 36, value: 'R$ 960,07' },
            { months: 24, value: 'R$ 1.410,42' },
            { months: 18, value: 'R$ 1.854,03' },
            { months: 12, value: 'R$ 2.729,64' }
        ]
    },
    {
        id: 16,
        name: 'CB 300F TWISTER ABS',
        category: 'Street',
        image: 'NdNC49RPuYAwFa5mKmoHAzHmx2aL3oJ3b7ASJgfi.png',
        credit: 'R$ 28.284,00',
        creditValue: 28284,
        description: 'A CB 300F Twister ABS é a versão com freios ABS da esportiva naked.',
        specs: {
            'Motor': '4 tempos, DOHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '293,5 cc',
            'Potência máxima': '25,7 cv a 7.500 rpm',
            'Torque máximo': '2,66 kgf.m a 5.750 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '6 marchas',
            'Capacidade tanque': '14,1 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Disco ABS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 470,82' },
            { months: 60, value: 'R$ 609,55' },
            { months: 48, value: 'R$ 746,38' },
            { months: 36, value: 'R$ 974,30' },
            { months: 24, value: 'R$ 1.431,32' },
            { months: 18, value: 'R$ 1.881,38' },
            { months: 12, value: 'R$ 2.770,02' }
        ]
    },
    {
        id: 17,
        name: 'XR 300L TORNADO',
        category: 'Adventure',
        image: 'RQmyfhTdrcht7UqJNorbpJEYOk0S6lG2uO5RBIWn.png',
        credit: 'R$ 33.255,00',
        creditValue: 33255,
        description: 'A XR 300L Tornado é a trail adventure premium da Honda.',
        specs: {
            'Motor': '4 tempos, DOHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '293,5 cc',
            'Potência máxima': '25,7 cv a 7.500 rpm',
            'Torque máximo': '2,66 kgf.m a 5.750 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '6 marchas',
            'Capacidade tanque': '14,1 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Disco ABS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 553,60' },
            { months: 60, value: 'R$ 716,66' },
            { months: 48, value: 'R$ 877,62' },
            { months: 36, value: 'R$ 1.145,72' },
            { months: 24, value: 'R$ 1.683,19' },
            { months: 18, value: 'R$ 2.212,41' },
            { months: 12, value: 'R$ 3.257,36' }
        ]
    },
    {
        id: 18,
        name: 'SAHARA 300',
        category: 'Adventure',
        image: 'vgG6xKUWnqxATmPRRg5IPVPj4oX4HgsjH9qA069R.png',
        credit: 'R$ 34.136,00',
        creditValue: 34136,
        description: 'A Sahara 300 é a moto adventure de média cilindrada da Honda.',
        specs: {
            'Motor': '4 tempos, DOHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '293,5 cc',
            'Potência máxima': '25,7 cv a 7.500 rpm',
            'Torque máximo': '2,66 kgf.m a 5.750 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '6 marchas',
            'Capacidade tanque': '14,1 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Disco ABS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 568,26' },
            { months: 60, value: 'R$ 735,63' },
            { months: 48, value: 'R$ 900,85' },
            { months: 36, value: 'R$ 1.176,06' },
            { months: 24, value: 'R$ 1.727,71' },
            { months: 18, value: 'R$ 2.270,94' },
            { months: 12, value: 'R$ 3.343,57' }
        ]
    },
    {
        id: 19,
        name: 'SAHARA 300 ADV',
        category: 'Adventure',
        image: 'hIAwtMdshupuqYKHzFd0QG2iCATvYmsN97iJhLg5.png',
        credit: 'R$ 35.281,00',
        creditValue: 35281,
        description: 'A Sahara 300 ADV é a versão mais equipada para viagens e aventuras.',
        specs: {
            'Motor': '4 tempos, DOHC, 1 cilindro, refrigerado a líquido',
            'Cilindrada': '293,5 cc',
            'Potência máxima': '25,7 cv a 7.500 rpm',
            'Torque máximo': '2,66 kgf.m a 5.750 rpm',
            'Alimentação': 'Injeção eletrônica PGM-FI',
            'Transmissão': '6 marchas',
            'Capacidade tanque': '14,1 litros',
            'Freio dianteiro': 'Disco ABS',
            'Freio traseiro': 'Disco ABS',
            'Partida': 'Elétrica'
        },
        plans: [
            { months: 80, value: 'R$ 587,33' },
            { months: 60, value: 'R$ 760,32' },
            { months: 48, value: 'R$ 931,09' },
            { months: 36, value: 'R$ 1.215,52' },
            { months: 24, value: 'R$ 1.785,71' },
            { months: 18, value: 'R$ 2.347,17' },
            { months: 12, value: 'R$ 3.455,66' }
        ]
    }
];

// Helper: close all open modals
function closeAllModals() {
    document.querySelectorAll('.modal.show').forEach(modalEl => {
        const instance = bootstrap.Modal.getInstance(modalEl);
        if (instance) instance.hide();
    });
}

// Render motorcycle grid
function renderGrid() {
    const grid = document.getElementById('motorcycle-grid');
    grid.innerHTML = motorcycles.map(moto => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="product-box">
                <div class="title">${moto.name}</div>
                <div class="subtitle">${moto.category}</div>
                <div class="image">
                    <img src="${STORAGE_BASE}${moto.image}" alt="${moto.name}" loading="lazy">
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" onclick="openDetailModal(${moto.id})">Detalhes da moto</button>
                    <button class="btn btn-secondary" onclick="openConsortiaModal(${moto.id})">Planos de consórcio</button>
                    <button class="btn btn-secondary" onclick="openFinancingModal(${moto.id})">Financiamento</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Find motorcycle by id
function findMoto(id) {
    return motorcycles.find(m => m.id === id);
}

// Open Detail Modal
function openDetailModal(id) {
    const moto = findMoto(id);
    if (!moto) return;

    closeAllModals();

    document.getElementById('productModalTitle').textContent = moto.name;

    // Carousel with main image
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = `
        <div class="carousel-item active">
            <div class="text-center p-4">
                <img src="${STORAGE_BASE}${moto.image}" class="d-block mx-auto" style="max-height: 250px;" alt="${moto.name}">
            </div>
        </div>
    `;

    document.getElementById('carouselIndicators').innerHTML = '';

    // Description
    document.getElementById('productModalDescription').textContent = moto.description;

    // Specs
    const specsContainer = document.getElementById('productModalSpecs');
    let specsHtml = '<h6 class="fw-bold mb-3">Especificações / Ficha Técnica</h6>';
    specsHtml += '<table class="specs-table">';
    for (const [key, value] of Object.entries(moto.specs)) {
        specsHtml += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    specsHtml += '</table>';
    specsContainer.innerHTML = specsHtml;

    // Consórcio button in modal
    document.getElementById('modalBtnConsorcio').onclick = () => {
        closeAllModals();
        setTimeout(() => openConsortiaModal(id), 400);
    };

    // Financing button in modal
    document.getElementById('modalBtnFinanciamento').onclick = () => {
        closeAllModals();
        setTimeout(() => openFinancingModal(id), 400);
    };

    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }, 100);
}

// Open Consórcio Modal
function openConsortiaModal(id) {
    const moto = findMoto(id);
    if (!moto) return;

    closeAllModals();

    document.getElementById('consortiaModalTitle').textContent = 'Tabela de consórcio';
    document.getElementById('consortiaModalCredit').textContent = moto.credit;
    document.getElementById('consortiaModalImage').src = STORAGE_BASE + moto.image;
    document.getElementById('consortiaModalImage').alt = moto.name;

    // Build plans list
    const plansContainer = document.getElementById('consortiaModalPlans');
    plansContainer.innerHTML = moto.plans.map((plan, index) => `
        <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="consortiaPlan" id="plan${id}_${index}" value="${plan.months}x ${plan.value}" ${index === 0 ? 'checked' : ''}>
            <label class="form-check-label" for="plan${id}_${index}">
                <b>${plan.months}x</b> de ${plan.value}
            </label>
        </div>
    `).join('');

    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('consortiaModal'));
        modal.show();

        // Update WhatsApp links with selected plan
        const whatsappBtn = document.querySelector('#consortiaModal .btn-alternative');
        if (whatsappBtn) {
            whatsappBtn.onclick = (e) => {
                e.preventDefault();
                const selected = document.querySelector('input[name="consortiaPlan"]:checked');
                const planText = selected ? selected.value : '';
                const msg = encodeURIComponent(`Olá! Tenho interesse no consórcio da ${moto.name}. Plano: ${planText}`);
                window.open(`${WHATSAPP_URL}?text=${msg}`, '_blank');
            };
        }
    }, 100);
}

// Open Financing Modal
function openFinancingModal(id) {
    const moto = findMoto(id);
    if (!moto) return;

    closeAllModals();

    document.getElementById('financingModalTitle').textContent = 'Simulação de financiamento';
    document.getElementById('financingModalBike').textContent = moto.name;
    document.getElementById('financingModalImage').src = STORAGE_BASE + moto.image;
    document.getElementById('financingModalImage').alt = moto.name;

    // Reset form
    document.getElementById('financingForm').reset();

    // Form submit handler
    document.getElementById('financingForm').onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('financingName').value;
        const phone = document.getElementById('financingPhone').value;
        const entry = document.getElementById('financingEntry').value;
        let msg = `Olá! Gostaria de simular um financiamento.\n\nMoto: ${moto.name}\nNome: ${name}\nTelefone: ${phone}`;
        if (entry) msg += `\nEntrada: ${entry}`;
        window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('financingModal'));
        modal.show();
    }, 100);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
});
