declare namespace Stripe {
  /**
   * The Card object.
   */
  interface Card {
    /**
     * The account this card belongs to. This attribute will not be in the card object if the card belongs to a customer or recipient instead.
     */
    account: string | Account | null;

    /**
     * City/District/Suburb/Town/Village.
     */
    address_city: string | null;

    /**
     * Billing address country, if provided when creating card.
     */
    address_country: string | null;

    /**
     * Address line 1 (Street address/PO Box/Company name).
     */
    address_line1: string | null;

    /**
     * If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    address_line1_check: string | null;

    /**
     * Address line 2 (Apartment/Suite/Unit/Building).
     */
    address_line2: string | null;

    /**
     * State/County/Province/Region.
     */
    address_state: string | null;

    /**
     * ZIP or postal code.
     */
    address_zip: string | null;

    /**
     * If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    address_zip_check: string | null;

    /**
     * A set of available payout methods for this card. Will be either `["standard"]` or `["standard", "instant"]`. Only values from this set should be passed as the `method` when creating a transfer.
     */
    available_payout_methods: Array<Card.AvailablePayoutMethod> | null;

    /**
     * Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
     */
    brand: string;

    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country: string | null;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string | null;

    /**
     * The customer that this card belongs to. This attribute will not be in the card object if the card belongs to an account or recipient instead.
     */
    customer: string | Customer | null;

    /**
     * If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    cvc_check: string | null;

    /**
     * Whether this card is the default external account for its currency.
     */
    default_for_currency: boolean | null;

    /**
     * Card description. (Only for internal use only and not typically available in standard API requests.)
     */
    description: string;

    /**
     * (For tokenized numbers only.) The last four digits of the device account number.
     */
    dynamic_last4: string | null;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;

    /**
     * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example.
     */
    fingerprint: string | null;

    /**
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding: string;

    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * Issuer identification number of the card. (Only for internal use only and not typically available in standard API requests.)
     */
    iin: string;

    /**
     * Issuer bank name of the card. (Only for internal use only and not typically available in standard API requests.)
     */
    issuer: string;

    /**
     * The last four digits of the card.
     */
    last4: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: {
      [key: string]: string;
    };

    /**
     * Cardholder name.
     */
    name: string | null;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'card';

    /**
     * The recipient that this card belongs to. This attribute will not be in the card object if the card belongs to a customer or account instead.
     */
    recipient: string | Recipient | null;

    /**
     * If the card number is tokenized, this is the method that was used. Can be `apple_pay` or `google_pay`.
     */
    tokenization_method: string | null;
  }

  namespace Card {
    type AvailablePayoutMethod = 'instant' | 'standard'
  }

  interface DeletedCard {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'card';

    /**
     * Always true for a deleted object
     */
    deleted: true;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string | null;
  }
}