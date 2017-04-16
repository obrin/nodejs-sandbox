class DataSource {
  constructor(limit) {
    let i = 0
    this.id = setInterval(() => this.emit(i++), 1000)
    this.limit = limit || 10
  }

  emit(n) {
    try {
      if (this.onNext) {
        this.onNext(n)
      }

      if(n === this.limit) {
        if (this.onComplete) {
          this.onComplete()
        }
        this.destroy()
      }
    } catch (e) {
      if (this.onError) {
        this.onError(e)
      }
    }
  }

  destroy() {
    clearInterval(this.id)
  }
}


// const data = new DataSource(10)
// data.onNext = (n) => console.log(n + 1)


function myObservable(observer) {
  const data = new DataSource(10)

  data.onNext = (n) => observer.onNext(n + 10)
  data.onComplete = () => observer.onComplete()
  data.onError = (e) => observer.onError(e)

  return () => data.destroy()
}


// myObservable({
//   onNext: (n) => console.log(n)
// })


class SafeObserver {
  constructor(destination) {
    this.destination = destination
  }

  onNext(value) {
    if (!this.isUnsubscribed && this.destination.onNext) {
      try {
        this.destination.onNext(value)
      } catch (err) {
        this.unsubscribe()
        throw err
      }
    }
  }

  onError(err) {
    if (!this.isUnsubscribed && this.destination.onError) {
      try {
        this.destination.onError(err)
      } catch (err) {
        this.unsubscribe()
        throw err
      }
      this.unsubscribe()
    }
  }

  onComplete() {
    if (!this.isUnsubscribed && this.destination.onComplete) {
      try {
        this.destination.onComplete()
      } catch (err) {
        this.unsubscribe()
        throw err
      }
      this.unsubscribe()
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true
    if(this.unsub) {
      this.unsub()
    }
  }
}

class Observable {
  constructor(_subscribe) {
    this._subscribe = _subscribe
  }

  subscribe(observer) {
    const safeObserver = new SafeObserver(observer)
    safeObserver.unsub = this._subscribe(safeObserver)

    return { unsubscribe: safeObserver.unsubscribe.bind(safeObserver) }
  }
}

const myObs = new Observable((observer) => {
  const data = new DataSource(20)

  data.onNext = (d) => observer.onNext(d)
  data.onError = (e) => observer.onError(e)
  data.onComplete = () => observer.onComplete

  return () => data.destroy()
})

const hello = myObs.subscribe({
  onNext: (n) => console.log(n + '!'),
  onError: (e) => console.log('ERROR:', e),
  onComplete: () => console.log('COMPLETED')
})

setTimeout(() => {
  hello.unsubscribe()
}, 2000)
