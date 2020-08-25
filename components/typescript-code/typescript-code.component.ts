class AnyClass implements OnInit {
  name: string;
  constructor() {
    console.log('Constructor');
    this.name = 'Bok';
  }
  
  ngOnInit() {
    console.log('OnInit');
  }
}
