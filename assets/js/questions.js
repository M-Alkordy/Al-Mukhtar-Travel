let myLisToFilter = document.querySelectorAll(".Questions .category ul li");
let myAccordion = document.querySelector(".Questions .accordion");
const lan = document.querySelector('.selected-lang')
const lann = document.querySelector('.lang-mobile')

function fetchQuestion() {
  let result = {"questions" : [
    {
        "question"       : "1-Which airports in United Arab Emirates can I travel from?",
        "answer" : "We can offer airflights reservation service between United Arab Emirates and Syria Through the following airports: Dubai Sharjah - Abu Dhabi",
        "question_ar"       : "هل يمكنني حجز رحلة ذهاب او اياب فقط ؟",
        "answer_ar" : "يمكن ان يكون الحجز من سوريا الى الامارات فقط او العكس من الامارات الى سوريا (يسمى ذهاب فقط ) كما يمكن ان يكون الحجز من سوريا الى الامارات ثم من الامارات الى سوريا او العكس ( يسمى ذهاب وعودة )",
        "cat"    : "reservation",
        "data_question_tr" : "questions-reservation-0",
        "data_answer_tr" : "answers-reservation-0",
    },
    {
        "question"       : "2-Which airports in Syria can I travel from?",
        "answer" : "We can offer airflights reservation service between United Arab Emirates and Syria through the following airports: Damascus – Aleppo- Lattakia",
        "question_ar"       : "هل يوجد وجهات محددة لدى شركتكم أو يمكنني الحجز لوجهة محددة ؟",
        "answer_ar" : "كوننا وكلاء عدة خطوط طيران سوف يتم تقسيم الحجوزات الى فئتين:<br> الفئة الأولى: 1- بين سورية والامارات 2- من الامارات الى اكثر من 200 وجهة حول العالم<brالفئة الثانية: الى كافة انحاء العالم حيث نقوم بالحجز الاونلاين للمسافر ايا كانت الوجهة التي يريدها او خطوط الطيران التي يريد الحجز عن طريقها> ",
        "cat"    : "reservation",
        "data_question_tr" : "questions-reservation-1",
        "data_answer_tr" : "answers-reservation-1",
    },
    {
        "question"       : "3-Can I book only one way trip?",
        "answer" : "The reservation could be only from Syria to United Arab Emirates or the opposite state. In other cases, could be from Syria to United Arab Emirates then back to Syria or the opposite state.",
        "question_ar"       : "ما هي المطارات التي يمكنني الحجز عن طريقها في سوريا ؟",
        "answer_ar" : "نستطيع تقديم خدمة الرحلات الجوية بين سوريا والامارات عبر مطارات المدن التالية :<br> دمشق – حلب - اللاذقية",
        "cat"    : "reservation",
        "data_question_tr" : "questions-reservation-2",
        "data_answer_tr" : "answers-reservation-2",
    },
    {
        "question"       : "4-Are there specific destinations at your company or I can book what I want?",
        "answer" : "because we are agents with many of airline companies, we will divide the reservations into two categories :<br> the first category: <br>1-from UAE to more 200 destinations around the world.<br>2-between UAE and Syria.<br> The second category: <br>around the world where we book online for traveler whatever the destination or airline company could be.",
        "question_ar"       : "ما هي المطارات التي يمكنني الحجز عن طريقها في الإمارات ؟",
        "answer_ar" : "نستطيع تقديم خدمة الرحلات الجوية بين سوريا والامارات عبر مطارات المدن التالية : <br>  دبي – الشارقة – ابو ظبي",
        "cat"    : "reservation",
        "data_question_tr" : "questions-reservation-3",
        "data_answer_tr" : "answers-reservation-3",
    },

    {
        "question"       : "5-What is the related information for booking to United Arab Emirates?",
        "answer" : "for travelers to United Arab Emirates, they need passport with expiration longer than six months, residence document for resident and entry visa for visitor. ",
        "question_ar"       : "ما هي الأوراق المطلوبة للحجز في الإمارات ؟",
        "answer_ar" : "بالنسبة للمسافريين المتوجهين الى الامارات جواز سفر فيه صلاحية أكثر من ستة أشهر + الاقامة للمقيم و تأشيرة الدخول للزائر",
        "cat"    : "reservation",
        "data_question_tr" : "questions-reservation-4",
        "data_answer_tr" : "answers-reservation-4",
    },

    {
        "question"       : "6-What is the allowed weight can I bring with me?",
        "answer" : "In general cases, the allowed weight for traveler is 30kg or 20kg with additional 7kg hand-bag. it is possible to add an amount to the basic weight, you can communicate with customer service to inquire more.",
        "question_ar"       : "ما هو الوزن المتاح حمله معي ؟",
        "answer_ar" : "عادة ما يكون الوزن المتاح للمسافر ٣٠ او ٢٠ كيلو غرام بالاضافة الى حقيبة يد وزنها ٧ كيلو غرام ويمكن اضافة وزن على الوزن الاساسي المتاح يمكنكم التواصل مع خدمة العملاء لمعرفة المزيد من التفاصيل. ",
        "cat"    : "reservation",
        "data_question_tr" : "questions-reservation-5",
        "data_answer_tr" : "answers-reservation-5",
    },
    {
        "question"       : "7-Shall I inquire more about the price of tickets?",
        "answer" : "the ticket's price can vary in accordance with the trip's date. you can communicate with customer service team to help you know more about our prices and choose what you like.",
        "question_ar"       : "هل يمكنني الاطلاع على الأسعار ؟",
        "answer_ar" : "ان اسعار تذاكر الطيران تختلف باختلاف تاريخ الرحلة يمكنكم التواصل مع فريق خدمة العملاء لمساعدتكم بالاطلاع على الاسعار واختيار ما يناسبكم.",
        "cat"    : "reservation",
        "data_question_tr" : "questions-reservation-6",
        "data_answer_tr" : "answers-reservation-6",
    },
    {
        "question"       : "1-Could I inquire more information about visas?",
        "answer" : "-The primary visas which we offer to the United Arab Emirates are in three kinds:<br>Tourism visa (single entry): this kind of visas is the most requested visa in United Arab Emirates with rate 90% and is one of the primary services we offer in Almukhtar company<br> -Tourism visa (multiple entry)<br>-Family visitor visa.",
        "question_ar"       : "هل يمكنني معرفةالمزيد عن التأشيرات",
        "answer_ar" : "التأشيرات الرئيسية اللتي نقوم باصدارها هي التأشيرات الى دولة الامارات وهي ثلاث أنواع: <br>  1- تأشيرة السياحة ( دخول مرة واحدة ) : تعتبر تأشيرة السياحة أكثر أنواع التأشيرات طلبا في الامارات بنسبة تصل الى 90% تقريبا وهي من الخدمات الرئيسية التي سنقوم بتقديمها في شركة المختار. <br> 2- تأشيرة سياحية متعددة الدخول. <br> 3- تأشيرة زيارة عائلية.",
        "cat"    : "visas",
        "data_question_tr" : "questions-visas-0",
        "data_answer_tr" : "answers-visas-0",
    },
    {
        "question"       : "2-How long time for visa to be done?",
        "answer" : "We spend about one or two days for all kinds of visas (tourism, family visitor) which we offer in our company.",
        "question_ar"       : "كم يستغرق من الوقت حجز تأشيرة",
        "answer_ar" : "تستغرق حوالي يوم أو يومين عمل سواء كانت تأشيرة زيارة عائلي أو تأشيرة سياحية متعددة الدخول أو تأشيرة السياحة",
        "cat"    : "visas",
        "data_question_tr" : "questions-visas-1",
        "data_answer_tr" : "answers-visas-1",
    },
    {
        "question"       : "3-How long the expiration for visa before ended?",
        "answer" : "The expiration at the first time (entry to UAE) is two months.<br>Whereas after the entry may vary if the visa is tourism depends on the client’s demand   ( one or two months).",
        "question_ar"       : "ما هي مدة صلاحية الفيزا ؟",
        "answer_ar" : "صلاحية استعمال الفيزا اول مرة (الدخول الى الامارات) تكون شهرين. <br> أما صلاحية الفيزا بعد الدخول تختلف اذا كانت التأشيرة سياحية تكون شهر او شهرين ( حسب طلب الزبون) <br> أما تأشيرة الزيارة العائلية تكون ثلاثة أشهر",
        "cat"    : "visas",
        "data_question_tr" : "questions-visas-2",
        "data_answer_tr" : "answers-visas-2",
    },
    {
        "question"       : "4-What the information and transactions are required for requesting visa?",
        "answer" : "For the tourism visa :  activated passport at least six months- personal photo-Copied photo of passport.<br>For the family visitor visa : activated passport at least six months -personal photo- copied photo of passport – work contract for host with salary 5000 dirhams or more – authenticated proof of kinship – family document or marriage contract or license of birth.",
        "question_ar"       : "ما هي الأوراق المطلوبة لحجز تأشيرة ؟",
        "answer_ar" : "إذا كانت التأشيرة سياحية الأوراق المطلوبة هي: <br>  1- جواز السفر صالح لمدة اكثر من ست اشهر. 2- صورة شخصية. 3- صورة جواز السفر. <br> <br>  أما تأشيرة الزيارة العائلية الأوراق المطلوبة هي: <br>  1-جواز السفر صالح لمدة اكثر من ست اشهر. 2- صورة شخصية. 3- صورة جواز السفر. <br> عقد عمل للمضيف بمرتب 5000 درهم او اكثر. 5- اثبات صلة القرابة مصدق. 6- بيان عائلة او شهادة ميلاد او عقد زواج.",
        "cat"    : "visas",
        "data_question_tr" : "questions-visas-3",
        "data_answer_tr" : "answers-visas-3",
    },
    {
        "question"       : "5-Could I inquire more about visa’s prices?",
        "answer" : "you can communicate with the customer service team to know all the kinds and prices of visas which are available and help you to choose what you want.",
        "question_ar"       : "هل يمكنني الاطلاع على أسعار التأشيرات ؟",
        "answer_ar" : " يمكنك التواصل مع فريق خدمة العملاء لاطلاعك على انواع واسعار التاشيرات المتاحة ومساعدتك باختيار ما يناسب حاجتك.",
        "cat"    : "visas",
        "data_question_tr" : "questions-visas-4",
        "data_answer_tr" : "answers-visas-4",
    },
    {
        "question"       : "1-Could I print the trip’s path which I received and send it to the Embassy?",
        "answer" : "Of course. We will send you the trip’s path via E-mail with pdf format and you can print it and give it to the embassy as evidence for travelling. ",
        "question_ar": "هل يمكنني طباعة وتقديم مسار الرحلة الذي تلقيته منك إلى السفارة ؟",
        "answer_ar" :"نعم. سنرسل لك مسار الرحلة عبر البريد الإلكتروني بتنسيق PDF ويمكنك فقط طباعته ونقله إلى السفارة لإظهاره كدليل على ترتيبات السفر.",
        "cat"    : "services",
        "data_question_tr" : "questions-services-0",
        "data_answer_tr" : "answers-services-0",
    },
    {
        "question"       : "2-How can I trust with you and your service and why I should use it?",
        "answer" : "1-You can view what our clients say about us.<br>2-Our documents are legal and optimal for any related purposes.<br> 3-We save our clients with rate 100% through PayPal payment gateway. <br> 4-We save you from risk and you will not pay thousands of dollars for booking.<br>5-We have many partners with our network like airline companies.<br>6-We can deal with many changes related to the trip path without any additional cost.<br>7-We have the ability to keep the bookings for a long time.<br>8-We can book again the same trip path with different airline companies.<br>9-We work all the time for you to be not worried when you are outside the embassy searching for help",
        "question_ar"       : "ما مدى وثوقية خدمتك ولماذا يجب علي استخدامها ؟",
        "answer_ar" : "1- تحقق مما يقوله العملاء عن خدماتنا  <br> 2- وثائقنا أصلية ومثالية لأي أغراض طلب تأشيرة <br> 3- نقدم حماية المشتري بنسبة 100٪ من خلال PayPal <br>  4- نتخلص من المخاطرة عنك ولم تنفق آلاف الدولارات لإجراء الحجوزات  <br> 5- نحن نعمل مع العديد من شركات الطيران في شبكتنا <br> 6- يمكننا استيعاب تغييرات متعددة في خط سير الرحلة دون أي تكلفة عليك  <br> 7- لدينا القدرة على الاحتفاظ بالحجوزات لفترات أطول <br> 8- يمكننا إعادة حجز نفس خط سير الرحلة مع شركات طيران مختلفة على الفور <br>  9- نحن متواجدون على مدار الساعة طوال أيام الأسبوع لمعالجة مخاوفك بما في ذلك عندما تكون خارج السفارة تبحث عن مساعدة فورية!",
        "cat"    : "services",
        "data_question_tr" : "questions-services-1",
        "data_answer_tr" : "answers-services-1",
    },
    {
        "question"       : "3-Are there any canceled transections for tickets I have to do after getting the visa? If there are, how much they cost?",
        "answer" : "We offer the cancelation of booking behalf of you. There is no need to be worried for any additional payment or anything else. What you pay is fees for only booking flight or hotels.<br>After you get visa, put your plan and be excited with your trip",
        "question_ar"       : "هل هناك أي عمليات إلغاء للتذاكر يتعين عليّ اجراؤها بعد حصولي على التأشيرة ؟ إذا كان الأمر كذلك , فهل هناك رسوم إلغاء ؟",
        "answer_ar" : "نحن نتولى جميع عمليات إلغاء الحجوزات نيابة عنك. لا داعي للقلق بشأن أي رسوم إلغاء إضافية أو أي شيء. ما تدفعه هو مجرد رسوم خدمة لإجراء حجز طيران أو فندق. بمجرد حصولك على التأشيرة ، ضع خطط السفر الخاصة بك ، واسترخ واستمتع برحلتك!",
        "cat"    : "services",
        "data_question_tr" : "questions-services-2",
        "data_answer_tr" : "answers-services-2",
    },

    {
        "question"       : "4-What is the required information I have to give you for visa or hotel reservation?",
        "answer" : "We do not request any secret information:<br>The full name.<br>details about the trip (starting position– destination - departure dates)<br>details about the hotel (the city –check in and check out dates )",
        "question_ar"       : "ما هي التفاصيل التي تحتاجها مني لتقديم طلب حجز طيران وحجز فندق ؟",
        "answer_ar" : "نحن لا نطلب أي معلومات سرية. كل ما نحتاجه هو <br>  1. اسمك الكامل  <br> 2. تفاصيل السفر الأساسية الخاصة بك للرحلات (مدينة المغادرة ، مدينة الوصول ، تواريخ المغادرة) والفنادق (المدينة ، مواعيد تسجيل الوصول والمغادرة)",
        "cat"    : "services",
        "data_question_tr" : "questions-services-3",
        "data_answer_tr" : "answers-services-3",
    }
  ]};
  myQuestions = result.questions;
  let myFilteredItems = [];
  myLisToFilter.forEach((li) => {
    myQuestions.forEach((question) => {
      if (li.classList.contains("active") && question.cat.includes(li.dataset.cat)) {
        myFilteredItems.push(question);
        myAccordion.innerHTML = null;
        showQuestions(myFilteredItems);
      }
    });
    li.addEventListener("click", () => {
      myFilteredItems = [];
      myLisToFilter.forEach((li) => {
      li.classList.remove("active");
      myAccordion.innerHTML = null;
      });
      myQuestions.forEach((question) => {
        if (question.cat.includes(li.dataset.cat)) {
          myFilteredItems.push(question);
        } 
      });
      li.classList.add("active");
      showQuestions(myFilteredItems);
    });
  });
}

  fetchQuestion();


  function showQuestions(array) {
      myAccordion.innerHTML = null;
    for (let index = 0; index < array.length; index++) {


        myAccordion.innerHTML += `

        <div class="accordion-item ${array[index].cat}">
                  <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}" data-tr="${array[index].data_question_tr}">
                        ${(lan.value == "en" || lann.value == "en")? array[index].question : array[index].question_ar}
                    </button>
                  </h2>
                  <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                    <div class="accordion-body" data-tr="${array[index].data_answer_tr}">
                    ${(lan.value == "en" || lann.value == "en")? array[index].answer : array[index].answer_ar}
                    </div>
                  </div>
                </div>
        
        `
      }
  }

