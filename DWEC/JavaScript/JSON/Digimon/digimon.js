const URL = "https://digimon-api.vercel.app/api/digimon/";
const FRM = document.getElementById('frm');
let lvl;
let tp = "";
let nivel = "";

const filtro = document.querySelector('#slct');
filtro.addEventListener('change', (e) => {
    if (e.target.value == "name") {
        document.getElementById("busqueda").style.display = "block";
        document.getElementById("lvlflt").style.display = "none";
        tp = e.target.value;
    } else if (e.target.value == "level") {
        document.querySelector('#busqueda').style.display = 'none'
        document.getElementById("lvlflt").style.display = "block";
        lvl = document.querySelector('#lvlflt');
        lvl.addEventListener('change', (e) => {
            nivel = e.target.value;
        })
        tp = e.target.value;
    } else getAllData(URL);
})

const btn = document.getElementById('btn').addEventListener('click', (e) => {
    document.getElementById('portfolio').innerHTML = "";
    console.log(tp);
    if (tp == "name") {
        let name = document.getElementById('busqueda').value;
        getAllData(URL + tp + '/' + name);
    } else if (tp == "level") {
        getAllData(URL + tp + '/' + nivel);

    }
})

const getAllData = async (urlCompleta) => {
    await fetch(urlCompleta).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(element => {
            const GIF = document.createElement('img');
            GIF.src = element.img;
            GIF.className = "mb-3";
            document.getElementById('portfolio').appendChild(GIF);
        });
    })
}

const getLevel = async () => {
    let lvl = []
    await fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(element => {
            if (!lvl.includes(element.level)) lvl.push(element.level);
        });
    })
    const SELECT = document.createElement('select');
    let option = document.createElement('option');
    option.setAttribute('value', 'empty');
    option.innerHTML = 'Elige una opci&oacute;n...';
    SELECT.appendChild(option);
    SELECT.className = "form-control form-control-lg mr-2";
    SELECT.setAttribute('id', 'lvlflt');
    lvl.forEach((element, index) => {
        const OPTION = document.createElement('option');
        OPTION.setAttribute('value', element);
        OPTION.innerText = element;
        SELECT.appendChild(OPTION);
    });
    document.getElementById('frm').insertBefore(SELECT, document.getElementById('btn'));
    //FRM.insertBefore(SELECT, BTN);
}
FRM.onsubmit = (e) => {
    e.preventDefault();
}

getLevel();