import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import onboardingcss from '../Onboarding/onboardingcss';
const questions = [
  {
    question: 'Xarici planetlərə daxil deyil:',
    options: ['Saturin', 'Neptun', 'Venera', 'Yupiter'],
    correctAnswer: 'Venera',
  },
  {
    question: 'Planetlər hansı qruplara bölünür?',
    options: ['Daxili-Xarici', 'Böyuk-Kiçik', 'Daxili-Böyuk', 'Xarici-Kiçik'],
    correctAnswer: 'Daxili-Xarici',
  },
  {
    question: 'Ulduzların şüaları ilə işıqlanan nisbətən iri və soyuq səma cisimləri:	',
    options: ['Peyklər', '	Planetlər', 'Komentlər', 'Meteoritlər'],
    correctAnswer: '	Planetlər',
  },
  {
    question: 'Ən çox asteroid cəmlənmişdir:	',
    options: ['Merkuri və Venera planetlərinin orbitləri arasında', 'Uran və Neptun planetlərinin orbitləri arasında', 'Venera və Yer planetlərinin orbitləri arasında', 'Yupiter və Mars planetlərinin orbitləri arasında'],
    correctAnswer: 'Yupiter və Mars planetlərinin orbitləri arasında',
  },
  {
    question: 'Daxili planetlərə daxil deyil:	',
    options: ['Venera', 'Yupiter', 'Merkuri', 'Mars'],
    correctAnswer: 'Yupiter',
  },
  {
    question: 'Ay səthinin yaxınlığında hansı qazlara rast gəlinir?	',
    options: ['Hidrogen və helium', 'Oksigen və neon', 'Helium və neon', '	Hidrogen və neon'],
    correctAnswer: '	Hidrogen və neon',
  }, {
    question: 'Planetlərdən hansı Günəş ətrafında daha tez fırlanır.	',
    options: ['Saturn', '	Venera', 'Merkuri', 'Mars'],
    correctAnswer: 'Merkuri',
  }, {
    question: 'Yerin sıxılmış ellips formasında olmasını kim söyləmiş?	',
    options: ['Nyuton', 'Erotosfen', 'Pifaqor', 'Aristotel'],
    correctAnswer: 'Nyuton',
  }, {
    question: 'Neptun nə rəngdədir?	',
    options: ['Qara', 'Mavi', 'Qırmızı', 'Sarı'],
    correctAnswer: 'Mavi',
  }, {
    question: 'Günəşə ən yaxın planet hansıdır?',
    options: ['Yupiter', 'Mars', 'Venera', 'Merkuri'],
    correctAnswer: 'Merkuri',
  }, {
    question: 'Merkurinin günəşə yaxınlığı:',
    options: ['58', '57', '56', '55'],
    correctAnswer: '58',
  }, {
    question: 'Yerin nüvəsində istilik nə qədərdir?',
    options: ['8000', '2700', '3500-5000', '5000'],
    correctAnswer: '3500-5000',
  }, {
    question: 'Planetlər və digər fəza cisimləri yaranmışdır:	',
    options: ['Kainatdakı toz və qaz hissəciklərindən', 'Kainatdakı toz hissəciklərindən', 'Oksigen və hidrogendən', '	Hidrogen və heliumdan'],
    correctAnswer: 'Kainatdakı toz və qaz hissəciklərindən',
  }, {
    question: 'Daxili planetlər hansı sırada düzgün verilmişdir?	',
    options: ['Neptun, Pluton, Venera, Yer', 'Yupiter, Uran, Merkuri, Saturn', 'Merkuri, Venera, Yer, Mars', 'Heç biri'],
    correctAnswer: 'Merkuri, Venera, Yer, Mars',
  }, {
    question: 'Yerdə həyatın inkişafına səbəb olan amillərə aid deyil:	',
    options: ['Daxili təbəqənin olması', 'Suyun olması', '	Xarici təbəqənin olması', '	Relyefin olması'],
    correctAnswer: '	Relyefin olması',
  }, {
    question: 'Nəyə görə başqa planetlərdə məsələn Yupiterdə həyat yoxdur?	',
    options: ['Atmosfer var', 'Yaşamaq olar', 'Su yoxdur', 'Çünki burada hava su yoxdur və qabığı yumşaqdır'],
    correctAnswer: 'Çünki burada hava su yoxdur və qabığı yumşaqdır',
  }, {
    question: 'Qalaktika sözü hansı dildən götürülmüşdür?	',
    options: ['	Fars', '	İngilis', 'Ərəb', 'Yunan'],
    correctAnswer: 'Yunan',
  }, {
    question: 'Yer kürəsi öz oxu ətrafında nə qədər vaxta dövr edir?	',
    options: ['24 saat 37 dəq 25 san', '23 saat 56 dəq 4 san', '22 saat 57 dəq 56 san', '	24 saat 15 dəq 17 san'],
    correctAnswer: '23 saat 56 dəq 4 san',
  }, {
    question: 'Başqa planetlərdə olmayan yalnız Yer kürəsində olan nədir?	',
    options: ['Toz-torpaq', 'Səhralar', 'Dağ', 'Hava'],
    correctAnswer: 'Hava',
  }, {
    question: 'Daxili planetləri ən çox necə adlandırırlar?	',
    options: ['	Nəhəng planetlər', 'Mikro planetlər', 'Yer tipli planetlər', 'Günəş planetləri'],
    correctAnswer: 'Yer tipli planetlər',
  }, {
    question: 'Hazırda kainatda neçə qalaktika var?	',
    options: ['100 və daha çox', '10 000 və daha çox', '100 000 000 və daha çox', '100 000 və daha çox'],
    correctAnswer: '100 000 000 və daha çox',
  }, {
    question: 'Planetlər neçə yerə bölünür?	',
    options: ['4', '2', '3', '8'],
    correctAnswer: '2',
  }, {
    question: 'Son illər süni peyklərin köməyi ilə aparılmış ölçü işlərinin təhlili Yerin formasının daha mürəkkəb, yəni Şimal qütb sahəsində qabarıq, Cənub qütb ərazisində isə batıq olmaqla, “ Ürəyə “ oxşadığını nəzərə alaraq, onu məhz belə adlandırmışlar?	',
    options: ['0 (sıfır) təhrifli xətt', '0 (sıfır) təhrifli nöqtə', 'Kardioid', 'Anomaliya'],
    correctAnswer: 'Kardioid',
  },
  {
    question: 'Güneş sistemində ən böyük planet hansıdır?',
    options: ['Merkuri', 'Venera', 'Yupiter', 'Mars'],
    correctAnswer: 'Yupiter',
  },
  {
    question: 'Ay hansı planetin peykidir?',
    options: ['Merkuri', 'Venera', 'Dünya', 'Saturn'],
    correctAnswer: 'Dünya',
  },
  {
    question: 'Planetlərin sırasını yerinə yetirin: Güneşdən uzaqdan yaxına',
    options: ['Merkuri, Venusra, Dünya', 'Dünya, Venusra, Merkuri', 'Venera, Merkuri, Dünya', 'Mars, Dünya, Jüpiter'],
    correctAnswer: 'Merkuri, Venusra, Dünya',
  },
  {
    question: 'Qızıl planet adı ilə məşhurdur:',
    options: ['Venera', 'Saturn', 'Uran', 'Neptun'],
    correctAnswer: 'Saturn',
  },
  {
    question: 'Güneş sistemində ən kiçik planet hansıdır?',
    options: ['Merkuri', 'Venera', 'Pluto', 'Mars'],
    correctAnswer: 'Merkuri',
  },
  {
    question: 'Güneş sisteminin adi necədir?',
    options: ['Galaktika', 'Yıldız Dünyası', 'Aysistemi', 'Güneş Ailəsi'],
    correctAnswer: 'Güneş Ailəsi',
  },
  {
    question: 'Güneş sistemində neçə planet vardır?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
  },
  {
    question: 'Saturnun hansı xüsusiyyəti onu unikal edir?',
    options: ['Güclü yel', 'Büyük temperatur fərqi', 'Ən böyük planet', 'Zəngin oksijen atmosferi'],
    correctAnswer: 'Güclü yel',
  },
  {
    question: 'Təxminən neçə günlük bir həddə görə Venusa dünya etrafında dönür?',
    options: ['20 gün', '60 gün', '240 gün', '365 gün'],
    correctAnswer: '240 gün',
  },
  {
    question: 'Güneş sistemində ən böyük daşıyıcı planet hansıdır?',
    options: ['Jüpiter', 'Saturn', 'Uran', 'Neptun'],
    correctAnswer: 'Jüpiter',
  },
  {
    question: 'Güneş sistemindəki ən böyük planet hansıdır?',
    options: ['Merkuri', 'Yupiter', 'Dünya', 'Uran'],
    correctAnswer: 'Yupiter',
  },
  {
    question: 'Pluto artıq güneş sistemində rəsmi olaraq hansı qrupda deyil?',
    options: ['Dünya', 'Cücələr', 'Jupiter', 'Astəroidlər'],
    correctAnswer: 'Dünya',
  },
  {
    question: 'Saturn necə bir planetdir?',
    options: ['Qızıl planet', 'Mavi planet', 'Yanğın planet', 'Buz planet'],
    correctAnswer: 'Qızıl planet',
  },
  {
    question: 'Marsta hansı neçə peykidir?',
    options: ['0', '1', '2', '4'],
    correctAnswer: '2',
  },
  {
    question: 'Güneş sistemində ən böyük ikinci planet hansıdır?',
    options: ['Saturn', 'Neptun', 'Yupiter', 'Uran'],
    correctAnswer: 'Saturn',
  },
  {
    question: 'Hansı planet “Qırmızı Planet” kimi tanınır?',
    options: ['Mars', 'Neptun', 'Yupiter', 'Uran'],
    correctAnswer: 'Mars',
  }, {
    question: 'Güneş sistemində ən böyük ikinci planet hansıdır?',
    options: ['Oksigen', 'Karbon qazı', 'Helium', 'Azot'],
    correctAnswer: 'Karbon qazı',
  }, {
    question: 'Veneranın atmosferində ən çox hansı qaz var?',
    options: ['Saturn', 'Neptun', 'Yupiter', 'Uran'],
    correctAnswer: 'Saturn',
  }, {
    question: 'Günəş sistemimizdə səthin temperaturu ən yüksək olan planet hansıdır?',
    options: ['Saturn', 'Neptun', 'Yupiter', 'Venera'],
    correctAnswer: 'Venera',
  }, {
    question: 'Günəş sistemindəki və Yupiter ətrafında fırlanan ən böyük peyk hansıdır?',
    options: ['Titan', 'İo', 'Avropa', 'Qanimed'],
    correctAnswer: 'Qanimed',
  }, {
    question: 'Böyük Qırmızı Ləkə hansı planetin görkəmli xüsusiyyətidir?',
    options: ['Mars', 'Neptun', 'Yupiter', 'Uran'],
    correctAnswer: 'Yupiter',
  }, {
    question: 'Hansı planetin çoxsaylı halqalardan ibarət kütləvi halqa sistemi var?',
    options: ['Saturn', 'Neptun', 'Yupiter', 'Uran'],
    correctAnswer: 'Saturn',
  },
  {
    question: 'Hansı planetin günü onun ilindən uzundur?',
    options: ['Uran', 'Neptun', 'Merkuri', 'Venera'],
    correctAnswer: 'Venera',
  }, {
    question: 'Günəş sistemimizin ən böyük vulkanı Olimp Mons hansı planetdə yerləşir?',
    options: ['Uran', 'Neptun', 'Yupiter', 'Mars'],
    correctAnswer: 'Mars',
  }, {
    question: 'Hansı planetin orbital müstəvisinə demək olar ki, paralel olan unikal fırlanma oxu var?',
    options: ['Yer', 'Neptun', 'Venera', 'Uran'],
    correctAnswer: 'Uran',
  }, {
    question: 'Hansı planetin peyki Triton planetin fırlanmasının əks istiqamətində orbitdədir?',
    options: ['Merkuri', 'Neptun', 'Venera', 'Uran'],
    correctAnswer: 'Neptun',
  },
];

