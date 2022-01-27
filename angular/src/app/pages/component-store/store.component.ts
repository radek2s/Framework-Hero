import { Component } from '@angular/core';

@Component({
    selector: 'store',
    templateUrl: './store.component.html',
    //   styleUrls: ['./home.component.css']
})
export class StoreComponent {


    code0 = `...
import { StoreModule } from '@ngrx/store';
...

@NgModule({
    ...
    imports: [
        ...
        StoreModule.forRoot({ basket: basketReducer }),
        ...
    ],
    ...
})
export class AppModule {}`;

    code1 = `import { createAction, createReducer, on } from '@ngrx/store';

export const addItem = createAction('[Basket Component] AddItem');
export const initialState = {
    items: [],
}

const _basketReducer = createReducer(
    initialState,
    on(addItem, (state, {item}) => state.items.push(item))
);

export function basketReducer(state, action) {
    return _basketReducer(state, action);
}`; 
    code2 = `import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem } from 'basket.reducer.ts';

@Component({
    selector: 'book-item',
    templateUrl: './book-item.component.html',
})
export class BookItemComponent {
    items$: Observable<Book[]>;

    constructor(private store: Store<{basket: Object}>) {
        this.items$ = store.select('basket').items;
    }

    addBook() {
        this.store.dispatch(addItem(new Book()));
    }

    ...
}
`
}

