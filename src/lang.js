import {
  getTextHomePage,
  getTextAboutPage,
  getTextService1Page,
  getTextService2Page,
  getTextContactPage,
} from "./api/PublicWebsiteService";
export async function loadMessage() {
  const messages = {
    en: {
      navbar: {
        home: "Home",
        about: "About Us",
        service: "Service",
        contact: "Contact",
        other: "Other",
        dashboard: "Dashboard",
        lang: "Language",
        log_in: "Log In",
      },
      login: {
        username: "Username",
        password: "Password",
      },
      home: {
        com_info: "COMPANY INFORMATION",
        our_service: "Our Service",
        event: "Event & Notice",
        consultation: "Free Consultation",
        service_complete: "Service Agent Certificate Of Complete",
        para: "",

        noti1:
          "Notification on the exemption of administrative sanctions (additional tax and interest) on property tax and / or unused land tax",
        noti2:
          "Notification on the postponement of payment of property tax and unused land tax for 2023 until October 31, 2023",
        noti3: "Clarification",
        submit: "Submit",
        name: "Name",
        email: "Email",
        write: "Write here....",
      },
      about: {
        bio: "BIOGRAPHY",
        text1: "",
        text2: "",
      },
      service: {
        taxservice: "Tax Service",
        account: "Account Service",
        registeration: "Registerations",
        other: "Other Documents",
        readmore: "Readmore",
        service1: {
          taxservice: "Tax Service",
          para: "",
          text1: "",
          text2: "",
          text3: "",
          text4: "",
        },
        service2: {
          accountservice: "Accounting Service",
          para: "",
          text1: "",
          text2: "",
          text3: "",
          text4: "",
        },
      },
      contact: {
        contact: "Contact",
        our_office: "Our Office",
        work_hour: "Business Hour",
        email: "Email",
        phone: "Phone Number",
        locatime: "",
        time: "",
        para: "",
        email_address: "",
        phonenumber: "",
      },
      other: {
        taxpayer: "TAXPAYER",
        documents: "Documents",
        general: "General Population",
        small: "Small Tax Payer",
        meduim: "Meduim Tax Payer",
        major: "Major Tax Payer",
        doc1: "VAT-SUS-02 VAT-SUS-02 Certificate of Incorporation",
        doc2: "Application for Suspension of Business Activities or Opening of Business - Form SUS-01",
        doc3: "Property Tax Registration Application Form - PTI Form 01",
        doc4: "All Documents",
      },
      footer: {
        our_service: "Our Service",
        quickline: "Quick Line",
        contact: "Contact",
        taxservice: "Tax Service",
        account: "Accounting Service",
      },
      text: {
        see: "Seemore",
      },
    },
    kh: {
      navbar: {
        home: "ទំព័រដើម",
        about: "អំពីយើង",
        service: "សេវាកម្ម",
        contact: "ទំនាក់ទំនង",
        other: "ផ្សេងៗ",
        dashboard: "ផ្ទាំងគ្រប់គ្រង",
        lang: "ភាសា",
        log_in: "ចូលប្រើ",
      },
      login: {
        username: "ឈ្មោះ​អ្នកប្រើប្រាស់",
        password: "លេខសំងាត់",
      },
      home: {
        com_info: "ព័ត៌មានក្រុមហ៊ុន",
        our_service: "សេវាកម្មរបស់យើង",
        event: "ព្រឹត្តិការណ៍ & សេចក្តីជូនដំណឹង",
        consultation: "ពិគ្រោះដោយឥតគិតថ្លៃ",
        service_complete: "វិញ្ញាបនបត្រភ្នាក់ងារសេវាកម្មពេញលេញ",
        para: "",

        noti1:
          "សេចក្ដីជូនដំណឹង ស្តីពីការលើកលែងទណ្ឌកម្មរដ្ឋបាល(ពន្ធបន្ថែម ​និងការប្រាក់) ចំពោះពន្ធលើអចលនទ្រព្យ និង/ឬពន្ធលើដីធ្លីមិនបានប្រើប្រាស់",
        noti2:
          "សេចក្ដីជូនដំណឹង ស្តីពីការពន្យារពេលបង់ពន្ធលើអចលនទ្រព្យ និងពន្ធលើដីធ្លីមិនបានប្រើប្រាស់ សម្រាប់ឆ្នាំ​២០២៣ រហូតដល់ថ្ងៃទី៣១ ខែតុលា ឆ្នាំ២០២៣",
        noti3: "សេចក្ដីបំភ្លឺ",
        submit: "ផ្ញើសារ",
        name: "ឈ្មោះ",
        email: "អុីម៉ែល",
        write: "សរសេរទីនេះ​....",
      },
      about: {
        bio: "ជីវប្រវត្តិ",
        text1: "",
        text2: "",
      },
      service: {
        taxservice: "សេវាកម្មពន្ធ",
        account: "សេវាកម្មគណនី",
        registeration: "ការចុះឈ្មោះ ",
        other: "ឯកសារផ្សេងទៀត",
        readmore: "ចុចមើល",

        service1: {
          taxservice: "សេវាពន្ធ",
          para: "",
          text1: "",
          text2: "",
          text3: "",
          text4: "",
        },
        service2: {
          accountservice: "សេវាកម្មគណនេយ្យ",
          para: "",
          text1: "",
          text2: "",
          text3: "",
          text4: "",
        },
      },
      contact: {
        contact: "ទំនាក់ទំនង",
        our_office: "ការិយាល័យរបស់យើង",
        work_hour: "ម៉ោងធ្វើការ",
        email: "អ៊ីមែល",
        email_address: "",
        phone: "លេខទូរស័ព្ទ",
        phonenumber: "",
        locatime: "",
        time: "",
        para: "",
      },
      other: {
        taxpayer: "អ្នកជាប់ពន្ធ",
        documents: "ឯកសារ",
        general: "ប្រជាជនទូទៅ",
        small: "អ្នកបង់ពន្ធតូច",
        meduim: "អ្នកបង់ពន្ធមធ្យម",
        major: "អ្នកបង់ពន្ធធំ",
        doc1: "ពាក្យស្នើសុំបើកដំណើរការវិញ្ញាបនបត្រអាករលើតម្លៃបន្ថែម ក្រោយការព្យួរទុក- ទម្រង់ VAT-SUS-02",
        doc2: "ពាក្យស្នើសុំផ្អាកដំណើរការសកម្មភាពអាជីវកម្មជាបណ្ដោះអាសន្ន ឬបើកដំណើរការអាជីវកម្មឡើង- ទម្រង់ SUS-01",
        doc3: "ពាក្យស្នើសុំធ្វើប័ណ្ណសម្គាល់ការបង់ពន្ធអចលនទ្រព្យ- ទម្រង់ PTI 01",
        doc4: "ឯកសារទាំងអស់",
      },
      footer: {
        our_service: "សេវាកម្មរបស់យើង",
        quickline: "ផ្លូវកាត់",
        contact: "ទំនាក់ទំនង",
        taxservice: "សេវាកម្មពន្ធ",
        account: "សេវាកម្មគណនី",
      },
      text: {
        see: "មើលបន្ត",
      },
    },
  };
  try {
    const home = await getTextHomePage();
    const about = await getTextAboutPage();
    const service1 = await getTextService1Page();
    const service2 = await getTextService2Page();
    const contact = await getTextContactPage();
    //home Pags
    messages.en.home.para = home.data.bodies[0].descriptionEn;
    messages.kh.home.para = home.data.bodies[0].descriptionKh;

    //About Pages
    messages.en.about.text1 = about.data.bodies[0].descriptionEn;
    messages.en.about.text2 = about.data.bodies[1].descriptionEn;

    messages.kh.about.text1 = about.data.bodies[0].descriptionKh;
    messages.kh.about.text2 = about.data.bodies[1].descriptionKh;

    //Service1 Pages
    messages.en.service.service1.text1 = service1.data.bodies[0].descriptionEn;
    messages.en.service.service1.text2 = service1.data.bodies[1].descriptionEn;
    messages.en.service.service1.text3 = service1.data.bodies[2].descriptionEn;
    messages.en.service.service1.text4 = service1.data.bodies[3].descriptionEn;
    messages.en.service.service1.para = service1.data.bodies[4].descriptionEn;

    messages.kh.service.service1.text1 = service1.data.bodies[0].descriptionKh;
    messages.kh.service.service1.text2 = service1.data.bodies[1].descriptionKh;
    messages.kh.service.service1.text3 = service1.data.bodies[2].descriptionKh;
    messages.kh.service.service1.text4 = service1.data.bodies[3].descriptionKh;
    messages.kh.service.service1.para = service1.data.bodies[4].descriptionKh;

    //Service2 Pages
    messages.en.service.service2.text1 = service2.data.bodies[0].descriptionEn;
    messages.en.service.service2.text2 = service2.data.bodies[1].descriptionEn;
    messages.en.service.service2.text3 = service2.data.bodies[2].descriptionEn;
    messages.en.service.service2.text4 = service2.data.bodies[3].descriptionEn;
    messages.en.service.service2.para = service2.data.bodies[4].descriptionEn;

    messages.kh.service.service2.text1 = service2.data.bodies[0].descriptionKh;
    messages.kh.service.service2.text2 = service2.data.bodies[1].descriptionKh;
    messages.kh.service.service2.text3 = service2.data.bodies[2].descriptionKh;
    messages.kh.service.service2.text4 = service2.data.bodies[3].descriptionKh;
    messages.kh.service.service2.para = service2.data.bodies[4].descriptionKh;

    //Contact Pages
    messages.en.contact.para = contact.data.bodies[0].descriptionEn;
    messages.en.contact.locatime = contact.data.bodies[1].descriptionEn;
    messages.en.contact.time = contact.data.bodies[2].descriptionEn;
    messages.en.contact.email_address = contact.data.bodies[3].descriptionEn;
    messages.en.contact.phonenumber = contact.data.bodies[4].descriptionEn;

    messages.kh.contact.para = contact.data.bodies[0].descriptionKh;
    messages.kh.contact.locatime = contact.data.bodies[1].descriptionKh;
    messages.kh.contact.time = contact.data.bodies[2].descriptionKh;
    messages.kh.contact.email_address = contact.data.bodies[3].descriptionKh;
    messages.kh.contact.phonenumber = contact.data.bodies[4].descriptionKh;
  } catch (e) {}
  return messages;
}
// para: "JS.Tax is a premier financial services company dedicated to helping individuals and businesses achieve their financial goals. With a focus on excellence, we offer a wide range of services, including expert tax planning and preparation to ensure our clients benefit from every available deduction and credit. Our dedicated team of certified accountants provides comprehensive accounting services, from bookkeeping and financial statement preparation to budgeting and forecasting. We understand that financial success is a journey, and we are committed to guiding our clients every step of the way. Whether you're an individual looking for tax assistance or a business seeking strategic financial guidance, JS.Tax is your trusted partner in prosperity.",

