import { FC } from 'react';

const PaymentDetails: FC = () => {
  return (
    <section className="bg-white lg:px-16 py-10 text-gray-800 container mx-auto px-4">
      <h2 className="lg:text-5xl font-semibold text-black mb-6 text-3xl">Payment Details</h2>

      <ol className="list-decimal space-y-8 pl-6 text-[17px] leading-relaxed text-black font-semibold">
        <li>
          Cash payment to Account. No. 0071524099 held at the Borella Super branch of the Bank of Ceylon and attach a copy of the cash deposit slip.
          The slip should clearly indicate the Name of the organization and the team name.
        </li>
        <li>
          Cheque written in favour of &quot;SRI LANKA ASSOCIATION FOR THE ADVANCEMENT OF QUALITY AND PRODUCTIVITY&quot; should be deposited into 
          Account. No. 0071524099 held at the Borella Super branch of the Bank of Ceylon and attach a copy of the cheque deposit slip.
          The application will not be accepted until the cheque is processed and funds are remitted to the account.
        </li>
        <li>
          Online transfer to Account. No. 0071524099 held at the Borella Super branch of the Bank of Ceylon and attach a copy of the transfer slip.
        </li>
      </ol>

      <p className="mt-6 font-semibold text-gray-900 text-[17px]">
        To be paid before 4.30 pm on 10th March 2025
      </p>

      <p className="mt-4 text-black text-[18px] font-semibold">
        “Please share the payment proof by renaming the document with the company registration number, to 
        <a href="mailto:finance@slaaqp.org" className="text-blue-600 hover:underline ml-1">finance@slaaqp.org</a>.”
      </p>
    </section>
  );
};

export default PaymentDetails;
