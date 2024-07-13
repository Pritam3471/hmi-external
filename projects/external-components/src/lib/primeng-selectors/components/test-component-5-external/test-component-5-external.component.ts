{"import { DOCUMENT } from '@angular/common';\nimport {  Component, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';\nimport { DomSanitizer } from '@angular/platform-browser';\nimport { ActivatedRoute, Params, Router } from '@angular/router';\nimport { CommonExternalComponent } from '../common-external/common-external.component';\n\n\n@Component({\n  selector: 'hmi-ext-iframe-external',\n  templateUrl: './iframe-external.component.html',\n  styleUrls: ":{"'./iframe-external.component.css'":" false;\n  navigationExtrasState: any;\n  @ViewChild('iframe') iframe: ElementRef | null = null;\n\n  constructor(private sanitizer: DomSanitizer,private readonly activatedRoute: ActivatedRoute) { \n    super();\n  }\n\n  ngOnInit(): void {\n    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.fieldObj.customAttributes.src);\n  }\n\n  ngAfterViewInit(): void {\n    this.iframe?.nativeElement.addEventListener('load', ()=> {\n      // remove * in production\n      this.iframe?.nativeElement.contentWindow?.postMessage(this.activatedRoute.snapshot.params['projectId'],'*');\n    })\n  }\n\n}"}}