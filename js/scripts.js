const containerCharacters = document.getElementById('characters');

let characters = [
  {
    id: 0,
    img: 'assets/img/harry-potter.webp',
    biography:
      'Harry James Potter. (31 de julio de 1980), es un mago mestizo y el único hijo de James Potter y Lily Potter. Es la única persona conocida que ha sobrevivido la maldición de Avada Kedavra que fue conjurada por Voldemort cuando intento matar a Harry cuando era un bebé, una vez huérfano Harry es acogido por sus parientes muggles, los Dursley.',
    fact: 'Es el protagonista de la historia.',
  },

  {
    id: 1,
    img: 'assets/img/ron-weasley.jpg',
    biography:
      'Ronald "Ron" Bilius Weasley (1 de marzo de 1980) es un mago sangre pura, el sexto y más joven hijo de Arthur y Molly Weasley También era el hermano menor de Bill, Charlie, Percy, Fred y George, y el hermano mayor de Ginny. Ron y sus hermanos y hermana vivían en la Madriguera, en las afueras de Ottery St. Catchpole.',
    fact: 'Es el mejor amigo de Harry.',
  },

  {
    id: 2,
    img: 'assets/img/hermione-granger.jpg',
    biography:
      'Hermione Jean Granger (19 de septiembre de 1979) es una bruja hija de muggles. El Sr. y Sra. Granger son dentistas en el mundo muggle. A los once años descubrió su don mágico y fue aceptada en el Colegio Hogwarts de Magia y Hechicería. Posee una mente académica brillante, y demostró ser una estudiante superdotada.',
    fact: 'Amiga íntima de Harry y Ron.',
  },

  {
    id: 3,
    img: 'assets/img/draco-malfoy.jpg',
    biography:
      'Draco Lucius Malfoy Black (5 de junio de 1980) es un mago de sangre pura y el único hijo de Lucius y Narcissa Malfoy. Por ser el hijo de un mortífago, a Draco le enseñaron a creer firmemente en la importancia de la pureza de sangre. Asistió al Colegio Hogwarts de Magia y Hechicería desde 1991[1] hasta 1998[7] y fue seleccionado en la Casa Slytherin.',
    fact: 'Archienemigo de Harry Potter.',
  },

  {
    id: 4,
    img: 'assets/img/albus-dumbledore.jpg',
    biography:
      'Albus Percival Wulfric Brian Dumbledore, (Verano de 1881 - 30 de junio de 1997) fue profesor de Transformaciones y más tarde director del Colegio Hogwarts de Magia y Hechicería. Era un mago de sangre mestiza, hijo de Percival y Kendra Dumbledore, y hermano mayor de Aberforth y Ariana Dumbledore.',
    fact: 'Director de la escuela Hogwarts de magia y hechiceria.',
  },

  {
    id: 5,
    img: 'assets/img/severus-snape.jpg',
    biography:
      'Severus Snape (9 de enero de 1960 - 2 mayo de 1998) fue Maestro de Pociones (1981-1996), profesor de Defensa Contra las Artes Oscuras (1996-1997) y director (1997-1998) de Hogwarts, a la que asistió como estudiante desde 1971 hasta 1978. Era un mago de sangre mestiza, hijo de la bruja Eileen Prince, y del muggle Tobías Snape.',
    fact: 'Profesor de Pociones en Hogwarts.',
  },

  {
    id: 6,
    img: 'assets/img/voldemort.jpg',
    biography:
      'Tom Sorvolo Ryddle (31 de diciembre de 1926 – el 2 de mayo de 1998), posteriormente conocido como Lord Voldemort, fue el mago tenebroso más poderoso de todos los tiempos. Siendo hijo del adinerado muggle Tom Ryddle Sr. y la bruja Merope Gaunt, nació con sangre mestiza. Ingresó al Colegio Hogwarts de Magia y Hechicería y se incorporó a la casa Slytherin en 1938.',
    fact: 'Villano del mundo mágico.',
  },

  {
    id: 7,
    img: 'assets/img/hagrid.jpg',
    biography:
      'El Profesor Rubeus Hagrid (6 de diciembre de 1928), familiarmente conocido sólo por su apellido, "Hagrid", es un mago semi gigante, hijo del señor Hagrid y la giganta Fridwulfa y medio hermano del gigante Grawp. Asistió al Colegio Hogwarts de Magia y Hechicería en 1940 y fue seleccionado para la Casa Gryffindor.',
    fact: 'Guardabosques de Hogwarts y amigo de Harry.',
  },

  {
    id: 8,
    img: 'assets/img/sirius-black.jpg',
    biography:
      'Sirius Black III (3 de noviembre de 1959 - 18 de junio de 1996), también conocido como Canuto u Hocicos, fue un mago de sangre pura, hijo de Orion y Walburga Black y hermano mayor de Regulus. Aunque era el heredero de la Familia Black, Sirius estaba en desacuerdo con las creencias de su familia en la pureza de la sangre desafiando a su familia al ser colocado en Gryffindor en lugar de Slytherin en el Colegio Hogwarts de Magia y Hechicería.',
    fact: 'Es el padrino de Harry Potter.',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  showCharacter(characters);
});

const showCharacter = (characters) => {
  let showCards = characters.map((card) => {
    return `<div class="col-sm-12 col-md-5 col-lg-3 d-flex justify-content-center">
                <div class="card" style="width: 18rem">
                  <img src="${card.img}" class="card-img-top" alt="" />
                    <div class="card-body">
                      <p class="card-text">${card.biography}</p>
                      <p class="card-text">
                      <small class="text_small">${card.fact}</small></p>
                    </div>
                </div>
              </div>`;
  });
  containerCharacters.innerHTML = showCards;
};
