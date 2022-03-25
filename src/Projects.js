const projects = [
  {
    name: "Invoice App",
    description:
      "It is an Accounting Invoice Application. The App has three levels of user access - Admin, Manager and Executive. An admin can register an nth number of users. These users are provided with different levels of privileges; where an admin can create, update, view and delete invoices. Managers can create, update and view, followed by executives who can only create and view invoices.",
    demoEmail: "eklavya@email.com",
    demoPass: 123456,
    liveDemo: "https://proj-invoice.netlify.app",
    hostedAt: "https://github.com/sharmaeklavya/invoice-app",
    projectImg: "imgs/proj-invoice.jpeg",
    imgAlt: "invoice-project",
    technologies: [
      "imgs/mongodb.svg",
      "imgs/react.svg",
      "imgs/nodejs.svg",
      "imgs/bootstrap.svg",
    ],
  },
  {
    name: "Delivery App",
    description:
      "It is a Pizza Delivery app. The app allows users to create an account with the app. Users can add Pizzas, Toppings and their favourite Beverages to the cart. Users can make payments and check the order status. The app also tracks all the previous orders made by a customer.",
    demoEmail: "eklavya@email.com",
    demoPass: "eklavya@12",
    liveDemo: "https://proj-delivery.herokuapp.com",
    hostedAt: "https://github.com/sharmaeklavya/delivery-app",
    projectImg: "imgs/proj-delivery.png",
    imgAlt: "delivery-app-project",
    technologies: [
      "imgs/mongodb.svg",
      "imgs/react.svg",
      "imgs/nodejs.svg",
      "imgs/bootstrap.svg",
      "imgs/stripe.svg",
    ],
  },
  {
    name: "Community App",
    description:
      "This app allows users to share their thoughts, ideas and belief. Users can write articles or share their opinion on any previously listed article. While users may create, comment but can only delete their written articles. Users can also see the author's name and the date it was posted. Users will be required to create an account with the app in order to Create a Post, Comment or if he/she/they want(s) to delete their posts.",
    demoEmail: "eklavya@email.com",
    demoPass: "eklavya@12",
    liveDemo: "https://proj-community.herokuapp.com",
    hostedAt: "https://github.com/sharmaeklavya/community-app",
    projectImg: "imgs/proj-community.png",
    imgAlt: "community-app-project",
    technologies: [
      "imgs/mongodb.svg",
      "imgs/react.svg",
      "imgs/nodejs.svg",
      "imgs/bootstrap.svg",
    ],
  },
  {
    name: "Chatter App",
    description:
      "It is a Chat Application. The app has a list of rooms/topics. A user can enter with his/her/their name on the login page, select a room and start chatting with people having similar interests. A user can send a text or emojis to express themselves. On the left side, the app displays room names and names of all the persons who are currently in the room. The app also displays the information on the user joining a room or leaving a room.",
    demoEmail: "Not required",
    demoPass: "Not required",
    liveDemo: "https://proj-chatter.netlify.app",
    hostedAt: "https://github.com/sharmaeklavya/chatter-app",
    projectImg: "imgs/proj-chatter.gif",
    imgAlt: "chat-app-project",
    technologies: [
      "imgs/react.svg",
      "imgs/tailwindcss.png",
      "imgs/socketio.svg",
      "imgs/nodejs.svg",
    ],
  },
];

export default projects;
