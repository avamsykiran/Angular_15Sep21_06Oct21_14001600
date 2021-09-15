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
                            @Component({
                                selector:'',
                                templateUrl:'',
                                providers:[]
                            })
                            class MyComponent{

                            }
            Directives
                            @Directive({
                                selector:''
                                providers:[]
                            })
                            class MyDirective{
                                
                            }
            Services

                            @Injectable({
                                providedIn:'root',
                                providers:[]
                            })
                            class MyService{
                                
                            }
            Pipes
                            @Pipe({
                                name:'',
                                providers:[]
                            })
                            class MyPipe{
                                
                            }






