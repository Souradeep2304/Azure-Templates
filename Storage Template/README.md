# Make a Storage Account
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FStorage%20Template%2Ftemplate1.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<a href="http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FStorage%20Template%2Ftemplate1.json" target="_blank">
    <img src="http://armviz.io/visualizebutton.png"/>
</a><br/>

This template creates a Storage Account<br/>
Use the parameters.json file to create a V2 storage account with LRS in West US. Input the name of the account in the parameters file.<br/>
<br/>
## Three modes of Execution:<br/>
1. You can press on the deploy button above inorder to directly deploy this ARM template on Azure portal.<br/>
2. You can use Azure CLI in order to deploy the storage account using the command "az group deployment<br/> create --resource-group MyAzureRsrcGroup --template-file template1.json". Before execuing the command you have to
upload the template1.json file through the upload option given in the Azure CLI portal.<br/>
3. You can use Azure PoweShell in order to deploy the storage account using the command "New-AzResourceGroupDeployment -ResourceGroupName MyAzureRsrcGrp -TemplateFile template1.json".
 Before using the powershell command do remember to upload the file using the upload option and then change to home directory.
