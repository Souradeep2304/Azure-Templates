# Make a Vnet with a subnet 


This template creates a Vnet with a default subnet named subnet1. You can use the parameter.json file in order to use the default values for the template deployment.

## Three modes of Execution:<br/>
### 1. Azure CLI:
 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FVnet%20Template%201%2Ftemplate2.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FVnet%20Template%201%2Ftemplate2.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a><br/>
You can press on the deploy  above inorder to directly deploy this ARM template on Azure portal.<br/>
2. You can use Azure CLI in order to deploy the storage account using the command 
###"az group deployment <br/>create --resource-group MyAzureRsrcGroup --template-file template2.json". 
Before execuing the command you have to upload the template1.json file through the upload option given in the Azure CLI portal.<br/>
3. You can use Azure PoweShell in order to deploy the storage account using the command "New-AzResourceGroupDeployment -ResourceGroupName MyAzureRsrcGrp -TemplateFile template2.json".
 Before using the powershell command do remember to upload the file using the upload option and then change to home directory.
