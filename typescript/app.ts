interface Observer {
    update(subject: Subject):void //говорит что-то поменялось,т.к.появился update
} 
interface Subject {
    attach(observer: Observer):void
    detach(observer: Observer):void
    notify():void  //внешний код, кот будут говорить отправь событие
}

class Lead {
    constructor(public name:string, public phone: string) {
    }
}
//----------------------Subject------------
class NewLead implements Subject {    //событие когда приходит новый Лид
    private observers: Observer[]=[]  //те кто подписался
    public state: Lead                //некот .вн.состояние
    attach(observer: Observer): void {
        if (this.observers.includes(observer)) {
            return
        }
        this.observers.push(observer)
    }
    detach(observer: Observer): void {
         const observerIndex = this.observers.indexOf(observer)
        if (observerIndex == -1) {
            return
        }
        this.observers.splice(observerIndex,1)
    }
    notify(): void {
        for (const observer of this.observers) {
            observer.update(this) 
           //как state так и subject,т.к. может быть подписан на неск.subject           
        }
    }  
}
//--------------- теперь Подписчики----------
 class NotificationService implements Observer {
     update(subject: Subject): void {
         console.log(`NotificationService получил уведомление`);
         console.log(subject);
     }
 }
 class LeadService implements Observer {
    update(subject: Subject): void {
        console.log(`LeadService получил уведомление`);
        console.log(subject);
    }
}
const subject = new NewLead()
subject.state = new Lead ('Anton', '+998') //пришел новый Лид

const s1 = new NotificationService    //---подписчики
const s2 = new LeadService

subject.attach(s1)   //--подписываемся
subject.attach(s2)

subject.notify() //кинем уведобление

subject.detach(s2)
subject.notify() //кинем уведобление
-----------
$ node app
NotificationService получил уведомление
NewLead {
  observers: [ NotificationService {}, LeadService {} ],
  state: Lead { name: 'Anton', phone: '+998' }
}
LeadService получил уведомление
NewLead {
  observers: [ NotificationService {}, LeadService {} ],
  state: Lead { name: 'Anton', phone: '+998' }
}
NotificationService получил уведомление
NewLead {
  observers: [ NotificationService {} ],
  state: Lead { name: 'Anton', phone: '+998' }
}


