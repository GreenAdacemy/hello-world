export class GlobalSystem {
  user_ = ''
  currentLang = ''

  set user(data) {
    this.user_ = data
  }

  get user() {
    return this.user_
  }

  set lang(lang_) {
    if(lang_) {
      this.currentLang = lang_
    }
  }

  get lang() {
    console.log(`${this.currentLang}`)
    return this.currentLang
  }
}