const Sual = ({ navigation }: any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerSelect = (selectedIdx: any) => {
    setSelectedAnswerIndex(selectedIdx);
    setShowCorrectAnswer(true);

    setTimeout(() => {
      if (questions[currentQuestionIndex].options[selectedIdx] === questions[currentQuestionIndex].correctAnswer) {
        if (currentQuestionIndex === questions.length - 1) {
          // navigation.navigate('Tabbar', { screen: 'HomeScreen' });  // Navigate to home screen when last question is answered
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }else{
        navigation.navigate('Tabbar', { screen: 'HomeScreen' })

      }
      setSelectedAnswerIndex(-1);
      setShowCorrectAnswer(false);

    }, 1000);
  };

  const renderOptions = () => {
    return questions[currentQuestionIndex].options.map((option, idx) => (
      <TouchableOpacity
        key={idx}
        onPress={() => handleAnswerSelect(idx)}
        style={[
          styles.optionButton,
          selectedAnswerIndex === idx && styles.selectedOption,
          showCorrectAnswer && idx === questions[currentQuestionIndex].options.indexOf(questions[currentQuestionIndex].correctAnswer) && styles.correctOption,
        ]}
        disabled={selectedAnswerIndex !== -1}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../../asset/d/d3.mp4')}
        resizeMode="cover"
        style={onboardingcss.video}
        repeat={true}
      />
      <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
      <View style={styles.optionsContainer}>{renderOptions()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: '#FFFFFF',
    padding: 30,
    borderRadius: 10
  },
  optionsContainer: {
    alignItems: 'center',

  },
  optionButton: {
    width: 250,
    // padding: 10,
    marginVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 25,
    borderRadius: 10
  },
  selectedOption: {
    backgroundColor: '#EB6306',
  },
  correctOption: {
    backgroundColor: 'green',
  },
  optionText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize:20

  },
});

export default Sual;
