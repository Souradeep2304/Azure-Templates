# Make a Vnet with 3 Subnets and 3 NSGs


This template creates a Vnet with 3 subnets. Along with the subnets there will be 3 network security groups created with the rules predefined in the template file for WEB-API-DATBASE architecture. These 3 security groups will be assosciated with each of the subnets respectively. You can use the parameter.json file in order to use the default values for the template deployment.

## Three Modes of Execution:<br/>
### 1. Using Deploy Button:
 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FVnet%20Template%202%2Ftemplate.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FVnet%20Template%202%2Ftemplate.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a><br/>
You can press on the deploy button above inorder to directly deploy this ARM template on Azure portal.<br/>

### 2. Azure CLI:
You can use Azure CLI in order to deploy the storage account using the command:
```bash
az group deployment create --resource-group <resource-group-name> --template-file template.json
```
Before execuing the command you have to upload the template.json file through the upload option given in the Azure CLI portal. Also replace the resource-group-name with your resource group.<br/>
### 3. Azure PowerShell:
<a href="https://shell.azure.com" target="_blank">
 <img name="launch-cloud-shell" src="https://docs.microsoft.com/azure/includes/media/cloud-shell-try-it/launchcloudshell.png" data-linktype="external">
</a></br>
 You can click on the above button to run Azure PoweShell in order to deploy the storage account using the command:
 
```bash
New-AzResourceGroupDeployment -ResourceGroupName <resource-group-name> -TemplateFile template.json
``` 
Before using the powershell command do remember to upload the file using the upload option and then change to home directory. Also replace the resource-group-name with your resource group.
