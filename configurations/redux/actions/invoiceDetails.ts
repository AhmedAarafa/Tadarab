

import * as TYPES from '../actionTypes/invoiceDetails';

export const setInvoiceDetails = (payload:any) => ({
    type: TYPES.INVOICE_DETAILS,
    payload:payload,
}); 