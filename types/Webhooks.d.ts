declare module 'stripe' {
  namespace Stripe {
    export class Webhooks {
      /**
       * Constructs and verifies the signature of an Event from the provided details.
       *
       * @throws Stripe.errors.StripeSignatureVerificationError
       */
      constructEvent(
        /**
         * Raw text body payload received from Stripe.
         */
        payload: string,

        /**
         * Value of the `stripe-signature` header from Stripe.
         */
        header: string,

        /**
         * Your Webhook Signing Secret for this endpoint (eg; 'whsec_...').
         * You can get this [in your dashboard](https://dashboard.stripe.com/webhooks).
         */
        secret: string,

        /**
         * Seconds of tolerance on timestamps.
         */
        tolerance?: number
      ): Stripe.Event;

      /**
       * Generates a header to be used for webhook mocking
       */
      generateTestHeaderString(opts: {
        /**
         * JSON stringified payload object, containing the 'id' and 'object' parameters.
         */
        payload: string;

        /**
         * Timestamp of the header. Defaults to Date.now().
         */
        timestamp?: number;

        /**
         * Stripe webhook secret, eg; 'whsec_...'.
         */
        secret: string;

        /**
         * Version of API to hit. Defaults to 'v1'.
         */
        scheme?: string;

        /**
         * Computed webhook signature.
         */
        signature?: string;
      }): string;

      signature: Signature;
    }

    export class Signature {
      EXPECTED_SCHEME: 'v1';

      _computeSignature(payload: string, secret: string): string;
      verifyHeader(
        payload: string,
        header: string,
        secret: string,
        tolerance?: number
      ): void;
      parseHeader(
        header: string,
        scheme?: string
      ): {
        t: number;
        v0: string;
        v1: string;
      };
    }
  }
}
