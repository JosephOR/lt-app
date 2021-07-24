import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneDetails } from 'src/app/shared/interfaces/phoneDetails';
import { userDetails } from 'src/app/shared/interfaces/userDetails';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
    form: FormGroup;
    userDetails: userDetails;
    phoneDetails: phoneDetails;
    phoneDetailsValid = false;
    showUserDetails = false;

    constructor() { }

    ngOnInit(): void {
        this.form = new FormGroup({
            "firstName": new FormControl("", Validators.required),
            "lastName": new FormControl("", Validators.required)
        });
    }

    onPhoneNumberChange(phoneDetails: phoneDetails): void {
        this.phoneDetails = phoneDetails;
        this.phoneDetailsValid = this.phoneDetails.valid;
    }

    onSubmit(): void {
        this.userDetails = {
            firstName: this.form.get("firstName").value,
            lastName: this.form.get("lastName").value,
            phone: {
                phonePrefix: this.phoneDetails.phonePrefix,
                phoneNumber: this.phoneDetails.phoneNumber
            }
        }
        this.showUserDetails = true;
    }

}
