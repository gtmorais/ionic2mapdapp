export class PageModel {
  title: string
  body: string
  id: string
  date: string
  constructor() {
    this.date = new Date().toDateString();
  }
}
