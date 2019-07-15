resource "azurerm_resource_group" "test" {
  name     = "TerraformRsrcGrp"
  location = "West Central US"

}

resource "azurerm_template_deployment" "test" {
  name                = "Storage-Template-Deploy"
  resource_group_name = "${azurerm_resource_group.test.name}"

  template_body = "${file("./template1.json")}"

parameters={
"location"="West US",
"storageAccountName"="asdqwdascqwdca",
"accountType"="Standard_LRS",
"Kind"="StorageV2",
"accessTier"="cool"
}

  deployment_mode = "Incremental"
}
