import { TestBed, waitForAsync  } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxMatDrpModule } from '../../public_api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [BrowserAnimationsModule , NgxMatDrpModule]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should setup presets', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'setupPresets');
    fixture.detectChanges();
    expect(app.setupPresets).toHaveBeenCalled();
    expect(app.presets).toBeDefined();
  }));
  it('should setup date-range-picker options with required props', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.options.presets).toBeDefined();
    expect(app.options.format).toBeDefined();
    expect(app.options.range).toBeDefined();
  }));

});
