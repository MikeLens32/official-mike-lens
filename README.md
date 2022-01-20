# Introduction

For this website I wanted to create a portfolio website, with an about page, bookings page, and a contact.
There's 4 core deliverables that I have to meet with this project in React.
The first was met while creating a single page application with [create-react-app] and only having one idex.html file.
The second requirement is having at least five components in a way that keeps your code organized.
Third, there should be at least 3 client-side routes using react-router.
Finally, using a json-server to create a RESTful API for your backend and make a [GET] and [POST] request to my server.

## Why I Went This Direction 

I'm a photographer, videographer, graphic designer and production assitant.
I wanted to create a website to show my work, and inplament the requirements in a fun form at the same time.
The Home Page illustrates some of my work in four different themed categories, with a comment form where users can vote on their favorite category, and have it appear in a comment field.
This feature on the home field already meets the heavier core deliverable with the [GET] and [POST] requests.
The second clients-side route page is the About and is just one component to create.
With this second page another requirement is met with having at least five components between the Home and About Page.
Now getting to the Bookings Page I wanted to feature some of the more common inquries I get with my line of work.
I created cards to feature the main services I offer for both photography and videography.
The information for the card is passed in as a prop from the [Bookings.js] component, to the [Service.js] component, [ServiceContainer.js], and the [ServiceCards.js].
There's a form on the Bookings Page to have people make a service request if they need my services and the sumbit sends the information to my email address.
Finally, we have the contact page with the one component that send the information entered straing to my email address.

## Here Are Visuals I Created Before Starting My Project

![PHASE 2-01.png]('./src/PHASE 2-01.png')
![PHASE 2-02.png]('./src/PHASE 2-02.png')
![PHASE 2-03.png]('./src/PHASE 2-03.png')
![PHASE 2-04.png]('./src/PHASE 2-04.png')

These were used so I can have an idea of what it will look like and what the tree of components wil look like to complete my the functionality of the website.

## NavBar Breakdown

I create the [Navbar.js] and ended up installing [react-bootsrap] and importing elements necessary.

## Home Page Breakdown

On the Home Page I made my [GET] request to show the information in the database (http://localhost:3000/commentary) for the comment field from the users in the [HomeContainer.js] component.
I created a form with a [POST] request that updates the comment field that I created within the component called [HomeForm.js].
To properly have the information update from the [HomeForm] and the [HomeCommentList], useState passed the variable to [HomeCommentList] and the setter was passed as a prop to [HomeForm].

## About Page Breakdown

I simply created this page with one component, used a <h1> element for the header, <p> for the my description, and brought in an image of myself.
I did some css work to cent and line up text the way I wanted afterwards.

## Bookings Page Breakdown

I used a total of six component for the Bookings Page beside the styling.
Bookings being the parent to these components, I decided to pass the props down to create the cards.
The information for the card is passed in as a prop from the [Bookings.js] component, to the [Service.js] component, [ServiceContainer.js], and the [ServiceCards.js].
[ServiceCategories.js] contains the information need for the cards and those objects were passed down as props from [Bookings.js] and finally deconstructed in the [ServiceCards.js].
The [BookingsForm.js] is connected to my gmail and takes the clients information entered to compose the email sent to me.

## Contact Page Breakdown

This was created with just one component since it mainly a form that send the client's entered information to my email.
I added another logo I created to better the syling of the page.
