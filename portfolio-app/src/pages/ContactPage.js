import React, { Component } from 'react'

class ContactPage extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         message: '',
         disabled: false,
         emailSent: null
      }
   }

   render() {
      return (
         <p>ContactPage works</p>
      )
   }

}

export default ContactPage;