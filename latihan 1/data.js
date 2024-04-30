const test = "samuel";
let umur = 43;

let biodata = document.getElementById(`biodata`);
console.log(biodata);

function GetBiodata() {
  console.log(`saya berumur ${umur} tahun`);
}

function GetBiodataSamuel() {
  let generasi;

  if (umur > 10 && umur < 19) {
    console.log(`anda remaja`);
  } else if (umur > 21 && umur < 30) {
    console.log(`suda dewasa`);
  } else if (umur > 31 && umur < 40) {
    generasi = `anda super dewasa di umur ${umur}`;
  } else if (umur > 41 && umur < 50) {
    generasi = `anda tua ya`;
  } else {
    console.log(`gtw`);
  }

  return (biodata.innerHTML = generasi);
}

console.log(test);
console.log(umur);
GetBiodata();
GetBiodataSamuel();