// text1: `Our company, JS.TAX, is a trusted name in the world of finance. We specialize in offering a wide array of financial services, with a primary focus on tax and accounting solutions. With a team of highly skilled professionals, including certified accountants and tax experts, we pride ourselves on delivering excellence in every financial task we undertake.
// For individuals, we provide comprehensive tax planning and preparation services. Our experts stay up-to-date with the latest tax laws and regulations to ensure that you receive all the deductions and credits you are entitled to, while minimizing your tax liabilities. We are committed to helping you make informed decisions about your finances and achieve your financial goals.`,
// text2: `For businesses, our accounting services go beyond just number crunching. We offer strategic financial management solutions that help businesses streamline their operations, reduce costs, and improve profitability. From bookkeeping and payroll services to financial analysis and reporting, we have your accounting needs covered.

// What sets us apart is our dedication to providing personalized services. We take the time to understand your unique financial situation and tailor our services to meet your specific requirements. Whether you're an individual or a business, our goal is to empower you with the financial knowledge and support you need to thrive.

// At JS.TAX, your financial success is our top priority. We are here to guide you through the complexities of the financial world, ensuring that you have a partner you can trust for all your tax and accounting needs.`,
// service1: {
//   taxservice: "Tax Service",
//   para: "Tax services are a critical component of financial management for both individuals and businesses. These services are designed to ensure that taxpayers comply with tax laws, minimize tax liabilities, and optimize their financial positions. Tax professionals, including certified public accountants (CPAs), tax consultants, and tax advisors, play a crucial role in providing these services.",
//   text1: ". Personal Income Tax Preparation",
//   text2: ". Business Tax Planning and Filing",
//   text3: ". Tax Compliance and Reporting",
//   text4: ". Tax Audit Representation",
// },
// service2: {
//   accountservice: "Accounting Service",
//   para: "Accounting services are a fundamental aspect of financial management for businesses of all sizes and industries. These services encompass a wide range of financial activities, including record-keeping, financial reporting, analysis, and advisory services. Accounting professionals, such as certified public accountants (CPAs) and accounting firms, provide these services to ensure accurate and compliant financial operations.",
//   text1: ". Bookkeeping and Financial Record Maintenance",
//   text2: ". Business Tax Planning and Filing",
//   text3: ". Tax Compliance and Reporting",
//   text4: ". Tax Audit Representation",
// },

