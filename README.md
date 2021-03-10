# Eat Your Seasons

:carrot:**Welcome to Eat Your Seasons**:green_apple:\
*Eat seasonally, eat sustainably, eat well*

Eat Your Seasons is a site aimed at those wanting to live a more sustainable lifestyle in order to help prevent further, catastrophic climate change. Improving our diet and eating more whole (in season!) foods is a fairly simple step that we can all make - this site makes that step even easier with seasonal food lists, meal suggestions, weekly meal plans and customisable shopping lists.

## Contents

[:sparkles: UX](#sparkles-ux)\
\
              [:books: User Stories](#books-user-stories)\
\
              [:earth_africa: Scope Plane](#earth_africa-scope-plane)\
\
              [:rainbow: Surface Plane/Design Choices](#rainbow-surface-planedesign-choices)\
\
              [:clipboard: Wireframes](#clipboard-wireframes)\
\
              [:dvd: Database Design](#dvd-database-design)\
\
              [:crystal_ball: Future Developments](#crystal_ball-future-developments)\
\
[:construction: Development Process](#construction-development-process)\
\
              [:unlock: Technologies Used](#unlock-technologies-used)\
\
              [:computer: External Sources Used](#computer-external-sources-used)\
\
              [:bug: Bugs](#bug-bugs)\
\
              [:broom: Refactoring](#broom-refactoring)\
\
              [:deciduous_tree: Branches](#deciduous_tree-branches)\
\
[:test_tube: Testing](#test_tube-testing)\
\
              [:raising_hand: Target-User Tests](#raising_hand-target-user-tests)\
\
              [:people_holding_hands: Peer Tests](#people_holding_hands-peer-tests)\
\
              [:memo: Manual Tests](#memo-manual-tests)\
\
              [:heavy_check_mark: Online Validators](#heavy_check_mark-online-validators)\
\
              [:rotating_light: Lighthouse Tests](#rotating_light-lighthouse-tests)\
\
[:flight_departure: Deployment](#flight_departure-deployment)\
\
[:clapper: Credits](#clapper-credits)\
\
              [:movie_camera: Media](#movie_camera-media)\
\
              [:trophy: Acknowledgements](#trophy-acknowledgements)

## :sparkles: UX

This project was inspired by the efforts my family and I are currently making to live more sustainably. After lots of research and experimentation with our dietary habits, we decided that the most environmentally-conscious diet for a family like ours is one that focuses heavily on shopping locally and seasonally.

There are various sites available that give information on eating seasonally, but not one that fully supports a switch to whole, seasonal foods. For a busy family who don't always have the time to research, it helps to answer:

* What's in season? 
* What meals can I cook with those ingredients?
* What do I need to buy and from where?

The site also offers varying levels of membership, from free content for casual site visitors, to lifetime membership for those fully committed to a seasonal diet.

### :books: User Stories

| User Story ID      | As a/an... | I want to be able to...      | So that I can...      |
| ------------------ | ---------- | ---------------------------- | --------------------- |
| 1      | site visitor       | see which foods are currently in season      | make informed choices when doing my shopping      |
| 2   | site visitor        | read suggestions on how to shop more sustainably   | make changes to my own shopping habits   |
| 3      | site visitor | get inspiration for meals using seasonal produce      | get an idea of how to eat more sustainably      |
| 4    | site member       | see recipes for meal suggestions | eat more sustainably without having to do additional reseach |
| 5    | paying member  | see weekly, seasonal meal plans   | eat sustainably with less work! |
| 6    | paying member  | change the number of people a meal serves in a recipe   | avoid food waste by only buying as much as I need |
| 7   | paying member  | see a weekly shopping list for my meal plan    | get the ingredients I need, easily |         

### :earth_africa: Scope Plane
---
:loop: **Site Logic**\
**Membership plan types**

| Plan type    | Monthly Price | Yearly Price      | 
| ------------------ | ---------- | ---------------------------- | --------------------- |
| Site visitor     | N/A       | N/A      |
| Site member - Bronze     | £0       | £0       |
| Site member - Silver     | £3.99       | £40.00       |
| Site member - Gold     | £5.99       | £55.00       |


**Site access**

| Feature    | Visitor Access | Bronze member Access      | Silver member Access      |Gold member Access      |
| ------------------ | ---------- | ---------------------------- | --------------------- |--------------------- |--------------------- |
Seasonal items | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
Meal suggestions | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
Recipes | :x: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
Meal plans | :x: | :x: | :heavy_check_mark: | :heavy_check_mark: |
Shopping lists | :x: | :x: | :x: | :heavy_check_mark: |

### :rainbow: Surface Plane/Design Choices
---
:pencil2: **Font families**

Tenali Ramakrishna and Merienda One

[Merienda One](https://fonts.google.com/specimen/Merienda+One?preview.text_type=custom) was chosen for main headings as I feel it reflects the natural theme of the site.

![Merienda One](/wireframes/merienda-font.jpg)

[Tenali Ramakrishna](https://fonts.google.com/specimen/Tenali+Ramakrishna?preview.text_type=custom) was chosen for all other text as it is clean-looking and legible at all sizes.

![Tenali Ramakrishna](/wireframes/tenali-font.jpg)

:art: **Colour choices**

The site was built around a different colour theme for each month, to highlight the key aspect of seasonality. 

The monthly colours were taken from the article on [this site](https://www.womenshealthmag.com/life/a28447752/birthday-colors-colorstrology/) about 'birthday colours'. As the site has a light and dark theme, each colour was checked using 
the tonal colour tool on [this site](https://material.io/design/color/the-color-system.html#tools-for-picking-colors
). A tonal value of 200 was chosen for colours appearing in the dark theme, and 700 for colours appearing in the light theme. 

Background colours and fonts were kept neutral to avoid clashing with the theme colours, and to ensure good legibility of text.

![Colours](/wireframes/colours.jpg)

### :clipboard: Wireframes
---
The site was designed with a mobile-first approach. 

[Wireframe document can be seen here](/wireframes/wireframe.pdf)

:bulb: **Deviation from wireframe**

TBC

### :dvd: Database Design
---

TBC

### :crystal_ball: Future Developments
---

TBC

## :construction: Development Process

### :unlock: Technologies Used
---
**Languages**
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Python](https://www.python.org/)

**Libraries & Frameworks**
* [Django](https://www.djangoproject.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Noun Project](https://thenounproject.com/)
* [Google Fonts](https://fonts.google.com/)
* [jQuery](https://jquery.com/)
* [Popper](https://popper.js.org/)
* [NeedPix](https://www.needpix.com/)

**Tools**
* [GitHub](https://github.com/)
* [Gitpod](https://gitpod.io/)
* [Heroku](https://heroku.com/)
* [Favicon.io](https://favicon.io/)
* [Gimp](https://www.gimp.org/)
* [Stripe](https://stripe.com/)


### :bug: Bugs
---

TBC

## :test_tube: Testing  

### :people_holding_hands: Peer Tests
---

TBC

### :raising_hand: Target User Tests
---

TBC


### :memo: Manual Tests
---
Manual testing was carried out on all devices available to me:
* Google Dev Tools:
    * Mobile device
    * iPad vertical
    * iPad horizontal
    * Desktop

* Published site:
    * Samsung Galaxy S8
    * Desktop

* Browser
    * Chrome
    * Edge
    * Firefox
    * Safari (Using [Lambdatest](https://www.lambdatest.com/))
    * Opera 

    TBC

### :heavy_check_mark: Online Validators
---

#### [JSHint](https://jshint.com/)

The [script.js](/static/js/script.js) file was run through [JSHint.com](https://jshint.com/) TBC

#### [W3C CSS Validator](http://jigsaw.w3.org/css-validator/)

The [base.css](/static/css/base.css) file was run through [W3C CSS Validator](http://jigsaw.w3.org/css-validator/) TBC

#### [W3C Markup Validation Service](https://validator.w3.org/)

Due to the use of Django templating language across the site, it was not possible to copy the code from each internal file to use as direct input on the [W3C Markup Validation Service](https://validator.w3.org/).

Because the site is largely hidden from unregistered users, I also couldn't check via URI.

Therefore, I used the source code shown in Google Dev Tools for direct input. 

TBC

### :rotating_light: Lighthouse Tests
---

TBC

## :flight_departure: Deployment 

TBC

## :clapper: Credits

### :movie_camera: Media
---

### :trophy: Acknowledgements
---