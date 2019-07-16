import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CounterComponent } from './counter/counter.component';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestPipe } from './test.pipe';
import { TestService } from './test.service';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    NavigationComponent,
    CounterComponent,
    TestComponent,
    TestChildComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TestService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