// para: "ក្រុមហ៊ុន JS.TAX គឺជាក្រុមហ៊ុនសេវាកម្មហិរញ្ញវត្ថុឈានមុខគេដែលបង្កើតឡើងក្នុងការជួយបុគ្គល និងអាជីវកម្មឱ្យសម្រេចបាននូវគោលដៅហិរញ្ញវត្ថុរបស់ពួកគេ។ ដោយផ្តោតលើឧត្តមភាព យើងផ្តល់ជូននូវសេវាកម្មជាច្រើន រួមទាំងការធ្វើផែនការពន្ធ និងការរៀបចំរបស់អ្នកជំនាញ ដើម្បីធានាថាអតិថិជនរបស់យើងទទួលបានអត្ថប្រយោជន៍ពីរាល់ការកាត់កង និងឥណទានដែលមាន។ ក្រុម​គណនេយ្យករ​ ដែល​មាន​ការ​បញ្ជាក់​ដែល​ ខិតខំ​ប្រឹងប្រែង ​របស់​យើង​ផ្តល់​នូវ​សេវាកម្ម ​គណនេយ្យ​គ្រប់​ជ្រុងជ្រោយ​ចាប់​ពី​ការ​រៀបចំ​បញ្ជី​គណនេយ្យ និង​ការ​រៀបចំ​របាយការណ៍​ហិរញ្ញវត្ថុ​ដល់​ការ​រៀបចំ​ថវិកា​និង​ការ​ព្យាករណ៍។ យើងយល់ថាភាពជោគជ័យផ្នែកហិរញ្ញវត្ថុគឺជាដំណើរមួយ ហើយយើងប្តេជ្ញាណែនាំអតិថិជនរបស់យើងគ្រប់ជំហាន។ មិនថាអ្នកជាបុគ្គលដែលកំពុងស្វែងរកជំនួយផ្នែកពន្ធដារ ឬអាជីវកម្មដែលកំពុងស្វែងរកការណែនាំហិរញ្ញវត្ថុជាយុទ្ធសាស្ត្រនោះទេ JS.TAX គឺជាដៃគូដែលគួរឱ្យទុកចិត្តរបស់អ្នកក្នុងភាពរុងរឿង។",

