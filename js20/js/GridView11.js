class GridView {
    /**
     * properties
     * @param [array] _tableClass - CSS классы, оформление
     * @param [array] data - выходные данные
     * @param [array] attribute - управояем что выводим и как из вх.данных
     * @param [array] _element  - куда выводить в таб
     * @param [array] _header  - заголовки таб
     * @param [array] _headerClass  - CSS класс заголовк таб
     */
    constructor() {
        this._header = ''
        this._headerClass = []
        this._tableClass = []
        this._element = 'body'
        this.attribute = []
    }

    /**
     * Method set header
     */
    setHeader(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim()
            return true
        }
        return false
    }
    /**
     * Method set headerClass
     */
    setHeaderClass (headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass
            return true
        }
        return false
    }
    setElement (element) {
        if (document.querySelector(element)) {
            this._element = element //document.querySelector(element)
            return true
        }
        return false
    }
    /**
     * Method for show GridViewTable
     */
    render(data) {
        this.setElement(data.element)
        this.setHeaderClass(data.headerClass)
        this.attribute = data.attribute
        this.setHeader(data.header)
        this.data = data.data
        //show header
        if (this._header) {
            const header = document.createElement('h1')
            header.textContent = this._header
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass)
            })
            //this._element._append(header)
            document.querySelector(this._element).append(header)
        }
        //show table - повторяем как в "header"
        const table = document.createElement('table')
        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass)
        })
        // создаем заголовки th - нужны для красоты -
        // управлять перечнем колонок через массив атрибутов "gridView.attribute"
        // create table header
        let trHeader = document.createElement('tr') //создали строку
        for (let key in this.attribute) {                   // - надо наполнить
            let th = document.createElement('th')
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label
            } else {
                th.textContent = key
            }
            trHeader.append(th)
        }
        table.append(trHeader)
        //17-26 draw table
        for (let i = 0; i < this.data.length; i++) {
            let dataArr = this.data[i] //1 строка данных
            let tr = document.createElement('tr') //создали строку
            for (let key in this.attribute) {               // - надо наполнить
                let td = document.createElement('td')
                let  value = dataArr[key]
                if (this.attribute[key].value) {           // если ф-ция в поле 'value'
                    value = this.attribute[key].value(dataArr)
                }
                if (this.attribute[key].src) {           // если поле 'src'
                    td.innerHTML = value                 // добавляем через HTML
                } else {
                    td.textContent = value               // добавляем просто текстом
                }
                tr.append(td)
            }
            table.append(tr)
        }

        document.querySelector(this._element).append(table)
    }
}