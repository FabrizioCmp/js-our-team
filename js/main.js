/********************** DICHIARAZIONE VARIABILI **********************/
const membriTeam = [
    /*0*/{
        nome: "Wayne Barnett",
        posizione: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    /*1*/{
        nome: "Angela Caroll",
        posizione: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    /*2*/{
        nome: "Walter Gordon",
        posizione: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
     /*3*/{
        nome: "Angela Lopez",
        posizione: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    /*4*/{
        nome: "Scott Estrada",
        posizione: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    /*5*/{
        nome: "Barbara Ramos",
        posizione: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    }
]
const boxInformationText = document.querySelector(".box_inormation_text");
const boxInformationImg = document.querySelector(".box_inormation_img")


for (let i in membriTeam ){

    // MILESTONE 1 Stampo su console
    console.log(`membro numero ${parseInt(i)+1}:`)
    console.log(`nome - ${membriTeam[i].nome} \nruolo - ${membriTeam[i].posizione} \nimgURL - ${membriTeam[i].img} `)

    // MILESTONE 2 Stampo stringhe su DOM
    const string = `<br/>membro numero ${parseInt(i)+1}: <br/>nome - ${membriTeam[i].nome} <br/>ruolo - ${membriTeam[i].posizione} <br/>imgURL - ${membriTeam[i].img}<br/>`;
    boxInformationText.innerHTML += string;

    // BONUS 1 visualizazione immagini membri team
    const imgEl = document.createElement("img");
    imgEl.src = `imgs/${membriTeam[i].img}`;
    boxInformationImg.innerHTML += imgEl.outerHTML;

    //BONUS 2 creazione cards per ogni membro del team
    const box_imgEl = document.querySelector(`.card_member${parseInt(i)+1} .box_img`); 
    const cardEl = document.querySelector(`.card_member${parseInt(i)+1}`);
    const imgCard = imgEl;
    imgCard.classList.add("img-fluid");
    box_imgEl.append(imgCard);
    cardEl.innerHTML +=  `<br/><strong>${membriTeam[i].nome}</strong> <br/>${membriTeam[i].posizione} `;
}