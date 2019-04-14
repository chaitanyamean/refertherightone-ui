import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProviderService } from '../provider.service';

interface JobTags {
    itemId: string;
    tags: string;
}

@Injectable()
export class TagsResolver implements Resolve<any> {

constructor(private providerService: ProviderService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> |
    Promise<any> | any {

        return this.providerService.getAllTags();
    }
}