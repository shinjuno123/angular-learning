import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/observable";

export class CustomValidators {
    static invalidProjectName(control: FormControl) : {[s:string]:boolean} {
        if(control.value === 'Test'){
            return {'nameIsForbidden': true};
        }

        return null;
    }

    static asyncInvalidProjectName(control: FormControl) : Promise<any> | Observable<any>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value === 'TestProject'){
                    resolve({'nameIsForbidden': true});
                } else {
                    resolve(null);
                }
            },2000)
        })

        return promise;
    }
}