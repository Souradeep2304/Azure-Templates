Connect-AzAccount

$RG="MyResourceGrp"
$port1=3307

$rulename1="DisasterRecovery1"
$rulename2="DisasterRecovery2"

$N1="D1" #Change the Name according to need
$N2="D2" #Change the Name according to need



$resource = Get-AzResource | Where {$_.ResourceGroupName –eq $RG -and $_.ResourceType -eq "Microsoft.Network/networkSecurityGroups"} 
$nsg1 = Get-AzNetworkSecurityGroup -Name $N1 -ResourceGroupName $RG
$nsg2 = Get-AzNetworkSecurityGroup -Name $N2 -ResourceGroupName $RG

# Add the inbound security rule.
$nsg2 | Add-AzNetworkSecurityRuleConfig -Name $rulename1 -Description "AllowCommFromD2toD1" -Access Allow `
    -Protocol * -Direction Inbound -Priority 3891 -SourceAddressPrefix "10.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "15.0.2.0/24" -DestinationPortRange $port1


# Add the outbound security rule.
$nsg1 | Add-AzNetworkSecurityRuleConfig -Name $rulename2 -Description "AllowCommFromD2toD1" -Access Allow `
    -Protocol * -Direction Outbound -Priority 3891 -SourceAddressPrefix "10.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "15.0.2.0/24" -DestinationPortRange $port1

# Update the NSG.
$nsg1 | Set-AzNetworkSecurityGroup
$nsg2 | Set-AzNetworkSecurityGroup
