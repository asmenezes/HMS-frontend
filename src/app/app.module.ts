import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FrontsearchComponent } from './components/frontsearch/frontsearch.component';
import { SearchsidebarComponent } from './components/searchsidebar/searchsidebar.component';
import { MainresultsComponent } from './components/mainresults/mainresults.component';
import { ResultitemComponent } from './components/resultitem/resultitem.component';
import { ResultscontainerComponent } from './components/resultscontainer/resultscontainer.component';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from     './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RoombookComponent } from './components/roombook/roombook.component';
import { RoombookformComponent } from './components/roombookform/roombookform.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FrontsearchComponent,
    SearchsidebarComponent,
    MainresultsComponent,
    ResultitemComponent,
    ResultscontainerComponent,
    NotfoundComponent,
    AboutComponent,
    RoombookComponent,
    RoombookformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
   MatCheckboxModule,
   MatCheckboxModule,
   MatButtonModule,
   MatInputModule,
   MatAutocompleteModule,
   MatDatepickerModule,
   MatFormFieldModule,
   MatRadioModule,
   MatSelectModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatMenuModule,
   MatSidenavModule,
   MatToolbarModule,
   MatListModule,
   MatGridListModule,
   MatCardModule,
   MatStepperModule,
   MatTabsModule,
   MatExpansionModule,
   MatButtonToggleModule,
   MatChipsModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatProgressBarModule,
   MatDialogModule,
   MatTooltipModule,
   MatSnackBarModule,
   MatTableModule,
   MatSortModule,
   MatPaginatorModule,
   MatNativeDateModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
