class Person {
constructor(g_Name,g_Surname,g_BD,g_Gender) {
    this.Name=g_Name; 
    this.Surname=g_Surname;
    this.BirthDayDate=g_BD;
    this.Gernder=g_Gender;
} 

  // make setters 

  get_BD(old_date) {
      let new_BDdata = old_date.split('/').map(function (val) { 
          return parseInt(val, 10);
      }) 
      return new_BDdata;
  } 
  BDcode() {
      const mounth = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
        7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T"
      }
      let data = this.get_BD(this.BirthDayDate);  

      let year = data[2] %100; 
      if(year<10){ 
          year= '0'+ year;
      }  
      let day= this.Gernder== 'F'? data[0]+ 40: data[0]; 
      if(day<10){
          day='0'+day;
      }
    let BDcode = year+ mounth[data[1]] + day;
    return BDcode;
  }

  vow(vow_letter) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(vow_letter.toLowerCase()) !== -1;
    } 

  Namecode() {
  return this._codeFromNames(this._delSecondCons(this.Name));
  }

  _delSecondCons(string) {
    let consIdx = [];

    for (let i = 0; i < string.length; i++){
      if (!this.vow(string[i])) {
        consIdx.push(i);
      }
    }

    if (consIdx.length > 3) {
      return string.slice(0, consIdx[1]) + string.slice(consIdx[1]+1, string.length)
    }
    return string;
  }

  Surnamecode() {
    return this._codeFromNames(this.Surname);
  }

  _codeFromNames(string) {
    let constonants = '';
    let vowels = '';

    for (let i = 0; i < string.length; i++){
      if (this.vow(string[i])) {
        vowels+= string[i];
      }
      else {
        constonants+=string[i];
      }
    }

    let code = constonants + vowels;

    if (code.length>=3){
      return code.slice(0, 3);
    }

    return code+"X".repeat(3-code.length);
  }

  getcode() { 
      return (this.Surnamecode()+this.Namecode() + this.BDcode()  ).toUpperCase();
  }
} 

NewPerson = new Person('Matt',"Edabit","1/1/1900",'M')  
console.log(NewPerson.getcode())
