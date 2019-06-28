Connect-AzAccount

$RG="MyAzureRsrcGrp"
$port1=3306

$rulename1="DisasterRecovery1"
$rulename2="DisasterRecovery2"

$nsgname="DATABASE" #Change the Name according to need

$resource = Get-AzResource | Where {$_.ResourceGroupName –eq $RG -and $_.ResourceType -eq "Microsoft.Network/networkSecurityGroups"} 
$nsg = Get-AzNetworkSecurityGroup -Name $nsgname -ResourceGroupName $RG

# Add the inbound security rule.
$nsg | Add-AzNetworkSecurityRuleConfig -Name $rulename1 -Description "AllowCommFromD2toD1" -Access Allow `
    -Protocol * -Direction Inbound -Priority 3891 -SourceAddressPrefix "15.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "10.0.2.0/24" -DestinationPortRange $port1


# Add the outbound security rule.
$nsg | Add-AzNetworkSecurityRuleConfig -Name $rulename2 -Description "AllowCommFromD2toD1" -Access Allow `
    -Protocol * -Direction Outbound -Priority 3891 -SourceAddressPrefix "10.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "15.0.2.0/24" -DestinationPortRange $port1

# Update the NSG.
$nsg | Set-AzNetworkSecurityGroup
