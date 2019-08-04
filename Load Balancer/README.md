# Deploying a Load Balancer in Microsoft Azure

Azure Load Balancer allows us to scale your applications and create high availability for your services. Load Balancer can be used for inbound as well as outbound scenarios and provides low latency, high throughput, and scales up to millions of flows for all TCP and UDP applications.

## Four Modes of Execution:<br/>
### 1. Using Deploy Button:
 <a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FSouradeep2304%2FAzure-Templates%2Fmaster%2FLoad%20Balancer%2FLoadBalancing.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>
<br/>
You can press on the deploy button above inorder to directly deploy this ARM template on Azure portal.<br/>

### 2. Using Azure CLI
a href="https://shell.azure.com" target="_blank">
 <img name="launch-cloud-shell" src="https://docs.microsoft.com/azure/includes/media/cloud-shell-try-it/launchcloudshell.png" data-linktype="external">
</a></br>

You can use Azure CLI in order to deploy the template using the command:
```bash
az group deployment create --resource-group <resource-group-name> --template-file LoadBalancing.json
```
Before execuing the command you have to upload the LoadBalancing.json file through the upload option given in the Azure CLI portal. Also replace the resource-group-name with your resource group.<br/>

### 3. Azure PowerShell:
<a href="https://shell.azure.com" target="_blank">
 <img name="launch-cloud-shell" src="https://docs.microsoft.com/azure/includes/media/cloud-shell-try-it/launchcloudshell.png" data-linktype="external">
</a></br>
 You can click on the above button to run Azure PoweShell in order to deploy the template using the command:
 
```bash
New-AzResourceGroupDeployment -ResourceGroupName <resource-group-name> -TemplateFile LoadBalancer.json
``` 
Before using the powershell command do remember to upload the file using the upload option and then change to home directory. Also replace the resource-group-name with your resource group.

### 4. Terraform (Not Added Yet):
<a href="https://shell.azure.com" target="_blank">
 <img name="launch-cloud-shell" src="https://docs.microsoft.com/azure/includes/media/cloud-shell-try-it/launchcloudshell.png" data-linktype="external">
</a></br>

Use the LoadBalancer.tf file inorder to do the deployment using terraform. Change the values of the parameters in the parameters section according to need. Remember to upload the LoadBalancer.json file to the directory before executing the commands for terraform. After uploading the file and [`configuring Terraform`](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-install-configure), use the following sequence of commands:
 - ```terraform init ```
 - ```terraform plan ``` 
 - ```terraform apply```