import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changedSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1'? true: false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    console.log(id);
    // Subscribe route params to update the id if params change
    this.route.params.subscribe(
      (params) => {
        const server = this.serversService.getServer(+params['id']);
        this.serverName = server.name;
        this.serverStatus = server.status;
      }
    )

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changedSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate() : boolean | Promise<boolean> | Observable<boolean>{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.serverStatus)
     && !this.changedSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
