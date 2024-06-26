export const survey = {
  title: 'Заведения заявка на БГ',
  buttons: {
    next: 'Далее',
    prev: 'Назад',
    send: 'Отправить',
    add: 'Добавить'
  },
  mainInfo: {
    client: 'Клиент',
    clientFullName: 'Полное наименование клиента',
    clientShortName: 'Краткое наименование',
    previousName: 'Прежнее наименование',
    changeDate: 'Дата изменения',
    legalForm: 'Организационно-правовая форма',
    stateRegistration: 'Сведения о государственной регистрации',
    ogrn: 'ОГРН',
    registerDate: 'Дата регистрации',
    registeringAuthority: 'Наименование регистрирующего органа ',
    registeringPlace: 'Место регистрации',
    inn: 'ИНН',
    legalAddress: 'Адрес юридического лица',
    byDocuments: 'Согласно учредительным документам',
    factAddress: 'Фактический адрес (если не совпадает)',
    legalEntityPresence:
      'Сведения о присутствии юридического лица и его постоянно действующих органов управления по адресу его местонахождения',
    present: 'Присутствует',
    notPresent: 'Не присутствует',
    website: 'Интернет-сайт',
    email: 'E-mail',
    phone: 'Телефон',
    contactPerson: 'Контактное лицо',
    employeesQuantity: 'Численность работников',
    representations: 'Филиалы и представительства',
    lendingAgencies: 'Субъект МСП',
    capitalValue: 'Величина уставного капитала',
    capitalValueLabel:
      'Указывается величина зарегистрированного и оплаченного уставного (складочного) капитала или величина уставного фонда, имущества в тыс. руб.',
    isPartOfHolding: 'Является ли Клиент частью Группы /Холдинга',
    unformed: '(в т. ч. организационно неоформленного)',
    nameOfHolding:
      'Если да, то указывается наименование Группы и кратко описывается роль компании в структуре группы',
    otherOrgs:
      'Участие Клиента в других организациях или совместная деятельность с другими организациями',
    otherOrgsName: 'Если да, то указывается наименование ',
  },
  activitiesInfo: {
    mainActivities: 'Основные виды деятельности ',
    mainBranch: 'Основная отрасль ',
    mainOKVED: 'Основной вид ОКВЭД (код и расшифровка)',
    okato: 'ОКАТО',
    okpo: 'ОКПО',
    licensesInfo:
      'Сведения о лицензиях на право осуществления деятельности, подлежащей лицензированию',
    licenseType: 'Вид лицензии',
    number: 'Номер',
    authorityName: 'Наименование органа, выдавшего лицензию ',
    issueDate: 'Дата выдачи',
    term: 'Срок действия',
    propertyType: 'Тип собственности',
    businessPurpose: 'Цель бизнеса',
    bankRelationsPurpose: 'Цель установления отношений с Банком',
    bankRelationsType: 'Предполагаемый характер отношений с Банком',
    businessReputation: 'Сведения о деловой репутации юридического лица',
    bankAccountsInfo: 'Информация о счетах в банках',
    bankName: 'Наименование банка',
    fundsOrigin: 'Информация об источниках происхождения денежных средств и (или) иного имущества',
    stateOrganization: 'Государственная организация',
    nonStateOrganization: 'Негосударственная организация',
    activitiesForProfit: 'Коммерческая деятельность с целью извлечения прибыли',
    commercialActivities: 'Коммерческая деятельность',
    shortTerm: 'Краткосрочный (до 1 года)',
    longTerm: 'Долгосрочный (свыше 1 года)',
    contractorFeedbacks: 'Имеется(ются) отзыв(ы) в произвольной письменной форме от контрагентов',
    creditOrgsFeedbacks:
      'Имеется(ются) отзыв(ы) в произвольной письменной форме от других кредитных организаций',
    noFeedbacks: 'Отзыв(ы) отсутствует(ют)',
    ownFunds: 'Собственные средства',
    loanFunds: 'Заемные средства',
  },
  legalEntities: {
    title: 'Информация о юридических лицах в организации',
    listOfParticipants: 'Список участников/акционеров юридических лиц',
    name: 'Наименование',
    inn: 'ИНН',
    nameAndPositionOfHead: 'ФИО и должность руководителя',
    legalAddress: 'Юридический адрес',
    managementCompanyInfo: 'Информация о ЕИО - управляющей компании',
    individualsInfo: 'Информация о физических лицах в организации',
    fillTips:
      '(заполняется по каждому физическому лицу, являющемуся бенефициаром, учредителем/акционером, единым исполнительным органом)',
    individual: 'Физическое лицо',
    fio: 'ФИО',
    placeOfBirth: 'Место рождения',
    dateOfBirth: 'Дата рождения',
    passport: 'Паспорт (серия, номер, кем и когда выдан, код выдачи)',
    placeOfResidence: 'Место жительства',
    individualRoles: 'Роли физического лица в организации',
    shareholder: 'Участник/Акционер',
    partInPercent: 'Доля, %',
    beneficiary: 'Бенефициар',
    separateDoc: '(формируется отдельный документ)',
    singleExecutive: 'Единый Исполнительный орган',
    position: 'Должность',
    dateOfPosition: 'Дата назначения на должность',
    isForeignOfficial:
      'Является иностранным публичным должностным лицом; супругом или близким родственником публичного должностного лица; должностным лицом публичной международной организации; лицом, замещающим (занимающим) государственную должность в Российской Федерации; лицом, замещающим (занимающим) должность члена Совета директоров Банка России; лицом, замещающим (занимающим) должность федеральной государственной службы, назначение на которую и освобождение от которой осуществляются Президентом Российской Федерации или Правительством Российской Федерации; лицом, замещающим (занимающим) должность в Банке России; лицом, замещающим (занимающим) должность в государственной корпорации и иной организации, созданной Российской Федерацией на основании федеральных законов',
    clientManagementInfo: 'Сведения об органах управления клиента',
    collegial: 'Коллегиальный',
    structure: 'Структура (Совет директоров/Правление/Наблюдательный совет и пр.)',
    collegialManagementPersons:
      'Персональный состав лиц, входящих в состав коллегиальных органов управления',
    sole: 'Единоличный',
    beneficiariesInfo: 'Сведения о выгодоприобретателях',
    beneficiariesInfoTip:
      '(выгодоприобретателем считается лицо, к выгоде которого действует Клиент, в том числе на основании агентского договора, договоров поручения, комиссии и доверительного управления, при предоставлении кредита)',
  },
  courtInfo: {
    nonFullfillment:
      'Имеются факты неисполнения своих денежных обязательств по причине отсутствия денежных средств на банковских счетах',
    bankruptcy: 'Ведется производство о несостоятельности (банкротстве)',
    decisionsInForce:
      'Имеются вступившие в силу решения судебных органов о признании несостоятельным (банкротом)',
    liquidationProcedure: 'Проводится процедура ликвидации',
    respondentCases: 'Наличие судебных дел, по которым организация выступает ответчиком',
    fiveYearsBankruptcy: 'Наличие процедур банкротства за последние 5 лет',
  },
  liabilities: {
    creditHistory: 'Кредитная история',
    positive: 'Положтельная',
    negative: 'Отрицательная',
    currentCreditLiabilities: 'Действующие кредитные обязательства',
    creditorInfo: 'Информацияо кредиторе, сумме обязательства, сроки',
    securityContracts: 'Сведения о действующих договорах обеспечения (залогодатель, поручитель)',
    staffDebt: 'Имеется задолженность перед персоналом организации',
    taxDebt: 'Имеется задолженность по налогам и сборам',
    stateDebt: 'Имеется задолженность перед государственными и внебюджетными фондами',
  },
  financialPosition: {
    unpaidDocuments:
      'Имеется ли существенная по суммам и (или) срокам текущая картотека неоплаченных расчетных документов к банковским счетам Клиента?',
    bankNameIfYes: '(если ДА, то указать банк, сумму и причину)',
    hiddenLoses:
      'Имеются ли скрытые потери (например, неликвидные запасы готовой продукции и (или) требования, безнадежные к взысканию) в размере, равном или превышающем 25 процентов чистых активов Клиента?',
    sumIfYes: '(если ДА, то указать сумму и причину)',
    otherContractsObligations:
      'Имеются ли случаи неисполнения или два и более случаев исполнения обязательств по иным договорам с финансирующей организацией с нарушением сроков, предусмотренных договорами, общей продолжительностью от 5 до 30 календарных дней или единичный случай исполнения с нарушением сроков продолжительностью более чем на 30 календарных дней за последние 180 календарных дней либо прекращение обязательств по иным договорам с финансирующей организацией предоставлением взамен исполнения обязательства отступного в форме имущества, которое не реализовано финансирующей',
    lossMakingActivity:
      'Имеется ли не предусмотренная планом развития Клиента (бизнес-планом), согласованным с Банком, убыточная деятельность Клиента, приведшая к существенному (25 процентов и более) снижению его чистых активов по сравнению с их максимально достигнутым уровнем в течение последних двенадцати месяцев, а для юридических лиц — Клиентов, с даты регистрации которых прошло менее одного года, — по сравнению с их максимально',
    factsOfZeroBalance:
      'Имеются ли факты представления в налоговые органы формы № 1 «Бухгалтерский баланс», с нулевыми значениями по разделам баланса «Оборотные активы» и «Краткосрочные обязательства» при условии существенных оборотов денежных средств по банковским счетам Клиента, открытым в финансирующей организации, за последние 180 календарных дней',
  },
  location: {
    title:
      'Сведения о присутствии или отсутствии по своему местонахождению юридического лица, его постоянно действующего органа управления, иного органа или лица, которые имеют право действовать от имени юридического лица без доверенности.',
    text: 'Настоящим (указывается наименование Клиента), подтверждает, что по адресу (указывается адрес фактического местонахождения) присутствует постоянно действующий орган управления (иные органы или лицо, которые имеют право действовать от имени юридического лица без доверенности).',
    manager: 'Генеральный директор',
  },

  yes: 'Да',
  no: 'Нет',
  describeIfYes: 'Если да, то надо описать',
};
