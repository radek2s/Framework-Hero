import { Component } from '@angular/core';

@Component({
    selector: 'extend',
    templateUrl: './extend.component.html',
    //   styleUrls: ['./home.component.css']
})
export class ExtendComponent {


    code0 = `import { Component } from '@angular/core';
import WeatherForecast from "./weather-forecast";
    
@Component({
  selector: 'weather-base',
  template: '',
})
export class WeatherBaseComponent {
  weather: WeatherForecast;

  constructor() {
      this.weather = new WeatherForecast('Monday', 'Snow', '13°C', 'N', '50km/h', '50%');
  }
}`

    code1 = `import { Component } from '@angular/core';
import WeatherBaseComponent from "./weather-base.component";

@Component({
    selector: 'weather-summary',
    template: \`<div>
  <span>{{weather.day}}</span>
  <div>
    <span>{{weather.forecast}}</span>
    <span>{{weather.temperature}}</span>
  </div>
</div>\`,
  })
  export class WeatherSummaryComponent extends WeatherBaseComponent {
    
    constructor() {
        super();
    }
  }`;

code2 = `import { Component } from '@angular/core';
import WeatherBaseComponent from "./weather-base.component";

@Component({
    selector: 'weather-details',
    template: \`<div>
    <span>{{weather.day}}</span>
    <div>
      <span>{{weather.forecast}}</span>
      <span>{{weather.temperature}}</span>
      <span>{{weather.wind}} {{weather.windSpeed}}</span>
      <span>{{weather.humidity}}</span>
    </div>
  </div>\`,
  })
  export class WeatherDetailsComponent extends WeatherBaseComponent {
    
    constructor() {
        super();
    }
  }`;




}

