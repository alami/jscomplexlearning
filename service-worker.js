addEventListener('install', event => {
    event.waitUntil(  //---дождаться пока промисы не инициализируются
        caches.open('offline') //возвр промис
            .then(cache => {             //дождатся создания
               return cache.addAll([//возвр промис
                '/',
                'jscomplexlearning12-6.html',
                'bootstrap.min.css'
            ])
        })
    )
})
addEventListener('fetch', event => {
    event.respondWith( //ответить с каким то ответом: если есть ресурс в кеше.., если нет....
      new Promise(async (resolve, reject) => {
        const request = event.request //берем инфу о тек запросе
        try {
            const storage = await caches.open('offline')
                        //опять иниц.хранилище, как и выше
                        //тоже Промис, чтобы пложить then-ы, используем  await
            const cache = await storage.match(request)
            if (cache) {   //хранилище, ты ранее кешировало запрос?
                resolve(cache)
            } else {       //если в кеше undefine
                const response = await fetch(request)//всетаки делаем запрос
                resolve(response) //разрешаем промис => этим и ответим брпузеру
            }
        } catch (e) {  //какая отшибка
            reject(e)
        }
    }))
})