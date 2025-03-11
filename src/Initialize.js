import data from "../assets/data.json";

class Initialize {
  constructor() {

    this.section = document.createElement("section");
    this.section.id = "container";
    document.body.appendChild(this.section);

    

    data.Characters.forEach( (data, index)=>{

      this.figure = document.createElement("figure");
      this.figure.id = "figure";
      this.section.appendChild(this.figure);

      this.image = document.createElement("img");
      this.figure.appendChild(this.image);
      this.image.src = "../assets/img/" + data.img;

      this.figure.addEventListener("click", ()=>{

        console.log("Marvel")

      });

    });

  } // END constructor
} // END class

export default Initialize;
