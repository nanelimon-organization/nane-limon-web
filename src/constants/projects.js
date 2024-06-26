import odeal from "../images/projects/odeal.jpg";
import automate from "../images/projects/automate.jpg";
import qlink from "../images/projects/qlink.jpg";
import zeltech from "../images/projects/zeltech.jpg";
import turkishnlp from "../images/projects/turkishnlp.jpg";
import datacleaning from "../images/projects/datacleaning.jpg";
import datalabeling from "../images/projects/datalabelling.jpg";
import bertbase from "../images/projects/bertbase.png";
import bertbase2 from "../images/projects/bertbase2.png";
import turkceacildurum from "../images/projects/turkceacildurum.png";

export const projects = [
  {
    title: "PromoPilot",
    subtitle: "düzenlenecek",
    slug: "promo-pilot",
    shortDescription:
      "PromoPilot projesi, ÖDEAL a ait üye iş yerlerinin karşılaştıkları sorunları etkin bir şekilde çözmek ve operasyonel destek sağlamak amacıyla geliştirilmiştir. Bu proje, üye iş yerlerinin sadakatini artırmak, operasyonlarını optimize etmek ve müşteri memnuniyetini sağlamak için çeşitli analiz ve stratejiler sunar.",
      status: "firstPlace",

      description: `PromoPilot projesi, ÖDEAL a ait üye iş yerlerinin karşılaştıkları sorunları etkin bir şekilde çözmek ve operasyonel destek sağlamak amacıyla geliştirilmiştir. Bu proje, üye iş yerlerinin sadakatini artırmak, operasyonlarını optimize etmek ve müşteri memnuniyetini sağlamak için çeşitli analiz ve stratejiler sunar. 

      <b>Sağlanan Katma Değer:</b>
      <ul><li><b>Operasyonel Destek:</b> Üye iş yerlerinin sorunlarını hızlı ve etkin bir şekilde çözecek bir platform sunar.</li>
        <li><b>Sadakat İnisiyatifi:</b> Stratejik promosyonlar ve kampanyalar ile üye iş yerlerinin sadakatini ve bağlılığını artırır.</li></ul><b>Çözüm Yaklaşımı:</b>
      <ol><li><b>Keşifçi Veri Analizi:</b> Ham veriden değerli içgörüler elde edilerek veri ön işleme adımları belirlenir ve uygulanır.</li>
        <li><b>Özellik Mühendisliği:</b>
          <ul>
            <li><b>ÖDEAL Bilgi Kütüphanesi:</b> Retrival Augmented Generation (RAG) yaklaşımı ile özel bilgi ve döküman bankası oluşturulur.</li>
            <li><b>Churn Analizi:</b> Kaybedilmiş veya kaybedilmek üzere olan üye iş yerlerini tespit eder.</li>
            <li><b>RFM Analizi ve Kullanıcı Segmentasyonu:</b> Üye iş yerlerinin değer farkını tespit eder ve uygun kampanyalar geliştirir.</li>
            <li><b>Sosyo-Ekonomik ve Sosyo-Demografik Analiz:</b> Üye iş yerlerinin coğrafik konumlarına göre özel kampanyalar sunar.</li>
          </ul></li><li><b>Veri Endekslemesi:</b>
          <ul>
            <li>Embedding ve indeksleme ile bilgiye hızlı ve doğru erişim sağlar.</li>
            <li>Müşteri odaklı veri indeksleme yöntemi ile hızlı, güvenli ve düşük maliyetli bir mimari oluşturur.</li>
            <li>Sosyo-Ekonomik ve Sosyo-Demografik Analiz:</b> Üye iş yerlerinin coğrafik konumlarına göre özel kampanyalar sunar.</li>
          </ul></li><li><b>Prompt Engineering:</b>
          <ul>
            <li>Çeşitli prompt teknikleri ile modelin en verimli şekilde çalışması sağlanır (Variable-Embedded Prompt Engineering, Chain-of-Thought Prompting, Tree of Thoughts Prompting, Few-Shot Prompting, Generated Knowledge Prompting).</li></ul></li></ol><b>Değer Önerisi:</b><ul><li><b>Güçlü ve Yenilikçi Yaklaşım:</b> Üye iş yerlerinin ihtiyaçlarına yönelik çözümler sunar.</li>
        <li><b>Hızlı ve Etkin Çözümler:</b> Şikayetlerin analiz edilmesi, sosyo-ekonomik verilerle desteklenen kampanyalar ve churn analizi ile üye iş yerlerinin memnuniyeti artırılır.</li>
        <li><b>Müşteri Odaklı:</b> Hızlı ve güvenli veri erişimi ile operasyonel verimlilik sağlanır.</li></ul>`,
    imageUrl: odeal,
    buttonLink:
      "https://www.canva.com/design/DAFzYmLsdd0/vKhkhe-Wj9ePUmVq4VsFxg/edit?utm_content=DAFzYmLsdd0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title: "AutoMate: Borusan Satış Sonrası Destek Çözümü",
    subtitle: "düzenlenecek",
    slug: "automate",
    shortDescription:
      "AutoMate projesi, BorusanOto'nun satış sonrası hizmetlerini geliştirmek amacıyla çeşitli ileri teknolojiler kullanılarak hayata geçirilmiştir. Bu projede, BorusanOto web sitesi ve sıkça sorulan sorular üzerinden veri toplamak için web scraping teknikleri kullanılmıştır.",
    status: "firstPlace",
    description: `AutoMate projesi, BorusanOto'nun satış sonrası hizmetlerini geliştirmek amacıyla çeşitli ileri teknolojiler kullanılarak hayata geçirilmiştir. Bu projede, BorusanOto web sitesi ve sıkça sorulan sorular üzerinden veri toplamak için web scraping teknikleri kullanılmıştır. Doküman embedding ve veri yönetimi için Azure OpenAI'nin text-embedding-ada-002 modeli kullanılarak doküman parçaları optimize edilmiştir. Verilerin hızlı ve ücretsiz bir şekilde yönetilmesi ise Qdrant vektör veritabanı ile sağlanmıştır. \n\nProje kapsamında, iteratif prompt geliştirme ve semantik doğruluk testleri ile sistemin hassasiyeti artırılmıştır. Kullanıcı dostu ve etkileşimli bir arayüz tasarlanarak kullanıcı deneyimi iyileştirilmiş, lokasyon tabanlı interaktif özellikler eklenmiştir. Generative AI tabanlı görsel işleme özellikleri sayesinde kullanıcıların problemlerini görseller üzerinden rahatça aktarabilmeleri sağlanmıştır. \n\nBu çözümler, müşteri hizmetleri konusunda benzersiz bir deneyim sunmayı ve kullanıcı memnuniyetini artırmayı hedeflemektedir. Projenin genel mimarisi ve kullanılan teknolojiler, kullanıcıların ihtiyaçlarına hızlı ve etkili bir şekilde yanıt verebilecek şekilde tasarlanmıştır.
`,
    imageUrl: automate,
    buttonLink:
      "https://www.canva.com/design/DAFzYmLsdd0/vKhkhe-Wj9ePUmVq4VsFxg/edit?utm_content=DAFzYmLsdd0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title:
      "QLink Hackathon: Enerji Dağıtım ve Kontrolü İçin Yenilikçi Çözümler:",
    subtitle: "düzenlenecek",
    slug: "qlink",
    shortDescription:
      "QLink, doğal afetler sırasında enerji dağıtım ağının kontrolünü optimize etmek ve enerji kesintilerinden kaynaklanan riskleri minimize etmek amacıyla Bursa Deprem Hackathon’u kapsamında geliştirilmiştir.",
      status: "thirdPlace",
      description: `QLink, doğal afetler sırasında enerji dağıtım ağının kontrolünü optimize etmek ve enerji kesintilerinden kaynaklanan riskleri minimize etmek amacıyla Bursa Deprem Hackathon’u kapsamında geliştirilmiştir.
    
      <b>Problemler:</b>
      <ul><li>Enerji dağıtımının kontrol edilememesi ve kesintiler.</li>
        <li>Acil durum müdahalelerinin sekteye uğraması.</li>
        <li>Yangın riski ve kamu hizmetlerinin etkilenmesi.</li></ul><b>Çözüm:</b>
      <ol><li><b>Gerçek Zamanlı İzleme: </b>IoT ile entegre edilen sistem, anlık veri toplayarak enerji dağıtım ağını sürekli izler.</li>
      <li><b>Yapay Zeka Destekli Müdahale: </b>AI algoritmaları ile enerji hatlarındaki sorunlar hızla tespit edilir ve çözümler önerilir.</li>
      <li><b>Simülasyon ve Modelleme: </b>Afet senaryoları için topoloji modelleri ve simülasyonlar geliştirilir.</li>
        </ol><b>Değer Önerisi:</b>
          <ul>
            <li>Güvenli ve sürdürülebilir enerji hizmeti sağlama.</li>
            <li>Hızlı ve etkin acil durum müdahaleleri gerçekleştirme.</li>
            <li>Yangın ve diğer riskleri minimize etme.</li>
            </ul>Bu yenilikçi proje, afet anında enerji dağıtımını optimize ederek kamu hizmetlerinin ve acil durum yanıtlarının etkinliğini artırmayı hedeflemektedir.`,
    imageUrl: qlink,
    buttonLink:
      "https://www.canva.com/design/DAFmK9us1AM/WKqF6ERgZTNadabTczPPYQ/edit?utm_content=DAF",
  },
  {
    title: "Zeltek",
    subtitle: "düzenlenecek",
    slug: "zeltek",
    shortDescription:
      "ZelTech tarafından geliştirilen ve Akbank tarafından desteklenen TR-NLPGUIDE projesi, doğal afetler sırasında yardım koordinasyonunu ve lojistik yönetimini optimize etmek için modern teknolojilerden faydalanmaktadır.",

    status: "finalist",
      description: `ZelTech tarafından geliştirilen ve Akbank tarafından desteklenen TR-NLPGUIDE projesi, doğal afetler sırasında yardım koordinasyonunu ve lojistik yönetimini optimize etmek için modern teknolojilerden faydalanmaktadır. Bu sistem, sosyal medyadan alınan anlık ihbarları yapay zeka destekli algoritmalarla sınıflandırarak, sivil toplum kuruluşlarının yardım envanterlerini merkezi bir platformda yönetmelerini sağlar. Projenin temel özellikleri şunlardır:
    
    <b>Anlık Sosyal Medya İhbar İzleme:</b>
      <ul><li>Çerçeve: Twitter üzerinden yapılan yardım çağrıları ve ihbarlar gerçek zamanlı olarak taranır.</li>
        <li>Ürün/Hizmet Türü: Gerçek zamanlı sosyal medya izleme ve analiz servisi.</li></ul>
        <b>Yapay Zeka Destekli İhbar Sınıflandırma:</b>
        <ul><li>Çerçeve: Taranan Twitter ihbarları, yapay zeka algoritması ile otomatik olarak kategorilere ayrılır.</li>
        <li>Ürün/Hizmet Türü: Otomatik veri sınıflandırma servisi.</li></ul>
        <b>Merkezi Yardım Dağıtım ve Yönetim Platformu:</b>
        <ul><li>Çerçeve: Gelen yardımların hangi ihtiyaçlara yönlendirileceği ve bu yardımların lojistik koordinasyonu bu platform üzerinden gerçekleştirilir.</li>
        <li>Ürün/Hizmet Türü: Online yardım yönetimi ve koordinasyon platformu.</li></ul>
        <b>AzureML Promptflow ile GPT-4 Tabanlı Afad Afet Asistanı:</b>
        <ul><li>Çerçeve: Afetzedelere anında destek sağlama yeteneği. Milyonlarca kullanıcının isteklerini karşılayabilir.</li>
        <li>Ürün/Hizmet Türü: Dinamik ve etkileşimli sanal asistan servisi.</li></ul>
        <b>Değer Önerisi:</b>

        Proje, gerçek zamanlı sosyal medya izleme ve yapay zeka destekli sınıflandırma sayesinde ihtiyaçların çok daha hızlı tespit edilmesini ve doğru koordinasyonun doğru zamanda doğru yere yönlendirilmesini sağlar. Bu yaklaşım, mevcut yardımların envanter bilgisi ve acil ihtiyaçlar doğrultusunda etkin bir şekilde dağıtılmasını garanti eder, böylece kaynakların maksimum etki yaratacak şekilde yönlendirilmesini sağlar. Afad Afet Asistanı, afetzedelere anında ve doğru bilgi sağlayarak panik ve bilgi kirliliğini minimalize eder​​.
        
        Repository: <a href="https://github.com/orgs/Zeltech-Akbank/repositories" target="_">Tıkla</a>`,
    imageUrl: zeltech,
    buttonLink:
      "https://www.canva.com/design/DAF-xQmditE/HEUEyQf01IsTin2bwYQ8dQ/view?utm_content=DAF-xQmditE&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    title: "mintlemon-turkish-nlp Library",
    subtitle: "düzenlenecek",
    slug:"mintlemon-turkish-nlp",
    shortDescription:
      "Mintlemon Turkish NLP, Türkçe metinlerle çalışmak için geliştirilmiş kapsamlı ve güçlü bir doğal dil işleme (NLP) araç kütüphanesidir. Bu kütüphane, dil işleme görevlerini kolaylaştırmak ve hızlandırmak amacıyla PyPI platformunda Nane&Limon topluluğu tarafından yayınlanmıştır.",

      status: "firstPlace",

      description: `Mintlemon Turkish NLP, Türkçe metinlerle çalışmak için geliştirilmiş kapsamlı ve güçlü bir doğal dil işleme (NLP) araç kütüphanesidir. Bu kütüphane, dil işleme görevlerini kolaylaştırmak ve hızlandırmak amacıyla PyPI platformunda Nane&Limon topluluğu tarafından yayınlanmıştır.
    
    <b>Özellikler:</b>
      <ul><b><li>Türkçe Dil Desteği:</b> Türkçe metinler için özel olarak optimize edilmiş dil işleme araçları içerir.</li>
        <li><b>Çeşitli NLP Görevleri:</b> Metin temizleme, tokenize etme, adlandırılmış varlık tanıma, duygu analizi ve daha birçok NLP görevi için kullanıma hazır fonksiyonlar sunar.
        </li>
        <li><b>Kolay Entegrasyon:</b> Python projelerinize hızlı ve kolay bir şekilde entegre edilebilir.</li>
        <li><b>Açık Kaynak:</b> GitHub üzerinden açık kaynak olarak erişilebilir, bu sayede geliştiriciler tarafından katkı sağlanabilir ve özelleştirilebilir.</li>
        <li><b>Yüksek Performans:</b> Optimizasyon teknikleri kullanılarak yüksek performans ve doğruluk sağlar.</li></ul>Mintlemon Turkish NLP, veri bilimciler ve NLP araştırmacıları için ideal bir araçtır. Türkçe metinlerde dil işleme görevlerini daha verimli hale getirir ve projelerinizde yüksek performans elde etmenizi sağlar. PyPI üzerinden indirilebilir ve hemen kullanılabilir.`,
    imageUrl: turkishnlp,
    buttonLink: "https://pypi.org/project/mintlemon-turkish-nlp/",
  },
  {
    title: "Kolay Veri Etiketleme Aracı",
    subtitle: "düzenlenecek",
    slug:"kolay-etiketleme",
    shortDescription:
      "Easy Data Labeling Engine, veri etiketleme sürecini hızlandırmak ve kolaylaştırmak amacıyla geliştirilmiş bir araçtır. Nane&Limon topluluğu tarafından GitHub'da yayınlanan bu araç, verilerinizi hızlı, verimli ve doğru bir şekilde etiketlemenize yardımcı olur.",

      status: "firstPlace",

      description: `Easy Data Labeling Engine, veri etiketleme sürecini hızlandırmak ve kolaylaştırmak amacıyla geliştirilmiş bir araçtır. Nane&Limon topluluğu tarafından GitHub'da yayınlanan bu araç, verilerinizi hızlı, verimli ve doğru bir şekilde etiketlemenize yardımcı olur.
    
    <b>Özellikler:</b>
      <ul><b><li>Kullanıcı Dostu Arayüz:</b> Basit ve anlaşılır bir arayüz ile veri etiketleme işlemlerini hızlı bir şekilde gerçekleştirebilirsiniz.</li>
        <li><b>Çoklu Veri Türü Desteği:</b> Metin, görüntü, ses ve video gibi çeşitli veri türlerini etiketleyebilirsiniz.
        </li>
        <li><b>Özelleştirilebilir Etiketleme:</b> Projelerinize özel etiketler oluşturabilir ve bunları kullanarak verilerinizi etiketleyebilirsiniz.</li>
        <li><b>Otomatik Etiketleme:</b> Makine öğrenimi modelleri kullanarak otomatik veri etiketleme özelliği sunar, böylece zaman ve iş gücü tasarrufu sağlar.</li>
        <li><b>Entegrasyon Kolaylığı:</b> API desteği ile mevcut projelerinize kolayca entegre edebilir ve veri etiketleme süreçlerinizi optimize edebilirsiniz.
        </ul>Easy Data Labeling Engine, veri bilimciler, makine öğrenimi uzmanları ve araştırmacılar için değerli bir araçtır. Etiketleme sürecini basitleştirerek, model eğitimleriniz için kaliteli veriler elde etmenizi sağlar. GitHub üzerinden ücretsiz erişilebilen bu araç, projelerinizde hemen kullanılabilir.`,
    imageUrl: datalabeling,
    buttonLink:
      "https://github.com/nanelimon-organization/easy-data-labeling-engine",
  },
  {
    title: "Offensive Veri Modeli",
    subtitle: "düzenlenecek",
    slug:"offensive",
    shortDescription:
      "BERT-Base Turkish Offensive modeli, Türkçe metinlerde ofansif dil kullanımı algılamak amacıyla özel olarak eğitilmiş bir dil modelidir. Hugging Face platformunda Nane&Limon topluluğu tarafından yayınlanan bu model, çevrimiçi ortamda ofansif içeriklerin tespiti ve yönetilmesi için güçlü bir araç sunar.",

      status: "firstPlace",

      description: `BERT-Base Turkish Offensive modeli, Türkçe metinlerde ofansif dil kullanımı algılamak amacıyla özel olarak eğitilmiş bir dil modelidir. Hugging Face platformunda Nane&Limon topluluğu tarafından yayınlanan bu model, çevrimiçi ortamda ofansif içeriklerin tespiti ve yönetilmesi için güçlü bir araç sunar.
    
    <b>Özellikler:</b>
      <ul><b><li>Türkçe Metinlere Özel:</b> Model, Türkçe dil yapısına ve ofansif dil özelliklerine uygun olacak şekilde eğitilmiştir.</li>
        <li><b>Ofansif Dil Algılama:</b> Metinlerde yer alan ofansif, saldırgan veya incitici ifadeleri yüksek doğrulukla tespit eder.</li>
        <li><b>Çeşitli Kullanım Alanları:</b> Sosyal medya platformları, forumlar, bloglar ve diğer çevrimiçi mecralarda içerik denetimi, moderasyon ve analiz gibi görevlerde kullanılabilir.</li>
        <li><b>Kolay Entegrasyon:</b> Hugging Face platformunda yer alan bu model, projelerinize hızlı ve kolay bir şekilde entegre edilebilir.</li></ul>BERT-Base Turkish Offensive modeli, özellikle çevrimiçi topluluklar, sosyal medya yöneticileri ve içerik moderatörleri için değerli bir kaynaktır. Ofansif dilin tespiti ve yönetimi konusundaki projelerde yüksek performans sağlar. Hugging Face platformunda herkesin erişimine açık olan bu model, projelerinizde hemen kullanılabilir.`,
    imageUrl: bertbase,
    buttonLink: "https://huggingface.co/nanelimon/bert-base-turkish-offensive",
  },
  {
    title: "Türkçe İş İlanı Sınıflandırma Modeli",
    subtitle: "düzenlenecek",
    slug:"turkce-is-ilani-siniflandirma",
    shortDescription:
      "BERT-Base Turkish Job Advertisement modeli, Türkçe iş ilanları verisi kullanılarak özel olarak eğitilmiş bir dil modelidir. Bu model, iş ilanlarının analiz edilmesi, kategorize edilmesi ve çeşitli doğal dil işleme (NLP) görevlerinde kullanılması amacıyla geliştirilmiştir. Hugging Face platformunda Nane&Limon topluluğu tarafından yayınlanmıştır.",

      status: "academic",
      description: `BERT-Base Turkish Job Advertisement modeli, Türkçe iş ilanları verisi kullanılarak özel olarak eğitilmiş bir dil modelidir. Bu model, iş ilanlarının analiz edilmesi, kategorize edilmesi ve çeşitli doğal dil işleme (NLP) görevlerinde kullanılması amacıyla geliştirilmiştir. Hugging Face platformunda Nane&Limon topluluğu tarafından yayınlanmıştır.
    
    <b>Özellikler:</b>
      <ul><b><li>Türkçe Metinlere Özel:</b> Model, Türkçe iş ilanları veritabanı kullanılarak eğitilmiştir, bu sayede Türkçe dil yapısına ve iş ilanlarının kendine has terminolojisine uyum sağlar.</li>
        <li><b>Çeşitli NLP Görevleri İçin Uygun:</b> Metin sınıflandırma, duygu analizi, adlandırılmış varlık tanıma ve diğer NLP görevlerinde yüksek performans gösterir.</li>
        <li><b>Kapsamlı Eğitim Verisi:</b> Geniş bir Türkçe iş ilanları veritabanı üzerinde eğitilmiştir, bu sayede geniş bir iş alanı yelpazesinde tutarlı sonuçlar verir.</li></ul>Bu model, özellikle Türkçe iş ilanlarını analiz eden, işverenlerin ve adayların ihtiyaçlarına yönelik çözümler geliştiren veri bilimciler ve NLP uzmanları için değerli bir kaynaktır. Hugging Face platformunda herkesin erişimine açık olan bu model, projelerinizde hızlı ve etkili bir şekilde kullanılabilir.`,
    imageUrl: bertbase2,
    buttonLink:
      "https://huggingface.co/nanelimon/bert-base-turkish-job-advertisement",
  },
  {
    title: "Türkçe Acil Durum Yönetim Modeli",
    subtitle: "düzenlenecek",
    slug:"turkce-acil-yonetim",
    shortDescription:
      "Akbank tarafından düzenlenen hackathon kapsamında geliştirilmiş ve Hugging Face platformunda Nane&Limon topluluğu tarafından yayınlanmıştır. Bu model, doğal dil işleme (NLP) ve makine öğrenimi projelerinde kullanılmak üzere özel olarak eğitilmiştir.",

      status: "finalist",
      description: `Akbank tarafından düzenlenen hackathon kapsamında geliştirilmiş ve Hugging Face platformunda Nane&Limon topluluğu tarafından yayınlanmıştır. Bu model, doğal dil işleme (NLP) ve makine öğrenimi projelerinde kullanılmak üzere özel olarak eğitilmiştir.

    <b>Özellikler:</b>
      <ul><b><li>Hackathon İçin Geliştirildi:</b> Akbank Hackathon kapsamında ortaya çıkan ihtiyaçlar ve problemler göz önünde bulundurularak tasarlanmış ve optimize edilmiştir.</li>
        <li><b>Türkçe Metinlere Uygun:</b> Model, Türkçe metinlerin analiz edilmesi, işlenmesi ve çeşitli NLP görevlerinde kullanılması için özel olarak eğitilmiştir.</li>
        <li><b>Geniş Uygulama Alanı:</b> Metin sınıflandırma, duygu analizi, adlandırılmış varlık tanıma, soru-cevap sistemleri ve daha birçok NLP görevinde yüksek performans gösterir.</li>
        <li><b>Kolay Entegrasyon:</b> Hugging Face platformunda bulunan bu model, projelerinize hızlı ve kolay bir şekilde entegre edilebilir.</li></ul>Zeltech Akbank Hackathon modeli, veri bilimciler, NLP uzmanları ve hackathon katılımcıları için güçlü ve esnek bir araçtır. Akbank'ın desteğiyle geliştirilen bu model, Türkçe dil işleme projelerinde yüksek doğruluk ve performans sağlar. Hugging Face platformunda herkesin erişimine açık olan bu model, projelerinizde hemen kullanılabilir.`,
    imageUrl: turkceacildurum,
    buttonLink: "https://huggingface.co/nanelimon/zeltech-akbank-hackathon",
  },
  {
    title: "Veri Temizleme Aracı",
    subtitle: "düzenlenecek",
    slug:"veri-temizleme-araci",
    shortDescription:
      "Veri ön işleme, modellemeye hazırlık aşamasında modelin başarısı için kritik öneme sahiptir. Özellikle doğal dil işleme (NLP) alanında, metin verilerinin temizlenmesi her modelleme sürecinde önemli bir adımdır. Bu ihtiyacı karşılamak ve Türkçe metinlerde doğal dil işleme literatürüne katkı sağlamak amacıyla text-data-cleaner aracı geliştirilmiştir.",

      status: "firstPlace",

      description: `Veri ön işleme, modellemeye hazırlık aşamasında modelin başarısı için kritik öneme sahiptir. Özellikle doğal dil işleme (NLP) alanında, metin verilerinin temizlenmesi her modelleme sürecinde önemli bir adımdır. Bu ihtiyacı karşılamak ve Türkçe metinlerde doğal dil işleme literatürüne katkı sağlamak amacıyla text-data-cleaner aracı geliştirilmiştir. \n\ntext-data-cleaner, veri temizleme sürecini herkes için erişilebilir ve basit hale getiren bir araçtır. Bu araç, veri bilimcilerin ve NLP uzmanlarının modelleme öncesi verilerini temizlenmesine yardımcı olarak daha yüksek performanslı modeller geliştirmelerine olanak tanır.`,
    imageUrl: datacleaning,
    buttonLink: "https://github.com/nanelimon-organization/text-data-cleaner",
  },
];

export const validProjects = ["promo-pilot", "automate","qlink","zeltek","mintlemon-turkish-nlp","kolay-etiketleme","offensive","turkce-is-ilani-siniflandirma","turkce-acil-yonetim","veri-temizleme-araci"];
