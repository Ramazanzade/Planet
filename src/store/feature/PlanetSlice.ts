import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = [
    {
        id: 1,
        planet: 'Mars',
        imge1: require('../../asset/imge/mars.png'),
        imge2: require('../../asset/imge/marss.png'),
        video: require('../../asset/imge/marsv.mp4'),
        video1: require('../../asset/mars/m.mp4'),
        home: {
            text1: 'Günəşə yaxınlığına görə Günəş sistemindəki üçüncü planet və həyat aşkar olunan yeganə göy cismi. Radiometrik tanışlıq və digər dəlillərə görə Yer 4,5 milyard il əvvəl yaranmışdır. ',
            text2: 'Mars planeti Yerdən təqribən iki dəfə kiçik olmaqla ona ən yaxın planetdir. Günəşin ətrafında bi dəfə dövr etmək üçün ona iki il vaxt lazımdır. Planetdə nəhəng vulkanlar və Yerdə olduğundan daha böyük, dərin vadilər var.',
            text3: "Gün: 24.6 saat , Il: 669,6 sols | 687 Yer günü , Radius: 2,106 mil | 3390 kilometr , Peykləri: 2",
            text4: 'Marsın iki balaca peyki var- Fobos və Deymos. Bunlardan daha böyüyü olan Fobusun eni cəmi 24 km-dir. Çox ehtimal ki, hər iki peyk Mars tərəfindən cəzb olunmuş və bu planetin ətrafında fırlanmağa başlamış asteroidlərdir.',
            text5: 'Amma 1965, 1969 və 1976-cı illərdə Marsa göndərilən zondlar heç bir kanal aşkar etmədilər. Amerika Birləşmiş Ştatlarına məxsus "Vikinq" kosmik gəmiləri planetə endilər və torpaqdan nümunə götürdülər, amma heç bir həyat əlamətinə rast gəlmədilər.',
            text6: 'Planetin Şimal və Cənub qütbləri var- onların hər ikisi qalın buz təbəqəsi ilə örtülmüşdür. Planetin nazik atmosferi demək olar ki, ancaq karbon qazından ibarətdir, buradakı güclü küləklər isə toz fırtınaları yaradır. ',
            homeimge1: require('../../asset/mars/m.png'),
            homeimge2: require('../../asset/mars/m1.png'),
            homeimge3: require('../../asset/mars/m2.png'),
            homeimge4: require('../../asset/mars/m3.png'),
            homeimge5: require('../../asset/mars/m.png'),
            homeimge6: require('../../asset/mars/m3.png'),


        },
        peykleri: {
            name:'Fobos',
            name2:'Deymos',
            text1: 'Fobos  peyki  avqustun 17-də Amerika astronomu Asaf Hall müşahidələri nəticəsində aşkar olunmuşdur. Müşahidələr Vaşinqtonda Deniz Rəsədxanasında aparılmışdır.Guman olunur ki Fobos peyki əvvəllər asteroid olub və Marsın cazibəsi nəticəsində tutularaq öz oxu ətrafında fırlanmasına səbəb olmuşdur.',
            peykimge1: require('../../asset/imge/mars1.png'),
            text2: '1877-ci ildə Amerika astronomu A. Holl kəşf etmişdir. İlk dəfə yaxın məsafədən şəklini 1977-ci ildə “Vikinq-1” KA çəkmişdir.Planetin mərkəzindən orta məsafəsi 23,5 min km, dolanma dövrü 30 saat 21 dəqiqədir. Deymos düzgün olmayan formaya malikdir və bəzi asteroidlərin maddəsinə oxşayan dağ süxurunun və buzun karbonla zəngin qatışığından ibarətdir.',
            peykimge2: require('../../asset/imge/mars2.png'),

        }
    },
    {
        id: 2,
        planet: 'Yer',
        imge1: require('../../asset/imge/yer.png'),
        imge2: require('../../asset/imge/yer2.png'),
        video: require('../../asset/imge/yerv.mp4'),
        video1: require('../../asset/yer/y.mp4'),

        home: {
            text1: 'Günəşə yaxınlığına görə Günəş sistemindəki üçüncü planet və həyat aşkar olunan yeganə göy cismi. Radiometrik tanışlıq və digər dəlillərə görə Yer 4,5 milyard il əvvəl yaranmışdır. ',
            text2: 'Yerin cazibə qüvvəsi kainatdakı digər cisimlərə, xüsusən də Yerin yeganə təbii peyki olan Aya və Günəşə qarşılıqlı təsir göstərir. Yer 365 gün ərzində Günəş ətrafında öz orbiti boyu hərəkət edir. Bu müddət ərzində Yer öz oxu ətrafında 365 (366) dəfə fırlanır.',
            text3: "Gün: 23.9 saat , Il: 365.25 Yer günü , Radius: 3,959 mil | 6,371 kilometr , Peykləri: 1",
            text4: 'Yer tarixinin birinci milyard ilində həyat okeanlarda meydana gəldi və Yer atmosferinə və səthinə təsir göstərməyə başladı. Bu proses anaerob və daha sonra aerob orqanizmlərin çoxalmasına səbəb oldu. Bəzi geoloji dəlillər həyatın 4,1 milyard il əvvəl yaranmış ola biləcəyini göstərir. O vaxtdan bəri Yerin Günəşdən uzaqlığı, fiziki xüsusiyyətləri və geoloji tarixi həyatın təkamülünə və inkişafına təkan verdi. ',
            text5: 'Yerin xarici təbəqəsi (litosfer) milyonlarla ildir ki, səth boyunca hərəkət edən bir neçə sərt tektonik plitələyə bölünmüşdür. Yer səthinin təxminən 29 %-i qitələr və adalardan ibarət qurudur. Qalan 71 %-i isə su ilə, əsasən dünya okeanı və eyni zamanda hamısı birlikdə hidrosferi təşkil edən göllər, çaylar və digər təmiz su mənbələri ilə örtülüdür. ',
            text6: ' Bu gün Yerdəki növlərin sayı haqqında fikirlər dəyişkəndir: əksər növlər hələ də təsvir edilməmişdir. Yer kürəsində 7,7 milyarddan çox insan yaşayır və yaşamaq üçün onun biosferindən və təbii qaynaqlarından asılıdır. Siyasi baxımdan dünyada 200-ə yaxın suveren dövlət mövcuddur. ',
            homeimge1: require('../../asset/yer/y.png'),
            homeimge2: require('../../asset/yer/y1.png'),
            homeimge3: require('../../asset/yer/y2.png'),
            homeimge4: require('../../asset/yer/y3.png'),
            homeimge5: require('../../asset/yer/y.png'),
            homeimge6: require('../../asset/yer/y3.png')

        },
        peykleri: {
            name:'Ay',
            text1: 'Ay — Yerin yeganə daimi təbii peykidir. Ay insanların Yerdən kənarda ayaq basdığı yeganə kosmik cisimdir. Ay Günəş sistemində yerləşən peyklər arasında ölçüsünə görə beşinci, ətrafında döndüyü planetin ölçülərinə nəzərən isə birincidir. Ay sıxlığına görə Günəş sistemində sıxlığı məlum olan peyklər arasında İodan sonra ikincidir.',
            peykimge1: require('../../asset/imge/yer1.png'),


        }
    },
    {
        id: 3,
        planet: 'Merkuri',
        imge1: require('../../asset/imge/merkuri.png'),
        imge2: require('../../asset/imge/merkuri1.png'),
        video: require('../../asset/imge/merkuriv.mp4'),
        video1: require('../../asset/merkuri/m4.mp4'),
        home: {
            text1: ' Günəş sistemində yerləşən ən kiçik və Günəşə ən yaxın olan planet. Yer qrupu planetlərə aid olan Merkuri Günəş ətrafında ən sürətlə dövr edən planetdir və 88 günə tam bir dəfə dövr edir. Buna baxmayaraq Merkuri öz oxu ətrafında çox yavaş hərəkət edir',
            text2: '1 Merkuri günü Yerdə keçən 116 günə bərabərdir. Merkuri planetinin təbii peyki yoxdur. Planetin adı Roma mifologiyasında gəlir, ticarət və xəbər tanrısı hesab olunan Merkuridən qaynaqlanır.',
            text3: "Gün: 59 yer günnu , Il: 88 Yer günü , Radius: 1,516 mil |  2,439.7  kilometr , Peykləri: 0",
            text4: 'Merkuri demək olar ki, istiliyi qoruya bilməyəcək dərəcədə çox nazik atmosfer qatına sahibdir. Bu səbəbdən də gecə və gündüz əvəzlənməsi zamanı planetin səthində kəskin istilik fərqləri yaranır. Merkurinin ekvatoruna yaxın yerlərdə gündüz vaxtı istilik 427 °C-yə çatsa da, gecə vaxtı istilik −173 °C-yə qədər düşə bilir. Merkurinin qütb bölgələrində istilik həmişə −93 °C-dən aşağı olur. ',
            text5: 'Merkuri Günəş sistemi planetləri arasında ən az meyilliyə sahib olandır. Buna baxmayaraq orbiti ellips formasındadır və Günəş sisteminə daxil olan planetlər içində ən kənarmərkəzli orbitə malikdir. O, Günəş ətrafında orbit üzrə bir dəfə keçdiyi yolu ikinci dəfə keçmir. Planetin orbitinin zamanla daha da kənarmərkəzli olacağı və kənarmərkəzlilik dərəcəsinin hal hazırkı göstərici olan 0,21-dən 0,5-ə yüksələcəyi düşünülür. ',
            text6: ' Merkuri də Venera kimi Yer səmasında sübh vaxtı və axşamçağı görünür, ancaq gecə görünmür. Merkuri də Ay və Venera kimi fazalara sahibdir. Günəşə Veneradan daha yaxın olmasında baxmayaraq, üzərinə düşən Günəş işığının cəmi 10%-ni əks etdirdiyindən Veneradan daha az parlaq görünür. Günəşə yaxınlığı səbəbindən Merkurini Yerdən müşahidə etmək çətindir.  ',
            homeimge1:require('../../asset/merkuri/m.png'),
            homeimge2:require('../../asset/merkuri/m1.png'),
            homeimge3:require('../../asset/merkuri/m2.png'),
            homeimge4:require('../../asset/merkuri/m3.png'),
            homeimge5:require('../../asset/merkuri/m5.png'),
            homeimge6:require('../../asset/merkuri/m2.png'),


        },
        peykleri: {
            text1: 'Peyki yoxdur'
        }
    },
    {
        id: 4,
        planet: 'Venera',
        imge1: require('../../asset/imge/venera.png'),
        imge2: require('../../asset/imge/venera1.png'),
        video: require('../../asset/imge/venerav.mp4'),
        video1: require('../../asset/venera/v.mp4'),
        home: {
            text1: 'Venera, köhnəlmiş adı Zöhrə — Günəş sistemində yerləşən ikinci planet. Günəş ətrafında hərəkətini 224,7 Yer gününə başa vurur. Günəş sistemində yerləşən digər planetlərə nisbətən ən uzun öz oxu ətrafında dönmə perioduna (243 gün) sahibdir və digər planetlərdən fərqli olaraq əks istiqamətdə fırlanır. Venera təbii peykə sahib deyildir. Onun adı Roma mifologiyasındakı sevgi və gözəllik ilahəsi olan Veneradan gəlir. ',
            text2: 'Venera gecə səmasında Aydan sonra ən parlaq şəkildə görünən ikinci təbii göy cismidir və −4,6-ya çatan ulduz ölçüsü ilə kölgə yarada biləcək qədər parlaqdır və nadir hallarda aydın gündüzlərdə adi gözlə görülə bilər. Yerin orbiti daxilində dönən Venera daxili planetdir və heçvaxt Günəşdən çox uzaqlaşmır; Günəşdən maksimum bucaq uzaqlığı 47,8°-dır.',
            text3: "Gün: 224.7  , Il: 243 Yer günü , Günəşdən:  67 million mil | 108 million kilometr , Peykləri: 0",
            text4: 'Venera Yer tipli planetdir və bəzən Yerin bacı planeti olaraq adlandırılır. Oxşar ölçüləri, kütləsi, tərkibi və Günəşə yaxınlığı səbəbindən belədir. Digər tərəfdən Yerdən ciddi şəkildə fərqlənir. Venera Yer tipli dörd planetin 96%-i karbon dioksid olan ən sıx atmosferinə sahibdir. Planetin atmosfer təzyiqi Yerdəki atmosfer təzyiqindən 92 dəfə daha çoxdur. ',
            text5: ' Bu göstərici Yerdə suyun 900 m dərinliyində olan təzyiq göstəricisinə uyğun gəlir. Venera Günəş sisteminin ən isti planetidir. 462 °C-yə çatan səth istiliyi ilə Günəşə daha yaxın olan Merkuridən belə daha istidir. Venera səthinin birbaşa görünməsinə əngəl olan sulfat turşularının sıx bulud təbəqəsi ilə örtülmüşdür. Planetin keçmişdə su okeanlarına sahib olduğu düşünülür, ancaq istixana effektinin təsiri ilə su tədricən buxarlanmışdır. ',
            text6: ' Səmadakı ən parlaq göy cisimlərindən biri olan Venera yazılı qeydlərin olduğu dövrlərdən bu yana mədəniyyətdə mühüm yer tutmuşdur. Venera çoxlu qədim mədəniyyətdə müqəddəs ilah kimi qəbul olunmuş, şair və yazıçılara səhər ulduzu, axşam ulduzu kimi adlarla ilham qaynağı olmuşdur. Venera e.ə. II minillik kimi erkən tarixdə hərəkətləri müəyyənləşdirilən ilk planetdir ',
            homeimge1: require('../../asset/venera/v1.png'),
            homeimge2: require('../../asset/venera/v2.png'),
            homeimge3: require('../../asset/venera/v5.png'),
            homeimge4: require('../../asset/venera/v4.png'),
            homeimge5: require('../../asset/venera/v5.png'),
            homeimge6: require('../../asset/venera/v3.png'),

        },
        peykleri: {
            text1: 'Peyki yoxdur'
        }
    },
    {
        id: 5,
        planet: 'Yupiter',
        imge1: require('../../asset/imge/yupiter.png'),
        imge2: require('../../asset/imge/yupiter2.png'),
        video: require('../../asset/imge/yupiterv.mp4'),
        video1: require('../../asset/yupiter/y.mp4'),
        home: {
            text1: ' Günəş sistemində Günəşdən məsafəsinə görə beşinci, böyüklüyünə görə birinci planet. Yupiter Günəşin kütləsinin mində birinə bərabər olsa da, digər planetlərin cəmi kütləsindən 2,5 dəfə çox kütləyə malik qaz nəhəngidir. Yupiter qədim dövrlərdən etibarən astronomlara məlumdur. Adının mənşəyi Roma mifologiyasında baş tanrı hesab olunan Yupiterdən qaynaqlanır. ',
            text2: 'Yupiter əsasən Hidrogendən təşkil olunsa da, kütləsinin dörddə birini Helium təşkil edir. Yupiter digər qaz nəhəngləri kimi qayalıq səthə malik deyildir, ancaq bərk maddələrdən təşkil olunmuş nüvəyə malik olması ehtimal olunur. Öz oxu ətrafında sürətlə dövr etməsi səbəbindən planet qütblərdən basıq, ekvatordan qabarıqdır.',
            text3: "Gün: 9.93 saat , Il: 11.86  Yer ili , Diyametri: 88,846  mil | 142,984 kilometr , Peykləri: 79",
            text4: ' Yupiter dəfələrlə kosmik cihazlar tərəfindən müşahidə olunmuşdur. Bunlardan Pioner və Voyacer yaxın uçuş missiyalarını, həmçinin Qalileo və Yuno orbit missiyalarını xüsusilə qeyd etmək olar. 2007-ci ildə Yeni üfüqlər missiyası Plutona gedən yolda sürətini artırmaq və yolunu düzəltmək üçün Yupiterin cazibə qüvvəsindən istifadə etmiş və bu zaman bir daha planeti yaxından müşahidə etmək fürsəti yaranmışdır.',
            text5: 'Yupiterə göndərilmiş sonuncu missiya olan Yuno planetin orbitinə 4 iyul 2016-cı ildə daxil olmuşdur.[14][15] Gələcəkdə Yupiterə buzla örtülmüş maye okeana sahib olan peyki Avropanı müşahidə etmək üçün yeni missiyanın təşkil olunması nəzərdə tutulub ',
            text6: 'Yupiter əsasən qaz və maye şəklində olan maddələrdən təşkil olunmuşdur. Planet ölçüsünə görə Günəş sistemində birinci yerdədir. Yupiterin ekvatorial diametri 142,984 km-ə bərabərdir. Sahib olduğu 1,326 q/sm3 sıxlığı ilə planet qaz nəhəngləri arasında ikinci yerdə olsa da, qayalıq tipli daxili planetlərdən geri qalır.',
            homeimge1:require('../../asset/yupiter/y.png'),
            homeimge2:require('../../asset/yupiter/y1.png'),
            homeimge3:require('../../asset/yupiter/y2.png'),
            homeimge4:require('../../asset/yupiter/y3.png'),
            homeimge5:require('../../asset/yupiter/y4.png'),
            homeimge6:require('../../asset/yupiter/y2.png'),

        },
        peykleri: {
            name:'Qanimed',
            name1:'Kallisto',
            name2:'İo',
            name3:'Avropa',
            text: 'Qanimed — Günəş sistemində Yupiter planetinin ən böyük peyki.',
            text1:'Kallisto Yupiterin ən böyük 2-ci, Günəş sisteminin isə 3-cü ən böyük təbii peykidir. 1610-cu ildə Qalileo Qaliley tərəfindən kəşf edilən və bu səbəbdən Qaliley peyklərinə aid edilən Kallisto bu qrupun ən uzaqda yerləşən peykidir. Günəş sistemində ən çox kraterə sahib göy cismidir. Səthi son 4 milyard ildə heç dəyişməmişdir.',
            text2:'İo — Günəş sistemində Yupiter planetinin peykidir. Bu peyklər arasında Yupiterə ən yaxın olanıdır və planetin ətrafındakı bir dövrəni tam 1.769 gündə tamamlayır.',
            text3:'Avropa, Yupiter II — Yupiter planetinin Qaliley peykləri arasındaki ən kiçiyi. Günəş sisteminin ən böyük altıncı təbii peyki. Avropa 1610-cu ildə Qalileo Qaliley tərəfindən kəşf edilmişdir. Yunan mifologiyasındakı ekvivalenti Zevs olan Roma tanrısı Yupiter tanrısının məşuqəsi Europa şərəfinə adlandırılmışdır. Aydan bir qədər kiçik olan peyk əsasən silikat daşdan, səthdə su-buz qarışıq qabıqdan və böyük ehtimalla dəmir-nikel nüvədən ibarətdir. Çoxu oksigendən ibarət seyrək atmosferə sahibdir. Avropanın səthi çat və cızıqlarla örtülmüşdür. Kosmosdaki əksər qatı planetlərin əksinə kraterleri çox azdır. Günəş sistemində bilinən obyektlər içərisində ən hamar səthə sahib olan kosmik obyektdir.',
            peykimge: require('../../asset/imge/qa.png'),
            peykimge1: require('../../asset/imge/ka.png'),
            peykimge2: require('../../asset/imge/io.png'),
            peykimge3: require('../../asset/imge/av.png'),
        }
    },
    {
        id: 6,
        planet: 'Saturin',
        imge1: require('../../asset/imge/saturin.png'),
        imge2: require('../../asset/imge/saturin1.png'),
        video: require('../../asset/imge/saturinv.mp4'),
        video1: require('../../asset/saturin/s.mp4'),
        home: {
            text1: 'Saturn, köhnəlmiş adı Zühəl — Günəş sistemində Yupiterdən sonra ən böyük ikinci, Günəşdən məsafəsinə görə altıncı planet. Saturn radiusu Yerin radiusundan təqribən doqquz dəfə böyük olan qaz nəhəngidir. Saturnun sıxlığı Yerin sıxlığının səkkizdə biri qədər olsa da, həcmi Yerin həcmindən 95 dəfə çoxdur.Planetin adı Roma mifologiyasında tanrı olan Saturndan gəlir və astronomik simvolu (♄) Saturnun orağını təmsil edir.',
            text2: 'Ehtimal olunur ki, Saturnun daxili nüvəsi dəmir-nikel və qayadan (silisium və oksigen birləşmələri) təşkil olmuşdur. Bu nüvənin də metallik hidrogenlə əhatələndiyi, orta təbəqələrdə maye hidrogenlə maye heliumun yerləşdiyi və Frenkel xəttindən xaricdə qalan hissənin də qaz təbəqəsindən ibarət olduğu düşünülür',
            text3: "Gün: 10.7 saat , Il: 29  Yer ili , Radiusu: 36,183.7  mil | 58,232 kilometr , Peykləri: 83",
            text4: 'Saturnun yuxarı atmosferi ammonyak kristallarından təşkil olunduğundan rəngi açıq sarı görünür. Metallik hidrogen təbəqəsindəki elektrik axınının planetin maqnit sahəsinin yaranmasına səbəb olduğu düşünülür. Bu axın Yerdəkinə nisbətən daha zəif olmasına baxmayaraq, planetin böyük ölçüləri səbəbindən onun maqnit momenti Yerin maqnit momentindən 580 dəfə böyükdür. ',
            text5: 'Saturnda küləyin sürəti 1800 km/saata bərabərdir ki, bu göstərici Yupiterdəkindən daha güclü, Neptundakından isə daha zəifdir. 2019-cu ilin yanvarında tədqiqatçılar Saturnun C halqası üzərində aparılan araşdırmalara əsasən bir Saturn gününün 10 saat 33 dəqiqə 38 saniyə (± 1 dəqiqə 19 saniyə) olduğunu müəyyən etmişlər.',
            text6: 'Saturn doqquzu davamlı halqa və üçü davamsız kaman formalı olmaqla buz hissəcikləri, qaya parçaları və kosmik tozdan ibarət olan diqqətçəkən halqa sisteminə sahibdir. Saturnun kəşf olunmuş 82 peyki vardır[25] ki, bunlardan 53-ü rəsmi şəkildə adlandırılmışdır. ',
            homeimge1: require('../../asset/saturin/s.png'),
            homeimge2: require('../../asset/saturin/s1.png'),
            homeimge3: require('../../asset/saturin/s2.png'),
            homeimge4: require('../../asset/saturin/s3.png'),
            homeimge5: require('../../asset/saturin/s4.png'),
            homeimge6: require('../../asset/saturin/s2.png'),

        },
        peykleri: {
            name:'Titan',
            name1:'Pan',
            name2:'İo',
            name3:'Avropa',
            text: 'Titan — Günəş sistemində Saturn planetinin peykidir. Günəş sistemində Yerin cavanlığına bənzər göy cismi bilirik ki, Titan-dır. Maraq cəlb edən Titanı araşdırdıqda kəşf etdik ki, onda yağışlı mövsümlər mövcuddur. Bu mövsüm başlandıqda peykdə tufanlar, fırtınalar qopur, eləcə də, leysanlar gedir. Bunun nəticəsində peykin səthi eroziyaya məruz qalır. Bir də Yerdən fərqli olaraq Titanda 1 mövsümün müddəti 7.5 Yer ilinə bərabərdir.',
            text1:'Pan Saturnun ən daxili adlı peykidir. Bu, təqribən 35 km enində və 23 km enində olan kiçik, qoz formalı aydır və Saturnun A halqasındakı Encke boşluğunda orbitə çıxır. Pan üzük çobanıdır və Encke Boşluğunu üzük hissəciklərindən azad saxlamaq üçün məsuliyyət daşıyır. Bəzən ravioli görünüşünə malik olaraq təsvir edilir.',
            text2:'Ətraflı məlumat azdır',
            text3:'Ətraflı məlumat azdır',
            peykimge: require('../../asset/imge/ti.png'),
            peykimge1: require('../../asset/imge/pan.png'),
            peykimge2: require('../../asset/imge/io.png'),
            peykimge3: require('../../asset/imge/av.png'),

     
        }
    },
    {
        id: 7,
        planet: 'Uran',
        imge1: require('../../asset/imge/uran.png'),
        imge2: require('../../asset/imge/uran2.png'),
        video: require('../../asset/imge/uranv.mp4'),
        video1: require('../../asset/uran/u.mp4'),
        home: {
            text1: 'Günəş sisteminin yeddinci planeti olan Uran çox soyuq və küləkli planetdir. Onun orbitində müxtəlif forma və ölçülərə malik 27 peyk dövr edir. Onlardan 5-i kifayət qədər iridir.',
            text2: 'Uranın formalaşma dövrü 4.500 milyon il bundan əvvələ gedib çıxır. Planet formalaşarkən ətrafda olan qaz və tozu özünə dartmağa başlamışdır. Uran öz qonşusu Neptun kimi də o Günəşə yaxın yerdə yaranmışdır və 4 milyon il bundan əvvəl sistemin kənarlarına doğru hərəkət etmişdir. Və indi günəşdən yeddinci yerdə dayanır.',
            text3: "Gün: 17 saat 14 dəqiqə , Il: 84 Yer ili , Radiusu: 15,759.2 mil | 25,362 kilometr , Peykləri: 27",
            text4: 'Uran 1781-ci ildə ingilis astronomu Uilyam Qerşel tərəfindən kəşf edilib. Baxmayaraq ki o, Uranı komet və ya ulduz hesab etmişdir bu kəşf onun adına yazılmışdır. İki ildən sonra bu cism Johann Elert Bodenin müşahidələri sayəsində yeni planet kimi qəbul edilmişdir. Bu planetə adı da məhz Johann Bode vermişdir. Uran yunan əfsanələrində səma allahı adını daşıyırdı. ',
            text5: 'Uran yeganə iki planetdən biridir ki, oxu ətrafında tərsinə fırlanır.Günəş sistemimizin kənar bucaqlarındda olan Uran iki planetdən biridir. Həcmin çox hissəsi, demək olar ki 80%-dən bir az çox, sıx maye halında olan materialdan ibarətdir. Planetin nüvəsi çox kiçik daş-qayadan ibarət olan bir nüvədir. Nüvədə hərarət 4,982°C qədər qalxır. Uran diametrə görə Neptundan böyük olsa da, kütlə etibarilə ondan kiçikdir. Sıxlığına görə qaz planetləri sırasında ikinci yerdə dayanır. Bu göstəriciyə görə Saturn axırıncı yeri tutur.',
            text6: 'Uranın atmosferini ilk dəfə Voyacer 2 kosmik aparatı 1986-cı ildə müşahidə etmişdir. Ancaq sonrakı müşahidələr onu göstərir ki, Uranda hərəkətdə olan buludlar vardır. Vaxtaşırı bu buludlar rəngini dəyişir, gah parlaq olur gah da tündləşırlər. Planetin səthində ən ekstrimal hərarət –224.2°C-dir. Bu onu günəş sistemimizdə ən soyuq planet edir. Külləyin sürəti saatda 900km-ə çatır. Küləklər ekvatorda planetin oxu ətrafında fırlanmasının əksinə doğru əsirlər. Ancaq planetin qütblərində küləklər düz istiqamətdə, planetin fırlanmasıyla eyni istiqamətdə əsirlər.',
            homeimge1: require('../../asset/uran/u.png'),
            homeimge2: require('../../asset/uran/u1.png'),
            homeimge3: require('../../asset/uran/u2.png'),
            homeimge4: require('../../asset/uran/u3.png'),
            homeimge5: require('../../asset/uran/u4.png'),
            homeimge6: require('../../asset/uran/u.png'),

        },
        peykleri: {
            name:'İnner',
            name1:'Irregular',
            name2:'Large',
            text: '2020-ci ilə kimi Uranın 13 daxili peyki olduğu bilinir. Onların orbitləri Miranda orbitinin içərisindədir. Bütün daxili aylar, ehtimal ki, bir və ya bir neçə kiçik daxili ayın parçalanması nəticəsində yaranan Uranın halqaları ilə sıx bağlıdır.Ən daxili iki peyk (Kordeliya və Ofeliya) Uranın ε halqasının çobanlarıdır, kiçik ay Mab isə Uranın ən xarici μ halqasının mənbəyidir. Uranın α və β halqalarından təxminən 100 km kənarda yerləşən daha iki kiçik (radiusda 2-7 km) kəşf edilməmiş çoban peyki ola bilər.',
            text1:'2005-ci ildən etibarən Uranın doqquz nizamsız peyki olduğu bilinir və bu, böyük peyklərin ən uzaqı olan Oberonunkindən çox daha böyük bir məsafədə fırlanır. Bütün qeyri-müntəzəm aylar, ehtimal ki, Uran formalaşdıqdan qısa müddət sonra onu tələyə salmış cisimlərdir.[3] Diaqram indiyə qədər aşkar edilmiş nizamsız peyklərin orbitlərini təsvir edir. X oxunun üstündəki aylar irəli, altındakılar isə geriyə doğrudur. Uran təpəsinin sferasının radiusu təxminən 73 milyon km-dir',
            text2:'Uranın beş böyük peyki var: Miranda, Ariel, Umbriel, Titania və Oberon. Onların diametri Miranda üçün 472 km-dən Titaniya üçün 1578 km-ə qədər dəyişir.[18] Bütün bu aylar nisbətən qaranlıq obyektlərdir: onların həndəsi albedosu 30-50%, Bond albedosu isə 10-23% arasında dəyişir.[21] Umbriel ən qaranlıq ay və Ariel ən parlaq aydır. Ayların kütlələri 6,7 × 1019 kq (Miranda) ilə 3,5 × 1021 kq (Titania) arasında dəyişir.',
            peykimge: require('../../asset/imge/in.png'),
            peykimge1: require('../../asset/imge/ir.png'),
            peykimge2: require('../../asset/imge/la.png'),
     
        }
    },
    { 
        id: 8,
        planet: 'Neptun',
        imge1: require('../../asset/imge/neptun.png'),
        imge2: require('../../asset/imge/neptun2.png'),
        video: require('../../asset/imge/neptunv.mp4'),
        video1: require('../../asset/neptun/n.mp4'),
        home: {
            text1: 'Neptun — Günəş sistemində səkkizinci və məlum olan ən uzaq planet. Nəhəng planetlər qrupuna daxil olan Neptun Günəş sistemində diametrinə görə dördüncü, kütləsinə görə isə üçüncü yeri tutur. Neptunun kütləsi Yerin kütləsindən 17 dəfə daha çoxdur. Bu göstərici Neptunun əkizi hesab olunan Uranda 15 dəfəyə uyğun gəlir. Neptun Günəşdən 30,1 AV uzaqlıqda (4,50×109 km) yerləşir və Günəş ətrafında hərəkətini 164,8 ilə tamamlayır. Neptun adı Roma mifologiyasından qaynaqlanır. Neptun Roma mifologiyasında dəniz tanrısı hesab olunurdu. Planetin astronomik simvolu olan ♆ işarəsi də Neptunun əlində təsvir olunan üçdişli mizraqla bağlıdır',
            text2: 'Neptunu adi gözlə görmək mümkün deyildir və Günəş sistemində varlığı riyazi hesablamalarla qabaqcadan xəbər verilərək empirik müşahidələrlə tapılan ilk planetdir. Aleksi Buvanın rəhbərliyində aparılan tədqiqatlar nəticəsində, Uranın orbitində baş verən gözlənilməz dəyişikliklərə bilinməyən planetin səbəb ola biləcəyi düşüncəsi ortaya atıldı. Neptun daha sonradan 23 sentyabr 1846-cı ildə İohann Qotfrid Qal tərəfindən Urban Leveryenin qabaqcadan xəbər verdiyi mövqenin çox yaxınlığında müşahidə olundu.',
            text3: "Gün: 16 saat  , Il: 165 Yer ili , Radiusu: 15,299.4 mil | 24,622 kilometr , Peykləri: 14",
            text4: ' Neptunun ən böyük peyki olan Triton planetin kəşfindən qısa müddət sonra kəşf olunsa da, qalan 14 peyk XX əsrdə kəşf olunmuşdur. Neptun Yerdən çox uzaqda yerləşməsi səbəbindən kiçik görünür və bu da onun teleskoplarla müşahidəsini çətinləşdirir. 25 avqust 1989-cu ildə Voyacer 2 kosmik gəmisi Neptunun yaxınlığından keçərək müşahidələr aparmışdır.[6] Bundan başqa Habbl teleskopu və Yerdəki böyük teleskopların uyğun optik sistemlərindən istifadə olunaraq Neptunun uzaqdan da ətraflı müşahidəsi mümkün olmuşdur.',
            text5: 'Neptunun tərkibi qaz nəhəngləri olan Yupiter və Saturndan fərqli olaraq Uranla oxşardır. Neptunun atmosferi Yupiter və Saturnda olduğu kimi əsasən Hidrogen və Helium olmaqla, Karbohidrogenlər və Azotdan təşkil olunduğu halda, nisbətən yüksək miqdarda olan Su, Ammonyak və Metan buzları ilə onlardan fərqlənir.',
            text6: ' Neptunun daxili Uran kimi buz və qayadan ibarətdir.[7] Bu fərqin olması səbəbindən, Uran və Neptun astronomlar tərəfindən buz nəhəngləri olaraq təsnif olunmuşdur.[8] Neptunun göy rəngi planetin üst qatlarında mövcud olan Metandan qaynaqlanır.',
            homeimge1: require('../../asset/neptun/n.png'),
            homeimge2: require('../../asset/neptun/n1.png'),
            homeimge3: require('../../asset/neptun/n2.png'),
            homeimge4: require('../../asset/neptun/n3.png'),
            homeimge5: require('../../asset/neptun/n4.png'),
            homeimge6: require('../../asset/neptun/n2.png'),

        },
        peykleri: {
            name:'Tiriton',
            name1:'Nereid',
            text: 'Triton retrograd və kvazi dairəvi orbiti izləyir və qravitasiya ilə tutulan peyk olduğu düşünülür. Bu, Günəş Sistemindəki ikinci ay idi ki, əhəmiyyətli bir atmosferə sahib olduğu kəşf edildi, ilk növbədə azotdan və az miqdarda metan və karbonmonoksitdən ibarətdir.',
            text1:'Nereid Neptunun üçüncü ən böyük peykidir. O, irəliləmiş, lakin çox eksantrik orbitə malikdir və Tritonun tutulması zamanı qravitasiya qarşılıqlı təsirləri ilə indiki orbitinə səpələnmiş keçmiş müntəzəm peyk olduğuna inanılır. Onun səthində su buzu spektroskopik olaraq aşkar edilmişdir.',
            peykimge: require('../../asset/imge/tir.png'),
            peykimge1: require('../../asset/imge/ner.png'),
     
        }
    },
]


export const PlanetSlice = createSlice({
    name: "Planet",
    initialState: { value: initialStateValue },
    reducers: {
        planetaction: (state, action) => {
            state.value = action.payload
        }
    }
})

export const Planetreducer = PlanetSlice.reducer;
export const { planetaction } = PlanetSlice.actions