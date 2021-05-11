import { HttpHeaders } from '@angular/common/http';

export class Constant {
    
    public static HTTP_OPTION = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }
}

