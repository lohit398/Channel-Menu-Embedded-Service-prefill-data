import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import CONTACT_ID from '@salesforce/schema/User.ContactId';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';

export default class StoreUserDetails extends LightningElement {
    initial = true;
    userId = Id;
    contactId;

    @wire(getRecord, { recordId: '$userId', fields: [CONTACT_ID]})
    getUserDetails({error,data}){
        if(error){
            console.log(error);
        }
        else if(data){
           this.contactId = data.fields.ContactId.value;
           sessionStorage.setItem("contactId",this.contactId);
        }
    }

    @wire(getRecord, { recordId: '$contactId', fields: [FIRST_NAME,LAST_NAME,EMAIL]})
    getContactDetails({error,data}){
        if(error){
            console.log(error);
        }
        else if(data){
            sessionStorage.setItem("contactFirstName",data.fields.FirstName.value);
            sessionStorage.setItem("contactLastName",data.fields.LastName.value);
            sessionStorage.setItem("contactEmail",data.fields.Email.value);
        }
    }


    renderedCallback() {
        if (this.initial){
            this.initial = false;
            sessionStorage.setItem("userId",this.userId);
        }
            
    }
}