// text1: `ក្រុមហ៊ុនរបស់យើង JS.TAX គឺជាឈ្មោះដែលគួរឱ្យទុកចិត្តនៅក្នុងពិភពហិរញ្ញវត្ថុ។ យើងមានជំនាញក្នុងការផ្តល់ជូននូវសេវាកម្មហិរញ្ញវត្ថុជាច្រើន ដោយផ្តោតលើដំណោះស្រាយពន្ធ និងគណនេយ្យ។ ជាមួយនឹងក្រុមអ្នកជំនាញដែលមានជំនាញខ្ពស់ រួមទាំងគណនេយ្យករដែលមានការបញ្ជាក់ និងអ្នកជំនាញផ្នែកពន្ធដារ យើងមានមោទនភាពក្នុងការផ្តល់នូវភាពល្អឥតខ្ចោះនៅក្នុងរាល់កិច្ចការហិរញ្ញវត្ថុដែលយើងធ្វើ។
// សម្រាប់បុគ្គល យើងផ្តល់សេវាកម្មរៀបចំផែនការ និងការរៀបចំពន្ធដ៏ទូលំទូលាយ។ អ្នកជំនាញរបស់យើងបន្តធ្វើបច្ចុប្បន្នភាពជាមួយនឹងច្បាប់ និងបទប្បញ្ញត្តិពន្ធចុងក្រោយបំផុត ដើម្បីធានាថាអ្នកទទួលបានការកាត់កង និងឥណទានទាំងអស់ដែលអ្នកមានសិទ្ធិទទួលបាន ខណៈពេលដែលកាត់បន្ថយបំណុលពន្ធរបស់អ្នក។ យើងប្តេជ្ញាជួយអ្នកធ្វើការសម្រេចចិត្តប្រកបដោយការយល់ដឹងអំពីហិរញ្ញវត្ថុរបស់អ្នក និងសម្រេចបាននូវគោលដៅហិរញ្ញវត្ថុរបស់អ្នក។`,
// text2: `សម្រាប់អាជីវកម្ម សេវាកម្មគណនេយ្យរបស់យើងលើសពីការបំបែកលេខ។ យើងផ្តល់ជូននូវដំណោះស្រាយគ្រប់គ្រងហិរញ្ញវត្ថុជាយុទ្ធសាស្ត្រ ដែលជួយអាជីវកម្មសម្រួលប្រតិបត្តិការរបស់ពួកគេ កាត់បន្ថយការចំណាយ និងបង្កើនប្រាក់ចំណេញ។ ពីសេវាកម្មគណនេយ្យ និងបញ្ជីប្រាក់បៀវត្សរ៍ រហូតដល់ការវិភាគហិរញ្ញវត្ថុ និងរបាយការណ៍ យើងមានតម្រូវការគណនេយ្យរបស់អ្នក។

