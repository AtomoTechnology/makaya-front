import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule,} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  exports:[
    MatButtonModule,MatAutocompleteModule, 
    MatIconModule,MatFormFieldModule,
    MatSidenavModule,MatInputModule,
    MatToolbarModule,MatSelectModule,  
    MatGridListModule,MatSnackBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class MaterialModule { }
