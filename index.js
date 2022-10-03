// ReactDOM.render(
// <div>
//     <ul>
//         <li>
//             Onee
//         </li>
//         <li>Two</li>
//     </ul>
// </div>, document.getElementById('root'));

// function Navbar(){
//     return  <h2>NAVBAR</h2>
   
// }

// function MainContent(){
//    return <h1>I'm learning React!</h1>
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById('root')
// )

// Lesson 3
// --ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById('root));

/*
    chall - recreate the above line of code in vanilla JS by creating and
    appending an h1 to our div#root(without using innerHTML);

    -create a new h1 element
    -give it some textContent
    -Give it a class name of "header"
    -append it as a child of the div#root;
*/
// -->
    // const greetingMessage = document.createElement('h1');
    // greetingMessage.textContent = "Hello New Friend";
    // greetingMessage.classList.add('header');
    // document.getElementById('root').append(greetingMessage);

// Lesson 4
/*
const h1 = document.createElement('h1');
h1.textContent = "hello world";
h1.className = "header";
console.log(h1);
// --> <h1 class="header">hello world</h1>
*/

// Diff between 
/*

const element = <h1 class="header">This is JSX</h1>;
console.log(element);
// --> <h1 class="header">hello world</h1>
 {
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "class": "header",
        "children": "This is JSX"
    },
    "_owner": null,
    "_store": {}
}
// JSX
ReactDOM.render(element, document.getElementById('root'));
*/
// When we create wiht JSX, we cant render two siblings elements, we jave to wrap it
// OR MAKE IT LIKE THIS

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>WRAP IT</p>
//     </div>)

// ReactDOM.render(page, document.getElementById('root'));

// Chall ---> 
/* Create a navbar in JSX
    -Use the semantic `nav` element as the parent wrapper
    -Have an h1 element with the brand name of your "website"
    -Insert an unorder list for the other nav elements
    -Inside the 'ul', have three 'li's for "pricing",
    "about", and "contact"
    -Dont worry about styling yet - it'll just be plain-looking HTML for now"
*/
// -> 
    const navbar = (
    <nav>
        <h1 className="LOGO">lapadatovic</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav> )

    ReactDOM.render(navbar, document.getElementById('root'));

