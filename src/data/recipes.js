/*const recipe = {
  id: '',
  name: 'Название',
  note: 'Заметки по приготовлению или использованию блюда',
  items: [//ингридиенты
    {
      required: true,
      name: 'продукт',
      value: 'количество грамм или мл',
      note: 'аналоги, сорт, формат (растолочь)',
    }
  ],
  steps: [//шаги
    {
      id: 1,
      name: 'короткое название шага',
      description: 'Рекомендации по посуде',
      type: 'wait',// wait | default
      time: '20m',//время ожидания, optional
      skippable: true,
      submitButton: { name: 'Далее' },//Текст кнопки. Можно передать атрибуты кнопки, стили и варианты
      content: {
        blocks: [
          {
            type: 'image',
            data: {
              url: 'https://i.imgur.com/2nYH7ZP.png', //ссылка на анимацию происходящего
              //другие атрибуты: стретчет, кепчинг, виз бордер, виз бекграунд
            }
          },
          {
            type: 'icon',
            data: {
              name: 'iconName',//название подготовленной иконки
            }
          },
          {
            type: 'paragraph',//type: header
            data: {
              text: '<b>Что делать</b>',
              //level //уровень заголовка
            }
          },
        ]
      },
    },
  ]
}*/

const data = [
  {
    id: 'uiyuyi',
    name: 'Рис',
    note: 'Читайте инструкцию на упаковке. Производитель пишет точный объем воды и время приготовления.',
    items: [
      {
        required: true,
        name: 'Рис',
        value: '65 мл'
      },
      {
        required: true,
        name: 'Вода',
        value : '130 мл'
      },
      {
        required: true,
        name: 'Соль',
        value: '¹⁄₂ чайной ложки'
      },
      {
        required: false,
        name: 'Приправы по вкусу',
        note: 'шафран, карри, кардамон, зира, тмин, корица, гвоздика',
      }
    ],
    steps: [
      {
        id: 1,
        name: 'Вода',
        description: 'Лучше использовать посуду с толстым дном: в ней температура распределяется равномерно.',
        type: 'default',
        submitButton: { name: 'Далее' },
        content: {
          blocks: [
            {
              type: 'image',
              data: {
                url: 'https://i.giphy.com/Tu1p1x4QwnZAc.webp',
              }
            },
            {
              type: 'paragraph',
              data: {
                text: '<h2 style="margin: 0 0 8px;">Поставить воду на огонь.</h2><p style="margin: 0; color: rgba(0,0,0,.5);">Вода должна быть в пропорциях к рису 2:1</p>',
              }
            },
          ]
        },
      },
      {
        id: 1,
        name: 'Промывка',
        type: 'default',
        submitButton: { name: 'Далее' },
        content: {
          blocks: [
            {
              type: 'image',
              data: {
                url: 'https://i.giphy.com/MZSBHPaa0Y7FMelPtN.webp',
              }
            },
            {
              type: 'paragraph',
              data: {
                text: 'Промыть рис в холодной воде',
              }
            },
          ]
        },
      },
      {
        id: 1,
        name: 'Вода закипела',
        type: 'default',
        submitButton: { name: 'Далее' },
        content: {
          blocks: [
            {
              type: 'image',
              data: {
                url: 'https://i.giphy.com/uo8hQlw8CwyRMTY1FC.webp',
              }
            },
            {
              type: 'paragraph',
              data: {
                text: 'Рис высыпать в воду и перемешать один раз,',
              }
            },
          ]
        },
      },
      {
        id: 1,
        name: 'Бурление воды',
        description: 'Можно добавить приправы во время приготовления',
        type: 'wait',
        time: '20m',
        submitButton: { name: 'Далее' },
        content: {
          blocks: [
            {
              type: 'image',
              data: {
                url: 'https://i.giphy.com/3ogwG6kJyTjfevgXSg.webp',
              }
            },
            {
              type: 'paragraph',
              data: {
                text: 'Когда вода забурлела, убавьте огонь до минимума и накройте кастрюлю крышкой',
              }
            },
          ]
        },
      },
      {
        id: 1,
        name: 'Выключить плиту',
        description: 'Можно добавить приправы при подаче',
        type: 'wait',
        time: '10m',
        submitButton: { name: 'Далее' },
        content: {
          blocks: [
            {
              type: 'image',
              data: {
                url: 'https://i.giphy.com/CNocEFcF9IBegtgW3q.webp',
              }
            },
            {
              type: 'paragraph',
              data: {
                text: 'Снимите касторюлю с огня и дайте постоять 10&nbsp;минут&nbsp;под&nbsp;крышкой',
              }
            },
          ]
        },
      },
    ]
  }
]

export default data;

