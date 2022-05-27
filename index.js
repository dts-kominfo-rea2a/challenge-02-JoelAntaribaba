// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/

const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping"
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = null;

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = null;

  let emptyData = [];
  let jp = [];
  let jw = [];

  for (let i = 0; i < dataYangAkanDilooping.length; i++) {
    emptyData.push(`${dataYangAkanDilooping[i].namaDepan} ${dataYangAkanDilooping[i].namaBelakang}`);
    if (dataYangAkanDilooping[i].jenisKelamin === "M") {
      jp.push(dataYangAkanDilooping[i]);
    } else if (dataYangAkanDilooping[i].jenisKelamin === "F") {
      jw.push(dataYangAkanDilooping[i]);
    }
  }

  if (jp.length > jw.length) {
    komentar = "Jumlah Pria lebih banyak dari Wanita";
  }
  if (jp.length < jw.length) {
    komentar = "Jumlah Wanita lebih banyak dari Pria";
  }
  if (jp.length === jw.length) {
    komentar = "Jumlah Pria dan Wanita berimbang";
  }

  hasilLooping = emptyData;
  jumlahPria = jp.length;
  jumlahWanita = jw.length;

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
