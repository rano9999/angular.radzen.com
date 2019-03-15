/*
  This file is automatically generated. Any changes will be overwritten.
  Modify split-button.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { LinkComponent } from '@radzen/angular/dist/link';
import { CardComponent } from '@radzen/angular/dist/card';
import { SplitButtonComponent } from '@radzen/angular/dist/splitbutton';
import { HtmlComponent } from '@radzen/angular/dist/html';

import { ConfigService } from '../config.service';


export class SplitButtonGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('link0') link0: LinkComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('card0') card0: CardComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('button0') button0: SplitButtonComponent;
  @ViewChild('heading3') heading3: HeadingComponent;
  @ViewChild('button1') button1: SplitButtonComponent;
  @ViewChild('heading4') heading4: HeadingComponent;
  @ViewChild('button2') button2: SplitButtonComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('card1') card1: CardComponent;
  @ViewChild('html0') html0: HtmlComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;
  events: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.events = [];
  }

  button0Click(event: any) {
    this.events.push('SplitButton with text')
  }

  button1Click(event: any) {
    this.events.push('SplitButton with text and icon')
  }

  button2Click(event: any) {
    this.events.push('SplitButton with icon')
  }
}