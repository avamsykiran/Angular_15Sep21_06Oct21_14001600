import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular testing demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular testing demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //render the template of the component
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('angular testing demo');
  });

  
  it('should render a button labeld as "Click Me"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //render the template of the component
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Click Me');
  });

  it('should render "Button got clicked" as title when button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges(); //render the template of the component
    let compiled = fixture.nativeElement;
    let btn = compiled.querySelector('button');
    btn.click(); //simualting the click event
    expect(app.title).toEqual('Button got clicked');    
    fixture.detectChanges(); //render the template of the component
    compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain("Button got clicked");
  });
});
