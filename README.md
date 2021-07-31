# iotDashboard

### Overview of the Application

The Home IoT Dashboard is an interactive browser based application for the Home IoT Network created for our final year Capstone project. The dashboard gives greater monitoring, control and security features from a unified browser based application. The app allows users to interact with the network in real time through their computer, tablet, or smart phone devices both locally and outside of the network.

The backend of the Dashboard connects to MS Azure ML and Cloud Database to retrieve data insights periodically and stores this data within the application's cache database. The Dashboard connects directly with the Device Controller to operate the smart home devices when the user is in the local IoT Home Network.

The following sections are included in the dashboard:
-Status of Devices
-Livestream Video of Door
-Estimated Costs
-Device Usage Trends
-Device Summary
-Light/Dark Theme Switch
-Notification Banner

Screenshots shown below.

### Overview of the Network

This network is a distributed system with data processing and storage done in MS Azure's Cloud Platform allowing for big data processing and archival.
The initial flow of data starts from the simulated smart home devices which are routed to the cloud and dashboard through the Device Controller. The raw data is archived in Azure SQL Database, then used in machine learning models in Azure ML, and stored as processed data in the in Azure SQL Database.

The Dashboard application's local cache database fetches data from the cloud database weekly during low network traffic hours and stores the main processed information to minimize latency of the dashboard and allow application functionality while offline.

### Home IoT Network Tech Stack

Bevywise IoT Simulator (smart home devices)
Bevywise MQTT Broker (device controller)

Linux Virtual Machine (home environment)
Apache Tomcat Local Server (controller in home environment)

Vue.js
Node.js
JSON
WebRTC

MS Azure Machine Learning
MS Azure SQL Database

Firefox Dev Tools


### Network Performance

|Request Type|Avg Latency|Notes|
|----------|----------|--------|
|Dashboard Loading on WiFi|4.8s|Without browser cache|
|Dashboard Loading on 4G/LTE|36.0s|Without browser cache|
|Weekly Data Fetch Cycle|36.0s|Includes data fetching from cloud server, calculation, write out to cache database|

#### Screenshots of the Home IoT Dashboard

![Screen shot](../master/dashboardScreen1.jpg)
![Screen shot](../master/dashboardScreen2.jpg)
