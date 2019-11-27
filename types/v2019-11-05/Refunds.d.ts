declare namespace Stripe {
  /**
   * The Refund object.
   */
  interface Refund {
    /**
     * Amount, in %s.
     */
    amount?: number;

    /**
     * Balance transaction that describes the impact on your account balance.
     */
    balance_transaction?: string | BalanceTransaction | null;

    /**
     * ID of the charge that was refunded.
     */
    charge?: string | Charge | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only)
     */
    description?: string;

    /**
     * If the refund failed, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction.
     */
    failure_balance_transaction?: string | BalanceTransaction;

    /**
     * If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, or `unknown`.
     */
    failure_reason?: string;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'refund';

    /**
     * ID of the PaymentIntent that was refunded.
     */
    payment_intent?: string | PaymentIntent | null;

    /**
     * Reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`.
     */
    reason?: string | null;

    /**
     * This is the transaction number that appears on email receipts sent for this refund.
     */
    receipt_number?: string | null;

    /**
     * The transfer reversal that is associated with the refund. Only present if the charge came from another Stripe account. See the Connect documentation for details.
     */
    source_transfer_reversal?: string | TransferReversal | null;

    /**
     * Status of the refund. For credit card refunds, this can be `pending`, `succeeded`, or `failed`. For other types of refunds, it can be `pending`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation for more details.
     */
    status?: string | null;

    /**
     * If the accompanying transfer was reversed, the transfer reversal object. Only applicable if the charge was created using the destination parameter.
     */
    transfer_reversal?: string | TransferReversal | null;
  }

  /**
   * Create a refund.
   */
  interface RefundCreateParams {
    amount?: number;

    charge?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    metadata?: {
      [key: string]: string;
    };

    payment_intent?: string;

    reason?: RefundCreateParams.Reason;

    refund_application_fee?: boolean;

    reverse_transfer?: boolean;
  }

  namespace RefundCreateParams {
    type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer'
  }

  /**
   * You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
   */
  interface RefundListParams {
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

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
   * Returns a list of all refunds you've previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.
   */
  interface RefundListParams {
    /**
     * Only return refunds for the charge specified by this charge ID.
     */
    charge?: string;

    created?: number | RefundListParams.Created;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * Only return refunds for the PaymentIntent specified by this ID.
     */
    payment_intent?: string;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace RefundListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }
  }

  /**
   * Retrieves the details of an existing refund.
   */
  interface RefundRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Retrieves the details of an existing refund.
   */
  interface RefundRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request only accepts metadata as an argument.
   */
  interface RefundUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  class RefundsResource {
    /**
     * Create a refund.
     */
    create(
      params?: RefundCreateParams,
      options?: HeaderOptions
    ): Promise<Refund>;

    /**
     * You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
     */
    list(
      id: string,
      params?: RefundListParams,
      options?: HeaderOptions
    ): Promise<ApiList<Refund>>;

    /**
     * Returns a list of all refunds you've previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.
     */
    list(
      params?: RefundListParams,
      options?: HeaderOptions
    ): Promise<ApiList<Refund>>;

    /**
     * Retrieves the details of an existing refund.
     */
    retrieve(
      chargeId: string,
      id: string,
      params?: RefundRetrieveParams,
      options?: HeaderOptions
    ): Promise<Refund>;

    /**
     * Retrieves the details of an existing refund.
     */
    retrieve(
      id: string,
      params?: RefundRetrieveParams,
      options?: HeaderOptions
    ): Promise<Refund>;

    /**
     * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request only accepts metadata as an argument.
     */
    update(
      id: string,
      params?: RefundUpdateParams,
      options?: HeaderOptions
    ): Promise<Refund>;
  }
}