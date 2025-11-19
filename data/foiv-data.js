// Этот файл - база данных ФОИВов
// Чтобы добавить новый ФОИВ, просто скопируй и заполни шаблон ниже

const foivData = [
    // ШАБЛОН для нового ФОИВа:
    // {
    //     id: "уникальный-id",
    //     name: "Полное название ФОИВа",
    //     sphere: "political", // political, economic, social, other
    //     sphereName: "Политическая",
    //     link: "https://сайт.рф",
    //     hasTerritorial: true,
    //     territorialOrgans: [
    //         {
    //             name: "Название территориального органа",
    //             link: "https://сайт-органа.рф"
    //         }
    //     ]
    // },

    // МИД РОССИИ
    {
        id: "mid",
        name: "Министерство иностранных дел Российской Федерации",
        sphere: "political",
        sphereName: "Политическая",
        link: "https://mid.ru",
        hasTerritorial: true,
        territorialOrgans: [
            {
                name: "Представительства МИД России в субъектах РФ",
                link: "https://mid.ru/ru/maps/ru/"
            },
            {
                name: "Посольства Российской Федерации за рубежом",
                link: "https://mid.ru/ru/maps/"
            },
            {
                name: "Консульские учреждения Российской Федерации",
                link: "https://mid.ru/ru/maps/"
            },
            {
                name: "Постоянные представительства при международных организациях",
                link: "https://mid.ru/ru/maps/"
            }
        ]
    },

    // ОСТАЛЬНЫЕ ФОИВы (уже существующие)
    {
        id: "minjust",
        name: "Министерство юстиции Российской Федерации",
        sphere: "political",
        sphereName: "Политическая",
        link: "https://minjust.gov.ru",
        hasTerritorial: true,
        territorialOrgans: [
            {
                name: "Управление Минюста России по Москве",
                link: "https://to1.minjust.gov.ru"
            },
            {
                name: "Управление Минюста России по Санкт-Петербургу",
                link: "https://to2.minjust.gov.ru"
            },
            {
                name: "Управление Минюста России по Московской области",
                link: "https://to50.minjust.gov.ru"
            }
        ]
    },
    
    {
        id: "minfin",
        name: "Министерство финансов Российской Федерации",
        sphere: "economic",
        sphereName: "Экономическая",
        link: "https://minfin.gov.ru",
        hasTerritorial: true,
        territorialOrgans: [
            {
                name: "Федеральное казначейство",
                link: "https://roskazna.gov.ru"
            },
            {
                name: "Территориальные органы Федерального казначейства",
                link: "https://roskazna.gov.ru/territorialnye-organy/"
            }
        ]
    },
    
    {
        id: "minsport",
        name: "Министерство спорта Российской Федерации",
        sphere: "social",
        sphereName: "Социальная",
        link: "https://minsport.gov.ru",
        hasTerritorial: false,
        territorialOrgans: []
    },
    
    {
        id: "roskomnadzor",
        name: "Федеральная служба по надзору в сфере связи, информационных технологий и массовых коммуникаций",
        sphere: "other",
        sphereName: "Другие",
        link: "https://rkn.gov.ru",
        hasTerritorial: true,
        territorialOrgans: [
            {
                name: "Центральный аппарат Роскомнадзора",
                link: "https://rkn.gov.ru/about/structure/"
            }
        ]
    }
    
    // ДОБАВЛЯЙ НОВЫЕ ФОИВы ЗДЕСЬ, используя шаблон выше
];
