import React from 'react';
import {Col, Form,FormGroup} from 'reactstrap';
import "./../styles/payment.css"
import {useNavigate} from 'react-router-dom'


const Payment = () => {
   
    const navigate= useNavigate()

    
     const handleClick = async e=>{
     e.preventDefault();

      console.log(Payment);

     try {
       
      
      navigate("/thank-you");
    

     } catch (err) {
       alert(err.message)
     }


    }     

    return <Col lg='12'>
      <h1 className='heading'>Payment Page</h1>
     <div className='payment__bar'>
  <Form className='d-flex align-items-center gap-4'>
    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
      <div>
        <h6>Email:</h6>
        <input type="email" id="email" name="email" placeholder="Enter email" />
      </div>
    </FormGroup>
    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
      <div>
        <h6>Card Number:</h6>
        <input type="String" id="cardNumber" name="cardNumber" placeholder="Card Number" />
      </div>
    </FormGroup>
    <div className='d-flex gap-3'>
      <FormGroup className='d-flex gap-3 form__group form__group-fast'>
        <div>
          <h6>MM/YY</h6>
          <input type="password" id="expiry" name="expiry" placeholder="MM/YY" />
        </div>
      </FormGroup>
      <FormGroup className='d-flex gap-3 form__group form__group-last'>
        <div>
          <h6>CVV:</h6>
          <input type="password" id="cvv" name="cvv" placeholder="CVV" />
        </div>
      </FormGroup>
    </div>
    <FormGroup className='d-flex gap-3 form__group'>
      <div>
        <h6>Cardholder Name:</h6>
        <input type="String" id="cardholderName" name="cardholderName" placeholder="Full name on card" />
      </div>
    </FormGroup>
    <FormGroup className='d-flex gap-3 form__group'>
      <div>
        <h6>Country or Region:</h6>
        <input type="String" id="country" name="country" placeholder="Country or region" />
      </div>
    </FormGroup>
    <FormGroup className='d-flex gap-3 form__group'>
      <div>
        <h6>MODE OF PAYMENT:</h6>
        <select name="country" id="country" className='options'>
             <option value="DB">DEBIT CARD</option>
             <option value="CR">CREDIT CARD</option>
        </select>
      </div>
    </FormGroup>
    <div className='form-check'>
      <input type="checkbox" className='form-check-input' id="saveInfo" name="saveInfo" />
      <label className='form-check-label' for="saveInfo">Securely save my information for 1-click checkout</label>
    </div>
    <button className='btn booking__btn' type="submit" onClick={handleClick}>Pay Now</button>
  </Form>
</div>

  </Col>

 
};

export default Payment;
