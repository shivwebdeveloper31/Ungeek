import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div class="container">
    <form id='Form'>
    <h6>Do you have a Query ?</h6>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" placeholder='Enter your Name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="text" class="form-control" placeholder='Enter your Email' id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="password" placeholder='Phone Number' class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
  <textarea class="form-control" placeholder='Message' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
    </div>
  )
}

export default Form;
