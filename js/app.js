let sectionBdocontainer = document.querySelector(".bdo-container");

console.log(sectionBdocontainer);

const bdoClasses = [
    {
        name: "warrior",
        img: "./img/warrior.png"
    }, 
    {
        name: "Ranger",
        img: "./img/Ranger.png"
    }, 
    {
        name: "Berserker",
        img: "./img/berserker.png"
    }, 
    {
        name: "Sorceres",
        img: "./img/sorceres.png"
    },  
    {
        name: "Arcehry",
        img: "./img/archery.png"
    },
    {
        name: "Dkzona",
        img: "./img/dkzona.png"
    },
    {
        name: "Domadora",
        img: "./img/domadora.png"
    },
    {
        name: "Guardian",
        img: "./img/guardian.png"
    },
    {
        name: "Hashashin",
        img: "./img/hashashin.png"
    },
    {
        name: "Kunoichi",
        img: "./img/kunoichi.png"
    },
    {
        name: "Lahn",
        img: "./img/lahn.png"
    },
    {
        name: "Maehwa",
        img: "./img/maehwa.png"
    },
    {
        name: "Mago",
        img: "./img/mago.png"
    },
    {
        name: "Mistica",
        img: "./img/mistica.png"
    },
    {
        name: "Musah",
        img: "./img/musah.png"
    },
    {
        name: "Ninja",
        img: "./img/ninja.png"
    },
    {
        name: "Nova",
        img: "./img/nova.png"
    },
    {
        name: "Shai",
        img: "./img/shai.png"
    },
    {
        name: "Striker",
        img: "./img/striker.png"
    },
    {
        name: "Valquiria",
        img: "./img/valquiria.png"
    },
    {
        name: "Bruxa",
        img: "./img/bruxa.png"
    },
];

bdoClasses.forEach( bdoclass => {
        sectionBdocontainer.innerHTML += `
        <div>
            <img src="${bdoclass.img}" alt="${bdoclass.name}">
            <h2> ${bdoclass.name} </h2>
        </div>

        `;
})
