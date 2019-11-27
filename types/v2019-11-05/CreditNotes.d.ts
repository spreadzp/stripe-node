declare namespace Stripe {
  /**
   * The CreditNote object.
   */
  interface CreditNote {
    /**
     * The integer amount in **%s** representing the total amount of the credit note, including tax.
     */
    amount?: number;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * ID of the customer.
     */
    customer?: string | Customer;

    /**
     * Customer balance transaction related to this credit note.
     */
    customer_balance_transaction?: string | CustomerBalanceTransaction | null;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * ID of the invoice.
     */
    invoice?: string | Invoice;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Customer-facing text that appears on the credit note PDF.
     */
    memo?: string | null;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
     */
    number?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'credit_note';

    /**
     * The link to download the PDF of the credit note.
     */
    pdf?: string;

    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason?:
      | 'duplicate'
      | 'fraudulent'
      | 'order_change'
      | 'product_unsatisfactory'
      | null;

    /**
     * Refund related to this credit note.
     */
    refund?: string | Refund | null;

    /**
     * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
     */
    status?: 'issued' | 'void';

    /**
     * Type of this credit note, one of `post_payment` or `pre_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
     */
    type?: 'post_payment' | 'pre_payment';

    /**
     * The time that the credit note was voided.
     */
    voided_at?: number | null;
  }

  /**
   * Issue a credit note to adjust the amount of a finalized invoice. For a status=open invoice, a credit note reduces
   * its amount_due. For a status=paid invoice, a credit note does not affect its amount_due. Instead, it can result
   * in any combination of the following:
   *
   *
   *  Refund: create a new refund (using refund_amount) or link an existing refund (using refund).
   *  Customer balance credit: credit the customer's balance (using credit_amount) which will be automatically applied to their next invoice when it's finalized.
   *  Outside of Stripe credit: any positive value from the result of amount - refund_amount - credit_amount is represented as an “outside of Stripe” credit.
   *
   *
   * You may issue multiple credit notes for an invoice. Each credit note will increment the invoice's pre_payment_credit_notes_amount
   * or post_payment_credit_notes_amount depending on its status at the time of credit note creation.
   */
  interface CreditNoteCreateParams {
    /**
     * The integer amount in **%s** representing the total amount of the credit note.
     */
    amount?: number;

    /**
     * The integer amount in **%s** representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
     */
    credit_amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * ID of the invoice.
     */
    invoice: string;

    /**
     * The credit note's memo appears on the credit note PDF.
     */
    memo?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason?:
      | 'duplicate'
      | 'fraudulent'
      | 'order_change'
      | 'product_unsatisfactory';

    /**
     * ID of an existing refund to link this credit note to.
     */
    refund?: string;

    /**
     * The integer amount in **%s** representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
     */
    refund_amount?: number;
  }

  /**
   * Returns a list of credit notes.
   */
  interface CreditNoteListParams {
    /**
     * Only return credit notes for the customer specified by this customer ID.
     */
    customer?: string;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return credit notes for the invoice specified by this invoice ID.
     */
    invoice?: string;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieves the credit note object with the given identifier.
   */
  interface CreditNoteRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing credit note.
   */
  interface CreditNoteUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Credit note memo.
     */
    memo?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Marks a credit note as void. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
   */
  interface CreditNoteVoidCreditNoteParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class CreditNotesResource {
    /**
     * Issue a credit note to adjust the amount of a finalized invoice. For a status=open invoice, a credit note reduces
     * its amount_due. For a status=paid invoice, a credit note does not affect its amount_due. Instead, it can result
     * in any combination of the following:
     *
     *
     *  Refund: create a new refund (using refund_amount) or link an existing refund (using refund).
     *  Customer balance credit: credit the customer's balance (using credit_amount) which will be automatically applied to their next invoice when it's finalized.
     *  Outside of Stripe credit: any positive value from the result of amount - refund_amount - credit_amount is represented as an “outside of Stripe” credit.
     *
     *
     * You may issue multiple credit notes for an invoice. Each credit note will increment the invoice's pre_payment_credit_notes_amount
     * or post_payment_credit_notes_amount depending on its status at the time of credit note creation.
     */
    create(
      params: CreditNoteCreateParams,
      options?: HeaderOptions
    ): Promise<CreditNote>;

    /**
     * Returns a list of credit notes.
     */
    list(
      params?: CreditNoteListParams,
      options?: HeaderOptions
    ): Promise<ApiList<CreditNote>>;

    /**
     * Retrieves the credit note object with the given identifier.
     */
    retrieve(
      id: string,
      params?: CreditNoteRetrieveParams,
      options?: HeaderOptions
    ): Promise<CreditNote>;

    /**
     * Updates an existing credit note.
     */
    update(
      id: string,
      params?: CreditNoteUpdateParams,
      options?: HeaderOptions
    ): Promise<CreditNote>;

    /**
     * Marks a credit note as void. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
     */
    voidCreditNote(
      id: string,
      params?: CreditNoteVoidCreditNoteParams,
      options?: HeaderOptions
    ): Promise<CreditNote>;
  }
}