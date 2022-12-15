import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EisHockeyComponent } from './eishockey.component';

describe('EisHockeyApp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EisHockeyComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EisHockeyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'uni-muenchen-eishockey'`, () => {
    const fixture = TestBed.createComponent(EisHockeyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('uni-muenchen-eishockey');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EisHockeyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'uni-muenchen-eishockey app is running!'
    );
  });
});
