// Get the URL of the current tab
const site = window.location.hostname;

//alert("KFH Code Injector is running on " + site + ".")


// Add custom CSS - function
const add_Custon_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

// Add custom element - function
function Create_Custom_Element(tag, attr_tag, attr_name, value){
    const custom_element = document.createElement(tag);
    custom_element.setAttribute(attr_tag, attr_name);
    custom_element.innerHTML = value;
    document.body.append(custom_element);
}













// JS code for youtube.com
if (site.includes("youtube.com")) {
    alert("Whats up YouTube!")
}

// JS code for google.com
if (site.includes("google.com")) {
    alert("Whats the heaven up Google!")
}

// JS code for microsoft.com
if (site.includes("microsoft.com")) {
    alert("Whats the hell up Microsoft!")
}