# Creating peering between 2 Virtual Networks

This template can be used inorder to deploy Vnet peering between two existing vnets named MyVnet1 and MyVnet2. Inorder to change the names of the vnets, change the same in the template3.json file.


## Three Modes of Execution:<br/>
### 1. Using Deploy Button:
 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FStorage%20Template%2Ftemplate1.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FStorage%20Template%2Ftemplate1.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a><br/>
You can press on the deploy button above inorder to directly deploy this ARM template on Azure portal.<br/>

### 2. Azure CLI:
You can use Azure CLI in order to deploy the storage account using the command:
```bash
az group deployment create --resource-group <resource-group-name> --template-file template3.json 
```
Before execuing the command you have to upload the template1.json file through the upload option given in the Azure CLI portal. Also replace the resource-group-name with your resource group.<br/>
### 3. Azure PowerShell:
 You can use Azure PoweShell in order to deploy the storage account using the command:
```bash
New-AzResourceGroupDeployment -ResourceGroupName <resource-group-name> -TemplateFile template3.json
``` 
Before using the powershell command do remember to upload the file using the upload option and then change to home directory. Also replace the resource-group-name with your resource group.