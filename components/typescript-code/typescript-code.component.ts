class AnyClass implements OnInit {
  name: string;
  constructor() {
    console.log('Constructor');
    this.name = 'User';
  }
  
  ngOnInit() {
    console.log('OnInit');
  }
}
