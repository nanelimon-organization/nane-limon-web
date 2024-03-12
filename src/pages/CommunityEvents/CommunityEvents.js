import { Box, Card, Grid, Typography } from "@mui/material";
import gonullukonusmacilik from "../../images/events/gonullukonusmacilik.png";
import acikkaynak from "../../images/events/acikkaynak.png";
import acikicerikdokuman from "../../images/events/acikicerikdokuman.png";
import hackathonlar from "../../images/events/hackathonlar.png";
import mentorlukvedestek from "../../images/events/mentorlukvedestek.png";
import gonulluegitimler from "../../images/events/gonulluegitimler.png";
import {
  InfoLayoutRight,
  InfoLayoutLeft,
} from "../../layout/InfoLayout/InfoLayout";
import { useEffect } from "react";

function CommunityEvents() {

  useEffect(() => {
    window.scrollTo({top: 0,behavior: "smooth"})
  }, [])

  return (
    <>
      <InfoLayoutRight
        title="Gönüllü Konuşmacılık"
        src={gonullukonusmacilik}
        description="Çeşitli yerlerde gönülllü konuşmacılık yapıyor, sunumlar yapıyoruz. Bunları yaparken bilgilerimizi aktarıyor, bu alanda gelişmek isteyenlerle beraber gelişiyoruz."
      />
      <InfoLayoutLeft
        title="Hackathonlar"
        description="Hackathonların uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması"
        src={hackathonlar}
      />
      <InfoLayoutRight
        title="Açık Kaynak Kütüphaneler"
        src={acikkaynak}
        description="Açık kaynak kütüphanelerin uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması"
      />
      <InfoLayoutLeft
        title="Gönüllü Eğitimler"
        description="Gönüllü eğitimlerin uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması"
        src={gonulluegitimler}
      />
      <InfoLayoutRight
        title="Açık İçerik ve Dökümantasyon Üretimi"
        src={acikicerikdokuman}
        description="Açık içerik ve dökümantasyon üretiminin uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması"
      />
      <InfoLayoutLeft
        title="Mentörlük ve destek"
        description="Mentörlük ve desteğin uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması uzun bir açıklaması"
        src={mentorlukvedestek}
      />
    </>
  );
}

export default CommunityEvents;
