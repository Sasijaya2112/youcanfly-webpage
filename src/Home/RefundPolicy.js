import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RefundPolicy() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <span key={idx} onClick={() => handleShow(v)}>
          Refund Policy
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </span>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Refund Policy – Subscriptions to You Can Fly LMS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This Refund Policy (<b>“Policy”</b>) is applicable for any subscriptions purchased for the goal/category on Youcanfly LMS (<b>“Subscription”</b>) by paying a subscription fee (<b>“Subscription Fee”</b>) on www.youcanfly.in and/or the youcanfly Mobile Application (<b>“Platform”</b>) made available by M/s Yourbackers Aeromodelling Private Limited (<b>“Company”</b>).
<br/><br/>
          This Policy shall govern the terms and conditions towards the refund of the Subscription Fee paid by a user or learner on the Platform towards the Subscription. (<b>“Subscriber”</b>)
          It is hereby clarified that this Policy shall not be applicable for any other subscriptions, products or features made available on the Platform and shall be limited to the subscription to the goal mentioned herein.
          <br/><br/>This Policy should be read along with the Terms and Conditions and Privacy Policy, and any other policies made available on the Platform. (<b>“Platform Terms”</b>). Any term not specifically defined herein shall have the meaning ascribed to it in the Platform Terms.
          In the event the Subscription does not meet the expectation and/or requirements of a Subscriber due to any circumstances, or limitations from the Company’s side, the Subscriber may request a refund of the Subscription Fee by writing to the Company (<b>“Refund Request”</b>) and provided such a Refund Request falls within the “<b>Refund Window(s)</b>” provided below and the same is accepted by the Company, such transaction stands cancelled, and the Subscription Fee shall be refunded to the Subscriber in the manner set out herein, subject to any deductions as may be applicable as per the terms and conditions set out in this Policy.
          <br/><br/>If the Subscriber has purchased a Subscription for any batches listed on the Platform, and raises a Refund Request during the Refund Windows provided below, the Company shall refund:
          <br/><br/><b>a.</b>	85% of the Subscription Fee paid if the Refund Request is raised within 7 days from commencement of the batch.
          <br/><br/><b>b.</b>	70% of the Subscription Fee paid if the Refund Request is raised within 30 days from commencement of the batch
          <br/><br/><b>c.</b>	0% of the Subscription Fee paid if the Refund Request is raised after 30 days from commencement of the batch.
          <br/><br/>There shall be no refunds initiated towards any payment that is paid by an individual for the purpose of registration for a Subscription and only refund requests towards the payment made for a Subscription shall be entertained subject to the terms provided herein.
          <br/><br/>Notwithstanding anything contained herein, there shall be no refunds initiated for Subscription Fee paid through any third-party loan financers. However, the Subscriber shall be permitted to request for the foreclosure of the loan. The request for foreclosure may be raised with the Company or directly with third party loan financiers. If the request is raised with the Company, the Company’s obligation shall be limited to passing on the information to the third party loan financier.
          <br/><br/>The Company shall not be liable to provide any refunds, for any reason including lack of usage, dissatisfaction with the batch / educators, for any Refund Request which is received by the Company after the expiry of the Refund Window. With respect to any requests for Refund Request received by the Company after the expiry of the Refund Window, the Company shall have the sole discretion to decide if any refund should be provided to such Subscriber, in whole or in part.
          <br/><br/>To process the refund the Company may contact the Subscriber to verify details within 7(seven) business days from the date of receipt of request. Therefore, it is mandatory to raise a Refund Request from the registered email id and phone number of the Subscriber only. For the purpose of clarity ,business day refers to a day that is not Saturday, Sunday, public holiday or bank holiday in India or in the State where the Company’s office(s) is/are located in India
          <br/><br/>In case the Subscriber wants to continue with the Subscription after initiating a Refund Request, the same cannot be withdrawn.
          <br/><br/>The Subscriber shall receive the refund of the Subscription Fee in the same payment source used to make the payment to purchase the Subscription. In case there are any difficulties or errors in processing the payment to the source account, the Subscriber may be requested to share details of an alternate bank account with requisite documents such as cancelled cheque pertaining to the relevant bank account for verification purpose. In the event the Subscriber fails to provide the complete details (as may be requested by the Company) of the alternate bank account within 14 (fourteen) business days, upon being requested by the Company in writing, the Company shall not be liable to refund the Subscription Fee.
          <br/><br/>While the Company shall refund the Subscription Fee there shall be deductions towards, interest and taxes, as applicable. Whilst every effort is made to provide an excellent learning experience, the Company reserves the right to withdraw or cancel the refund in any event where we have identified a fraudulent activity attributable to the Subscriber requesting such refund and cancellation, including without limitation violation of Platform Terms and/or applicable laws. In such circumstances there shall be no re-attempt of refund made to such Subscriber.

          <br/><br/><b>Delivery and Shipping of Physical Study Materials:</b> To facilitate delivery of the Physical Study Material purchased by you, you are required to provide us with your shipping address and pin code along with other contact information (including your phone number)as may be requested on the Platform at the time of your purchase.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RefundPolicy;