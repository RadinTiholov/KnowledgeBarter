# Knowledge Barter
## What is this?
Knowledge barter is a web application for exchanging lessons on different topics. You can unlock and watch any lesson you want with KBPoints. The KBPoints are our currency and they can be earned by contributing some content. There are also courses, if you want to create one, you need to own at least 6 lessons. The point of the application is to show that knowledge is free, but in order to possess it you have to prove yourself worthy.
## Install
```bash
cd client/knowledge-barter
npm install
npm start
#In new terminal
cd server
npm install
npm start
```
## Used technologies
<ul>
  <li>React</li>
  <li>Express</li>
  <li>NodeJS</li>
  <li>MongoDB</li>
  <li>Bootstrap</li>
  <li>REST Architecture</li>
</ul>

## Basic guide for usage of the application
### Guest pages functionallity :
<ul>
  <li>Home - The landing page of the app, where you can see the most popular lessons, the highest rated courses and information about the general idea.</li>
  <li>Catalog of lessons - The place where all lessons are shown</li>
  <li>Catalog of courses - The place where all courses are shown</li>
  <li>Details - There you can find more information such as likes, views, price about the specific lesson or course</li>
  <li>Register - The place where you can register</li>
  <li>Login - The place where already registered users can authenticate</li>
  <li>Search - This functionality helps you find the lesson you need</li>
</ul>

### Authenticated users functionallity  :
<ul>
  <li>Create - You are able to create new lessons and courses</li>
  <li>Edit - You are able to edit you own lessons and courses</li>
  <li>Delete - You are able to delete you own lessons and courses</li>
  <li>Like - You can like other lessons and courses</li>
  <li>Buy - You can buy lessons and courses</li>
  <li>Details Purchased - Once the lessons and courses are purchased, you can see the full knowledge they provide you</li>
  <li>Comment - You can give your opinion on all the lessons you have purchased</li>
  <li>Resources - Each lesson can have a resources (Dropbox account required)</li>
  <li>Information - You are able to see information about your profile</li>
  <li>Catalogs - You can see all your own, purchesed and liked lessons and courses</li>
  <li>Logout - This feature helps you log out of your account</li>
</ul>
