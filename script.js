const episodes = [
    {
        img: "./assets/images/episodes/episode1.svg",
        title: "Quando você está perdido na escuridão",
        description: 
        "Em 2003, uma infecção fúngica em massa de Cordyceps mutante desencadeou uma pandemia global. Joel foge com sua filha Sarah, e seu irmão Tommy, de sua casa no Texas, Sarah é morta por um soldado.",
    },

    {
        img: "./assets/images/episodes/episode2.svg",
        title: "Infectedo",
        description:
          "Dois dias antes do surto mundial, em Jacarta, na Indonésia, o governo mostra um cadáver infectado a um micologista, que lhes diz que não há cura ou vacina.",
    },
    {
        img: "./assets/images/episodes/episode3.svg",
        title: "Muito, muito tempo",
        description:
          "Joel e Ellie começam a caminhada para se encontrar com Bill e Frank. Ellie vê evidências da execução de inocentes pelo governo durante os primeiros dias da pandemia",
    },

    {
        img: "./assets/images/episodes/episode4.svg",
        title: "Por favor, segure em minha mão",
        description:
          "Viajando pelo Missouri, Joel e Ellie são forçados a fazer um desvio por Kansas City, onde são emboscados.",
    },
];

const list = document.querySelector(".episodes-list");

function addCard(episodes) {
    for (let i = 0; i < episodes.length; i++) {

      renderCard(episodes[i]);
    }
}

addCard(episodes);

function renderCard(episodio) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  listItem.innerHTML = `
  <img
  src=${episodio.img}
  alt=${episodio.title}
/>
<div class="card-text">
  <h4>${episodio.title}</h4>
  <p>
  ${episodio.description}
  </p>
</div>
`;

  list.appendChild(listItem);
}

