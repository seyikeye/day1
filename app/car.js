module.exports = function(name, model, type){
      this.name= name || 'General';
      this.model= model || 'GM';
      this.type= type;
      this.numOfDoors= 4;
      this.numOfWheels= 4;
      this.speed;
      this.isSaloon;

      if(name === "Porshe" || name==="Koenigsegg"){
          this.numOfDoors= 2;
      }
      if(type === "trailer"){
          this.numOfWheels = 8;
          this.speed= "0 km/h";
      }
      if(this.numOfWheels === 4){
          this.isSaloon = true;
      }
      else{
          this.isSaloon = false; 
      }
      this.drive= function(num){
          if(this.type === 'trailer'){
              this.speed = "77 km/h";
          }
          if(this.name === "Porshe"){
              this.speed= "250 km/h";
          }
          return this;
      }
  }