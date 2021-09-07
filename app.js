/*
DTM - Davlat Test Markazi

Talabalrni o'qishga kirgan yoki kirmaganligini aniqlab beradigan dastur.

Talaba to'plagan balini kiritadi va natijada u kirgan yoki kirmaganligi yoki grant asosida o'qishga qabul qilinganligi aniqlanadi.

1. O'quvchi 80 dan past ball to'plasa - o'qishga kira olmadingiz (degan yozuv chiqsin)
2. O'qvchi 80 dan yuqori va 100 dan past ball to'plagan bo'lsa siz super-kontrakt asosida o'qishga tavsiya qilindingiz (degan yozuv chiqsin) va kontrakt miqdori yiliga 3000$ qancha pulingiz bor deb so'rasin, mablag'i yetsa o'qishga qabul qilinadi.
3. O'quvchi 100 dan yuqori va 150 dan past to'plagan bo'lsa - siz kontrakt asosida qabul qilindizngiz, kontrakt miqdori yiliga 2000$ qancha pulingiz bor deb so'rasin, mablag'i yetsa o'qishga qabul qilinadi.
4. O'quvchi 150 dan yuqori va 200 ga tenga ball to'plagan bo'lsa grant asosida o'qishga qabul qilinsin.

*/



let student_ball = Number(
  prompt("Xurmatli talaba, to`plagan baliningizni kiriting :")
);

const min_ball = 80;
const max_ball = 200;

if (student_ball < 80) {
  alert("talabalikka tavsiya etilmadingiz");
} else if (student_ball > 80 && student_ball < 100) {
  alert("siz super-kontrakt asosida o'qishga tavsiya qilindingiz");
  let super_kontrakt = prompt(
    "kontrakt miqdori yiliga 3000$ qancha pulingiz bor:"
  );
  if (super_kontrakt > 3000) {
    alert(" Siz talabasiz");
  } else {
    alert(" Siz talabalikka tavsiya etilmadingiz");
  }
} else if (student_ball >= 100 && student_ball < 150) {
  alert("siz super-kontrakt asosida o'qishga tavsiya qilindingiz");
  let super_kontrakt2 = prompt(
    "kontrakt miqdori yiliga 2000$ qancha pulingiz bor:"
  );
  if (super_kontrakt2 > 2000) {
    alert(" Siz talabasiz");
  } else {
    alert(" Siz talabalikka tavsiya etilmadingiz");
  }
} else if (student_ball >= 150 && student_ball <= 200) {
  alert("siz davlat granti asosida o`qishga tavsiya etildingiz");
} else if (student_ball > 200 ) {
  alert("Siz xato kiritdingiz !");
}