// អ្វី​ដែល​ធ្វើ​ឲ្យ​យើង​ដាច់​ពី​គ្នា​គឺ​ការ​តាំង​ចិត្ត​របស់​យើង​ក្នុង​ការ​ផ្តល់​សេវាកម្ម​ផ្ទាល់ខ្លួន។ យើងចំណាយពេលដើម្បីស្វែងយល់ពីស្ថានភាពហិរញ្ញវត្ថុតែមួយគត់របស់អ្នក និងកែសម្រួលសេវាកម្មរបស់យើងដើម្បីបំពេញតាមតម្រូវការជាក់លាក់របស់អ្នក។ មិនថាអ្នកជាបុគ្គល ឬអាជីវកម្មនោះទេ គោលដៅរបស់យើងគឺផ្តល់អំណាចដល់អ្នកជាមួយនឹងចំណេះដឹង និងជំនួយផ្នែកហិរញ្ញវត្ថុដែលអ្នកត្រូវការដើម្បីរីកចម្រើន។

// នៅ JS.TAX ភាពជោគជ័យផ្នែកហិរញ្ញវត្ថុរបស់អ្នកគឺជាអាទិភាពចម្បងរបស់យើង។ យើងនៅទីនេះដើម្បីណែនាំអ្នកពីភាពស្មុគស្មាញនៃពិភពហិរញ្ញវត្ថុ ដោយធានាថាអ្នកមានដៃគូដែលអ្នកអាចទុកចិត្តបានសម្រាប់តម្រូវការពន្ធ និងគណនេយ្យរបស់អ្នក។`,
// service1: {
//   taxservice: "សេវាពន្ធ",
//   para: "សេវាពន្ធគឺជាធាតុផ្សំដ៏សំខាន់នៃការគ្រប់គ្រងហិរញ្ញវត្ថុសម្រាប់ទាំងបុគ្គល និងអាជីវកម្ម។ សេវាកម្មទាំងនេះត្រូវបានរចនាឡើងដើម្បីធានាថាអ្នកជាប់ពន្ធអនុលោមតាមច្បាប់ពន្ធ កាត់បន្ថយបំណុលពន្ធ និងបង្កើនប្រសិទ្ធភាពមុខតំណែងហិរញ្ញវត្ថុរបស់ពួកគេ។ អ្នកជំនាញពន្ធដារ រួមទាំងគណនេយ្យករសាធារណៈដែលមានការបញ្ជាក់ (CPAs ) អ្នកប្រឹក្សាពន្ធ និងអ្នកប្រឹក្សាពន្ធដើរតួនាទីយ៉ាងសំខាន់ក្នុងការផ្តល់សេវាកម្មទាំងនេះ។",
//   text1: ". ការរៀបចំពន្ធលើប្រាក់ចំណូលផ្ទាល់ខ្លួន",
//   text2: ". ការធ្វើផែនការពន្ធអាជីវកម្ម និងការដាក់ឯកសារ",
//   text3: ". ការអនុលោមតាមពន្ធ និងការរាយការណ៍",
//   text4: ". តំណាងសវនកម្មពន្ធ",
// },

