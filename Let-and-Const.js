function hesapla() {
  const PI = Number(Math.PI.toFixed(3)); // PI sayısı virgülden sonra 3 basamaklı olarak ayarlandı.
  document.getElementById("demo1").innerHTML = PI;
  console.log(PI);
  let r = Number(document.getElementById("yaricap").value); //input yarıçap değerinin string'den NUMBER'a dönüştürülmesi
  r = Number(r.toFixed(3)); // değerin en fazla virgğlden sonra 3 basamaklı olması için
  if (0 < r && r <= 100) {
    let alan = PI * r * r;
    let cevre = 2 * PI * r;
    document.getElementById("demo2").innerHTML = alan;
    document.getElementById("demo3").innerHTML = cevre;
    //document.getElementById("demo4").innerHTML = ""; //alttaki if değerleri doğru değer girildiğinde düzelmesi için
  }
  if (isNaN(r)) {
    document.getElementById("demo4").innerHTML = "Lütfen sayı giriniz!";
  }
  if (r < 0) {
    document.getElementById("demo4").innerHTML = "Sıfırdan büyük sayı giriniz!";
  }
  if (100 < r) {
    document.getElementById("demo4").innerHTML = "100'den küçük sayı giriniz!";
  }
}
