const translations = {
    page: {
        init: {
            header: "Project initialization",
            project: {
                header: "Project initialization",
                content: "The key to getting started with React library is adding a core package to your project. For this purpose, you can use various tools to help you take your first steps in this framework. The most basic tool is 'Create React App' which allows you to set up an environment easily for building a simple Single Page Application (SPA). For more complex projects, I recommend the use of tools such as Webpack, Rollup or Vite"
            },
            cra: {
                header: "Create React App (CRA) - Project creation",
                content: "Using the CRA tool to create project called: 'framework-hero' we only need to execute the following command:",
                content2: "This script generates a basic SPA project based on the React framework. The generated file structure can be divided into 4 sections:",
                section: {
                    node: "node_modules - directory with external dependencies",
                    public: "public - directory with static assets (pictures, fonts, etc)",
                    source: "src - main directory with source code of the application",
                    root: "And root directory with 'package.json' file and other config files (tsconfig.js, etc.)"
                },
                content3: "Depending on the size of the project and the preferences of developers, the structure of directories within the 'src' may vary significantly. Personally, I recommend you to familiarize with the various 'good practices' related with creating a good folder structure. React doesn't enforce any particular structure, so it can lead to clutter or limit code extensibility. Therefore, it is worth keeping order and separating modules and components appropriately."
            },
            craTs: {
                header: "Create React App - Typescript",
                content: "As mentioned before, the clean file file structure makes it easier to maintain your project. By default, React is using JavaScript, which makes it easier to get started building your first application. However, the more the project grows, the more complex application is becoming. More easily is to maintain such code using object-oriented programming, or at least forcing the data structure by using typed variables or interfaces. Thanks to this, you can introduce more complex design patterns into the application, that simplify the process of application cration.",
                content2: "TypeScript allows you to extend the functionality of the JavaScript language. Based on that our React application is less prone to errors caused by data-type mismatch and we can more easly handle data we receive from the user or from the API interface. This requires the developer to pay more attention to the structure of his code, but later looking for bugs or extending functionality is much more pleasant.",
                content3: "Adding TypeScript support is optional and can be added at any stage of the project. However, if you are creating such a project from scratch, you just need to add an extra parameter to the initialization script:",
                content4: "The generated file structure for the TypeScript project is identical. The difference is the file extensions and the configuration file for the language support 'tsconfig.json'. Ultimately, the project is compiled into JavaScript files as it was in the previous case."
            },
            run: {
                header: "CRA - Development server",
                content: "Using the 'Create React App' tool, we get a configured development server from the machine. The launch script is attached to the 'package.json' file, based on which the application can be launched and the live preview can be run with one command:"
            },
            other: {
                header: "Other tools",
                content: "The example above is intended to introduce the user to creating React applications. However, the web application environment is very dynamic and is changing very quickly. Webpack is now a more advanced and universal tool that allows you to build and create projects. The task of the CRA is to quickly prepare the environment to work on the application. My goal was to present only how to initiate a simple project, which will be created based on the React framework, and how it looks in combination with Angular or Vue.js"
            }
        },
        basic: {
            intro: {
                header: "Component introduction",
                content: "React is built from 'Elements', which are the smallest building blocks of an application. An element can be part of something larger that can be called a 'component.' For example, a React element can be a paragraph, a header, a section, or any other known HTML tag, but it can also be other objects from the 'React' library. Connected elements can create more complex structures such as components, from which you can later create other larger components, up to whole pages or more complex structures.",
                content2: "The React library used the ReactDOM.render() method up to version 17 and from version 18 ReactDOM.createRoot() to render the element we specified to the DOM tree of the target page.",
                content3: "The term 'component' is used a lot today in web development. In React, it is a JavaScript object containing a certain set of elements and functions, which can additionally take some external properties, returning the eventually rendered ReactElement. A component can be defined by extending the class 'React.Component' thus creating a 'Class Component', or by creating a function that will ultimately return a ReactElement which is called a 'Function Component'. React introduces a new kind of JSX (JavaScript XML) syntax that allows you to write HTML code inside JavaScript.",
            },
            sfc: {
                header: "Single File Component",
                content: "In the previous section, I mentioned the order in the file structure, which makes it easier to extend the code of our application. In the React framework, one component should be defined in a single '.jsx' or '.tsx' file (for components written in TypeScript). File names containing components should be written in PascalCase notation.",
                classComponent: {
                    header: "Class components",
                    content: "Before React 16.8, class components were the only way to manage the state or lifecycle of components. Previously, functional components were considered stateless. Currently, however, class components are slowly being replaced due to their complex syntax, but you should know how to create such components.",
                    content2: "A class component is a kind of regular JavaScript class that extends the 'React.Component' class. Each component must return a ReactElement, so in order to render the HTML code, define the 'render()' method, which will return a structure written using JSX syntax.",
                    content3: "Class components can manage the state of a component, or they can implement their own logic of events fired during various stages of the component life cycle, such as 'componentDidMount' etc. Additionally, we can initialize the current state using a constructor.",
                    ts: {
                        header: "Class component - Typescript",
                        content: "By introducing strongly typed variables into React (by using TypeScript), it's much easier to see what properties a component takes, or what properties are defined in a component by introducing interfaces. The class still extends 'React.Component', but in this case you need to specify what type of input it receives and what state properties our component defines."
                    }
                },
                functionComponent: {
                    header: "Functional components",
                    content: "These are regular JavaScript functions that return React.Element and can take a variety of properties. As of React 16.8, these components can support state and lifecycle update methods. Previously, they were used only for presentation purposes. Currently, they are the basic elements of which applications are built. They are easier to read or test, and often contain less code.",
                    content2: "The same component can be written 'cleaner' using the ECMAScript6 (ES6) syntax, using the anonymous function assigned to the variable.",
                    content3: "Baisicly, the above functional component works the same as a class component. The biggest difference is the simplified syntax and getting rid of many unnecessary keywords such as 'this' or 'props' making the code of a large component much more readable.",
                    ts: {
                        header: "Functional component - Typescript",
                        content: "When using TypeScript with function components, we don't need to provide an interface defining 'State', so there is less code to maintain."
                    }
                }
            },
            usage: {
                header: "Component usage",
                content: "In order to render the component we created, its name should be given in the form of a JSX element tag.",
                content2: "Since React components are now based on functional components, the rest of this example will use this approach."
            }
        },
        props: {
            intro: {
                header: "Component - state, methods and properties",
                content: "React components are objects that can have certain internal state properties and methods. Additionally, they can accept external data via properties (common name: 'props'), which are invoked similarly to attributes in HTML elements.",
            },
            internal: {
                header: "State - component internal properties",
                content: "Each component can have its own state data properties. State data keeps variable values in memory so we can save component values and provide more complex business logic.",
                content2: "Functional components since React version 16.8 have a new 'useState ()' method that allows you to enter the state into these components. Variables thus declared retain all the advantages of component reactivity, i.e. assigning a new value to a variable will re-render the component content so that the current value is visible. To do that we are using the 'useState ()' function. The following example demonstrates how to define the 'welcomeMessage' property. Second argument is the 'setter' that is a function that allows you to change the state of this property ('setWelcomeMessage'). This function returns an array of variables [a, b], where 'a' is a reactive property and 'b' is a method that sets the value (the setter mentioned). Later in the code, the initial value for this property is specified as an argument to the 'useState()' function. Invoking a variable in JSX code is based on entering the variable name in curly braces '{}'. As a result, a header with the text 'Hello from State example' is returned during rendering. The following example shows an example component written in TypeScript. The JavaScript version does not accept type expressions.",
                content3: "For class components, defining state properties is more complex. It takes place while creating the object during calling the constructor. User can define the state object by adding his own properties. Also during the constructor invocation the initial values are defined. The important thing in this case is that we are passing 'props' parameters to the constructor and calling the parent method with this argument.",
                content4: "The following is presented a class component written in TypeScript:"
            },
            methods: {
                header: "Methods",
                content: "In the case of functional components as well as class components, defining methods does not require any special syntax. Methods in class components look the same as in classic JavaScript classes (an example is the required 'render ()' method), while for functional components they can be defined as a regular function or assigned an anonymous function to a variable."
            },
            props: {
                header: "Properties",
                content: "Properties ('props') are called the external properties of a component. They allow arguments to be passed from the parent to the target component (called a child). In the case of JSX, the parameters are passed like the XML attribute very similar to regular HTML elements. By default, the arguments are passed as the type 'string'.",
                content2: "In the case of functional components, it is enough to provide a argument in the parametrer to be able to use it later in the code. It is good practice to use the destructuring assignment operator to extract the correct parameter names.",
                content3: "This is not the case for class components. In this case, the parameters are passed through the constructor. It is important to call the constructor of the parent method with the arguments received.",
                content4: "By wrapping it up with TypeScript, we no longer need to call the constructor to initialize the parameters. So the code can look like this:",
                variables: {
                    header: "Passing variables",
                    content: "Properties can be anything. Passing other types than 'string' in JSX requires throwing the JavaScript code representing the object or variable into the braces."
                }
            },
            events: {
                header: "Event emitting",
                content: "There is no such thing as 'emitting events' in the React library. Here, the approach is to pass your own argument to handle events (eventHandler) to the child through parameters. When defining the input parameters, in the child component, you should also specify those that are going to be a callback functions. This approach is significantly different than in the case of discussed frameworks such as Angular or Vue. In simple terms, it is the child component that calls the method from the parameter that can be handled in the parent component.",
                content2: "When clicking on the 'Increase number' button (1), the 'click' event is caught by the 'onClick' method, which executes the internal function of the 'increaseNumber ()' component at the time of calling. Then the event (2) is caught, which is to change the state of the component and increase the value of the 'currentValue' property by one. As an example with a function component is given, you should add a 'useEffect ()' state hook that listens for a change in the value of the '[currentValue]' property. When the value of this state is changed (3), the return function passed through the 'increasedEvent' parameter is called with the current state value passed as an argument. The 'useEffect ()' hook approach is specific to function components. If we wanted to call the 'increasedEvent' parameter inside the 'increaseNumber' method right after the 'setCurrentValue (...)' line, the parent would get the previous state value. This is because calling setter 'setCurrentValue' is an asynchronous event.",
                content3: "In the case of TypeScript, it is important to properly define the interface. The 'increasedEvent' parameter is an anonymous function that takes arguments of the type 'number'. In the above example, calling the 'increaseNumber' method on the button has also been simplified. This procedure is possible because when calling the 'onClick' function we also want to call the 'increaseNumber' function, the input parameters of which overlap (or, as in this case, they are omitted).",
                content4: "The parent component will work in a similar way as we worked at this point in handling button events. In the parent, it is also enough to handle the call coming from the 'increasedEvent' parameter. This time, however, we capture the 'event' generated by the child's component and pass its value to the internal 'onIncreased' function."
            }
        },
        lifecycle: {
            hooks: {
                header: "Component lifecycle hooks",
                content: "Component lifecycle hooks are interfaces that allow you to write your own functions that will be called at a certain point in the life of a component. Most often, events are emitted while creating, modifying, or just before destroying a component. With React 16.8, hooks have been added to functional components. Previously, debiting them was possible only by using class components."
            },
            mount: {
                header: "Creation",
                content: "This hook only fires once during component initialization. The difference between this hook and the component initialization process call in the constructor is significant because the hook function is called after the component is rendered. So from the level of this function we are able to operate on the elements of the DOM tree. Most often, however, this hook is useful for retrieving initial data from external sources and writing it to state data properties.",
                content2: "Function components use the 'useEffect (fn, args)' method that takes two arguments. The first is the callback function (fn), inside which we define what is to be performed. The second argument (args) is to listen for this component's state change. An empty array ('[]') is given when initializing. Thanks to this, we are not listening for any property, but we will trigger this hook once.",
                content3: "Class components have a simpler syntax because you just need to override the 'componentDidMount ()' function:"
            },
            update: {
                header: "Update",
                content: "The update hook is triggered each time the component status is updated. Too many updates can cause performance issues. Therefore, it is very important to use it carefully. As in the previous case in the function component, we call the hook function 'useEffect ()'. This time the table with the variable to be monitored is given as the second argument.",
                content2: "In class components, you must define a method named 'componentDidUpdate'. This method receives two parameters: the previous properties and the previous state data properties. So we can check if a specific property or state value has changed and react to that event. For example, we can retrieve a new photo list every time the GalleryID property changes.",
                content3: "As you can see, the useEffect method is simpler and makes the code more readable. However, it has a significant drawback. Using it, we are not able to access the previous property or state values."

            },
            delete: {
                header: "Deletion",
                content: "Finally, this method is called just before removing or unmounting a component. Like an initialization method, it is only called once during the lifetime of a component. This hook can be used to clear component data (intervals or timeout functions). The 'componentWillUnmout ()' method is used for this purpose.",
                content2: "Unfortunately, it is not available for functional components."
            }
        }
    }
}

export default translations