// service2: {
//   accountservice: "សេវាកម្មគណនេយ្យ",
//   para: "សេវាកម្មគណនេយ្យគឺជាទិដ្ឋភាពជាមូលដ្ឋាននៃការគ្រប់គ្រងហិរញ្ញវត្ថុសម្រាប់អាជីវកម្មគ្រប់ទំហំ និងឧស្សាហកម្ម។ សេវាកម្មទាំងនេះរួមបញ្ចូលនូវសកម្មភាពហិរញ្ញវត្ថុជាច្រើន រួមទាំងការរក្សាកំណត់ត្រា របាយការណ៍ហិរញ្ញវត្ថុ ការវិភាគ និងសេវាកម្មប្រឹក្សាអ្នកជំនាញគណនេយ្យ ដូចជាមានការបញ្ជាក់ជាដើម។ គណនេយ្យករសាធារណៈ (CPAs) និងក្រុមហ៊ុនគណនេយ្យ ផ្តល់សេវាកម្មទាំងនេះ ដើម្បីធានាបាននូវប្រតិបត្តិការហិរញ្ញវត្ថុត្រឹមត្រូវ និងស្របតាមច្បាប់។",
//   text1: ". ការរក្សាបញ្ជីគណនេយ្យ និងហិរញ្ញវត្",
//   text2: ". ការធ្វើផែនការពន្ធអាជីវកម្ម និងការដាក់ឯកសារ",
//   text3: ". ការអនុលោមតាមពន្ធ និងការរាយការណ៍",
//   text4: ". តំណាងសវនកម្មពន្ធ",
// },
