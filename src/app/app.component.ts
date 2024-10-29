import { Component } from '@angular/core';
declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swagger-ui';
  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      //url: 'https://petstore.swagger.io/v2/swagger.json',
      url: '../assets/swagger-ui.yaml',
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }
}
