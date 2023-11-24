# HealthyHub-Project 
The application was developed using the React library. 
**Application's goal.**
A good helper to improve your health. This application helps the user to control the number of calories consumed and water drunk, set goals and following them. Control your weight, calories and improve your health with this application.

**Development of the app.**
The app was developed follow Mobile first approach. Layout is Adaptive, for mobile devices (476px), tablets (834px) and wide screens (1440px).

The following tools were used for developed the app.

 -- Axios;
 
 -- Fromik;
 
 -- Yup;
 
 -- Redux;
 
 -- Chart.js;  
 
 -- React-chartjs-2;
 
 -- React-icons;
 
 -- Prop-types;
 
 -- React Router DOM;

The app has authentication (registration and login pages). The forms were implemented by using the Formik library, the forms were also validated by using Yup library. 
For managing and centralizing application state is used Redux. The Redux state was divided into such logical parts: 

 -- Auth:
 
	- authSlice - contains user's data and authentication data.;
	- operations - contains the requests to the server for authentication and modification of user data.; 
	- selectors - calculations of the daily level of calories intake based on user data;
 
 -- Meals:
 
	- В mealSlice - stored the information about food and water consumed for the day and also statistic for periods;
	- operations - contains the requests to the server - get, update, and create such data as food and water consumed. 
     Moreover, contains the requests for getting statistic information.;
	- selectors - processing gotten statistical information and creating new statistic blocks for the specific periods.
	processing gotten statistical information and creating new statistic blocks for the specific periods;
 
 -- Recommended:
 
	- В recommendedSlice - recommended food is stored here;
	- operations - the requests to the server for get list of recommended food.; 

**Structure of the App**. Navigation was created by React Router Dom.

	Pages:
 
		Home - starting page that describe the site;
  
		SignUp - the first stage of user registration, (email, name, password); 
  
		Goal - the second stage of user registration, (chose your goal);
  
		Age - the third stage of user registration, (choose your age); 
  
		BodyParameters - the fourth stage of user registration, (height and weight);
  
		Activity - the fifth and final stage of user registration, (choose your type of activity, 
      that determine your calories amount), after that app redirects you on login page;
  
		SignIn - login page;
  
		Main - user's main page. Page shows information about food and water consumed for the current day, 
      list of recommended food and also tools that add new food and water to the day;
  
		Setting - allow changing the personal user's data and profile photo;
  
		Diary - contains lists of the food the user ate today (breakfast, lunch, dinner, snack). 
      Allows to add, edit and delete food from the list;
  
		Statistic - the charts was implemented by using the Chart.js, 
      charts show consume statistic and weight changing for the periods - month, year;
  
		RecommendedFood - the list of recommended food;
