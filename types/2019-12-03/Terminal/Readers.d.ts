declare namespace Stripe {
  namespace Terminal {
    /**
     * The Reader object.
     */
    interface Reader {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.reader';

      deleted?: void;

      /**
       * The current software version of the reader.
       */
      device_sw_version: string | null;

      /**
       * Type of reader, one of `bbpos_chipper2x` or `verifone_P400`.
       */
      device_type: Reader.DeviceType;

      /**
       * The local IP address of the reader.
       */
      ip_address: string | null;

      /**
       * Custom label given to the reader for easier identification.
       */
      label: string;

      /**
       * The location identifier of the reader.
       */
      location: string | null;

      /**
       * Serial number of the reader.
       */
      serial_number: string;

      /**
       * The networking status of the reader.
       */
      status: string | null;
    }

    namespace Reader {
      type DeviceType = 'bbpos_chipper2x' | 'verifone_P400'
    }

    interface DeletedReader {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.reader';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface ReaderCreateParams {
      /**
       * A code generated by the reader used for registering to an account.
       */
      registration_code: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Custom label given to the reader for easier identification. If no label is specified, the registration code will be used.
       */
      label?: string;

      /**
       * The location to assign the reader to. If no location is specified, the reader will be assigned to the account's default location.
       */
      location?: string;

      /**
       * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
       */
      operator_account?: string;
    }

    interface ReaderRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
       */
      operator_account?: string;
    }

    interface ReaderUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The new label of the reader.
       */
      label?: string;

      /**
       * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
       */
      operator_account?: string;
    }

    interface ReaderListParams {
      /**
       * Filters readers by device type
       */
      device_type?: string | ReaderListParams.DeviceType;

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
       * A location ID to filter the response list to only readers at the specific location
       */
      location?: string;

      /**
       * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
       */
      operator_account?: string;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;

      /**
       * A status filter to filter readers to only offline or online readers
       */
      status?: string | ReaderListParams.Status;
    }

    namespace ReaderListParams {
      type DeviceType = 'bbpos_chipper2x' | 'verifone_P400'

      type Status = 'offline' | 'online'
    }

    interface ReaderDeleteParams {
      /**
       * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
       */
      operator_account?: string;
    }

    class ReadersResource {
      /**
       * Creates a new Reader object.
       */
      create(
        params: ReaderCreateParams,
        options?: RequestOptions
      ): Promise<Terminal.Reader>;

      /**
       * Retrieves a Reader object.
       */
      retrieve(
        id: string,
        params?: ReaderRetrieveParams,
        options?: RequestOptions
      ): Promise<Terminal.Reader>;
      retrieve(id: string, options?: RequestOptions): Promise<Terminal.Reader>;

      /**
       * Updates a Reader object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: ReaderUpdateParams,
        options?: RequestOptions
      ): Promise<Terminal.Reader>;

      /**
       * Returns a list of Reader objects.
       */
      list(
        params?: ReaderListParams,
        options?: RequestOptions
      ): ApiListPromise<Terminal.Reader>;
      list(options?: RequestOptions): ApiListPromise<Terminal.Reader>;

      /**
       * Deletes a Reader object.
       */
      del(
        id: string,
        params?: ReaderDeleteParams,
        options?: RequestOptions
      ): Promise<DeletedReader>;
      del(id: string, options?: RequestOptions): Promise<DeletedReader>;
    }
  }
}