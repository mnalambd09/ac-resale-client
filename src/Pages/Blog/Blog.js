import React from 'react';


const Blog = () => {

    return (
        <div className='m-10'>
            <div className="card w-full shadow-xl mb-10 text-left  bg-slate-300">
                <figure><img className='w-3/4 h-96 mx-auto rounded-lg  mt-10' src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1106113/image_5-0059967eb5450c477b154760cd8c8525-b228bd4760b1e5e5a69ab124d1e5dc7d.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">What are the different ways to manage a state in a React application?</h2>
                    <h1 className='text-2xl text-orange-600'>1. Web Storage</h1>
                    <p>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components.
                    </p> <br />
                    <h1 className='text-2xl text-orange-600'>2. Local State</h1>
                    <p>The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.

                        S
                    </p>
                    <h1 className='text-2xl text-orange-600'>3. Lifted State</h1>
                    <p>The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.In the below example, we have lifted the state and the handleChange event in the parent component, helping to maintain consistency.
                    </p>
                    <h1 className='text-2xl text-orange-600'>4. Derived State</h1>
                    <p>AThe fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.So, why bother deriving the state? Well, deriving the state avoids our state values getting out of sync. It simplifies our code since we do not have to remember to keep separate values in sync. When we update the state, derived values are automatically recalculated in the render.
                    </p>


                </div>
            </div>


            <div className="card w-full  bg-slate-300 shadow-xl mb-10 text-left">
                <figure><img className='w-3/4 h-96 mx-auto rounded-lg  mt-10' src="https://dmitripavlutin.com/javascript-prototypal-inheritance/cover.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">How does prototypical inheritance work?</h2>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>

                </div>
            </div>

            <div className="card w-full  bg-slate-300 shadow-xl mb-10 text-left">
                <figure><img className='w-3/4 h-96 mx-auto rounded-lg  mt-10' src="https://uploads-ssl.webflow.com/5f85a5ac8c29edec24711e52/632b10dfd7a8fe2d83c7a096_How%20to%20better%20unit%20test%20(1).png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">What is a unit test? Why should we write unit tests?</h2>

                    <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing. </p>
                </div>
            </div>

            <div className="card w-full  bg-slate-300 shadow-xl mb-10 text-left">
                <figure><img className='w-3/4 h-96 mx-auto rounded-lg  mt-10' src="https://www.angularminds.com/site_data/static/images/angular-react-vue/comparison-angular-react-vue.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">React vs. Angular vs. Vue?</h2>
                    <h1 className='text-2xl text-orange-600'>Angular vs React</h1>
                    <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                        React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                        React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript. </p>
                    <h1 className='text-2xl text-orange-600'>React vs Vue</h1>
                    <p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                        Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts. </p>
                    <h1 className='text-2xl text-orange-600'>Angular vs Vue</h1>
                    <p>In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                        A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                        It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;