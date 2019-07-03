resource "azurerm_resource_group" "test" {
  name     = "TerraformRsrcGrp"
  location = "West Central US"


}

resource "azurerm_template_deployment" "test" {
  name                = "Main-Deploy-2"
  resource_group_name = "${azurerm_resource_group.test.name}"

  template_body = "${file("./template3.json")}"

  parameters={

 "vNet1Name" = "M1",
 "vNet2Name"="M2"
  }

 deployment_mode="Incremental"
}