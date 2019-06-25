# Make a Firewall 


This template creates a Firewall. You can use the parameter.json file in order to use the default values for the template deployment. The Vnet should have a subnet named as AzureFirewallSubnet

## Three Modes of Execution:<br/>
### 1. Using Deploy Button:
 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FFirewall%20Template%2Ftemplate4.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FFirewall%20Template%2Ftemplate4.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a><br/>
You can press on the deploy button above inorder to directly deploy this ARM template on Azure portal.<br/>

### 2. Azure CLI:
You can use Azure CLI in order to deploy the storage account using the command:
```bash
az group deployment create --resource-group <resource-group-name> --template-file template4.json
```
Before execuing the command you have to upload the template4.json file through the upload option given in the Azure CLI portal. Also replace the resource-group-name with your resource group.<br/>
### 3. Azure PowerShell:
 You can use Azure PoweShell in order to deploy the storage account using the command:
```bash
New-AzResourceGroupDeployment -ResourceGroupName <resource-group-name> -TemplateFile template4.json
``` 
Before using the powershell command do remember to upload the file using the upload option and then change to home directory. Also replace the resource-group-name with your resource group.