// publisher/subscriber | observable

store.subscribe(function subscriber() {}); // после обновления state'a
setTimeout(function subscriber() {}, 1000); // прошла секунда
promises.then(function subscriber() {}); // резолв промина
button.addEventListener("click", function subscriber() {}); // произошел клик

app.post("/users", function subscriber() {}); // произошел пост запрос

// store = {
//   _state: {},
//   _subscribers: [],
//   dispatch(action) {
//     this.reduser.forEach(() => {})
//     this._subscribers.forEach(subs => subs())
//   },
//   subscribe(subscriber) {
//     this._subscribers.push(subscriber)
//   }
// }

// subscriber === observer === listener === watcher === handler

const button = {
  _subscribers: {
    click: [],
    focus: [],
    dbClick: [],
  },
  addEventListener(event, subscriber) {
    this._subscribers[event].push(subscriber);
  },
  removeEventListener(event, subscriber) {
    this._subscribers[event] = this._subscribers.filter(
      (subs) => subs !== subscriber
    );
  },
  click() {
    this._subscribers["click"].forEach((s) => s());
  },
  focus() {
    this._subscribers["focus"].forEach((s) => s());
  },
  bdClick() {
    this._subscribers["dbClick"].forEach((s) => s());
  },
};
