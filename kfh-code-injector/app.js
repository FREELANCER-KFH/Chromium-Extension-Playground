// Get the URL of the current tab
const site = window.location.hostname;

//alert("KFH Code Injector is running on " + site + ".")


// Add custom CSS - function
const add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

// Add custom element - function
function create_Custom_Element(tag, attr_tag, attr_name, value){
    const custom_element = document.createElement(tag);
    custom_element.setAttribute(attr_tag, attr_name);
    custom_element.innerHTML = value;
    document.body.append(custom_element);
}

// JS code for youtube.com
if (site.includes("youtube.com")) {
    alert("Whats up ${site}!")
    add_Custom_Style("body {background-color: red !important;}");
    create_Custom_Element("h1", "class", "my_class", "Hello ${site}!");
}

// JS code for google.com
if (site.includes("google.com")) {
    alert("Whats the heaven up Google!")
    add_Custom_Style("body {background-color: blue !important;}");
    create_Custom_Element("h1", "class", "my_class", "Hello ${site}!");
}

// JS code for microsoft.com
if (site.includes("microsoft.com")) {
    alert("Whats the hell up Microsoft!")
    add_Custom_Style("body {background-color: green !important;}");
    create_Custom_Element("h1", "class", "my_class", "Hello ${site}!");
}