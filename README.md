Angular 11
-----------------------------------------------------------------------------

    is a JS frameworks to build SPA.

    PreRequites
    ----------------
        HTML 5
        CSS 3
        Javascript (ES6)
            Array operations and Array prototype methods
            Functions, Arrow Functions, Call Backs
            Spread and Rest operators
            Promise, async and await
            Module (esm)

    Lab Setup
    -----------------
        VSCode 
        NodeJS          node --version
                        npm --version
        Angular CLI     ng --version

                        npm install -g @angular/cli@11.0.7

    Web Evolution
    ------------------

        Static Web Site

        Dynamic Web Applications

            Server side executing application that can generate html content on the fly
            as a response to each request it recevies.


            Server                                                              Client

                Servlet/Spring Controller       <------------REQ-------------
                /ASP.NET/PHP

                        Generte html +CSS+JS    -------------RESP-------------> unload the existing page,
                                                                                reload the new page.

        SPA (Single Page Application) + SOA (Service Oriented Applciation WebServices)

            Server                                                              Client

                SPA bundle                  <------First REQ-------------------
                    (index.html+JS+CSS)     -----SPA Bundle as RESP ---------> index.html is loaded along with
                                                                                accompaning JS.

                SOA - REST api          <---------------REQ-------------------
                                        ---------data.xml/data.json as RESP-------> the JS will receive the data and
                                                                                generate a sutable html dynamically
                                                                                on the client and repalces the 
                                                                                contnet on the index.html

    NodeJS
    --------------------------------------------------------------------------------------------

    is a javascript execution environment. It allow any ajvascript code to run
    with out a browser.

        The development process invlovs lot many tools
            like 
                    transpeller     to convert .ts into .js     babel
                    package                                     webpack
                    dependency management                       npm
                    write and execute test                      jasmine and karma
                    ...etc
        All these development tools will run on a developer machine where we need nodejs.

    Angular
    --------------------------------------------------------------------------------------------------------------

        is a SPA framework.

        angularJS                           javascript
        Angular2                            typescript   =  javascript + data types (type safety)
        Angular4
                5,6,7,8,9,10,11,12


        typescript
        ---------------------------------------

                boolean
                number
                string
                void
                null
                undefined
                any

            function greet(userName){           function greet(userName:string) : void {
                ...........                             ...........
            }                                   }

            greet(123);
            greet(true);
            greet("Vamsy");                     greet("Vamsy");


            class Employee {                    class Employee {
                                                    private empId:number;
                                                    private ename:string;

                constructor(empId,ename){           constructor(empId:number,ename:string) {
                    this.empId=empId;                       this.empId=empId;
                    this.ename=ename;                       this.ename=ename;
                }                                   }
            }                                   }

                                                interface Student {
                                                    admno:number;
                                                    name:string;
                                                    doj:Date;
                                                }

        Angular Archetecture
        ---------------------------------------  

            any a angular resource is a typescript class.
            
            and each class is marked with a decorator to
            indicate what type of resource it is.

            and the config info of each resoure is passed as a json-object
            to the decorator and that json-object is called meta-data.

            Modules

                            is a logical unit of the application. that groups
                            correlated components,pipes,servces,directive together,
                            A module can contain another module.

                            Each angular applciation must be enclsoed in a single main
                            module called the ROOT MODULE as app.module

                            Inside the ROOT MODULE we can create any number of
                            sub-modules called Feature Modules

                            @NgModule({
                                declarations:[
                                    //list of components,directivea and pipes
                                    //that are grouped under this module
                                ],
                                imports:[
                                    //list of sub-modules to be included int this module
                                ],
                                exports:[
                                    //list of components,directivea and pipes that belong to the current module
                                    //and that are allowed to be accessed outside this module
                                ],
                                providers:[
                                    //list of services that belong to this modules
                                ],
                                bootstrap:[
                                    //list of components
                                    //that msut be instantiaed immediatly once this module is loaded.
                                ]
                            })
                            class MyModule{}

            Components
                            to define our own html elements

                            Component  = Controller + Template

                            Controller is a type script class
                            Template is a html segment 

                            banner.component.ts
                            ---------------------------------
                            @Component({
                                selector:'app-banner',
                                templateUrl:'banner.component.html',
                                providers:[]
                            })
                            class BannerComponent{
                                title: string;

                                constructor(){
                                    this.title="My First Angular Project";
                                }
                            }

                            banner.component.html
                            -----------------------------------
                            <header>
                                <h2>{{title}}</h2>
                            </header>

                            index.html
                            --------------------
                                <html>
                                    <head>
                                    </head>
                                    <body>
                                     <app-banner></app-banner>
                                    </body>
                                </html>


                            Data Binding
                            -----------------------------------------

                                binding the data from  the controller to the template.

                                Interpolation

                                        {{angularExpression}}

                                One-Way Data Binding
                                    Attribute Binding
                                        
                                        [attributeName]="angularVariable"

                                        <p width="500"></p>
                                        <p [width]="w"></p>

                                    Event Binding

                                        (eventDirective)="method()"

                                        HTML Event Attribute        Angular Event Directive
                                        -------------------------------------------------------
                                         onSubmit                       ngSubmit
                                         onClick                        click
                                         ondblClick                     dblclick
                                         onMouseOver                    mouseover
                                         onfocus                        focus
                                         onblur                         blur
                                         onchange                       change .....

                                    Style Binding

                                        [style.cssproperty]="field"

                                        [class]="{'className1':booleanFlag,'className2':booleanFlag}"

                                Two-Way Data Binding

                                    on form elements only.

                                    [(ngModel)]="field"

                                    FormsModule msut be imported into
                                    the current module.
                            
            Directives
                            to define our own html attributes

                            structural directives
                                *ngIf
                                *ngFor
                                ngSwitch
                                    *ngSwitchCase
                                    *ngSwitchDefault
                            
                            Custom Directives
                            ------------------------------
                            @Directive({
                                selector:''
                                providers:[]
                            })
                            class MyDirective{
                                
                            }

            Pipes

                            is used to tranform a value just before it si rendered.

                            inbuilt pipes
                            ------------------

                                lowercase
                                uppercase
                                titlecase
                                number
                                currency
                                date
                                json
                                async

                            custome pipes
                            -------------------
                            @Pipe({
                                name:'',
                                providers:[]
                            })
                            class MyPipe{
                                
                            }
            Services

                Injectors are responsible to create an object of a service and
                provide it to a component/pipe/directive/antoehr service when demanded.

                One injector is associated with each component, pipe, directive, service and
                module .

                app.module                          root injector
                    app.componenet                      app component injector
                    navbar.component                    navbar component injector
                    user.module                         user module injector
                        user-home.component                 user-home component injector
                    inventory.module                    inventiory module injector
                        stock-hoem.component                stock-home injector

                            @Injectable({
                                providedIn:'root',
                                providers:[]
                            })
                            class MyService{
                                
                            }

         Angular CLI
        ---------------------------------------  
            is a front-line tool used to create and manage an angualr project.

            ng new proj-name

            cd proj-name

            ng serve --port 8899 -o         used to transpell ts to js and pack and host on a dev-server
            ng build                        used to transpell ts to js and pack into a 'dist' folder

            vendor.js           is composed of all angular packages
            polyfills.js        is a backward version compatibility code for older browsers
            main.js             is composed of all the code the developer wrote                                 
            runtime.js          is a runtime support for angular features that are not supported by older browsers
            styles.css          is a global style sheet.

            ng test                         used to execute test cases.

            ng g module name
            ng g component name
            ng g directive name
            ng g service name
            ng g class name
            ng g pipe name
            ng g interface name
            ng g enum name
                ..etc


    Bootstrap Integration with Angular
    ---------------------------------------------------------------

        1. CDN in index.html

        2. install bootstrap as 'npm install --save bootstrap@4'
            include the bootstrap.min.css into the styles section of angular.json

    InventoryMangementSystem
    ---------------------------------------------------------------
    models/Delear
            id,contactNAme,mobile, address
    services/DelearService
    delear-list.component


    Routing
    ---------------------------------------------------------------

        RouterModule
            
            router-outlet           Component that hold the 
                                    space in the layout which shall
                                    be replaced by the component that
                                    is mapped to the current url.

            
            routerLink              Directive that holds the url segment
                                    that has to be navigated to when clicked on the
                                    applied 'a' element

            routerActiveLink        Directive that hold the class name to be applied
                                    on the currently active 'a' element.

            Routes                  is an array of route
            Route                   is a class that represent a ulr-mapping for a component
                                        path
                                        component 
                                        pathMatch           startswith/full
                                        redirectTo
                                        children
                                        canActivate
                                        canDeActivate
                                        CanLoad
                                        CanChildActivate

            ActivatedRoute          Service that supplies information like
                                    url, path parameters, query parameters...etc
                                    of the currently active path

            Router                  Servie which is used to naviagate
                                    from a component to another programatically
                                        navigateByUrl("url")
                                        naviagete("urlSegment",{queryString...})

    Angular Forms
    ---------------------------------------------------------------

        Template Driven Form                Model Driven Form / Reactive Form

            FormsModule                         ReactiveFormModule
                ngForm                                  FormGroup
                ngModel                                 FormControl
                                                        formControlName

            Simple senareio                     Complex forms and nested forms
            where we have not more 
            than 2 or 3 form elements

            More of the form is on template     More on the controller side
            And less on the controller          Less on the template
            Difficult to test                   Easy to test

    InventoryMangementSystem
    ---------------------------------------------------------------
    models/Delear               id,contactNAme,mobile, address
    services/DelearService      offerng all crud operations
    delear-list.component
    delear-form.component       using template driven forms
    delear-form2.component       using model driven / reactive forms
        with add and edit operations and routing

    RxJS
    ------------------------------------------------------------------------

            reactive javascript programming

            acts like a bridge between background-executing tasks
            and foreground-executing tasks...!

            in javascript the asynchronous prgramming can be used
            to execute any task in the background.

            how can the foreground know
                    the currrent statuc of the background-task
                    did the background-task complete successfully
                    did the backgroudn-task encoutered any error and got aborted.

            RxJs offers a class called Observable.

            let backgroundJob = (observer) => {

                observer.next(data); //this method can be used to emit valeus while the job in progress.
                observer.error(errMSg); //this method  signals job abortion and pass the error message
                observer.complete(); //this method is used to signal suiccessfull completion.

            };

            let ob = new Observable(backgroundJob);

            //the backgroudnJob execution start when we call subscribe on observable object.
            // and this happens in the foreground.
            ob.subscribe(
                (data) => {//this is the success call back to react and receive the data everytiem it is emited},
                (err) => {//this is the error call back to react and receive the error },
                () => {//the onComplte call back to react on job completion}
            );

            RxJS Operators

                creating an observable from another
                observable.....

                map
                filter
                tap
                last
                catch
                ....etc


   Angular Component LifeCycle
    ------------------------------------------------------------------------

        constructor()
         |
         |
        OnInit :: ngOnInit()              be called only once after first
                                        rendering is done.., used like ana onLoad event.
            |
            |
            (the data bounded fields may be updated)--------|
             |                                              |
             ngAfterViewInit()                              |
             |                                              |
             ngAfterContnet()                               |
             |                                              |
             (rerendering of the component)  ---------------|
                                            |
                                    (jsut before the component gets destroyed)
                                            |
                                            ngOnDestroy()

   
    Fake Rest Api End Points Using json-server
    ----------------------------------------------------------------------------

        json-server is a js tool that can create rest end points to perform
        CRUD operations on a .json file.

        these rest end points are not for real time usage.
        only to learn ....

        npm install json-server --save

        json-server --port portNumber --watch dataFile.json

    Rest Api Calls In Angular using HttpClient
    ----------------------------------------------------------------------------

    HttpClientModule
       
       HttpClient

           get(url) :  Observable
           post(url,reqBody) : Observable
           put(url,reqBody) : Observable
           delete(url) : Observable

    Modularization
    --------------------------------------------------------------------------------
    Domain: A domain NgModule is organized around a feature, business domain, or user experience.
    Routed: The top component of the NgModule acts as the destination of a router navigation route.
    Routing: A routing NgModule provides the routing configuration for another NgModule.
    Service: A service NgModule provides utility services such as data access and messaging.
    Widget: A widget NgModule makes a component, directive, or pipe available to other NgModules.
    Shared: A shared NgModule makes a set of components, directives, and pipes available to other NgModules.

            NgModule	Declarations	Providers	    Exports	        Imported by
            ------------------------------------------------------------------------------
            Domain	        Yes	        Rare	        Top component	Another domain, AppModule
            Routed	        Yes	        Rare	        No	            None
            Routing	        No	        Yes (Guards)	RouterModule	Another domain (for routing)
            Service	        No	        Yes	            No	            AppModule
            Widget	        Yes	        Rare	        Yes	            Another domain
            Shared	        Yes	        No	            Yes	            Another domain

    ng g module Shared
    ng g module Widgets
    ng g module Services --module app.module

    lazy loading a domain module
    -------------------------------------------------------------
    ng g module EntityDoamin --route entity --module app.module

    Router Guards
    ----------------------------------------------------------------------------------

    is used to protect a route from being accessed
    only when it is allowed to access.

    Angular provides four types of RouterGuards (interfaces)

        CanActivate            control if a route can be entered or not
        CanDeactivate          control if a route can be left or not
        CanLoad                controls if a lazy loaded route should be laoded or not
        CanChildActivate       control if child-routes can be entered or not
    
Angular Testing
---------------------------------------------------------------------------------

    jasmine     is an independent javascript testing library.

                describe    -------------> writes test suits (are a collection of test cases)
                beforeEach  -------------> that executes a common task before executing each test case
                afterEach   -------------> that executes a common task after  executing each test case
                it          -------------> which indicate one test case.

                expect      -------------> creates an assertion object which
                                            reports test being passed or failed.

                                            the assertion object has matcher functions

                                            toBe(object)
                                            toBeSame(Object)
                                            toBeTrue()
                                            toBeFalse()
                                            toBeTruthy()
                                            toBeFalsy()
                                            toBeNull()
                                            toBeNotNull()
                                            toBeUndefined()
                                            toBeGreaterThan(value) ......etc

                describe("test suit description",()=>{

                    beforeEach(()=>{
                        //write a job that has to execute commonly
                        //before executing each test case
                    })

                    afterEach(()=>{
                        //write a job that has to execute commonly
                        //after executing each test case
                    })

                    it("test case descriotion",()=>{
                        //the actual test case.....
                    })
                });

    karma       is a testing framework/platform for angular, developed by the
                same tema that developed angular.

                npm test    ----------->  ng test -------> trigger karma and then
                                                        karma executes the .spec.ts files 
                                                        contianing jasmine test cases 
                                                        and then karma reports the test results
                                                        on the browser (chrome).