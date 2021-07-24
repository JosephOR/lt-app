import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneDetails } from '../../interfaces/phoneDetails';

@Component({
    selector: 'app-telephone-input',
    templateUrl: './telephone-input.component.html',
    styleUrls: ['./telephone-input.component.scss']
})
export class TelephoneInputComponent implements OnInit {
    @Output() onPhoneNumberChange = new EventEmitter();
    form: FormGroup;
    phoneDetails: phoneDetails;
    constructor() { 
        this.phoneDetails = {
            phoneNumber: null,
            phonePrefix: null,
            valid: false
        }
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            "phonePrefix": new FormControl("", [Validators.required, Validators.pattern("^[+]?[0-9]{3}$")]),
            "phoneNumber": new FormControl("", [Validators.required, Validators.pattern("[0-9 ]{9}")])
        });
        

        this.form.valueChanges.subscribe(changes => {
            console.log('on change', changes.phoneNumber)
            if (this.form.valid) {
                this.phoneDetails = {
                    phonePrefix: changes.phonePrefix,
                    phoneNumber: changes.phoneNumber,
                    valid: true
                }
            }
            this.onPhoneNumberChange.emit(this.phoneDetails);
        })
    }

}
