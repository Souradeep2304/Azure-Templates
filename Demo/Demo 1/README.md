# ARM Template Deployment of Azure SQL Databases in a Elastic Pool and CosmosDB using Azure Storage Explorer

## ARM - Azure Resource Manager Templates
ARM Templates can be used to deploy a whole resource group containing different resources or deploy some specific resources in a resource group in 'incremental' or 'complete' mode. In this demo we are going to showcase 'incremental' template deployment. 

## Template for Azure SQL Database
Now we are going to take a look at the template for deploying the Azure SQL Database. Azure SQL database is a Platform as a Service or PaaS offering of Microsoft Cloud PLatform. It has many built in functions such as upgrading, backup, managment and monitoring. It also supports Elastic Pool support for managing and scaling databases having unforseen usage demands.

<p align="center">
<img src="./Figures/tempsnippet.png"></br>
Figure 1.1: Snippet of SQL Database Template 
</p>

We are also going to use a parmeter file to provide values to this template while deployment. We can change the values of the parameters by changing the values inside the file or in the portal itself, while doing a custom deployment. 

<p align="center">
<img src="./Figures/paramsnippet.png"></br>
Figure 1.1: Snippet of SQL Database Template parameter file 
</p>

