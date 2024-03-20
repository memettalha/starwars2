let characters = [
    {
      "id": 1,"name": "Luke Skywalker","pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg","homeworld": "tatooine"
    },
    {
      "id": 2,"name": "C-3PO","pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png","homeworld": "tatooine"
    },
    {
      "id": 3, "name": "R2-D2", "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png", "homeworld": "naboo"
    },
    {
      "id": 4, "name": "Darth Vader", "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg", "homeworld": "tatooine"
    },
    {
      "id": 5, "name": "Leia Organa", "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png", "homeworld": "alderaan"
    },
    {
      "id": 6, "name": "Owen Lars", "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png", "homeworld": "tatooine"
    },
    {
      "id": 7, "name": "Beru Whitesun lars", "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png", "homeworld": "tatooine"
    },
    {
      "id": 8, "name": "R5-D4", "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png", "homeworld": "tatooine"
    },
    {
      "id": 9, "name": "Biggs Darklighter", "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png", "homeworld": "tatooine"
    },
    {
      "id": 10, "name": "Obi-Wan Kenobi", "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg", "homeworld": "stewjon"
    },
    {
      "id": 11, "name": "Anakin Skywalker", "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png", "homeworld": "tatooine"
    },
    {
      "id": 12, "name": "Wilhuff Tarkin", "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg", "homeworld": "eriadu"
    },
    {
      "id": 13, "name": "Chewbacca", "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png", "homeworld": "kashyyyk"
    },
    {
      "id": 14,"name": "Han Solo","pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png","homeworld": "corellia"
    },
    {
      "id": 15,"name": "Greedo","pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg","homeworld": "Rodia"
    },
    {
      "id": 16, "name": "Jabba Desilijic Tiure", "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png", "homeworld": "tatooine"
    },
    {
      "id": 18, "name": "Wedge Antilles", "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg", "homeworld": "corellia"
    },
    {
      "id": 19, "name": "Jek Tono Porkins", "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png", "homeworld": "bestine"
    },
    {
      "id": 20, "name": "Yoda", "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
      "id": 21, "name": "Palpatine", "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png", "homeworld": "naboo"
    },
    ];
  
   const btn = document.getElementById("btn");
   let  area = document.getElementById("area");
  
   function showCharacters(){ 
      let content = "";
      for (let i in characters){
          // Aşağıda  contenti sadece eşitlesek en sonuncuyu alırdı. content += ile yeni geleni de ekliyor
          const card = characters[i];
          content += `<div class="card"  data-id="${card?.homeworld}" style="width: 18rem;">
          <img class="card-img-top" src="${characters[i].pic}" alt="Card image cap">
          <div class="card-body">
           <ul>
              <li>${characters[i].name}</li>
              <li>${characters[i].homeworld}</li>
           </ul>
          </div>
        </div>` // content içine character objesinin name pic homeworld yerleştirildi
      }
      console.log(content);
      area.innerHTML = content;
      //Butona bastığımızda göstersin? butonun içindeyiz gösteriyor
      //Bir daha bastığımızda kapatsın
      let arr2="";
      for(let i=0; i < homeworld[i].length; i++){
      arr2 +=  `
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="${homeworld[i]}" id="${homeworld[i]}">
                    <label class="form-check-label" for="${homeworld[i]}">${homeworld[i]}</label>
                  </div>
                `
      }
      filter = document.getElementById("homeworlds-filter-container");
      filter.innerHTML = arr2;
  
      area.classList.toggle("display");
      area.classList.toggle("hide");
  
  
      if(btn.innerText == "Show Characters"){
          btn.innerText = "Hide Characters";
          btn.classList.remove("green");
          btn.classList.add("red");
      }
      else{
          btn.innerText = "Show Characters";
          btn.classList.remove("red");
          btn.classList.add("green");
      }
  
  
  
   }
  
   let homeworldsRaw = characters.map(function(character){
     return character.homeworld;
   })
   console.log(homeworldsRaw);
  
   let homeworldOther = homeworldsRaw. map(function(character){
    return character !== undefined &&  character !== null ?  character.toLowerCase() : "other";
   })
  
   console.log(homeworldOther);
  
  
  let homeworldsUnique = [...new Set(homeworldOther)];
  console.log(homeworldsUnique);
  
  let homeworld = homeworldsUnique;
  
  
  
  // Radio buttonları javascriptin görmesi
  document.addEventListener('input',(e)=>{
  
    if(e.target.getAttribute('name')=="flexRadioDefault")
    console.log(e.target.value)
    })
  
  
  //Radio buttona bastığında ilgili cardın gelmesi
  document.addEventListener("click", function () {
    let filteredHomeworld = null;
    function updateHomeworld() {
      const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');
      //Radio buttonları name ile çağırdık
      for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          filteredHomeworld = radioButton.value; //radio button value ile card id eşitse kartı göster değilse gösterme
          let cards = document.getElementsByClassName("card");
          cards = Array.from(cards);
          cards.forEach(function (item) {
           if(item.getAttribute("data-id")!=filteredHomeworld){
            item.style.display="none"
           }else{
            item.style.display="block"
           }
          });
          break;
        }
      }
      console.log("Selected homeworld", filteredHomeworld);
    }
  
    document.body.addEventListener("change", updateHomeworld);
  
    updateHomeworld();
  
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  