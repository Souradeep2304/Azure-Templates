resource "azurerm_resource_group" "test" {
  name     = "TerraformRsrcGrp"
  location = "West Central US"


}

resource "azurerm_template_deployment" "test" {
  name                = "Main-Deploy-2"
  resource_group_name = "${azurerm_resource_group.test.name}"

  template_body = "${file("./template2.json")}"

  parameters={

  "vNetName"="Vnet2"

 
    "location"="West India"

    "addressPrefix"="10.0.0.0/16"
    
    "subnetAddressPrefix"="10.0.0.0/24"
    
    
  }

 deployment_mode="Incremental"
}