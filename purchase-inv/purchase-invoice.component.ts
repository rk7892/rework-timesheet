import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-purchase-invoice',
    standalone: true,
    templateUrl: './purchase-invoice.component.html',
    styleUrls: ['./purchase-invoice.component.scss'],
    imports: [CommonModule, RouterLink, PurchaseInvoiceComponent, MatCardModule]
})
export class PurchaseInvoiceComponent {

}
