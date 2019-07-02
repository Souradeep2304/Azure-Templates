
resource "azurerm_resource_group" "test" {
  name     = "MyAzureRsrcGrp"
  location = "West Central US"


}

resource "azurerm_template_deployment" "test" {
  name                = "Main-Deploy-1"
  resource_group_name = "${azurerm_resource_group.test.name}"

  template_body = "${file("./main.json")}"

  parameters={

      "location1"="westus",
      "vNet1"="M1",
      "addressPrefix1"="10.0.0.0/16",
      "subnetName1"="S1",
      "subnetAddressPrefix1"="10.0.0.0/24",
      "subnetName2"="S2",
      "subnetAddressPrefix2"="10.0.1.0/24",
      "subnetName3"="S3",
      "subnetAddressPrefix3"="10.0.2.0/24",
      "firewallSubnetOfVnet1"="10.0.3.0/24",
      "location2"="eastus",
      "vNet2"="M2",
      "addressPrefixOfSecondVnet"="15.0.0.0/16",
      "subnet1NameOfSecondVnet"="S1",
      "subnet1AddressPrefixOfSecondVnet"="15.0.0.0/24",
      "subnet2NameOfSecondVnet"="S2",
      "subnet2AddressPrefixOfSecondVnet"="15.0.1.0/24",
      "subnet3NameOfSecondVnet"="S3",
      "subnet2AddressPrefixOfSecondVnet"="15.0.2.0/24",
      "firewallSubnetOfSecondVnet"="15.0.3.0/24",
      "firstNetworkSecurityGroupInFirstLocaion"="W1",
      "secondNetworkSecurityGroupInFirstLocaion"="A1",
      "thirdNetworkSecurityGroupInFirstLocaion"="D1",
      "firstNetworkSecurityGroupInSecondLocaion"="W2",
      "secondNetworkSecurityGroupInSecondLocaion"="A2",
      "thirdNetworkSecurityGroupInSecondLocaion"="D2",
      "enableDdosProtection"=null,
      "forwardedTraffic"=null,
      "gatewayTransit"=null,
      "remoteGateways"=null

  }
  deployment_mode="Incremental"

}

