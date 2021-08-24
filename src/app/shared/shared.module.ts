import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';



@NgModule({
    declarations: [FilterUserByNamePipe],
    imports: [ ReactiveFormsModule, FormsModule ],
    exports: [ReactiveFormsModule, FormsModule, CommonModule, FilterUserByNamePipe]

})
export class SharedModule {
}
