class Student extends User {
    constructor(sername, password, nickname) {
        super (sername, password)
        this.nickname = nickname
    }
    getStudentCourses () {
        return [1,2]
    }
}