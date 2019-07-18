$RG="MyResourceGrp"
$port1=3307

$R1="DR1"
$R2="DR2"
$R3="DR3"
$R4="DR4"

$N1="D1" #Change the Name according to need
$N2="D2" #Change the Name according to need



$resource = Get-AzResource | Where {$_.ResourceGroupName –eq $RG -and $_.ResourceType -eq "Microsoft.Network/networkSecurityGroups"}
$nsg1 = Get-AzNetworkSecurityGroup -Name $N1 -ResourceGroupName $RG
$nsg2 = Get-AzNetworkSecurityGroup -Name $N2 -ResourceGroupName $RG

# Add the inbound security rule.
$nsg2 | Add-AzNetworkSecurityRuleConfig -Name $R1 -Description "AllowCommFromD1toD2" -Access Allow `
    -Protocol * -Direction Inbound -Priority 3891 -SourceAddressPrefix "10.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "15.0.2.0/24" -DestinationPortRange $port1


# Add the outbound security rule.
$nsg1 | Add-AzNetworkSecurityRuleConfig -Name $R2 -Description "AllowCommFromD1toD2" -Access Allow `
    -Protocol * -Direction Outbound -Priority 3891 -SourceAddressPrefix "10.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "15.0.2.0/24" -DestinationPortRange $port1

# Add the inbound security rule.
$nsg1 | Add-AzNetworkSecurityRuleConfig -Name $R3 -Description "AllowCommFromD2toD1" -Access Allow `
    -Protocol * -Direction Inbound -Priority 3891 -SourceAddressPrefix "15.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "10.0.2.0/24" -DestinationPortRange $port1


# Add the outbound security rule.
$nsg2 | Add-AzNetworkSecurityRuleConfig -Name $R4 -Description "AllowCommFromD2toD1" -Access Allow `
    -Protocol * -Direction Outbound -Priority 3891 -SourceAddressPrefix "15.0.2.0/24" -SourcePortRange $port1 `
    -DestinationAddressPrefix "10.0.2.0/24" -DestinationPortRange $port1


# Update the NSG.
$nsg1 | Set-AzNetworkSecurityGroup
$nsg2 | Set-AzNetworkSecurityGroup