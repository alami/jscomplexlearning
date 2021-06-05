//https://habr.com/ru/company/ruvds/blog/557668/
//   Управление зависимостями в Node.js
// node ./app

var appMsg = require("./appMsgs")
/* 1)
console.log(appMsg.firstMsg)
console.log(appMsg.secondMsg)
console.log(appMsg.MsgObject)*/

// 2)
// console.log(appMsg())

//3)
console.log((new appMsg()).first)

//4)
var userRepo = require("./userRepo")
console.log(userRepo.getUser())
console.log(userRepo.getUsers())

// Импорт директорий - Node будет искать файл logger.js,
// будет интересовать и директория logger. То, что она найдёт 1ым, то и импортирует
// в случае директории По умолчанию импортируется файл index.js, являющейся точкой входа в модуль.
var logger = require("./logger")
logger.log("this msg is from logger to log")

/*
Собрать в одной папке файлы-зависимости того модуля, который нужен в нашем коде.
У этих зависимостей могут быть и собственные зависимости.
В результате получится довольно сложная конструкция, о которой не нужно знать тому коду,
 который нуждается лишь в том функционале, который даёт ему модуль (logger).
разновидность инкапсуляции -
 сложные модули можем разбивать на части, расположенные в нескольких файлах.
 А код, являющийся потребителем модуля, имеет дело лишь с единственным файлом. Это говорит о том,
 что применение папок — это хороший способ управления подобными зависимостями
-- В 21 веке пользуются webpack + type script,
    import синтаксис вместо require(), export синтаксис вместо module.exports
    типы модулей: amd, umd, commonjs, nextjs и т.д.
    loaders, импорт-чего-угодно, а не только js (картинки, статические файлы, и т.п.)
    type script вместо js, заголовочные файлы, source maps
    lock файлы разных видов, повторябельные сборки
    менеджмент транзитивных зависимостей
    lerna для управления мульти-пакетными репозиториями
    yarn вместо npm, yarn workspaces
 */