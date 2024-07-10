**The first request may take time**. Don't worry, it is because I'm using free deploy on reder.com. Web Services on the free instance type are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request. This can cause the first response delay.

Also, you can enter the site using the account that I created before:

**email**: user@gmail.com
**password**: User11

The **back-end** that I have developed for this app: https://github.com/vicotroshenko/healthyhub-backend;

**Swagger** https://healthyhub-backend.onrender.com/api-docs/;

# HealthyHub-Project

The application was developed using the React library.
**Application's goal.**
Application's goal. A good helper to improve your health. This application helps the user to control the number of calories consumed and water drunk, set goals and follow them. Control your weight, and calories and improve your health with this application.

**Development of the app.**
The app was developed following a mobile-first approach. Layout is Adaptive, for mobile devices (476px), tablets (834px) and wide screens (1440px).

The following tools were used to develop the app.

-- Axios;

-- Formik;

-- Yup;

-- Redux;

-- Chart.js;

-- React-chart.js-2;

-- React-icons;

-- Prop-types;

-- React Router DOM;

The app has authentication (registration and login pages). The forms were implemented by using the Formik library, and the forms were also validated by using the Yup library. For managing and centralizing application state is used Redux. The Redux state was divided into such logical parts:

-- Auth:

    - authSlice -  contains the user's data and authentication data;
    - operations - contains the requests to the server for authentication and modification of user data;
    - selectors - calculations of the daily level of calorie intake based on user data;

-- Meals:

    - В mealSlice - stored the information about food and water consumed for the day and also statistics for periods;
    - operations - contains the requests to the server - get, update, and create such data as food and water consumed.
     Moreover, contains requests for getting statistical information;
    - selectors -  processing gathered statistical information and creating new statistic blocks for specific periods.                                                                                   Processing statistical information and creating new statistic blocks for specific periods;

-- Recommended:

    - В recommendedSlice - recommended food is stored here;
    - operations - the requests to the server to get a list of recommended food;

**Structure of the App**. Navigation was created by React Router Dom.

    Pages:

    	Home - starting page that describes the site;

    	SignUp - the first stage of user registration, (email, name, password);

    	Goal - the second stage of user registration, (chose your goal);

    	Age - the third stage of user registration, (choose your age);

    	BodyParameters - the fourth stage of user registration, (height and weight);

    	Activity - the fifth and final stage of user registration, (choose your type of activity, that determine your calorie amount),                                                                     after that app redirects you to the login page;

    	SignIn - login page;

    	Main - user's main page. The page shows information about food and water consumed for the current day,                                                                                             list of recommended food and tools that add new food and water to the day;

    	Setting - allow changing the personal user's data and profile photo;

    	Diary - contains lists of the food the user ate today (breakfast, lunch, dinner, snack).                                                                                                           Allows to add, edit and delete food from the list;

    	Statistic - the charts was implemented by using the Chart.js,                                                                                                                                       charts show consumption statistic and weight changes for the periods - month, year;

    	RecommendedFood - the list of recommended food;
