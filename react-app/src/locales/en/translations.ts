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
        }
    }
}

export default translations