import { Button, Grid } from "@mui/material";
import Member from "./Member";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";
function Team() {
  const list = [
    {
      name: "Murat Köklü",
      slug: "murat-koklu",
      title: "Akademik Danışman",
      description:
        "Ekibimizin kurucu akademik danışmanıdır. Murat Köklü, Selçuk Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği Bölümü'nde Dr. Öğr. Üyesi olarak görev yapmaktadır. 1979 yılında Konya'da doğan Köklü, evli ve çocuklu bir aile babasıdır. Akademik kariyerine Selçuk Üniversitesi'nde Bilgisayar Sistemleri Öğretmenliği lisansını tamamlayarak başlayan Köklü, daha sonra aynı üniversitede Elektrik ve Bilgisayar Sistemleri Eğitimi alanında yüksek lisans ve doktora derecelerini almıştır. Kariyerine teknik öğretmen olarak başlayan Köklü, daha sonra Selçuk Üniversitesi'nde araştırma görevlisi olarak çalışmış ve akademik kariyerinde yükselerek yardımcı doçent ve doçent unvanlarını elde etmiştir. Köklü, aynı zamanda Selçuk Üniversitesi'nin çeşitli idari birimlerinde görev almıştır. Bu görevler arasında Bilimsel Araştırma Projeleri Koordinatörlüğü'nde yardımcı koordinatörlük, Lazer Uyarımlı Proton Terapi Uygulama ve Araştırma Merkezi Müdürlüğü'nde merkez müdür yardımcılığı gibi önemli pozisyonlar bulunmaktadır. Köklü'nün uzmanlık alanları arasında Karar Destek Sistemleri, Yapay Öğrenme ve Derin Öğrenme yer almaktadır. Ayrıca, TÜBİTAK tarafından verilen çeşitli ödüller ve patentler de bulunmaktadır. Köklü, öğrencileriyle birlikte geliştirdiği projelerle TÜBİTAK tarafından düzenlenen yarışmalarda birincilik, ikincilik ve üçüncülük ödüllerine layık görülmüştür. Son olarak, Köklü'nün iletişim bilgileri şu şekildedir: E-posta adresleri mkoklu@selcuk.edu.tr ve muradkoklu@gmail.com, web sitesi www.muratkoklu.com ve telefon numarası +90 332 223 33 48'dir.",
      src: "https://media.licdn.com/dms/image/C4D03AQFRYQgNdqjzjw/profile-displayphoto-shrink_200_200/0/1573241125894?e=1715212800&v=beta&t=Q3Uov7oBQNbjAIBTeJFdjMyw-eUSkm2K0zYzMEbMP4c",
    },
    {
      name: "Şeyma Sarıgil",
      slug: "seyma-sarigil",
      title: "Ekip Lideri & AI Mühendisi",
      description:
        "Şeyma SarıgilThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      linkedin: "https://www.linkedin.com/in/eraybuyukkanat/",
      src: "https://media.licdn.com/dms/image/D4D03AQHBZOJObQQdhA/profile-displayphoto-shrink_200_200/0/1705149275457?e=2147483647&v=beta&t=tPWycpSPE4TnAuyzhdzeGIcJ76Pa43dvHsA_7Y9eMkU",
    },
    {
      name: "Erdinç Dal",
      slug: "erdinc-dal",
      title: "Veri Analisti",
      description:
        "ErdinçDalThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      linkedin: "https://www.linkedin.com/in/eraybuyukkanat/",
      src: "https://media.licdn.com/dms/image/D4D03AQGYFpv67WxNnA/profile-displayphoto-shrink_200_200/0/1702370775676?e=1715212800&v=beta&t=-5MiWZiHSmeZjrP1aJ7SeRuzU6C9f52to9KQWWUZGlc",
    },
    {
      name: "Tarık Kaan Koç",
      slug: "tarik-kaan-koc",
      title: "Gen AI Mühendisi",
      description:
        "TarıkKaanThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      src: "https://media.licdn.com/dms/image/D4D35AQFRWJTI1-Z0wA/profile-framedphoto-shrink_200_200/0/1709022442816?e=1710615600&v=beta&t=QJ8NbW7tHVHHzRRetdBCl4YPEWJmQBFtY5tOsD5QBFg",
    },
    {
      name: "Elif Sarıgil",
      slug: "elif-sarigil",
      title: "ARGE Mühendisi",
      description:
        "ElifSarıgilThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      src: "https://media.licdn.com/dms/image/C4D03AQEC9ELps6r_tA/profile-displayphoto-shrink_200_200/0/1663911613486?e=1715212800&v=beta&t=t9Vh5_8HGrx-CNKqwnGQpbRuubiI0GwGx7UxvBNRuOc ",
    },
    {
      name: "Eray Büyükkanat",
      slug: "eray-buyukkanat",
      title: "Önyüz Geliştirici",
      description:
        "ErayThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      src: "https://media.licdn.com/dms/image/D4D03AQGU7O0XOJlK8g/profile-displayphoto-shrink_200_200/0/1701177246831?e=1713398400&v=beta&t=ApRp5LGPxnTg2riIToixUR22u1qPwLm8VuczHiuFg-o",
    },
  ];
  const [index, setIndex] = useState(0);

  const member1 = list[0 + index];
  const member2 = list[1 + index];
  const member3 = list[2 + index];
  const member4 = list[3 + index];

  function swipeToRight() {
    if (3 + index < list.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function swipeToLeft() {
    if (0 + index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  }

  return (
    <Grid
      container
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      paddingY={5}
    >
      <Grid
        item
        xs={12}
        md={12}
        display={{ md: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          md={2}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Button
            onClick={swipeToLeft}
            sx={{ marginX: { xs: 0, md: 5 }, color: "#008000" }}
          >
            <KeyboardArrowLeftRoundedIcon
              sx={{ paddingX: { xs: 0, md: 5 }, width: 36, height: 36 }}
            />
          </Button>
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{ xs: 2, md: 0 }}>
          <Member member={member1} />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          marginX={2}
          marginY={{ xs: 2, md: 0 }}
          display={{ xs: "none", md: "flex" }}
          flexDirection="column"
        >
          <Member member={member2} />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          marginX={2}
          marginY={{ xs: 2, md: 0 }}
          display={{ xs: "none", md: "flex" }}
          flexDirection="column"
        >
          <Member member={member3} />
        </Grid>
        <Grid item xs={12} md={2} marginX={2} marginY={{ xs: 2, md: 0 }}>
          <Member member={member4} />
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Button
            onClick={swipeToRight}
            sx={{ marginX: { xs: 0, md: 5 }, color: "#008000" }}
          >
            <KeyboardArrowRightRoundedIcon
              sx={{ paddingX: { xs: 0, md: 5 }, width: 36, height: 36 }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Team;
