class AnyClass implements OnInit {
  name: string;
  constructor() {
    console.log('Constructor');
    this.name = 'Antonio';
  }
  
  ngOnInit() {
    console.log('OnInit');
  }
}
