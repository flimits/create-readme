# Welcome to Create-Readme
Where you can automatically genenerate a high-quality README file quickly and relatively easy.

## Description and Motivation

The purpose and motivation behind this appication is to give the user the ability to dynamicaly create a README file. It takes time and effort to create one from scratch, and this app "create-readme" will give them a verty good start.

Create-README is designed to be run on the command line and prompt the user for questions that will help build the README page. 
Questions such as; Repo Name, Description of app, Outside contributors, licensing/badges and contact information. The app will then assemble all of this information into a usable README that is good enough to slap onto any Git Application.

## Usage

The way you use this Application is:
- start up a commandline prompt in the directory of the cloned application.
- Run NPM install to install any dependancies: `npm install`
- Then execute the app with: `node index.js`


## Table of Contents

* [Technology Used](#technology-used)
* [Description](#description)
* [Screenshots of Application](screenshots-of-application)
* [Learning Points](#learning-points)
* [Code Snippets](#code-snippets)
* [Contact Info](#contact-info)

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
| Google Search | [https://www.google.com/](https://www.google.com/)
| Stack Overflow | [https://stackoverflow.com/](https://stackoverflow.com/)
| Digital Ocean for inquirer Help| [https://www.digitalocean.com/](https://www.digitalocean.com/)
| W3Schools for JS | [https://www.w3schools.com/](https://www.w3schools.com/)
| Dev for badges | [https://dev.to/cicirello/badges-tldr-for-your-repositorys-readme-3oo3](https://dev.to/cicirello/badges-tldr-for-your-repositorys-readme-3oo3)

## Description 

[Visit the Deployed Site](https://github.com/flimits/create-readme)
![img](./assets/image/Banner.png)

Go Nutz Donutz is your one stop shop for everything donut related!

Go Nutz Donutz includes many different ways to interact with the donut community, search for the most convenient location to buy great donutz near you, buy (and sell soon enough) donut merchandise, and discover any fun donut related news you didn't know that you needed.

Our site has:

* Links to articles and games
* A Donut Locator map that shows you the most popular donut shops near you
* A Recipe Search so that you can discover popular confectionary recipes
* Links to the most popular donut merchandise throughout the World Wide Web
* Blogs for both consumers and sellers to post about custom donut requests!

## Screenshots of Application

Homepage:
![img](./assets/readme%20images/homepage.png)

Donut Locator:
![img](./assets/readme%20images/map.png)

Recipes and Blogs:
![img](./assets/readme%20images/recipes.png)

Merchandise:
![img](./assets/readme%20images/merch.png)

Donut Blog:
![img](./assets/readme%20images/blog.png)

## Learning Points 


A very important learning point for the whole team was implementing the use of a new CSS Framework, Materialize proved very easy and functional for the team. It had pre-constructed UI elements we ended up utilizing for basically the entirety of the project.

Another thing learned by the team was the ability to use individual html files for seperate pages on a website. Not only did this allow for an easier spread of work delegation but also security behind branching whilst working on only one page at a time.

## Code Snippets
---


Home Page: News Letter.
This allows us to showcase an article related to donut community. 

![img](./assets/readme%20images/donus-newsletter-image.png)

```html
</div>
      <div class="row">
        <div class="col s12 m7">
          <div id="NL-card" class="card">
            <div class="card-image">
              <img id="NL-pic" src="./assets/image/NLpic.jpg">
            </div>
            <div class="card-content">
              <h2>DUNKIN’® JOY IN CHILDHOOD FOUNDATION® DISTRIBUTES $4.3 MILLION IN GRANTS TO 224 ORGANIZATIONS ACROSS THE COUNTRY</h2>
              <p id="italisize">Funding from grants will support programs that provide the simple joys of childhood to kids battling hunger or illness</p>
              <br>
...
...
              <p id="bold">These grants solidify the Dunkin’ Joy in Childhood Foundation’s commitment to bringing the simple joys of childhood to kids battling hunger or illness.</p>
            </div>
            <div class="card-action">
              <a id='bold' class="white-text" href="https://news.dunkindonuts.com/news/dunkin-jicf-2023-grants">Please Check Out The Original Newsletter!</a>
...
```
---
---
Search Page: With Geolocation.

```js 
$(".btn").on("click",function(event){
    var location = $("#textarea1").val();
    event.preventDefault();
    $("iframe.map").attr("src", "https://www.google.com/maps/embed/v1/search?key=AIzaSyA2Qq9tiWUtSdlkiBJov0EMgRDPTEMKJHw&zoom=7&q=donut+shops+in+" + location);
})
```
![img](./assets/readme%20images/search-page-with-nav.png)

```html 
        <div id="search-bar" class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
                  <label id="placeholder" for="textarea1">Explore The World of Donutz</label>
                </div>
              </div>
              <button id="search-btn" class="btn waves-effect waves-light" type="submit" name="action">Search</button>
            </form>
          </div>     
```

Second here is how we are using Google API to search by that search parameter
```js
    <iframe 
    class="map"
    frameborder="0" 
    style="border:0"
    src="https://www.google.com/maps/embed/v1/search?key=AIzaSyA2Qq9tiWUtSdlkiBJov0EMgRDPTEMKJHw&zoom=7&q=donut+shops+in+United+States">
    </iframe>
```
---
---

Some things we did for the Donut parafanalia and merchandizing using an Amazon affiliate link.

![img](./assets/readme%20images/Donut-merch.png)

```html
            <div class="col s12 m4" style="margin-top: 150px;">
                <div class="merchcard">
                    <div class="card-image">
                    <img src="./assets/product images/merch_hat.jpg">
                    </div>
                    <div class="card-content">
                    </div>
                    <div class="card-action">
                    <a id="bold" class="white-text" href="https://amzn.to/3FeuqbW">Bucket Hat</a>
                    </div>
                </div>
            </div>
```

---
---

The Donut Blog where we have merchants blog about what specials they have and Customers can request specialtiy items or needs they have and merchants can reply or take action on them.


![img](./assets/readme%20images/blog.png)



```html
                    <div class="card-content">
                        <div class="row">
                            <h4 class="state-facts">Make your special requests known!!!</h4>
                            <div class="input-field col s12">
                                <textarea id="textarea2" class="blog-text"></textarea>
                                <label for="textarea2">What do you need?...</label>
                            </div>
                            <div id="saveItC"></div>
                        </div>
                    </div>
```
And associated js...

```js
// These two are variables to repopulate and get the blog with saved values.
var blogMCount = getItems("blogM");
var blogCCount = getItems("blogC");

// We want to check to see if anytihng is being entered by the Merchant here and
// post it and save it
$('#textarea1').keypress(function (e) {
    if (e.which == 13) {
        var prefx = "Merch";
        var newDataMerc = $("#textarea1").val();
        $('#saveItM').append("<p>" + prefx + blogMCount + ": " + newDataMerc + "</p>");
        postToLocalStore("blogM", newDataMerc, blogMCount++, prefx);
        $("#textarea1").val("");  // Clear the input field after appending
        return false;
    }
})
```

---
---


Lastly in the code snippets, is  the Chart.JS for the Donut Poll.
![img](./assets/readme%20images/donut-poll.png)

```js

new Chart(donutPoll, pollResults);

$(".btn-large").on("click",function(){
    window.location.reload();
    if($(this).attr("id") === "poll-btn-donut"){
        if(!donutData){
        localStorage.setItem("donutData", 12);
        localStorage.setItem("doughnutData", 2);
        }
        else{
            localStorage.setItem("donutData", parseInt(donutData)+1);
        }
    }
    else{
        if(!doughnutData){
        localStorage.setItem("doughnutData", 2);
        localStorage.setItem("donutData", 12);
        }
        else{
            localStorage.setItem("doughnutData", parseInt(doughnutData)+1)
        }
    }
});
```


## Contact Info

| Name      |Email      | Github    | Portfolio |
|-----------|-----------|-----------|-----------|
|Anna       |           |           |           |
|Christina  |           |           |           |
|Jack       |jack.lcmore@gmail.com|https://github.com/JackLCmore|https://jacklcmore.github.io/portfolio/|
|Jason       |flimits@gmail.com|https://github.com/flimits|https://github.com/flimits/my-portfolio/|


# create-readme
This is a node.js App that will help you create a professional README.md file.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Special Thanks to the following Contributors

* Digital Ocean has some great teachings.
https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts